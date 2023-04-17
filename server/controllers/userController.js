const jwt = require("jsonwebtoken");
const AsyncHandler = require("express-async-handler");

const registerUser = AsyncHandler( async (req, res) => {

});

const authenticateUser = AsyncHandler( async (req, res) => {

});

const refreshUser = AsyncHandler( async (req, res) => {

});

const logoutUser = AsyncHandler( async (req, res) => {

});

const genAccessToken = () => {

};

const genRefreshToken = () => {

};

module.exports = {
    registerUser,
    authenticateUser,
    refreshUser,
    logoutUser,
}