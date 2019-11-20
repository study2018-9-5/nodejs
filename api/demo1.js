var dataDemo = {
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
exports.getData = function(method,data){
  var data = {
    "code":'0000',
    "message":"成功",
    "data":dataDemo
  }
  if(method == 'DELETE'){
    data = {
      "code":'0001',
      "message":"不支持DELETE方法"
    }
  }
  return JSON.stringify(data);
}
