var http = require('http');

function firstRequest(request, response){
    console.log(`User made a request ${request.url}`);
    response.writeHead(200, {"Context-Type":"text/plain"});
    response.write("");
}

http.createServer(firstRequest).listen(8888);
console.log('Server is running!!');