import express from "express";

import {
  getAdmin,
  createAdmin,
  updateAdmin,
  deleteAdmin,
} from "../controllers/admin.js";

const router = express.Router();

router.get("/", getAdmin);
router.post("/", createAdmin);
router.patch("/:id", updateAdmin);
router.delete("/:id", deleteAdmin);

export default router;
