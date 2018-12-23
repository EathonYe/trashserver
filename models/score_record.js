const mongoose = require('mongoose')

const ScoreRecordSchema = new mongoose.Schema({
  resident: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: require('./resident'),
    required: true
  },
  staff: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: require('./user'),
    required: true
  },
  recyclable: {
    type: Number // 1 差；2 一般；3合格；4 良好； 5 优秀
  },
  nrecyclable: {
    type: Number // 1 差；2 一般；3合格；4 良好； 5 优秀
  },
  weight: {
    type: Number
  },
  photo: {
    type: String
  }
})

const ScoreRecordModel = mongoose.model('ScoreRecord', ScoreRecordSchema)

module.exports = ScoreRecordModel
