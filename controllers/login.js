const userService = require('../services/user')

exports.register = async (ctx, next) => {
  try {
    const result = await userService.addUser(ctx.request.body)
    ctx.body = result
  } catch (err) {
    ctx.body = {
      status: false,
      message: err.message
    }
  }
}
