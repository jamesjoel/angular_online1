var express = require("express");
var app = express();

app.set("view engine", "ejs");
// app.set("views", "pages");


app.get("/", (req, res)=>{
    var a = "rohit";
    var pageData = { name : a, city : "indore" };
    res.render("home", pageData);
});
app.listen(3000, ()=>{
    console.log("server running");
})