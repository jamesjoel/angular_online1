var express = require("express");
var routes = express.Router();

routes.get("/", (req, res) => {
    var pageData = { title: "Contact", pagename: "contact/index" }
    res.render("layout", pageData);
});

routes.get("/more", (req, res)=>{
    var pageData = { title: "Contact", pagename: "contact/more" }
    res.render("layout", pageData);
})


module.exports = routes;


// localhost:3000/contact/more