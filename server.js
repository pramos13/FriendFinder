//Dependencies

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//Express Configuration
var app = express();
var port = process.env.port || 3000;

//Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({tyoe:'application/vnd.api+json'}));

//points to our route files
require('./app/routing/html-routes.js');
require('./app/routing/api-routes.js');

//Starts the server to begin listening
app.listen(port, function()){
	console.log('App listening on port ' + port);

});
