import express from "express";
import Index from "../controller/index.controller.js";

const router = express.Router();

router.get("/",Index.hello);

export default router;