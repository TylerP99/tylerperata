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
    },
    replied: {
        type: Boolean,
        default: false,
    }
}, {timestamps: true});

const Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact;