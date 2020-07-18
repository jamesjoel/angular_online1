var express = require("express");
var app = express();
var routes = require("./config/routes");

app.set("view engine", "ejs");

app.use(routes);
// localhost:3000/contact

// app.set("views", "pages");
app.listen(3000, ()=>{
    console.log("server running");
});


/*
localhost:3000/ --- homepage    -------------- home
localhost:3000/about --- about ----------------about
localhost:3000/contact --- contact ------------contact
localhost:3000/contact/info --- info-----------contact
localhost:3000/terms--- terms-----------------terms
localhost:3000/terms/setting--- setting-------terms



Express Routing Methods


.get()
.post()
.use()
.put()
.delete()
.all()
.fetch()

in all methods callback fun() should have (req, res) object




localhost/demo/index.php/user
localhost/demo/index.php/user/info
localhost/demo/index.php/user/about
localhost/demo/index.php/admin/login
localhost/demo/index.php/admin/settin


*/

