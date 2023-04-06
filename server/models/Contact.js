const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
    name: {
        type: String,
        require
    },
    email: {
        type: String,
        require
    },
    message: {
        type: String,
        require
    }
}, {timestamps: true});

const Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact;