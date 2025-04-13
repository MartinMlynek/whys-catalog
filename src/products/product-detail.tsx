import { FC, memo, useCallback } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  Stack,
  Chip,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CategoryIcon from "@mui/icons-material/Category";
import { getRouteApi } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "../api/products";
import { LoaderWrapper } from "../ui/loader-wrapper";
import { ButtonLink } from "../ui/button-link";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { PageTitle } from "../ui/page-title";

const { useParams } = getRouteApi("/products/$productId");

const ProductDetailBase: FC = () => {
  const { productId } = useParams();

  const {
    data: product,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => fetchProductById(productId),
  });

  const refetchProduct = useCallback(() => {
    void refetch();
  }, [refetch]);

  return (
    <LoaderWrapper
      isLoading={isLoading}
      error={error}
      loadingText="Loading product..."
      onRetry={refetchProduct}
    >
      {product && (
        <Box>
          <ButtonLink variant="outlined" sx={{ my: 2, color: "white" }} to="/">
            <ArrowBackIosIcon fontSize="small" />
            Back to products
          </ButtonLink>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card>
                <CardMedia
                  component="img"
                  image={product.images[0] ?? "/placeholder.jpg"}
                  alt={product.title}
                  sx={{ maxHeight: 500, objectFit: "contain" }}
                />
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={3}>
                <PageTitle>{product.title}</PageTitle>

                <Typography variant="h5" color="primary">
                  ${product.price}
                </Typography>

                <Typography variant="body1">{product.description}</Typography>

                {product.category && (
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <CategoryIcon fontSize="small" />
                    <Chip label={product.category.name} />
                  </Stack>
                )}

                {product.creationAt && (
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <CalendarTodayIcon fontSize="small" />
                    <Typography variant="body2" color="text.secondary">
                      Added:
                      {new Date(product.creationAt).toLocaleDateString()}
                    </Typography>
                  </Stack>
                )}
              </Stack>
            </Grid>
          </Grid>
        </Box>
      )}
    </LoaderWrapper>
  );
};

export const ProductDetail = memo(ProductDetailBase);
