"use strict";

const express = require("express");

const router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
  res.render("index", { title: "LinkedIn RSC Sample" });
});

module.exports = router;
