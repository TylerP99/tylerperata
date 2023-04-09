const express = require("express");
const router = express.Router();

const { getAllContacts, createContact, setContactReplied, deleteContact } = require("../controllers/contactController");

router.route("/")
      .get(getAllContacts)
      .post(createContact);

router.route("/:id")
      .put(setContactReplied)
      .delete(deleteContact);

module.exports = router;