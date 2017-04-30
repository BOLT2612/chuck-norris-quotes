var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
// var items = require('../database-mongo');

var app = express();

var https = require('https');
var options = {
  hostname: 'api.chucknorris.io',
  port: 443,
  path: '/jokes/random',
  method: 'GET'
};

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/quotes', function (req, res) {
	console.log("server received " + req.body.userTopic + " on /quotes:");
  console.log("req.body = ", req.body)
  var str = '';
  https.get('https://api.chucknorris.io/jokes/random', (response) => {
    //console.log('statusCode:', res.statusCode);
    //console.log('headers:', res.headers);
    response.on('data', function (chunk) {
      str += chunk;
    });

    response.on('end', function () {
      //console.log(str);
      res.status(200);;
      res.end(str);
    });
    console.log("quotes post response sent ");
  }).on('error', (e) => {
    console.error(e);
  });

});

app.get('/newquote', function (req, res) {
  console.log("server received GET request on /newquote:");
  var str = '';
  https.get('https://api.chucknorris.io/jokes/random', (response) => {
    //console.log('statusCode:', res.statusCode);
    //console.log('headers:', res.headers);
    response.on('data', function (chunk) {
      str += chunk;
    });

    response.on('end', function () {
      console.log(str);
      res.status(200);;
      res.end(str);
    });
    console.log("/newquote post response sent ");
  }).on('error', (e) => {
    console.error(e);
  });
});

app.get('/items', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

