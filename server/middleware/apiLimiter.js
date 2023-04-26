const rateLimit = require("express-rate-limit");

const apiLimiter = rateLimit({
    windowMs: 60*1000,
    max: 100,
    message: {error: "Too many requests from this IP, please try again later."},
    handler: (req, res, next, options) => {
        console.log(options);
        return res.status(options.statusCode).json(options.message);
    },
    standardHeaders: true,
    legacyHeaders: false,
});

module.exports = apiLimiter;