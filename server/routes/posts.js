const express = require("express");
const router = express.Router();

const {getBlogPosts, getBlogPost, addBlogPost, updateBlogPost, deleteBlogPost} = require("../controllers/blogPostController");
const authUser = require("../middleware/authUser");
const apiLimiter = require("../middleware/apiLimiter");

router.all(apiLimiter);

router.route("/")
      .get(getBlogPosts)
      .post(authUser, addBlogPost)
router.route("/:id")
      .get(getBlogPost)
      .put(authUser, updateBlogPost)
      .delete(authUser, deleteBlogPost);

module.exports = router;