var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cndb00');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var cnQuoteSchema = mongoose.Schema({
  //category: String,
  icon_url: 'String',
  id: 'String',
  url: 'String',
  value: 'String'
});

var CNQuote = mongoose.model('CNQuote', cnQuoteSchema);

module.exports.CNQuote = CNQuote;