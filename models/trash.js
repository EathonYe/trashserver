const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserModel = require('../models/user')

const TrashSchema = new Schema({
  trashId: {
    type: String,
    required: true,
    unique: true
  },
  manager: {
    type: Schema.Types.ObjectId,
    // type: String,
    ref: UserModel,
    required: true
  },
  meta: {
    createdAt: {
      type: Date,
      default: Date.now()
    }
  }
})

const TrashModel = mongoose.model('Trash', TrashSchema)

module.exports = TrashModel
