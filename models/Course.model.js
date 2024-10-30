import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true,
  },
  courseInfo: {
    type: String,
    required: true,
  },
});

const course = mongoose.model("course", courseSchema);
export { course };
