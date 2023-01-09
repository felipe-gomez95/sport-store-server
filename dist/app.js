"use strict";

require("dotenv").config();
var express = require("express");
var dbConection = require("./conectDB");
var router = require("./routes/index.routes");
var path = require("path");
dbConection();
var app = express();
app.use(express.urlencoded({
  extended: false
}));
app.use(router);
app.use(express["static"](path.join(__dirname, "/public")));
app.listen(process.env.PORT || 3000, function () {
  console.log("Server on port: ", process.env.PORT || 3000);
});