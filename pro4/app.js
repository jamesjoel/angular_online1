var express = require("express");
var app = express();
// var MongoClient = require("mongodb").MongoClient;
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017";

// web.googlefirebase.com/mongodb/user/james/mydb?username=<username>&password=<password>
app.set("view engine", "ejs");




app.get("/", (req, res)=>{
    MongoClient.connect(url, function(err, con){
       if(err){
           console.log("connecting error", err);
           return;
       } 
       var db = con.db("mydb"); // use mydb
       db.collection("student").find().toArray(function(err, result){ // db.student.find()
            if(err){
                console.log("data getting error", err);
                return;
            }
            console.log(result);
           res.render("home", { data : result });
       });
    });
});



app.listen(3000, ()=>{
    console.log("server running");
});



/*

var arr = ["","", "", ""];

arr.forEach(function(value){
    console.log(value);
})





$(document).ready(function(){
    $("#btn").click(function(){
        alert("hello");
    })
})

************** FIRST PAGE **************
module.exports = funtion(cb){
    $(document).ready(function(){
        $("#btn").click(cb);
    })
}
************** FIRST PAGE **************

**************** SECOND PAGE ****************
var abc = require("pagename");
abc(function(){
    alert("hello")
})

abc(function(){
    alert("welcome");
})

**************** SECOND PAGE ****************



























*/