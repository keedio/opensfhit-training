var express = require('express');
var  http = require('http');
var service = require('./cassandra.service');


var server = http.createServer(function (request, response) {    
    service.getElements()
    .then(function (data) {
        if (data)	
        	response.end(JSON.stringify(data))               
        else
        	response.sendStatus(404);

    })
    .catch(function (err) {
    	response.status(400).send(err);
    });
    request.on('end',  function(data) {
    	console.log('----request end----');
      });
});

server.listen(8080);

console.log("Server running!");



