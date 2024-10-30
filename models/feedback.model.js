import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  knowledgee: {
    type: String,
    required: true,
  },
});

const feedback = mongoose.model("Feedback", FeedbackSchema);
export { feedback };
