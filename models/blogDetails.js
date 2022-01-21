import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
  owner: String,
  date: String,
  title: String,
  image: String,
  content: String,
  likes: { type: Number, default: 0 },
  comments: { type: [{ writer: String, comment: String }], default: [] },
});

const BlogDetails = mongoose.model("BlogDetails", blogSchema);

export default BlogDetails;
