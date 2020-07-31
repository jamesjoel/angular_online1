var express = require("express");
var routes = express.Router();

routes.use("/", require("../controllers/admin/login"));
routes.use("/dashboard", backdoor, require("../controllers/admin/dashboard"));
routes.use("/addproduct", require("../controllers/admin/addproduct"));


function backdoor(req, res, next){
    if(! req.session.isLoggedIn){
        res.redirect("/");
        return;
    }
    next();
}


module.exports = routes;
// localhost:3000/about