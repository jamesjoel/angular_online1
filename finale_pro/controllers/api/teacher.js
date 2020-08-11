var express = require("express");
var routes = express.Router();
var Teacher = require("../../models/teacher");
var mongodb = require("mongodb");
// localhost:3000/api/teacher

routes.get("/", (req, res)=>{
    Teacher.find({}, function(err, result){
        res.send(result);
    }); 
});
routes.post("/", (req, res) => {
    Teacher.insert(req.body, function (err, result) {
        res.send(result);
    });
});
routes.put("/:id", (req, res) => {
    var id = req.params.id;
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





module.exports = routes;