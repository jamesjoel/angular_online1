var express = require("express");
var routes = express.Router();
var sha1 = require("sha1");
var Admin = require("../../models/admin");
routes.get("/", (req, res) => {
    var pageData = { title: "Admin", pagename: "dash"}
    res.render("admin/layout", pageData);
});


module.exports = routes;