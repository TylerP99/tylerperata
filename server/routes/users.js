const express = require("express");
const router = express.Router();

const { registerUser, authenticateUser, refreshUser, logoutUser } = require("../controllers/userController");
const loginLimiter = require("../middleware/loginLimiter");

router.post("/register", loginLimiter, registerUser);
router.post("/login", loginLimiter, authenticateUser);
router.get("/refresh", loginLimiter, refreshUser);
router.post("/logout", loginLimiter, logoutUser);

module.exports = router;