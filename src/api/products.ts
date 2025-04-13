import api from "./axios";
import { Product, ProductSchema, ProductsSchema } from "./types/product";
import { validateSchema } from "./validate-schema";

export const fetchProducts = async (
  offset = 0,
  limit = 10
): Promise<Product[]> => {
  const res = await api.get("/products", {
    params: { offset, limit },
  });

  return validateSchema(ProductsSchema, res.data);
};

export const fetchProductById = async (id: number): Promise<Product> => {
  const res = await api.get(`/products/${id.toString()}`);

  return validateSchema(ProductSchema, res.data);
};
