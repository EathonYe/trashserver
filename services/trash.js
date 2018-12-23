const TrashModel = require('../models/trash')

exports.addTrash = async ({ trashId, manager, resident }) => {
  const result = await TrashModel.create({
    trashId,
    manager,
    resident
  })
  return result
}

exports.getTrash = async (params) => {
  const trash = await TrashModel.findOne(params).populate({ // 用于关联查询
    path: 'resident'
  }).populate({
    path: 'manager'
  })
  return trash
}
