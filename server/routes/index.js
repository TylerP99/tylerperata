const express = require("express");
const router = express.Router();

router.require("/api/posts", "./posts.js");

module.exports = router;