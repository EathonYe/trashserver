const trashService = require('../services/trash')
const userService = require('../services/user')

exports.addTrash = async (ctx, next) => {
  const { staffId, trashId } = ctx.request.body
  const manager = await userService.find({ staffId })[0]
  if (manager) {
    const trash = await trashService.addTrash({
      trashId,
      manager: manager.staffId
    })
    return {
      status: true,
      data: trash
    }
  }
}

exports.getTrash = async (ctx, next) => {
  const result = await trashService.getTrash({
    trashId: ctx.request.query.trashId
  })

  if (result) {
    ctx.body = {
      status: true,
      data: result
    }
  } else {
    ctx.body = {
      status: false,
      message: '该垃圾桶编号不存在'
    }
  }
}
