import { createFileRoute } from "@tanstack/react-router";
import { ProductDetail } from "../../products/product-detail";

export const Route = createFileRoute("/products/$productId")({
  component: ProductDetail,
});
