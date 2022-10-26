const express = require("express");
const router = express.Router();
const User = require("./models/userSchema.js")
router.get("/", (req, res) => {
  res.send("hello world");
});

router.post("/register", (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (name && email && phone && work && password && cpassword) {
    res.status(200).send("data received");
  } else {
    res.status(422).send("please fill all filed first");
  }
  User.findOne({email: email}).then()
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
