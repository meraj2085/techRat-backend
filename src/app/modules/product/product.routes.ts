import express from "express";
import { ProductController } from "./product.controller";
const router = express.Router();

// Routes
router.get("/:category", ProductController.getProducts);
router.get("/random", ProductController.getRandomProducts);
router.post("/add", ProductController.addProduct);

export const ProductRoutes = router;
