const Koa = require('koa')

const bodyparser = require('koa-bodyparser')

const controller = require('./controllers')

const config = require('./config')

const HOST = config.HOST

const POST = config.PORT

const app = new Koa()

// middlewares
app.use(bodyparser())

controller(app)

app.listen(POST, HOST, () => {
  console.log(`Server running at http://${HOST}:${POST}`)
})
