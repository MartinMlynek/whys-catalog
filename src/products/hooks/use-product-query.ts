import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import { Product } from "../../api/types/product";
import { fetchProductById } from "../../api/products";

interface UseProductQueryResult {
  product: Product | undefined;
  isLoading: boolean;
  error: Error | null;
  refetchProduct: () => void;
}

export const useProductQuery = (productId: number): UseProductQueryResult => {
  const {
    data: product,
    isLoading,
    error,
    refetch,
  } = useQuery<Product>({
    queryKey: ["product", productId],
    queryFn: () => fetchProductById(productId),
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
