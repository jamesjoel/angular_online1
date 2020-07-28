var express = require("express");
var routes = express.Router();
var User = require("../models/user");
var mongo = require("mongodb");

routes.get("/", (req, res) => {
    User.find({ _id : mongo.ObjectId(req.session.uid) }, function(err, result){
        console.log(result);
        var pageData = { title: "Profile", pagename: "profile/index",  result : result[0]}
        res.render("layout", pageData);
    });
});
module.exports = routes;