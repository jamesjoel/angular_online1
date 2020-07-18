var express = require("express");
var routes = express.Router();

routes.use("/", require("../controllers/home"));
routes.use("/about", require("../controllers/about"));
routes.use("/contact", require("../controllers/contact"));
routes.use("/terms", require("../controllers/terms"));

module.exports = routes;


/*
Only routing method return by .Router() fun

.get()
.post()
.use()
.put()
.delete()
.all()
.fetch()


not these methods ---
    .set()
    .listen()
    


*/