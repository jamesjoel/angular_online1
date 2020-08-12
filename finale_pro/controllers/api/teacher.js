var express = require("express");
var routes = express.Router();
var Teacher = require("../../models/teacher");
var mongodb = require("mongodb");
// localhost:3000/api/teacher
// localhost:3000/api/teacher/245721114

routes.get("/", (req, res)=>{
    Teacher.find({}, function(err, result){
        res.send(result);
    }); 
});
routes.get("/:id", (req, res) => {
    var id = req.params.id;
    id = mongodb.ObjectId(id);
    Teacher.find({_id : id}, function (err, result) {
        res.send(result[0]);
    });
});
routes.post("/", (req, res) => {
    Teacher.insert(req.body, function (err, result) {
        res.send(result);
    });
});
routes.put("/:id", (req, res) => {
    var id = req.params.id;
    delete req.body._id;
    // console.log(id);
    // console.log(req.body);
    id = mongodb.ObjectId(id);
    Teacher.update({ _id : id }, req.body, function (err, result) {
        res.send(result);
    });
});
routes.delete("/:id", (req, res) => {
    var id = req.params.id;
    id = mongodb.ObjectId(id);
    Teacher.delete({_id : mongodb.ObjectId(id)}, function (err, result) {
        res.send(result);
    });
});
// localhost:3000/api/techer/upload

routes.post("/upload", (req, res)=>{
    console.log(req.files);
});




module.exports = routes;

/*

UPDATE table SET name = "rohit", id = 5 WHERE id = 5



db.teacher.find({ age : 25})

db.collection("teacher").find({ }).toArray()


*/