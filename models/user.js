const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
  staffId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: Number,
    default: 2 // 1管理员；2普通用户
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

const UserModel = mongoose.model('User', UserSchema)
module.exports = UserModel
