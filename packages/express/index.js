const express = require('express')
const http = require('http')
const https = require('https')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const shell = require('shelljs')
const prettier = require('prettier')
const fs = require('fs')
const cors = require('cors')
const { getModel, getMod } = require('./utils')
const jwt = require('jsonwebtoken')
const User = require('./models/User')
const withAuth = require('./middleware')

const environment = process.env.NODE_ENV
  ? process.env.NODE_ENV.trim()
  : 'production'
const isProd = environment === 'production'

require('dotenv').config({
  path: `./.env.${environment}`,
})

const app = express()
app.use(cors())

app.use(bodyParser.json({ limit: '100mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }))
const options = isProd
  ? {
      key: fs.readFileSync(process.env.PRIVATE_KEY),
      cert: fs.readFileSync(process.env.DOMAIN_CERT),
    }
  : undefined
const server = http.createServer(app)
const serverHttps = isProd ? https.createServer(options, app) : undefined
const secret = process.env.PASS_SECRET
const mongo_uri = process.env.MONGO_URL

mongoose.connect(
  mongo_uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  (err) => {
    if (err) {
      throw err
    } else {
      console.log(`Successfully connected to ${mongo_uri}`)
    }
  }
)

const opt = {
  useTabs: false,
  printWidth: 60,
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  bracketSpacing: true,
  jsxBracketSameLine: false,
  parser: `typescript`,
  trailingComma: 'all',
  arrowParens: 'avoid',
  proseWrap: 'preserve',
}

app.post('/api/create', function (req, res) {
  const model = getModel(req.body.data.type, req.body.data.data)
  model.save(function (err) {
    if (err) {
      res.status(500).send(err)
    } else {
      res.json(model)
    }
  })
})

app.post('/api/update', function (req, res) {
  const model = getMod(req.body.data.type, req.body.data.data)
  model.findByIdAndUpdate(req.body.data.data._id, req.body.data.data, (err) => {
    if (err) return res.json({ success: false, error: err })
    return res.json({ success: true })
  })
})

app.post('/api/delete', function (req, res) {
  const model = getMod(req.body.data.type)
  var myquery = { _id: req.body.data.data }

  model.deleteOne(myquery, (error, obj) => {
    if (error) {
      res.status(500).send(error)
    }
    res.json({ success: true })
  })
})

app.post('/api/read', async (req, res) => {
  const user = req.headers.authorization
    ? jwt.decode(req.headers.authorization)
    : {}

  const model = getMod(req.body.data.type)
  model.find({}, (error, collection) => {
    if (error) {
      res.status(500).send(error)
    } else {
      const filtered =
        req.body.data.type === 'collections'
          ? collection
          : collection.filter(
              (el) =>
                (el.data.isPublic && el.data.isActive) ||
                (user && el.data.uid === user.uid)
            )

      res.status(200).json(filtered)
    }
  })
})

app.post('/api/prettify', (req, res) => {
  let newCode = []

  req.body.code.payload.map((e) => {
    let theCode = ''
    if (e.code) theCode = e.code

    newCode.push({ id: e.id, code: prettier.format(theCode, opt) })
  })
  res.json(newCode)
})

app.post('/api/exportFiles', (req, res) => {
  const { id, code, dest } = req.body

  shell.mkdir(dest)
  if (id !== 'all') {
    const finalDest = req.body.dest + `/${id}`
    fs.writeFileSync(`${finalDest}`, code, 'utf8')
  } else {
    req.body.code.map((e) => {
      const finalDest = req.body.dest + `/${e.id}`
      fs.writeFileSync(`${finalDest}`, e.code, 'utf8')
    })
  }

  res.json('done')
})

app.get('/api/secret', withAuth, (req, res) =>
  res.send('The password is potato')
)
app.get('/checkToken', withAuth, (req, res) => res.sendStatus(200))

app.post('/api/register', (req, res) => {
  const { username, password } = req.body.data
  const user = new User({ username, password })
  user.save((error) => {
    if (error) {
      return res.status(500).send({
        success: false,
        error,
      })
    } else {
      return res.status(200).send({
        success: true,
        user,
      })
    }
  })
})

app.post('/api/authenticate', function (req, res) {
  const { username, password } = req.body.data

  User.findOne({ username }, (err, user) => {
    if (err) {
      res.status(500).json({
        success: false,
        error: {
          message: 'Internal error please try again',
        },
      })
    } else if (!user) {
      res.status(401).json({
        success: false,
        error: { message: 'User not found' },
      })
    } else {
      user.isCorrectPassword(password, function (err, same) {
        if (err) {
          res.status(500).json({
            success: false,
            error: { message: 'Internal error please try again' },
          })
        } else if (!same) {
          res.status(401).json({
            success: false,
            error: { message: 'Incorrect password' },
          })
        } else {
          // Issue token
          const payload = { uid: user._id }
          const token = jwt.sign(payload, secret, {
            expiresIn: '1h',
          })
          res
            .cookie('token', token, {
              httpOnly: false,
              expires: new Date(Date.now() + 9999999),
            })
            .json({
              user: { isAdmin: user._doc.isAdmin, token, _id: user._doc._id },
              success: true,
            })
        }
      })
    }
  })
})

const port = isProd ? process.env.PORT_SECURE || 5001 : process.env.PORT || 5000

isProd ? serverHttps.listen(port) : server.listen(port)

console.log('App is listening on port ' + port)
