var express = require('express');
var bodyParser = require('body-parser');
var path =  require('path');

var app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false}));

app.use(express.static(path.join(__dirname, '/../client/dist')))

app.listen(3000, function() {
  console.log('listening on port 3000');
})