const mongoose = require("mongoose");

const BlogPostSchema = new mongoose.Schema({
    title: {
        type: String,
        required,
    },
    content: {
        type: String,
        required,
    },
}, {timestamps: true});

const BlogPost = mongoose.model("BlogPost", BlogPostSchema);

module.exports = BlogPost;