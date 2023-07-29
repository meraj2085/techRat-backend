import { IProduct } from "./product.interface";
import { Product } from "./product.model";

const addProduct = async (productData: IProduct): Promise<IProduct | null> => {
  const newProduct = await Product.create(productData);
  return newProduct;
};

const getRandomProducts = async (): Promise<IProduct[] | null> => {
  const randomProducts = await Product.aggregate([{ $sample: { size: 6 } }]);
  return randomProducts;
};

const getProducts = async (category: string): Promise<IProduct[] | null> => {
  const products = await Product.find({ category });
  return products;
};

export const ProductService = {
  getProducts,
  getRandomProducts,
  addProduct,
};
