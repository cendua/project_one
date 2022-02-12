import express from "express";
const router = express.Router();
import { getCategory, getCategoryContent } from "../router_handler/category.js";

router.get("/", getCategory);
router.get("/subcategory", getCategoryContent);

export default router;
