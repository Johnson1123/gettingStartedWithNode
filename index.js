const http = require("http");
const express = require("express");
const app = express();
const path = require("path");
const pages = require("./route/utils/page.js");
app.use(express.static(path.join(__dirname, "public")));

app.use("/", pages);

app.use("/services", (req, res, next) => {
  res.send("services");
  next();
});

// const server = http.createServer((req, res) => {
//   res.setHeader("Content-Type", "text/HTML");
//   res.write("<h2>Hello OIC</h2>");
//   res.end();
// });

app.listen(8000);
