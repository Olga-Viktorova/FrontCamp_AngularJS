var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var article = require('./routes/article');


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');


app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

//app.engine('html', require('ejs').renderFile);


app.use('/', index);
app.use('/articles', article);



//app.set('views', path.join(__dirname, 'views'));


// app.set('view engine', 'html');

// app.use('/*', function(req, res){
//   res.sendfile(__dirname + '/public/index.html');
// });



app.use(logger('dev'));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//app.use(express.cookieParser());
//app.use(express.bodyParser());
var expressSession = require('express-session');
app.use(expressSession({secret: 'mySecretKey'}));
 
// Passport:
var passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());

//app.use('/articles', article);



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
