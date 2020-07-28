var express = require("express");
var routes = express.Router();
var sha1 = require("sha1");
var User = require("../models/user");

routes.get("/", (req, res) => {
    var pageData = { title: "Login", pagename: "login/index", errorMsg : req.flash("msg") }
    res.render("layout", pageData);
});

routes.post("/", (req, res)=>{
    var e = req.body.email;
    var p = sha1(req.body.password);
    User.find({ email : e }, function(err, result){
        console.log(result);
        if(result.length ==1 )
        {
            if(result[0].password == p)
            {
                req.session.uid = result[0]._id;
                req.session.name = result[0].full_name;
                req.session.isLoggedIn = true;
                res.redirect("/");
            }
            else{
                req.flash("msg", "This Password is Incorrect");
                res.redirect("/login");
            }
        }
        else
        {
            req.flash("msg", "This Username and Password is Incorrect");
            res.redirect("/login");
        }
    });

})
module.exports = routes;