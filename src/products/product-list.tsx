import { ChangeEvent, FC, memo, useCallback, useMemo, useState } from "react";
import { PageTitle } from "../ui/page-title";
import { Box, Grid, Pagination, Stack } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/products";
import { Product } from "../api/types/product";
import { LoaderWrapper } from "../ui/loader-wrapper";
import { ProductItem } from "./product-item";

const productsPerPage = 10;

const ProductListBase: FC = () => {
  const [page, setPage] = useState(1);

  const offset = useMemo(() => (page - 1) * productsPerPage, [page]);

  const { data, error, isLoading, refetch } = useQuery<Product[]>({
    queryKey: ["products", offset],
    queryFn: () => fetchProducts(offset, productsPerPage),
  });

  const refetchProducts = useCallback(() => {
    void refetch();
  }, [refetch]);

  const handleChange = (_: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Stack spacing={2}>
      <PageTitle>Catalog of products</PageTitle>
      <LoaderWrapper
        loadingText="Loading products..."
        error={error}
        isLoading={isLoading}
        onRetry={refetchProducts}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {data?.map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              description={product.description}
              title={product.title}
              image={product.images[0]}
              price={product.price}
            />
          ))}
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Pagination
            count={5}
            page={page}
            onChange={handleChange}
            color="primary"
          />
        </Box>
      </LoaderWrapper>
    </Stack>
  );
};

export const ProductList = memo(ProductListBase);
