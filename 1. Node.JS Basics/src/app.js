/**
 * Created by Sohail Alam on 10/04/2016.
 */
var path = require('path');
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');

var indexRoute = require('./routes/indexRoute');
var usersRoute = require('./routes/usersRoute');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

// www.shoppingkart.com/
app.use('/', indexRoute);
// www.shoppingkart.com/users
// www.shoppingkart.com/users?user_id=123
app.use('/users', usersRoute);

// www.shoppingkart.com/NOT_FOUND
// Not found hander
app.use(function (request, resonse, next) {
    var err = new Error('File not found, please contact admin');
    err.status = 404;
    next(err);
});

// server side exception handler
app.use(function (err, req, response, next) {
    response.status(500);
    response.render('myerror', {message: err.message, myerror: err});
});

var httpServer = http.createServer(app);
// 127.0.0.1:8080 = localhost:8080
httpServer.listen(8080);
httpServer.on('error', function (error) {
    console.error(error);
});
httpServer.on('listening', function () {
    console.log('Express web is running on port 8080');
});