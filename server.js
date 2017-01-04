var express = require('express');
var app = express();
var bebop = require('node-bebop');
var client = bebop.createClient();
var port = 3030;
app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST,Delete");
    next();
});
app.get('/', function(request, response) {
    console.log("Pop that");
    response.status(200);
});
app.post('/takeoff', function(request, response) {
    var data = request.body;
    console.log(data);
    console.log("Taking off...");

    response.status(200).json({
        landed: true
    });
});
app.listen(port);
console.log('Node.js express server started on port %s', port);
