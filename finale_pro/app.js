var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var routes = require("./config/routes");
var upload = require("express-fileupload");
app.use(express.static(__dirname+"/public"));

app.use(bodyParser());
app.use(cors());
app.use(upload());

app.use(routes);
app.use("*", function(req, res){
    res.sendFile(__dirname+"/index.html");
    
});

// console.log(process.env.PORT);
var port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log("server running with port ", port);
});







