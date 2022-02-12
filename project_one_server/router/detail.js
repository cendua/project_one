import express from "express";
import { getDetail, getRecommend } from "../router_handler/detail.js";
const router = express.Router();

router.get("/", getDetail);

router.get("/recommend", getRecommend);

export default router;
