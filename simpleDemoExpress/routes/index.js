var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/app', function (err) {
  if (err) {
    throw err
  } else {
    console.log('mongodb connect...')
  }
})

var appSchema = new mongoose.Schema({
  name: String,
  age: Number
})

var userModel = mongoose.model('user', appSchema, 'user')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

router.post('/testPost', function (req, res) {
  console.log(req.body.username)
  console.log(req.body.pwd)
  res.send('username' + req.body.username + 'pwd' + req.body.pwd)
})

router.get('/read.html', function (req, res, next) {
  userModel.find({}, function (err, data) {
    if (err) {
      throw err
    } else {
      res.send(data)
    }
  })
})

router.get('/add.html', function (req, res, next) {
  var newUSer = new userModel()
  newUSer.name = 'd'
  newUSer.age = 18
  newUSer.save(function (err) {
    if (err) {
      throw err
    } else {
      res.send('新增成功')
    }
  })
})

router.get('/modify.html', function (req, res, next) {
  var id = req.query.id
  userModel.findById(id).exec(function (err, data) {
    if (err) {
      throw err
    } else {
      data.name = 'aa'
      data.save(function (err) {
        if (err) {
          throw err
        } else {
          res.send('修改成功')
        }
      })
    }
  })
})

router.get('/remove.html', function (req, res, next) {
  var id = req.query.id
  userModel.findById(id).exec(function (err, data) {
    if (err) {
      throw err
    } else {
      data.remove(function (err) {
        if (err) {
          throw err
        } else {
          res.send('删除成功')
        }
      })
    }
  })
})

module.exports = router;
