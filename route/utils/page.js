const express = require("express");
const path = require("path");

const router = express.Router();

const indexFile = path.join(__dirname, "../../", "views/realEstate/index.html");
const signFile = path.join(
  __dirname,
  "../../",
  "views/realEstate/agentSignUp.html"
);

router.get("/", (req, res, next) => {
  res.sendFile(indexFile);
});
router.get("/sign-up", (req, res, next) => {
  res.sendFile(signFile);
});

module.exports = router;
