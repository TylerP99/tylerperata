const jwt = require("jsonwebtoken");
const AsyncHandler = require("express-async-handler");

const User = require("../models/User");

const registerUser = AsyncHandler( async (req, res) => {
    const { username, email, password, password2, adminSecret } = req.body;

    if( !username || !email || !password || !password2 || !adminSecret )
        return res.status(400).json({error: "All fields are required"});

    if( password !== password2 ) return res.status(400).json({error: "Passwords must match"});

    if( adminSecret !== process.env.ADMIN_SECRET) return res.status(400).json({error: "Admin secret incorrect"});

    const existing = await User.find({email});

    if(existing) return res.status(400).json({error: "Email in use"});

    const admin = await User.create({username, email, password, roles: ["admin"]});

    return res.status(201).json({user: admin});
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