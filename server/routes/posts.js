const express = require("express");
const router = express.Router();

const {getBlogPosts, getBlogPost, addBlogPost, updateBlogPost, deleteBlogPost} = require("../controllers/blogPostController");

router.route("/")
      .get(getBlogPosts)
      .post(addBlogPost)
router.route("/:id")
      .get(getBlogPost)
      .put(updateBlogPost)
      .delete(deleteBlogPost);

module.exports = router;