var database = require("../config/database");


module.exports.find = function (where, cb) {
    database(function (err, con) {
        var db = con.db("mydb");
        db.collection("product").find(where).toArray(cb);
    })
}
module.exports.insert = function (obj, cb) {
    database(function (err, con) {
        var db = con.db("mydb");
        db.collection("product").insert(obj, cb);
    })
}
module.exports.delete = function (where, cb) { //{ id : 5}
    database(function (err, con) {
        var db = con.db("mydb");
        db.collection("product").remove(where, cb);
    })
}
module.exports.update = function (where, obj, cb) {
    database(function (err, con) {
        var db = con.db("mydb");
        db.collection("product").update(where, { $set: obj }, cb);

    })
}
