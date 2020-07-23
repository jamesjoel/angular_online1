var database = require("../config/database");
module.exports.find= function(cb){
    database(function (err, con) {
        var db = con.db("mydb");
        db.collection("student").find().toArray(cb)
    });

}

/*
var stu = require("studnet");

stu.find(function (err, result) {

        });
stu.insert();


*/

