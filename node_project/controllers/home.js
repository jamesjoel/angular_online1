var express = require("express");
var routes = express.Router();

routes.get("/", (req, res) => {
    var pageData = { title: "Home", pagename: "home/index" }
    res.render("layout", pageData);
});
module.exports = routes;