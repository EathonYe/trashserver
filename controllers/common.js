const formidable = require('formidable')
const config = require('../config')

exports.upload = async (ctx, next) => {
  if (ctx.request.is('multipart/form-data')) {
    try {
      let filepath = ''
      const form = formidable.IncomingForm()
      form.uploadDir = config.upload.url // 上传路径，默认os.tempDir()
      form.keepExtensions = true // 默认false，不保留文件名后缀
      form.maxFieldsSize = 20 * 1024 * 1024
      form.maxFileSize = 200 * 1024 * 1024

      const result = await new Promise(function (resolve, reject) {
        form.parse(ctx.req)
        form.on('error', function (err) {
          console.log(err)
          reject(new Error('文件保存错误'))
        })
        form.on('field', function (field, value) {
          console.log(field, value)
        })
        form.on('file', function (name, file) {
          filepath = file.path
        })
        form.on('progress', function (receive, total) {
          console.log('upload percent:' + receive / total * 100)
        })
        form.on('fileBegin', function (name, file) { // 在fileBegin事件中修改文件路径
          file.path = file.path.replace(/(upload_\w+.\w+$)/, file.name)
        })
        form.on('end', function () {
          // const filename = fileMsg.path.replace(/(\/upload_)/, fileMsg.name.substring(0, fileMsg.name.lastIndexOf('.')))
          // fs.rename(fileMsg.path, filename, function (err) {
          //   if (err) {
          //     reject(new Error('文件名重命名错误'))
          //   } else {
          //     resolve(filename)
          //   }
          // })
          resolve(filepath)
        })
      })

      ctx.body = {
        status: true,
        data: result
      }
    } catch (err) {
      ctx.body = {
        status: false,
        message: err.message
      }
    }
  } else {
    ctx.body = {
      status: false,
      message: '请以multipart/form-data的方式上传文件'
    }
  }
}
