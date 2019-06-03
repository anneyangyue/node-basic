var http = require('http')
var fs = require('fs')

http.get('http://soso.nipic.com/q_%E6%B5%A3%E7%86%8A_g_0.html', function (res) {
  var resData = ''
  res.on('data', function (data) {
    resData += data.toString()
  })
  res.on('end', function () {
    var regex = /<img src="" data-original="(.+?)" class="lazy" alt="浣熊" onclick=".*?" >/img
    var arr = []
    var result = ''
    while (result = regex.exec(resData)) {
      arr.push(result[1])
    }
    arr.forEach(function (v, i) {
      v = v.replace(/\/pic\//, '/res/').replace(/_\d.jpg/, '_1.jpg')
      console.log(v)
      http.get(v, function (resPic) {
        resPic.pipe(fs.createWriteStream('./pcPicture/' + i + '.png'))
      })
      // (function (v, i) {
      //   setTimeout(function () {
      //     v = v.replace(/\/pic\//, '/').replace(/_\d.jpg/, '_1.jpg')
      //     http.get(v, function (resPic) {
      //       resPic.pipe(fs.createWriteStream('./pcPicture/' + i + '.png'))
      //     })
      //   }, 5000 * i)
      // })(v, i)
    })
  })
})

// http://pic118.huitu.com/res/20190427/2108429_20190427222941668011_1.jpg

// http://pic18.nipic.com/pic/20120113/8662717_212244241000_4.jpg(小图)
// http://pic18.nipic.com/20120113/8662717_212244241000_2.jpg(大图)

// <img src="" data-original="http://pic18.nipic.com/pic/20120113/8662717_212244241000_4.jpg" class="lazy" alt="浣熊" onclick="_hmt.push(['_trackEvent', '昵币作品（非商）', 5650075, 100]);" >
