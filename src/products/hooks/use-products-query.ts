import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "api/products";
import { Product } from "api/types/product";
import { useCallback, useMemo } from "react";
import { isEmpty } from "utils/is-empty";

export const productsPerPage = 10;

interface UseProductsQueryResult {
  products: Product[] | undefined;
  isLoading: boolean;
  error: Error | null;
  productsAreFull: boolean;
  refetchProducts: () => void;
}

const staleTime = 2 * 1000 * 60;

export const useProductsQuery = (offset: number): UseProductsQueryResult => {
  const {
    data: products,
    error,
    isLoading,
    refetch,
  } = useQuery<Product[]>({
    queryKey: ["products", offset],
    queryFn: () => fetchProducts(offset, productsPerPage),
    staleTime,
  });

  const refetchProducts = useCallback(() => {
    void refetch();
  }, [refetch]);

  const productsAreFull = useMemo(() => !isEmpty(products), [products]);

  return {
    products,
    isLoading,
    error,
    productsAreFull,
    refetchProducts,
  };
};
