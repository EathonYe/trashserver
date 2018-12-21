const TrashModel = require('../models/trash')

exports.addTrash = async ({ trashId, manager }) => {
  const result = await TrashModel.create({
    trashId,
    manager
  })
  return result
}

exports.getTrash = async (params) => {
  const trash = await TrashModel.findOne(params).populate({ // 用于关联查询
    path: 'manager'
  })
  return trash
}
