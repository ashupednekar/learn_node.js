var http = require('http');
var url = require('./url');

http.createServer(url.handleRequest).listen(8000);