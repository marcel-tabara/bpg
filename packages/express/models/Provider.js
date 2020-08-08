const mongoose = require('mongoose')

const ProviderSchema = new mongoose.Schema({
  data: { type: Object, required: true },
})

module.exports = mongoose.model('Provider', ProviderSchema)
