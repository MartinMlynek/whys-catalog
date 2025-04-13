import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "api/products";
import { Product } from "api/types/product";

export const productsPerPage = 10;

interface UseProductsQueryResult {
  products: Product[] | undefined;
  isLoading: boolean;
  error: Error | null;
  refetchProducts: () => void;
}

export const useProductsQuery = (offset: number): UseProductsQueryResult => {
  const { data, error, isLoading, refetch } = useQuery<Product[]>({
    queryKey: ["products", offset],
    queryFn: () => fetchProducts(offset, productsPerPage),
  });

  const refetchProducts = useCallback(() => {
    void refetch();
  }, [refetch]);

  return {
    products: data,
    isLoading,
    error,
    refetchProducts,
  };
};
