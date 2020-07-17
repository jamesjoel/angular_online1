var express = require("express");
var app = express();

app.set("view engine", "ejs");
// app.set("views", "<folder name>");
app.use(express.static(__dirname+"/public"));
// app.use() is a routing method which can run before any other routing method
app.get("/", (req, res)=>{
    var pageData = { title : "Home", pagename : "index" }
    res.render("layout", pageData);
});
app.get("/about", (req, res) => {
    var pageData = { title: "About", pagename: "about" }
    res.render("layout", pageData);
});
app.get("/contact", (req, res) => {
    var pageData = { title: "Contact", pagename: "contact" }
    res.render("layout", pageData);
});
app.get("/help", (req, res)=>{
    var pageData = {title : "Help", pagename : "help"}
    res.render("layout", pageData);
})



app.listen(3000, ()=>{
    console.log("server running");
})