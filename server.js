var express = require('express');
var  http = require('http');
var service = require('./cassandra.service');


var server = http.createServer(function (request, response) {

    
    service.getElements()
    .then(function (data) {
        if (data)
            res.end(data);
        else
            res.sendStatus(404);

    })
    .catch(function (err) {
        res.status(400).send(err);
    });
});

server.listen(8080);

console.log("Server running!");



