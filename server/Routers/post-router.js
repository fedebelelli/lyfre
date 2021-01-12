const express = require("express");
const { Post } = require("../database/models/post");
const router = new express.Router();

router.get("/post", (req, res) => {
  console.log("hola");
});

module.exports = router;
