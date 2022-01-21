import mongoose from "mongoose";
import UserDetails from "../models/userDetails.js";

export const getUser = async (req, res) => {
  try {
    const userDetails = await UserDetails.find();
    // console.log(userDetails);
    res.status(200).json(userDetails);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const createUser = async (req, res) => {
  const user = req.body;

  const newUser = new UserDetails(user);
  try {
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  const { id: id } = req.params;
  const user = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No user with that id");
  }

  const updatedUser = await UserDetails.findByIdAndUpdate(id, { ...user, id });
  res.json(updatedUser);
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No user with that id");
  }

  await UserDetails.findByIdAndRemove(id);

  res.json({ message: "user deleted successfully" });
};
