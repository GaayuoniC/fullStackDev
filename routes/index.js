const express = require("express");
const router = express.Router(); //NOTE! capital R in router

router.get("/", (req, res) => {
  //res.send("Hello World - Starting fullstack development");
  res.render("index"); //render the index file via the router
});

//Make sure to export the router
module.exports = router;
