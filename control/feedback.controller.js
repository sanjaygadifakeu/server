import { feedback } from "../models/feedback.model.js";

export const feedback1 = async (req, res) => {
  try {
    await feedback.create({
      name: req.body.fName,
      Name: req.body.cName,
      knowledgee: req.body.cSkills,
    });
    
    res.json({
      msg: "created",
    });
  } catch (error) {
    res.json({
      msg: "error",
      data: error.message,
    });
  }
};

export const feedbackresult = async (req, res) => {
  const feed = await feedback.find({});
  res.json(feed);
};
