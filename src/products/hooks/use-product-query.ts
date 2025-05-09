import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "api/products";
import { Product } from "api/types/product";
import { useCallback } from "react";

interface UseProductQueryResult {
  product: Product | undefined;
  isLoading: boolean;
  error: Error | null;
  refetchProduct: () => void;
}

const staleTime = 2 * 1000 * 60;

export const useProductQuery = (productId: number): UseProductQueryResult => {
  const {
    data: product,
    isLoading,
    error,
    refetch,
  } = useQuery<Product>({
    queryKey: ["product", productId],
    queryFn: () => fetchProductById(productId),
    staleTime,
  });

  const refetchProduct = useCallback(() => {
    void refetch();
  }, [refetch]);

  return {
    product,
    isLoading,
    error,
    refetchProduct,
  };
};
