var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('hbs');
var fs = require('fs');

var indexRouter = require('./routes/index');
var docsRouter = require('./routes/docs');
var contributeRouter = require('./routes/contribute');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

hbs.registerPartials(path.join(__dirname, 'views/docs/partials'))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/dezui', express.static(path.join(__dirname, 'public/dezui')));
app.use('/data', express.static(path.join(__dirname, 'public/data')));
app.use('/img', express.static(path.join(__dirname, 'public/images')));
app.use('/style', express.static(path.join(__dirname, 'public/stylesheets')));
app.use('/js', express.static(path.join(__dirname, 'public/javascripts')));
app.use('/module', express.static(path.join(__dirname, 'public/module')));
app.use('/icon', express.static(path.join(__dirname, 'public/module/boxicons/svg')));


// Route
app.use('/', indexRouter);
app.use('/docs', docsRouter);
app.use('/contribute', contributeRouter);
// app.use('/users', usersRouter);

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
