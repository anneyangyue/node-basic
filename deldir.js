var fs = require('fs')

function delDir (path) {
  var list = fs.readdirSync(path)
  list.forEach(function (v, i) {
    var childPath = path + '/' + v
    var state = fs.statSync(childPath)
    if (state.isFile()) {
      fs.unlinkSync(childPath)
    } else {
      delDir(childPath)
    }
  })
  fs.rmdirSync(path)
}

delDir('./data')
