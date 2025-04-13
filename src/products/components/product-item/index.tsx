import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { FC, memo, useCallback } from "react";
import { useNavigate } from "@tanstack/react-router";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import productPlaceholder from "assets/product.jpg";

interface Props {
  id: number;
  title: string;
  description: string;
  price: number;
  image?: string;
}

const ProductItemBase: FC<Props> = ({
  id,
  description,
  image,
  price,
  title,
}) => {
  const navigate = useNavigate();

  const handleProductClick = useCallback(() => {
    void navigate({
      to: "/products/$productId",
      params: {
        productId: id,
      },
    });
  }, [id, navigate]);

  return (
    <Grid size={{ xs: 12, sm: 4 }}>
      <Card sx={{ width: "100%" }}>
        <CardActionArea onClick={handleProductClick}>
          <CardMedia
            component="img"
            height="180"
            image={image ?? productPlaceholder}
            alt={title}
            sx={{ objectFit: "cover" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div" noWrap>
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" noWrap>
              {description}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              mt={1}
            >
              <Typography variant="subtitle1" fontSize={20} color="primary">
                ${price}
              </Typography>
              <IconButton color="primary" aria-label="Add to cart">
                <ShoppingCartIcon />
              </IconButton>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export const ProductItem = memo(ProductItemBase);
