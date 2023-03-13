const express = require("express");
const router = express.Router();

const [getBlogPosts, addBlogPost, updateBlogPost, deleteBlogPost] = require("../controllers/blogPostController");

router.route("/")
      .get(getBlogPosts)
      .post(addBlogPost)
      .put(updateBlogPost)
      .delete(deleteBlogPost);

module.exports = router;