var fs = require('fs')

// fs.open('./1.txt', 'r', function (err, fd) {
//   console.log(err)
//   console.log(fd)
// })
// console.log(111)

// var fd = fs.openSync('./1.txt', 'r')
// console.log(111, fd)

// fs.open('./1.txt', 'r', function (err, fd) {
//   if (err) {
//     console.log(err)
//   }
//   var bf = new Buffer(10)
//   fs.read(fd, bf, 2, 4, 0, function (err, len, newBf) {
//     console.log(err, len, newBf)
//   })
// })

// fs.open('./1.txt', 'r+', function (err, fd) {
//   if (err) {
//     console.log(err)
//   } else {
//     var bf1 = new Buffer('123')
//     fs.write(fd, bf1, 0, 3, 5, function (err, len, newBf) {
//       console.log(err, len, newBf)
//     })
//     fs.close(fd, function () {
//       console.log(arguments)
//     })
//   }
// })

fs.writeFile('./2.txt', 'abcde', function () {
  console.log(arguments)
})

// fs.appendFile('./2.txt', 'appendFile', function () {
//   console.log(arguments)
// })

// fs.exists('./2.txt', function (s) {
//   console.log(arguments)
//   console.log(s)
// })

// fs.unlink('./2.txt', function () {
//   console.log(arguments)
// })

// fs.rename('./2.txt', './2.new.txt', function () {
//   console.log(arguments)
// })

// fs.stat('./2.new.txt', function () {
//   console.log(arguments)
// })

// fs.mkdir('./1', function () {
//   console.log(arguments)
// })

// fs.rmdir('./1', function () {
//   console.log(arguments)
// })

// fs.readdir('./', function () {
//   console.log(arguments)
// })

// fs.watch('./', function (evenType, fileName) {
//   console.log(arguments)
// })

// fs.readdir('./src', function (err, fileList) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(fileList)
//     // var jsContent = ''
//     // fileList.forEach(function (item) {
//     //   var data = fs.readFileSync('./src' + item)
//     //   jsContent = data.toString() + '\n'
//     // })
//     // fs.writeFileSync(dirName + '/js/index.js', jsContent)
//   }
// })
