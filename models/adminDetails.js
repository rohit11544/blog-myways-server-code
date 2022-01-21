import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
  fullName: String,
  email: String,
  phNumber: Number,
  passWord: String,
});

const AdminDetails = mongoose.model("AdminDetails", adminSchema);

export default AdminDetails;
