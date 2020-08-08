const mongoose = require('mongoose')

const ComponentSchema = new mongoose.Schema({
  data: { type: Object, required: true },
})

module.exports = mongoose.model('Component', ComponentSchema)
