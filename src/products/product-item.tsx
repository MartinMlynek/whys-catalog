import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { FC, memo, useCallback } from "react";
import { useNavigate } from "@tanstack/react-router";

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
        productId: String(id),
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
            image={image ?? "/placeholder.jpg"}
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
            <Typography variant="subtitle1" fontSize={24} color="primary">
              ${price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export const ProductItem = memo(ProductItemBase);
