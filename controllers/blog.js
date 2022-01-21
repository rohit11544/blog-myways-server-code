import mongoose from "mongoose";
import BlogDetails from "../models/BlogDetails.js";

export const getBlog = async (req, res) => {
  try {
    const blogDetails = await BlogDetails.find();
    // console.log(blogDetails);
    res.status(200).json(blogDetails);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const createBlog = async (req, res) => {
  const blog = req.body;

  const newBlog = new BlogDetails(blog);
  try {
    await newBlog.save();

    res.status(201).json(newBlog);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateBlog = async (req, res) => {
  const { id: id } = req.params;
  const blog = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No blog with that id");
  }

  const updatedBlog = await BlogDetails.findByIdAndUpdate(id, { ...blog, id });
  res.json(updatedBlog);
};

export const deleteBlog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No blog with that id");
  }

  await BlogDetails.findByIdAndRemove(id);

  res.json({ message: "Shop deleted successfully" });
};
