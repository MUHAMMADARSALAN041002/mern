const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello world");
});

router.post("/register", (req, res) => {
  console.log(req.body)
  res.send("data received");
});

router.get("/about", (req, res) => {
  res.send("about");
});

router.get("/login", (req, res) => {
  res.send("login");
});

router.get("/signup", (req, res) => {
  res.send("signup");
});

router.get("/contact", (req, res) => {
  res.send("contact");
});

router.get("*", (req, res) => {
  res.send("page not found");
});

module.exports = router;