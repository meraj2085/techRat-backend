import httpStatus from "http-status";
import { Request, RequestHandler, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { ProductService } from "./product.service";

const getProducts: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { category } = req.params;
    const result = await ProductService.getProducts(category);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Product fetched successfully",
      data: result,
    });
  }
);

const getSingleProduct: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await ProductService.getSingleProduct(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Product fetched successfully",
      data: result,
    });
  }
);

const getRandomProducts: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await ProductService.getRandomProducts();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Product's fetched successfully",
      data: result,
    });
  }
);

const addProduct: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const productData = req.body;
    const result = await ProductService.addProduct(productData);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Product added successfully",
      data: result,
    });
  }
);

export const ProductController = {
  getProducts,
  getRandomProducts,
  getSingleProduct,
  addProduct,
};
