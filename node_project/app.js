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

//create server with 3000 port