var express = require("express");
var app = express();
var Product = require("./models/product");


app.get("/", (req, res)=>{
    Product.find(function (err, result) {
        result = JSON.parse(JSON.stringify(result));
           console.log(result);
    });
})




app.listen(3000, () => {
    console.log("server running");
})