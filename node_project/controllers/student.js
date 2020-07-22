var express = require("express");
var routes = express.Router();
var student = require("../models/student");

routes.get("/", (req, res) => {
    student.selectAll(function (err, result) {
        var pageData = { title: "Student", pagename: "student/index", result : result }
        res.render("layout", pageData);

    });
});
module.exports = routes;