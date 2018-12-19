const Koa = require('koa2')

const app = new Koa()

app.use(async ctx => {
  ctx.body = 'Hello world.'
})

app.listen(3000)