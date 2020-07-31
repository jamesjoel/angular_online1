var express = require("express");
var routes = express.Router();
var sha1 = require("sha1");
var Admin = require("../../models/admin");
routes.get("/", (req, res) => {
    
    var pageData = { title: "Admin", pagename: "index", errorMsg: req.flash("msg") }
    res.render("admin/layout", pageData);
});

routes.post("/", (req, res)=>{
    var e = req.body.username;
    var p = sha1(req.body.password);
    Admin.find({ username: e }, function (err, result) {
        console.log(result);
        if (result.length == 1) {
            if (result[0].password == p) {
                req.session.uid = result[0]._id;
                
                req.session.isLoggedIn = true;
                res.redirect("/admin/dashboard");
            }
            else {
                req.flash("msg", "This Password is Incorrect");
                res.redirect("/admin");
            }
        }
        else {
            req.flash("msg", "This Username and Password is Incorrect");
            res.redirect("/admin");
        }
    });
})
module.exports = routes;