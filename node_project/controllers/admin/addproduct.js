var express = require("express");
var routes = express.Router();
var Product = require("../../models/product");
var sha1 = require("sha1");
var Admin = require("../../models/admin");
var path = require("path");
var random = require("randomstring");



routes.get("/", (req, res) => {
    var pageData = { title: "Admin", pagename: "add" }
    res.render("admin/layout", pageData);
});

routes.post("/", (req, res)=>{
    var obj = req.body;
    var file = req.files.image;
    // console.log(path.resolve());
    var rand = random.generate(15);
    
    var arr = file.name.split(".");
    var ext = arr[arr.length-1];
    var newname = rand + "." + ext;
    file.mv(path.resolve()+"/public/products/"+newname, function(err){
        if(err){
            console.log("upload error--------", err);
            return;
        }
        obj.image = newname;
        Product.insert(obj, function(err, result){
            res.redirect("/admin/addproduct");
        })
    });
});


/*
Node 3 Type of Module 

    1. core module -------- inbuild module in node
            a. path
            b. crypto
            c. body-parser
            d. util
            e. url
            

    2. local module -------- crate by dev
    3. publie module -------- uploaded in npm










*/



module.exports = routes;