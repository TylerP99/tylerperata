const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");

const { getAllProjects,
        addProject,
        updateProject,
        deleteProject } = require("../controllers/projectController");
const authUser = require("../middleware/authUser");
const apiLimiter = require("../middleware/apiLimiter");

router.route("/")
      .get(apiLimiter, getAllProjects)
      .post(apiLimiter, authUser, upload.single("image"), addProject);
router.route("/:id")
      .put(apiLimiter, authUser, upload.single("image"), updateProject)
      .delete(apiLimiter, authUser, deleteProject);

module.exports = router;