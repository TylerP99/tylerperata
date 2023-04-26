const rateLimit = require("express-rate-limit");

const loginLimiter = rateLimit({
    windowMs: 60*1000, // 1 minute
    max: 5, // 5 attempts
    message: {error: "Too many attempts from this IP, please try again later."},
    handler: (req, res, next, options) => {
        console.log(options);
        return res.status(options.statusCode).send(options.message);
    },
    standardHeaders: true,
    legacyHeaders: false,
});

module.exports = loginLimiter;