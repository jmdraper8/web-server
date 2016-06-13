var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var middleware = require('./middleware.js');

app.use(middleware.logger);

//Specify middleware up the top of the file
//app.use(middleware.requireAuthentication);

// app.get('/', function (req, res) {
// 	res.send('Hello Express!');
// });

app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About Us!');
});

app.get('/contact', middleware.requireAuthentication, function (req, res) {
	res.send('Contact Us!');
});

app.use(express.static(__dirname + '/public'));
//console.log(__dirname);

app.listen(port, function () {
	console.log('Express Server started on port: ' + port + '!');
});