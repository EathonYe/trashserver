const UserModel = require('../models/user')
const bcrypt = require('bcryptjs')

exports.addUser = async ({ staffId, name, password, role }) => {
  try {
    // 生成salt
    const salt = await bcrypt.genSalt(10)

    const user = {}
    // TODO 合法性校验
    if (staffId) {
      user.staffId = staffId
    }
    if (name) {
      user.name = name
    }
    if (password) {
      // 对密码进行加密
      user.password = await bcrypt.hash(password, salt)
    }
    if (role) {
      user.role = role
    }

    const result = await UserModel.create({
      ...user,
      password
    })
    return result
  } catch (err) {
    throw new Error('数据格式不合法或缺少必要参数')
  }
}
