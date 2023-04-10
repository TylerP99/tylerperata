const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");

const { getAllProjects,
        addProject,
        updateProject,
        deleteProject } = require("../controllers/projectController");

router.route("/")
      .get(getAllProjects)
      .post(upload.single("image"), addProject);
router.route("/:id")
      .put(upload.single("image"), updateProject)
      .delete(deleteProject);

module.exports = router;