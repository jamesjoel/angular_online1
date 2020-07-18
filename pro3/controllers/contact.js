var express = require("express");
var routes = express.Router();

routes.get("/", (req, res) => {
    res.render("contact");
});


routes.get("/info", (req, res) => {
    res.render("info");
});
// localhost:3000/contact/info

module.exports = routes;


//                                       app.js<---------router.js<-------contact.js