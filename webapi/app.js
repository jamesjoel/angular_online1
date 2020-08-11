var express = require("express");
var app = express();
var MongoClient = require("mongodb").MongoClient;
var cors = require("cors");

app.use(cors());

app.get("/api/student", (req, res)=>{
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("mydb");
        db.collection("student").find().toArray((err, result)=>{
            res.send(result);
        })
    })
});
app.post("/api/student", (req, res) => {

    MongoClient.connect("mongodb://localhost:27017", (err, con) => {
        var db = con.db("mydb");
        db.collection("student").insert(req.body, (err, result)=>{
            res.send({msg:"data saved", result : result})
        })
    })
});
app.post("/api/student", (req, res) => {

    MongoClient.connect("mongodb://localhost:27017", (err, con) => {
        var db = con.db("mydb");
        db.collection("student").insert(req.body, (err, result) => {
            res.send({ msg: "data saved", result: result })
        })
    })
});



app.get("/demo", (req, res)=>{
    MongoClient.connect("mongodb://localhost:27017", (err, con) => {
        var db = con.db("mydb");
        db.collection("student").find().toArray((err, result) => {
            res.send(result);
        })
    })
})
//localhost:3000/demo/25
app.get("/demo/:age", (req, res) => {
    var x = parseInt(req.params.age);
    // console.log(req.params);
    MongoClient.connect("mongodb://localhost:27017", (err, con) => {
        var db = con.db("mydb");
        db.collection("student").find({ age : x}).toArray((err, result) => {
            console.log(result);
            res.send(result);
        })
    })
})


app.put("/api/student/:id", (req, res)=>{
    var obj = req.body;
    var id  = req.params.id;
})
app.delete("/api/student/:id", (req, res) => {
    var id  = req.params.id;
})







app.listen(3000, ()=>{
    console.log("server running");
});

/*
    res.render()
    res.send()
    res.sendFile()
    res.redirect()

*/