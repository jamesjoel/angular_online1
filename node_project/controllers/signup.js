var express = require("express");
var routes = express.Router();
var User = require("../models/user");
var sha1 = require("sha1");

routes.get("/", (req, res) => { // localhost:3000/signup
    var pageData = { title: "Signup", pagename: "signup/index" }
    res.render("layout", pageData);
});

routes.post("/", (req, res)=>{
    var obj = req.body;
    delete obj.re_password;
    obj.password = sha1(obj.password);
    User.insert(obj, function(err, result){
        // console.log(result);
        res.redirect("/");
    });
});
routes.post('/checkuser', (req, res)=>{
    var e = req.body.email;
    User.find({ email : e}, function(err, result){
        if(result.length > 0)
        {
            res.send({ check : false })
        }else{
            
            res.send({ check : true })
        }
    });
});

module.exports = routes;
/*
res.send()
res.redner()X
res.sendFile()X
res.redirect()X


*/