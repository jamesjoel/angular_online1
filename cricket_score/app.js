
var express = require("express");
var app = express();
var server = require("http").createServer(app);
var bodyParser = require("body-parser");
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";


var io = require("socket.io")(server);


io.on("connection", (socket)=>{
    console.log("connection stable");
});
app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));

app.use(bodyParser());
app.get("/", (req, res)=>{
    MongoClient.connect(url, function (err, con) {
        var db = con.db("mydb");
        db.collection("scoretable").find({}).toArray(function (err, result) {
                      
            res.render("index", { data : result});
            
        });
    });
});

app.get("/admin", (req, res)=>{
    res.render("admin");
    
})
app.post("/admin", (req, res)=>{
    // console.log(req.body);
    var x = req.body.score;
    MongoClient.connect(url, function(err, con){
        var db = con.db("mydb");
        db.collection("scoretable").insert({ score : x}, function(err, result){
            console.log(result);
            io.emit("score", x);
            res.redirect("/admin");
        });
    });
});


server.listen(3000, ()=>{
    console.log("server running");
})