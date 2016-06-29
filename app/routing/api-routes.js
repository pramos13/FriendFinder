//DEPENDENCIES
var path = require('path');
var express = require('express');
var app = express();

var friendList = require('../data/friends.js');

//ROUTING

module.exports = function(app) {


    app.get('/api/friends', function(req, res) {
        res.json(friendList);
    });


    app.post('/api/friends', function(req, res) {


        var user = req.body;
        var name = req.body.name;
        var img = req.body.photo;

        var userScores = req.body.scores;
        console.log(userScores);

        var userScores1 = req.body.scores[0];
        console.log("User Score 1: " + userScores1);

        for (var i = 0; i < friendList.length; i++) {
            console.log(friendList[i].scores);
        };


        friendList.push(req.body);
        res.json(true);


    });
};