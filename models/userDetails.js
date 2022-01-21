import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  fullName: String,
  email: String,
  phNumber: Number,
  passWord: String,
  verified: String,
});

const UserDetails = mongoose.model("UserDetails", userSchema);

export default UserDetails;
