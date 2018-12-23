const ResidentModel = require('../models/resident')

exports.add = async (ctx, next) => {
  try {
    const result = await ResidentModel.create(ctx.request.body)
    ctx.body = result
  } catch (err) {
    ctx.body = {
      status: false,
      message: err.message
    }
  }
}
