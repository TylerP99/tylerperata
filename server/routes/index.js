const express = require("express");
const router = express.Router();

router.use("/api/posts", require("./posts.js"));

module.exports = router;