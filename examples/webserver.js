var Datumbase = require('../datumbase.js');
var http = require('http');

var name = new Datumbase('Kirby Kohlmorgen');

var server = http.createServer(function(req, res) {
  res.end(name.get());
});

server.listen(8080, function() {
  console.log('Server listening on port 8080.');
});
