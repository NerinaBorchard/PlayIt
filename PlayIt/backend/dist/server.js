"use strict";

var express = require("express");
//CREATE APP
var app = express();
//SERVE A STATIC PAGE IN THE PUBLIC DIRECTORY
app.use(express["static"]("public"));
//PORT TO LISTEN TO
app.listen(3000, function () {
  console.log("Listening on localhost:3000");
});