const AsyncHandler = require("express-async-handler")
const BlogPost = require("../models/BlogPost");

const getBlogPosts = AsyncHandler(async (req, res) => {
    const posts = await BlogPost.find();

    if(!posts) return res.status(404).json({error: "No posts found"});

    return res.status(200).json(posts);
});

const getBlogPost = AsyncHandler(async (req, res) => {
    const post = await BlogPost.findById(req.params.id);

    if(!post) return res.status(404).json({error: "Post not found"});

    return res.status(200).json(post);
});

const addBlogPost = AsyncHandler(async (req, res) => {
    console.log(req.body);
    const {title, content} = req.body;

    if(!title || !content) return res.status(400).json({error: "Title and post content are both required!"});

    const post = await BlogPost.create({title, content});

    if(!post) return res.status(400).json({error: "Bad, no post received"});

    return res.status(201).json(post);
});

const updateBlogPost = AsyncHandler(async (req, res) => {
    const [title, content, id] = req.body;

    if(!id) {
        return res.status(400).json({error: "No post selected"});
    }

    if(!title || !content) return res.status(400).json({error: "Title and post content are both required!"});

    const post = await BlogPost.findByIdAndUpdate(id, {title, content});

    if(!post) return res.status(400).json({error: "Bad, no post received"});

    return res.status(200).json(post);
});

const deleteBlogPost = AsyncHandler(async (req, res) => {
    const id = req.params.id;
    console.log(id);

    if(!id) {
        return res.status(400).json({error: "No post selected"});
    }

    const post = await BlogPost.findByIdAndDelete(id);

    if(!post) return res.status(400).json({error: "Bad, no post received"});

    return res.status(200).json(post);

});

module.exports = {
    getBlogPosts,
    getBlogPost,
    addBlogPost,
    updateBlogPost,
    deleteBlogPost,
}