const jwt = require("jsonwebtoken");

const authUser = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;

    if(!authHeader.startsWith("Bearer")) 
        return res.status(401).json({error: "Unauthorized"});

    const token = authHeader.split(" ")[1];

    jwt.verify(token, 
        process.env.JWT_ACCESS_SECRET,
        (error, decoded) => {
            if(error) return res.status(403).json({error: "Forbidden"});

            req.user = decoded;

            next();
        }
    )
}

module.exports = authUser;