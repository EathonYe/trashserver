const Koa = require('koa')

const mongoose = require('mongoose')

const bodyparser = require('koa-bodyparser')

const controller = require('./controllers')

const config = require('./config')

const HOST = config.HOST

const POST = config.PORT

mongoose.connect(config.mongodb.url, config.mongodb.options)
  .then(() => {
    console.log('数据库连接成功！')
  })
  .catch((err) => {
    console.log('数据库连接错误：' + err)
  })

const app = new Koa()

// middlewares
app.use(bodyparser())

controller(app)

app.listen(POST, HOST, () => {
  console.log(`Server running at http://${HOST}:${POST}`)
})