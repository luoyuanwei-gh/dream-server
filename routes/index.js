var menu = require('../public/menu/index.js')
var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getMenu', function(req, res, next) {
  res.json({
    status: 200,
    menu
  });
});

router.get('/article/:id', function(req, res, next) {
  console.log(req.params.id)
  const fileName = req.params.id
  fs.readFile(`public/article/${fileName}.json`, 'utf-8', function(err, data) {
    if (err) {
      console.error(err);
      res.json({
        status: 500,
        message: '文章不存在'
      });
    } else {
      data = data.replace(/\r\n/g,"")
      data = data.replace(/\n/g,"")
      data = JSON.parse(data)
      // console.log(data)
      res.json({
        status: 200,
        data: data
      });
    }
  });
});

module.exports = router;
