'use strict';
// packages
var express = require('express'); // express
var app = express(); // define app
var routes = require('./app/routes/index.js');
var port = process.env.PORT || 8080; // port
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
routes(app);
app.listen(port, function() {
	console.log('Node.js listening on port' + port);
});