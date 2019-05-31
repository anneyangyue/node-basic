var fs = require('fs')

// 输入流
// var stream = fs.createReadStream('./3.txt')
// stream.on('data', function (data) {
//   console.log('-----------------------')
//   console.log(data)
//   console.log(data.length)
// })

// stream.on('end', function () {
//   console.log(arguments)
// })

// stream.on('error', function (err) {
//   console.log(err)
// })

// 输出流
// var stream = fs.createWriteStream('./4.txt')
// stream.write('岁那年就会恢复')
// stream.write('岁那年就会恢复')
// stream.write('岁那年就会恢复')
// stream.end()

// stream.on('finish', function () {
//   console.log('finish')
// })

// stream.on('error', function (err) {
//   console.log(err)
// })

// 输入流和输出流
// var s1 = fs.createReadStream('./3.txt')
// var s2 = fs.createWriteStream('./5.txt')

// s1.on('data', function (data) {
//   s2.write(data)
// })

// s1.on('end', function () {
//   s2.end()
//   console.log('复制完毕')
// })

// 管道 pipe
// s1.pipe(s2)

// pipe 压缩文件
var zlib = require('zlib')

var s1 = fs.createReadStream('./3.txt')
var s2 = fs.createWriteStream('./6.txt.zip')

s1.pipe(zlib.createGzip()).pipe(s2)


