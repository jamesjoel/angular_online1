var con = require("../config/database");

module.exports.find=function(cb){
    con.connect(function (err) {
        if (err) throw err;
        con.query("SELECT * FROM product",cb);
    });

}


