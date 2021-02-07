var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/about', function(req, res, next) {
  console.log('teststeset')
  fs.readFile('../public/article/bfc.json', 'utf-8', function(err, data) {
    if (err) {
      console.error(err);
    } else {
      console.log(data);
      res.json({
        status: 0,
        message: data
      });
    }
  });
  
});

/* GET home page. */
router.get('/article', function(req, res, next) {
  res.json({
    status: 0,
    message: "密码为空！"
  });
});


module.exports = router;
