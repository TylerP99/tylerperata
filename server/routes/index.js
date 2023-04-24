const express = require("express");
const router = express.Router();

router.use("/api/posts", require("./posts"));
router.use("/api/messages", require("./messages"));
router.use("/api/projects", require("./projects"));
router.use("/api/users", require("./users"));

module.exports = router;