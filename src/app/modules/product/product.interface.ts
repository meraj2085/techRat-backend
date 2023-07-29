import { Model, Types } from "mongoose";

export type IProduct = {
  image_url: string;
  name: string;
  category: string;
  status: string;
  price: number;
  description: string;
  keyFeatures: string[];
  individualRating: number;
  averageRating: number;
  comments: string[];
};

export type ProductModel = Model<IProduct, Record<string, unknown>>;
