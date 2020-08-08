const mongoose = require('mongoose')

const TechnoSchema = new mongoose.Schema({
  data: { type: Object, required: true },
})

module.exports = mongoose.model('Techno', TechnoSchema)
