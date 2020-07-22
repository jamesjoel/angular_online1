var express = require("express");
var app = express();
var routes = require("./config/routes");


app.set("view engine", "ejs");
// this is application setting
// app.set("views", "<folder name>");


app.use(express.static(__dirname+"/public"));
// app.use() is a routing method which can run before any other routing method


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
6. 



*/