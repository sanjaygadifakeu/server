import express from "express";
import {
  createCourse,
  getAllCourses,
  deleteCourse,
} from "../control/course.controller.js";

const router = express.Router();

router.post("/createcourses", createCourse);
router.get("/allcourses", getAllCourses);
router.delete("/deletecourse/:id", deleteCourse);

export default router;
