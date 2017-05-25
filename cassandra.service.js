var cassandra=require("cassandra-driver");
var Q = require('q');
var client =new cassandra.Client({'contactPoints':['127.0.0.1'],keyspace:'openshift'});
//process.env.CASSANDRA_SERVICE

var service = {};
service.getElements = getElements;


module.exports = service;

function getElements(){
   var deferred = Q.defer();
   var query = "select * from keedio";
   client.execute(query, function (err, result) {
       if (err) {
           console.log(query, "No results");
           deferred.resolve();
       } else
           deferred.resolve(result.rows);
   });
   return deferred.promise;
};
