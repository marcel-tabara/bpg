const Collection = require('./models/Collection')
const Component = require('./models/Component')
const PropType = require('./models/PropType')
const Provider = require('./models/Provider')
const Project = require('./models/Project')
const Techno = require('./models/Techno')
const Template = require('./models/Template')
const User = require('./models/User')

const getModel = (type, data) => {
  switch (type) {
    case 'collections':
      return new Collection(data)
    case 'technos':
      return new Techno(data)
    case 'components':
      return new Component(data)
    case 'proptypes':
      return new PropType(data)
    case 'providers':
      return new Provider(data)
    case 'projects':
      return new Project(data)
    case 'templates':
      return new Template(data)
    case 'users':
      return new User(data)
    default:
      break
  }
}

const getMod = type => {
  switch (type) {
    case 'collections':
      return Collection
    case 'technos':
      return Techno
    case 'components':
      return Component
    case 'proptypes':
      return PropType
    case 'providers':
      return Provider
    case 'projects':
      return Project
    case 'templates':
      return Template
    case 'users':
      return User
    default:
      break
  }
}

module.exports.getModel = getModel
module.exports.getMod = getMod
