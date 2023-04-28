const express = require("express");
const router = express.Router();

const { getAllMessages, createMessage, setMessageReplied, deleteMessage } = require("../controllers/messageController");
const authUser = require("../middleware/authUser");
const apiLimiter = require("../middleware/apiLimiter");

router.all(apiLimiter);

router.route("/")
      .get(authUser, getAllMessages)
      .post(createMessage);

router.route("/:id")
      .put(authUser, setMessageReplied)
      .delete(authUser, deleteMessage);

module.exports = router;