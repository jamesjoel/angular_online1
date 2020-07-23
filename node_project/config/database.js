var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017";

module.exports = function(cb){ // err, con
    MongoClient.connect(url, cb);
}


/*
MognoClient.connect(url, function(err, con){
    var db = con.db("mydb");
    db.collection("student").find().toArray(function(err, result){

    })
})
var xyz = require("database");

xyz(function(err, con){
    var db = con.db("mydb");
    db.collection("student").find().toArray(function(err, result){

    });



*/