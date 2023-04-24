const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema({
    name: {
        type: String,
        require
    },
    email: {
        type: String,
        require
    },
    content: {
        type: String,
        require
    },
    replied: {
        type: Boolean,
        default: false,
    }
}, {timestamps: true});

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;