const express = require("express");
const router = express.Router();

const { registerUser, authenticateUser, refreshUser, logoutUser } = require("../controllers/userController");

router.post("/register", registerUser);
router.post("/login", authenticateUser);
router.get("/refresh", refreshUser);
router.post("/logout", logoutUser);

module.exports = router;