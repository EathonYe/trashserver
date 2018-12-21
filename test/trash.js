const mongoose = require('mongoose')
const config = require('../config')
const trashService = require('../services/trash')
const userService = require('../services/user')

mongoose.connect(config.mongodb.url, config.mongodb.options)
  .then(() => {
    console.log('数据库连接成功！')
  })
  .catch((err) => {
    console.log('数据库连接错误：' + err)
  })
  .then(async () => {
    // const [staff] = await userService.find({ staffId: '000001' })
    // const result = await trashService.addTrash({
    //   trashId: '002',
    //   manager: staff._id
    // })

    const result = await trashService.getTrash('002')

    console.log(result)
  })
