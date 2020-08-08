const mongoose = require('mongoose')

const PropTypeSchema = new mongoose.Schema({
  data: { type: Object, required: true },
})

module.exports = mongoose.model('PropType', PropTypeSchema)
