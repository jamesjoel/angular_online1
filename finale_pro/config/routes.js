var express = require("express");
var routes = express.Router();
// localhost:3000/api/teacher
routes.use("/api/teacher", require("../controllers/api/teacher"));

module.exports = routes;