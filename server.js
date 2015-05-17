var express = require('express')

// var Itunes = require('./api/Itunes.js')
// var Youtube = require('./api/Youtube.js')
var client_dir = __dirname + '/public/';

var app = express()


//var itunes_rss = new Itunes()
//var Youtube = new Youtube();

var results = {}

app.get('/india/', function(req, res) {

  itunes_rss.get("/in/rss/topsongs/limit=25/json", function(err, data) {
    console.log("Error : " + err)
    results.itunes = data
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
  });
})

app.get('/', function(req, res) {
    res.sendFile(client_dir + 'index.html');
});

var port = process.env.PORT || 5000
app.listen(port)
app.use(express.static(__dirname + '/public'));


