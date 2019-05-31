var fs = require('fs')

// fs.readFile('./1.txt', function (err, data) {
//   if (err) {
//     console.log(err)
//   }
//   console.log(data.toString())
// })

// fs.readFile('./2.txt', function (err, data) {
//   if (err) {
//     console.log(err)
//   }
//   console.log(data.toString())
// })

var p1 = new Promise(function (resolve, reject) {
  fs.readFile('./1.txt', function (err, data) {
    if (err) {
      reject('error')
    } else {
      resolve(data.toString())
    }
  })
})

// p1.then(function (value) {
//   console.log(value)
// }, function (err) {
//   console.log(err)
// })

var p2 = new Promise(function (resolve, reject) {
  fs.readFile('./2.txt', function (err, data) {
    if (err) {
      reject('error')
    } else {
      resolve(data.toString())
    }
  })
})

// p2.then(function (value) {
//   console.log(value)
// }, function (err) {
//   console.log(err)
// })

Promise.all([p1, p2]).then(function (datas) {
  console.log(datas)
}, function (errs) {
  console.log(errs)
})
