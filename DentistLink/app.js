var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var book = require('./routes/book');
var config = require('./bin/config');
var app = express();

//mongodb connection
mongoose.connect(config.database, function(err){
    if(err){
      console.log(err)
    }else{
      console.log("Connected to database")
    }
});
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/books', express.static(path.join(__dirname, 'dist')));
app.use('/book', book);

// import api js file
var api = require('./db-dump/api-routes/api')(app, express);
app.use('/dentistLink', api); // use localhost:8000/dentistLink/${route-api}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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