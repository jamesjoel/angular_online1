var express = require("express");
var routes = express.Router();

routes.get("/", (req, res) => {
    res.render("terms");
});


routes.get("/setting", (req, res) => {
    res.render("setting");
});


module.exports = routes;