const express = require("express");
const router = express.Router();

const { getAllMessages, createMessage, setMessageReplied, deleteMessage } = require("../controllers/messageController");

router.route("/")
      .get(getAllMessages)
      .post(createMessage);

router.route("/:id")
      .put(setMessageReplied)
      .delete(deleteMessage);

module.exports = router;