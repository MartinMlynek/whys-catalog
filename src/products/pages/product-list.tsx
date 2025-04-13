import { Box, Grid, Pagination, Stack, Typography } from "@mui/material";
import { ChangeEvent, FC, memo, useCallback, useMemo, useState } from "react";
import { LoaderWrapper } from "ui/components/loader-wrapper";
import { PageTitle } from "ui/components/page-title";

import { ProductItem } from "../components/product-item";
import { productsPerPage, useProductsQuery } from "../hooks/use-products-query";

const paginationCount = 5;

const ProductListBase: FC = () => {
  const [page, setPage] = useState(1);

  const offset = useMemo(() => (page - 1) * productsPerPage, [page]);

  const { products, error, isLoading, refetchProducts, productsAreFull } =
    useProductsQuery(offset);

  const handleChange = useCallback((_: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  }, []);

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
          {productsAreFull ? (
            products?.map((product) => (
              <ProductItem
                key={product.id}
                id={product.id}
                description={product.description}
                title={product.title}
                image={product.images[0]}
                price={product.price}
              />
            ))
          ) : (
            <Typography variant="h6">No products found</Typography>
          )}
        </Grid>
        {productsAreFull ? (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Pagination
              count={paginationCount}
              page={page}
              onChange={handleChange}
              color="primary"
            />
          </Box>
        ) : undefined}
      </LoaderWrapper>
    </Stack>
  );
};

export const ProductList = memo(ProductListBase);
