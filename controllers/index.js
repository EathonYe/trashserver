const router = require('koa-router')()

module.exports = (app) => {
  router.get('/', (ctx, next) => {
    ctx.type = 'text/html'
    ctx.body = 'Hello world.'
  })

  router.post('/register', require('./login').register)
  router.post('/doLogin', require('./login').doLogin)

  router.get('/trash', require('./trash').getTrash)

  router.post('/upload', require('./common').upload)

  router.post('/resident', require('./resident').add)

  router.post('/scorerecord', require('./score_record').add)
  router.get('/scorerecord', require('./score_record').find)

  app
    .use(router.routes()) // 添加路由中间件
    .use(router.allowedMethods()) // 对请求进行一些限制处理
}
