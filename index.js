const Koa = require('koa'),
      bodyparser = require('koa-bodyparser');
const controller = require('./controller'),
      config = require('./config');

const HOST = config.HOST,
      POST = config.PORT;
const app = new Koa();

// middlewares
app.use(bodyparser());
controller(app);

app.listen(POST, HOST, () => {
  console.log(`Server running at http://${HOST}:${POST}`);
});