var express = require('express');
var router = express.Router();

// 定义自己想要返回的内容
var data = {
  'code':'0000',
  'message':'成功',
  'dataList':[
    {
      'naem':'小明',
      'age': '12',
      'sex':'男'
    },{
      'naem':'小红',
      'age': '12',
      'sex':'女'
    }
  ]
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(data);
});

module.exports = router;
