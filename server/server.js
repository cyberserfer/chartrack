var express = require('express');
var app = express();

app.get('/', function (req, res){
    res.send('Hello World');
})

var server = app.listen(8067, function (){
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listing at http://%s:%s", host, port)
})

//node server.js from command line to start
