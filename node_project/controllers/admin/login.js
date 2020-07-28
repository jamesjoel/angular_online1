var express = require("express");
var routes = express.Router();

routes.get("/", (req, res) => {
    var pageData = { title: "Admin", pagename: "index" }
    res.render("admin/layout", pageData);
});
module.exports = routes;