const mongoose = require('mongoose')

const ResidentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  address: {
    type: String
  },
  meta: {
    createdAt: {
      type: Date,
      default: Date.now()
    }
  }
})

const ResidentModel = mongoose.model('Resident', ResidentSchema)

module.exports = ResidentModel
