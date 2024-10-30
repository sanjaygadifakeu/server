import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  Username: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});
const db = mongoose.model("Users", UserSchema);
export { db };
