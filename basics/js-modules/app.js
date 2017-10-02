var http = require('http');
var mymodule = require('./my_module');

function onRequest(request, response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.write(mymodule.myStr);
    mymodule.myFunc();
    response.end();
}

http.createServer(onRequest).listen(8000);