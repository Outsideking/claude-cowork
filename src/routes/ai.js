import express from "express";
import { askAI } from "../services/aiService.js";

const router = express.Router();

router.post("/ask", async (req, res) => {
  try {
    const { message } = req.body;
    const result = await askAI(message);
    res.json({ status: "success", data: result });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
});

export default router;
