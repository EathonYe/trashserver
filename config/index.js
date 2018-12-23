const path = require('path')

module.exports = {
  HOST: '127.0.0.1',
  PORT: process.env.PORT || 3000,

  mongodb: {
    url: 'mongodb://localhost:27017/trash',
    options: {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  },

  session: {
    key: 'trash', // cookie key
    maxAge: 86400000 // cookie maxAge
  },

  upload: {
    url: path.join(__dirname, '../upload')
  }
}
