"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
// Routes
router.get("/:category", product_controller_1.ProductController.getProducts);
router.get("/random", product_controller_1.ProductController.getRandomProducts);
router.post("/add", product_controller_1.ProductController.addProduct);
exports.ProductRoutes = router;
