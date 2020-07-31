var database = require("../config/database");
module.exports.find = function (where, cb) {
    database(function (err, con) {
        var db = con.db("mydb");
        db.collection("admin").find(where).toArray(cb);
    })
}
module.exports.insert = function (obj, cb) {
    database(function (err, con) {
        var db = con.db("mydb");
        db.collection("admin").insert(obj, cb);
    })
}
module.exports.delete = function (where, cb) { //{ id : 5}
    database(function (err, con) {
        var db = con.db("mydb");
        db.collection("admin").remove(where, cb);
    })
}
module.exports.update = function (where, obj, cb) {
    database(function (err, con) {
        var db = con.db("mydb");
        db.collection("admin").update(where, { $set: obj }, cb);

    })
}

