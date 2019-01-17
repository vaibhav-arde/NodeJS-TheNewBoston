var http = require('http');
var fs =require('fs');

//404 response
function send404Response(response){
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write(`Error 404 : Page not found!`);
    response.end();
}

//Handle user request
function webFileServer(request, response){
    if(request.method == 'GET' && request.url =='/'){
        response.writeHead(200, {"Content-Type" : "text/html"});
        fs.createReadStream("./V14-index.html").pipe(response);
    }
    else{
        send404Response(response);
    }
}

//Handle a user request
http.createServer(webFileServer).listen(8888);
console.log(`Starting a WebFileServer`);
