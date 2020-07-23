var express = require("express");
var routes = express.Router();
var student = require("../models/student");

routes.get("/", (req, res) => {
   
    student.find(function (err, result) {
        var pageData = { title: "Student", pagename: "student/index", result : result }
        res.render("layout", pageData);
    }); // time taking code
});
module.exports = routes;

/*
function demo1()
{
       hello(function(res){
        p
       })
}
function demo2()
{
        hello(function(res){
            h1
        })
}
function demo3()
{
    hello(function(res){
        div
    })
}

function hello(cb)
{
    $.ajax({
        url : "",
        data :  { },
        type : JSON,
        success : cb
    });
}




*/