var http = require('http')
var url = require('url')
var fs = require('fs')
var querystring = require('querystring')

var dirHtml = __dirname + '/html/'

var server = http.createServer()
server.on('error', function () {
  console.log(arguments)
})
server.on('listening', function () {
  console.log('listening...')
})
server.on('request', function (req, res) {
  console.log('contioned')
  var reqUrl = url.parse(req.url)
  console.log(querystring.parse(reqUrl.query))
  switch (reqUrl.pathname) {
    case '/':
      getHtml(dirHtml + 'home.html', req, res)
      break
    case '/user':
      getHtml(dirHtml + 'user.html', req, res)
      break
    default:
      getHtml(dirHtml + 'error.html', req, res)
      break
  }
})

function getHtml (filepath, req, res) {
  fs.readFile(filepath, function (err, data) {
    if (err) {
      res.writeHead('404', {
        'content-type': 'text/html;charset=utf-8'
      })
      res.end('error')
    } else {
      res.writeHead('200', {
        'content-type': 'text/html;charset=utf-8'
      })
      res.end(data)
    }
  })
}

server.listen('8081', 'localhost')
