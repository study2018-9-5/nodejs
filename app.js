var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// app.js是整个工程真正的入口文件。在其内部，加载主要的依赖包，配置中间件，加载路由等等。最后在www文件中启动服务。
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

//++++++++++ 引入API +++++++++++//
var api = require('./config/api');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//+++++++++++ 配置请求 ++++++++++//
//++ 浏览器打开localhost:3000，此时应该显示的是hello world ++//
app.get('/', function(req, res){
  res.send('hello world');
});
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
app.get('/api/*', api.get);  // 只要路径匹配了'/api/*'，那么，控制权就交给api.get
app.post('/api/*', api.post);
app.options('/api/*', function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  res.sendStatus(200);/*让options请求快速返回*/
});


// //+++++++++++ 允许跨域 +++++++++++//
// app.all('*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
//   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//   next();
// });

// // '/' 为默认路径，'/user' 是加载 usersRouter 这个路径对应的模块。
// app.use('/', indexRouter);
// app.use('/users', usersRouter);  // 只要路径匹配了'/users'，那么，控制权就交给usersRouter

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
