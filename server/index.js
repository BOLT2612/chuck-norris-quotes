var express = require('express');
var bodyParser = require('body-parser');
var cndb = require('../database-mongo/index.js');
var Promise = require("bluebird");

var app = express();

var https = require('https');

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/quotes', function (req, res) {
  console.log("server received GET on /quotes:");
  cndb.CNQuote.find().select('icon_url id url value').exec( function(err, data) { 
    if (err) {
      console.log("cndb find() error");
    } else {
      console.log("cndb find() success");
    }
    var cleanData = data.map( function(current){ 
      var obj = {};
      obj.icon_url = current.icon_url;
      obj.id = current.id;
      obj.url = current.url;
      obj.value = current.value;
      return obj;
    })
    //console.log (cleanData);
    cleanData.reverse();
    res.status(200);
    res.end(JSON.stringify(cleanData));
  });
});

app.post('/quotes', function (req, res) {
  console.log("server received POST on /quotes:");
  //console.log("req.body.icon_url = ", req.body.icon_url, "\nreq.body.id = ",  req.body.id, "\nreq.body.url = ", req.body.url, "\nreq.body.value = ", req.body.value);

  var quote_to_write_db = new cndb.CNQuote({
    icon_url: req.body.icon_url,
    id: req.body.id,
    url: req.body.url,
    value: req.body.value
  });
  console.log("quote_to_write_db created");
  quote_to_write_db.save( function(error){
      if (error) {
        console.log('error');
      } else {
        console.log('success');
      }
    }); 
  res.end();
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
      //console.log(str);
      res.status(200);
      res.end(str);
    });
    console.log("/newquote post response sent ");
  }).on('error', (e) => {
    console.error(e);
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

