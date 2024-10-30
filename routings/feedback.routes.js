import express from "express";
import {
  feedback1,
  feedbackresult,
} from "../control/feedback.controller.js";

const router = express.Router();

router.post("/", feedback1);
router.get("/result", feedbackresult);

export default router;
