var database = require("../config/database");

module.exports.find=function(where, cb){
    database(function(err, con){
        var db = con.db("mydb");
        db.collection("teacher").find(where).toArray(cb);
    })
}
module.exports.insert = function (obj, cb) {
    database(function (err, con) {
        var db = con.db("mydb");
        db.collection("teacher").insert(obj, cb);
    })
}
module.exports.update = function (where, obj, cb) {
    database(function (err, con) {
        var db = con.db("mydb");
        db.collection("teacher").update(where, {$set : obj}, cb);
    })
}
module.exports.delete = function (where, cb) {
    database(function (err, con) {
        var db = con.db("mydb");
        db.collection("teacher").remove(where, cb);
    })
}