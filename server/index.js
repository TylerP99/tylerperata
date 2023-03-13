require("dotenv").config();

const express = require("express");
const app = express();

const path = require("path");

// Custom error handler
const {errorHandler} = require("./middleware/errorHandler");

// CORS
const cors = require("cors");
const corsOptions = require("./config/corsSettings");
app.use(cors(corsOptions));

app.require(express.json());
app.require(express.urlencoded({extended: true}));

require("./config/mongoDBConfig")();

app.require("/", "./routes/index.js");

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

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`tylerperata running on ${PORT}`)
});