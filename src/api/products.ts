import api from "./axios";
import { Product } from "./types/product";

export const fetchProducts = async (
  offset = 0,
  limit = 10
): Promise<Product[]> => {
  const res = await api.get<Product[]>("/products", {
    params: { offset, limit },
  });

  return res.data;
};
