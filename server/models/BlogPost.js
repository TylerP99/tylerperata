const mongoose = require("mongoose");

const BlogPostSchema = new mongoose.Schema({
    title: {
        type: String,
        require,
    },
    content: {
        type: String,
        require,
    },
}, {timestamps: true});

const BlogPost = mongoose.model("BlogPost", BlogPostSchema);

module.exports = BlogPost;