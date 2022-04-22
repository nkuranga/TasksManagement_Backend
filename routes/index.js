var express = require("express");
// const multer = require("multer");
// const upload = multer({ dest: "../upload/" });
var router = express.Router();

const { verifySignUp } = require("../middlewares");
const assignesController = require("../controllers").assigness;
const projectController = require("../controllers").projects;
const taskController = require("../controllers").task;
const authController = require("../controllers").auth;
// const fileController = require("../controllers/fileUploadController");

//Routes for Assigns
router.post("/api/addAssignees", assignesController.addAssign);
router.get("/api/fetchAssignees", assignesController.fetchAssignees);

//Routes for Projects

router.post("/api/addProject", projectController.addProject);
router.get("/api/fetchProjects", projectController.fetchProject);

//Routes for Tasks

// router.post(
//   "/api/addTask",
//   upload.single("selectedFile"),
//   taskController.addTask
// );
router.post("/api/addTask", taskController.addTask);
router.get("/api/fetchTask", taskController.fetchTask);

//Routes for Authentication
router.post(
  "/api/auth/signup",
  [verifySignUp.checkEmailOrUsernameExist],
  authController.signup
);
router.post("/api/auth/login", authController.signin);
// router.post("/api/upload", fileController);

module.exports = router;
