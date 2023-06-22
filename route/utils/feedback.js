const express = require("express");
const path = require("path");

const route = express.Router();

const successPath = path.join(__dirname, "../../", "views/success.html");
const errorPath = path.join(__dirname, "../../", "views/error.html");
route.get("/success", (req, res, next) => {
  res.sendFile(successPath);
  next();
});

route.get("/error", (req, res, next) => {
  res.sendFile(errorPath);
});

module.exports = route;
