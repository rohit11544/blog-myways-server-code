import express from "express";

import {
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
} from "../controllers/blog.js";

const router = express.Router();

router.get("/", getBlog);
router.post("/", createBlog);
router.patch("/:id", updateBlog);
router.delete("/:id", deleteBlog);

export default router;
