var express = require("express");
var routes = express.Router();







routes.use("/", require("../controllers/home"));
routes.use("/contact", require("../controllers/contact"));
routes.use("/about", require("../controllers/about"));
routes.use("/student", require("../controllers/student"));
routes.use("/signup", require("../controllers/signup"));
routes.use("/login", require("../controllers/login"));

// var arr = ["/profile", "/changepassword", "/info"];
// routes.use(arr, (req, res, next)=>{
//     if (!req.session.isLoggedIn) {
//         res.redirect("/login");
//         return;
//     }
//     next();
// })

routes.use("/admin", require("./adminroute"));


routes.use("/profile", backdoor, require("../controllers/profile"));





routes.get("/logout", (req, res)=>{
    req.session.destroy();
    res.redirect("/login");
});

function backdoor(req, res, next){
    if(! req.session.isLoggedIn){
        res.redirect("/login");
        return;
    }
    next();
}



module.exports=routes;
// localhost:3000/about