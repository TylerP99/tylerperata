const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");

const { getAllProjects,
        addProject,
        updateProject,
        deleteProject } = require("../controllers/projectController");
const authUser = require("../middleware/authUser");

router.route("/")
      .get(getAllProjects)
      .post(authUser, upload.single("image"), addProject);
router.route("/:id")
      .put(authUser, upload.single("image"), updateProject)
      .delete(authUser, deleteProject);

module.exports = router;