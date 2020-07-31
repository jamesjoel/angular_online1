var express = require("express");
var app = express();
var routes = require("./config/routes");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var flash = require("express-flash");
var cache = require("nocache");
var fileupload = require('express-fileupload');

app.set("view engine", "ejs");
// this is application setting
// app.set("views", "<folder name>");

app.use(express.static(__dirname+"/public"));
app.use(bodyParser());
app.use(cookieParser()); // middle where fun
app.use(session( { secret : "james joel" } ));
app.use(flash());
app.use(cache());
app.use(fileupload());
// app.use() is a routing method which can run before any other routing method


app.use(function(req, res, out){
   
    res.locals.logo = "The Stepping Stone";
    res.locals.session = req.session;
    out();
});



app.use(routes);
// define all routes in routes.js





app.listen(3000, ()=>{
    console.log("server running");
})

/*
1. show dbs   ------- List all db
2. use <dbname> --- create or select a db
3. db.<colname>.insert({}) ---- create or insert in collections
4. show collections ------------ list all collection in DB
5. db.<colname>.find() --------- show all data in the collection



Shell Prompt 

1. show dbs
2. show collections
3. use <db>
4. db.<col>.insert({})
5. db.<col>.insertMany([])
6. db.<col>.find({}) // SELECT * FROM table
7. db.<col>.find({ city : "ujjain"}) // SELECT * FROM table WHERE city='indore'
8. db.<col>.update({ id : 5 }, {$set : { age: 25, city : "indore" }})
// UPDATE table SET age = 25, city = 'indore' WHERE id = 5
9. db.<col>.update( {id : 5}, {age : 25, city : "indore"})
10. db.<col>.remove({ id : 5 })
DELETE FROM table WHERE id = 5


NODE

var db = con.db("dbname");

4. db.collection("col").insert({obj}, function(err, result){
});
5. db.collection("col").insertMany(array, function(err, result){
});
6. db.collection("col").find({ id : 5}).toArray(function(err, result){
});
8. db.collection("col").update({ id : 10 }, { $set : { city : "indore"}}, function(err, result){
})
9. db.collection("col").remove({ id : 7}, function(err, result){
})





req.session.id="100";
req.session.name="rohit";


var x = req.session.id;

req.session.destroy();

delete req.session.name;






*/