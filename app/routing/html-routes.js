//DEPENDENCIES
var path = require('path');

//ROUTING

module.exports = function(app) {

    //HOME PAGE
    app.get('/home', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });

    //SURVEY PAGE
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });

    app.use(function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });
};