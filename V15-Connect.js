var connect = require('connect');
var http = require('http');

var app = connect();

// function doFirst(request, response, next){
//     console.log(`Do this first!`);
// }
// function doSecond(request, response, next){
//     console.log(`Do this Second!`);
// }
// app.use(doFirst);
// app.use(doSecond);

function profile(request, response){
    console.log(`User requested profile!`);
}

function forum(request, response){
    console.log(`User requested forum!`);
}

app.use('/profile', profile);
app.use('/forum', forum);

//Creating server
http.createServer(app).listen(8888);
console.log(`Server is running using Connect!!`);
