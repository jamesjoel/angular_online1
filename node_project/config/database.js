var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017";

module.exports = function(cb){ // err, con
    MongoClient.connect(url, cb);
}


/*
var hello = require("database");
hello(function(err, con){

    })



*/