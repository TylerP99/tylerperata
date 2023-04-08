const express = require("express");
const router = express.Router();

router.use("/api/posts", require("./posts"));
router.use("/api/contacts", require("./contacts"));
router.use("/api/projects", require("./projects"));

module.exports = router;