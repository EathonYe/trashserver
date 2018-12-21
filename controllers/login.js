const userService = require('../services/user')
const bcrypt = require('bcryptjs')

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

exports.doLogin = async (ctx, next) => {
  try {
    let { password, staffId } = ctx.request.body
    const users = await userService.find({
      staffId
    })
    const user = users[0]
    const result = {}
    if (!user || !bcrypt.compare(password, user.password)) {
      result.status = false
      result.message = '用户编号或密码不存在'
    } else {
      result.status = true
      result.message = '登录成功'
      result.data = user
    }
    ctx.body = result
  } catch (err) {
    ctx.body = {
      status: false,
      message: '登录错误，请检查用户编号和密码'
    }
  }
}
