const ScoreRecordModel = require('../models/score_record')
const config = require('../config')

exports.add = async (ctx, next) => {
  try {
    const result = await ScoreRecordModel.create({
      ...ctx.request.body
    })
    ctx.body = {
      status: true,
      data: result
    }
  } catch (err) {
    ctx.body = {
      status: false,
      message: err.message
    }
  }
}

exports.find = async (ctx, next) => {
  try {
    const total = await ScoreRecordModel.find({}).countDocuments()
    const result = await ScoreRecordModel.find({})
      .populate({
        path: 'resident'
      })
      .populate({
        path: 'staff'
      })

    result.forEach((item) => {
      if (item.photo) {
        item.photo = item.photo.substring(config.upload.url.length)
      }
    })
    ctx.body = {
      status: true,
      total: total,
      data: result
    }
  } catch (err) {
    ctx.body = {
      status: false,
      message: err.message
    }
  }
}
