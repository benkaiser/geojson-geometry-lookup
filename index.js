var PolygonLookup = require('polygon-lookup');

var featureCollection = require('./geojsonfile.json');
console.log('loaded json collection');

var lookup = new PolygonLookup(featureCollection);

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/:latitude/:longitude', function (req, res) {
  var poly = lookup.search(req.params.latitude, req.params.longitude);
  res.send(poly);
});

app.listen(8700, function () {
  console.log('Example app listening on port 3000!');
});
