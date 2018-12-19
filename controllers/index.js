const router = require('koa-router')()

module.exports = (app) => {
  router.get('/', (ctx, next) => {
    ctx.type = 'text/html'
    ctx.body = 'Hello world.'
  })

  app
    .use(router.routes()) // 添加路由中间件
    .use(router.allowedMethods()) // 对请求进行一些限制处理
}
