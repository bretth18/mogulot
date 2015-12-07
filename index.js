//index.js
//2015 bretth18


var http = require('http');
var app = require('express')();

// create a server with the express app as a listener
var server = http.createServer(app).listen(9000);

// attach BinaryServer to the base http server
