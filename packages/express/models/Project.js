const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
  data: { type: Object, required: true },
})

module.exports = mongoose.model('Project', ProjectSchema)
