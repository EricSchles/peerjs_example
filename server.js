var express = require('express');
var hbs = require('hbs');
var bodyParser = require("body-parser");

var app = express();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'html');
app.engine("html", hbs.__express);
app.use(bodyParser.urlencoded());
app.set('views', __dirname + '/views');

app.get("/",function(req, res) {
	res.render('index');
});

var server = app.listen(8080, function() {
	console.log('Listening on '+8080)
});

app.use('/peerjs', require('peer').ExpressPeerServer(server, {
	debug: true
}));