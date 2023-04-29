const jwt = require("jsonwebtoken");
const AsyncHandler = require("express-async-handler");

const User = require("../models/User");

const registerUser = AsyncHandler( async (req, res) => {
    const { username, email, password, password2, adminSecret } = req.body;

    if( !username || !email || !password || !password2 || !adminSecret )
        return res.status(400).json({error: "All fields are required"});

    if( password !== password2 ) return res.status(400).json({error: "Passwords must match"});

    if( adminSecret !== process.env.ADMIN_SECRET) return res.status(400).json({error: "Admin secret incorrect"});

    const existing = await User.findOne({email});

    console.log(existing);

    if(existing) return res.status(400).json({error: "Email in use"});

    let admin = await User.create({username, email, password, roles: ["admin"]});

    admin = {username: admin.username, email: admin.email, roles: admin.roles, _id: admin._id};

    const refreshToken = genRefreshToken(admin);
    const accessToken = genAccessToken(admin);

    res.cookie("refresh", refreshToken, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
        maxAge: 7*24*60*60*1000,
    });

    return res.status(201).json({user: admin, access: accessToken});
});

const authenticateUser = AsyncHandler( async (req, res) => {
    const { email, password } = req.body;

    if(!email || !password) return res.status(400).json({error: "All fields required"});

    const user = await User.findOne({email});

    if(!user) return res.status(404).json({error: "User not found"});

    if(!(await user.comparePassword(password))) return res.status(400).json({error: "Password incorrect"});

    const admin = {username: user.username, email: user.email, roles: user.roles, _id: user._id};

    const refreshToken = genRefreshToken(admin);
    const accessToken = genAccessToken(admin);

    res.cookie("refresh", refreshToken, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
        maxAge: 7*24*60*60*1000,
    });

    return res.status(200).json({user: admin, access: accessToken});
});

const refreshUser = AsyncHandler( async (req, res) => {
    const cookies = req.cookies;

    console.log(req.cookies);

    if(!cookies?.refresh) return res.status(401).json({error: "No token"});

    jwt.verify(cookies.refresh, 
        process.env.JWT_REFRESH_SECRET, 
        AsyncHandler( async (err, decoded) => {
            if(err) return res.status(403).json({error: "Forbidden"});

            const user = await User.findOne( {email: decoded.email} );

            if(!user) return res.status(401).json({error: "Unauthorized"});

            const {username, email, roles, _id} = decoded;

            const accessToken = genAccessToken({username, email, roles, _id});

            return res.status(200).json(accessToken);
        })
    )
});

const logoutUser = AsyncHandler( async (req, res) => {
    const cookies = req.cookies;

    if(!cookies?.refresh) return res.status(204).json({msg: "No cookie"});
    res.clearCookie("refresh", { httpOnly: true, sameSite: "None", secure: true});
    res.status(200).json({msg: "Cookie cleared"});
});

const genAccessToken = (data) => {
    return jwt.sign(data, process.env.JWT_ACCESS_SECRET, {expiresIn: "15m"});
};

const genRefreshToken = (data) => {
    return jwt.sign(data, process.env.JWT_REFRESH_SECRET, {expiresIn: "7d"});
};

module.exports = {
    registerUser,
    authenticateUser,
    refreshUser,
    logoutUser,
}