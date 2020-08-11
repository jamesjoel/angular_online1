var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var routes = require("./config/routes");

app.use(bodyParser());
app.use(cors());
app.use(routes);

// console.log(process.env.PORT);
var port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log("server running with port ", port);
});



