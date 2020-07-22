var database = require("../config/database");

module.exports.selectAll=function(cb){ // err, result
    database(function (err, con) {
        if (err) {
            console.log("connection error", err);
            return;
        }
        var db = con.db("mydb");
        db.collection("student").find().toArray(cb);


    });
}
module.exports.insert=function(){
    
}
/*
var abc = require("model");
--------abc.selectAll(function (err, result) {

        });
abc.insert();


*/