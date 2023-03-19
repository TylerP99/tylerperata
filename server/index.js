//Environment Variables
require("dotenv").config();

// Express
const express = require("express");
const app = express();

// Nodejs path
const path = require("path");

// Logger
const morgan = require("morgan");
app.use(morgan("dev"));

// Custom error handler
const {errorHandler} = require("./middleware/errorHandler");

// CORS
const cors = require("cors");
const corsOptions = require("./config/corsSettings");
app.use(cors(corsOptions));

// Middleware for requests
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Connect database
require("./config/mongoDBConfig")();

// Defined routes
app.use("/", require("./routes/index.js"));

// Catch any undefined routes
app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if (req.accepts('json')) {
        res.json({ message: '404 Not Found' })
    } else {
        res.type('txt').send('404 Not Found')
    }
})

// Use error handler
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`tylerperata running on ${PORT}`)
});