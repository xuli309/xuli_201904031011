var createError = require('http-errors');//创建错误对象
var express = require('express');
var path = require('path');//处理路径相关的
var cookieParser = require('cookie-parser');//cookie解析
var logger = require('morgan');//日志
const helper = require('./helpers');//注册hbs自定义帮助方法
const cors = require('cors');
//const sequelize = require('./models');

//导出自定义中间件
const {initLocals} = require('./middleweare');

//导入路由相关模块
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var openCourseRouter = require('./routes/open-courses');
var vipCourseRouter = require('./routes/vip-course');
var adminRouter = require('./routes/admin');
var apiCodeRouter = require('./routes/api/code');
var apiUsersRouter = require('./routes/api/users');
var apiCourseRouter = require('./routes/api/course');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(cors({
  origin:'http://localhost:3000',
  credentials:true
}));
app.use(logger('dev'));//日志
app.use(express.json());//获取ajax传递json
app.use(express.urlencoded({ extended: false }));//解析url参数
app.use(cookieParser('secret'));//cookie解析

// 配置session，需要在cookie下面
const session = require('express-session');
const Store = require('express-mysql-session')(session);
const {pool} = require('./models/db');
const store = new Store(null, pool);
app.use(session({
  store, // 设置session存储为mysql，注意当前数据库用户需要表创建权限
  secret: 'its a secret',
  resave: false,
  saveUninitialized: false,
  // 如果不设置cookie中的maxAge，则session只在当前页面打开时有效，若关闭页面即失效
  // cookie: {maxAge: 7 * 24 * 3600 * 1000} // 7天

}))

//设置静态目录
app.use(express.static(path.join(__dirname, 'public')));

//注册自定义中间件-放在路由的前面
app.use(initLocals);
// app.use('/open-courses',initLocals);//针对单个路由用中间件
// app.use('/open-courses/**',initLocals);//通配符处理


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/open-courses', openCourseRouter);
app.use('/vip-course', vipCourseRouter);

app.use('/admin', adminRouter);
app.use('/api/code', apiCodeRouter);
app.use('/api/users', apiUsersRouter);
app.use('/api/courses', apiCourseRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
