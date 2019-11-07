var express = require('express');
var bodyParser = require('body-parser');
var app = express();

const path = require('path');
const fs = require('fs');
const cors = require('cors')
 
app.use(cors(),
    // express.static(path.join(__dirname, 'public')),
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.put('/write', function (req, res) {
    console.log(req.body)
    fs.writeFile('test.json', JSON.stringify(req.body), function(err) { 
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!", req.body);
    });
    res.send({ message: 'Character Saved!'})
 })

app.listen(process.env.PORT || 8080);
