import express from "express";
import { mutildate, getGoods } from "../router_handler/home.js";
const router = express.Router();

//? 请求轮播图，推荐
router.get("/multidate", mutildate);
//?请求商品数据
router.post("/data", getGoods);
export default router;
