const express = require("express");
const router = express.Router();

router.use("/api/posts", require("./posts"));
router.use("/api/contacts", require("./contacts"));

module.exports = router;