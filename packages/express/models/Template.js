const mongoose = require('mongoose')

const TemplateSchema = new mongoose.Schema({
  data: { type: Object, required: true },
})

module.exports = mongoose.model('Template', TemplateSchema)
