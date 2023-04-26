const express = require("express");
const router = express.Router();

const { getAllMessages, createMessage, setMessageReplied, deleteMessage } = require("../controllers/messageController");
const authUser = require("../middleware/authUser");

router.route("/")
      .get(getAllMessages)
      .post(authUser, createMessage);

router.route("/:id")
      .put(authUser, setMessageReplied)
      .delete(authUser, deleteMessage);

module.exports = router;