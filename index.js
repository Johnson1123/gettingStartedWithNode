const http = require("http");
const express = require("express");
const app = express();
const feedbackRoute = require("./route/utils/feedback");

app.use(feedbackRoute);

app.use("/services", (req, res, next) => {
  res.send("services");
  next();
});

app.use("/", (req, res, next) => {
  console.log("Home");
});
// const server = http.createServer((req, res) => {
//   res.setHeader("Content-Type", "text/HTML");
//   res.write("<h2>Hello OIC</h2>");
//   res.end();
// });

app.listen(8000);
