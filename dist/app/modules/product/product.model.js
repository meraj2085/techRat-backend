"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
/* * Image_url
 * name
 * category
 * status In Stock | Out of stock
 * price
 * description
 * keyFeatures
 * [{ brand: brand},{model: model }]
 * individualRating (Out of 5 Stars)
 * averageRating (Out of 5 Stars)
 * reviews []
 */
const productSchema = new mongoose_1.Schema({
    image_url: { type: String, required: true },
    name: { type: String, required: true },
    category: {
        type: String,
        required: true,
        enum: [
            "CPU_Processor",
            "Motherboard",
            "RAM",
            "Power_Supply_Unit",
            "Storage_Device",
            "Monitor",
        ],
    },
    status: {
        type: String,
        required: true,
        enum: ["In Stock", "Out of stock"],
    },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    keyFeatures: { type: [Object], required: true },
    individualRating: { type: Number, required: true },
    averageRating: { type: Number, required: true },
    comments: { type: [String], required: true },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Product = (0, mongoose_1.model)("Product", productSchema);
