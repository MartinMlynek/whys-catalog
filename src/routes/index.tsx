import { createFileRoute } from "@tanstack/react-router";
import { ProductList } from "products/pages/product-list";

export const Route = createFileRoute("/")({
  component: ProductList,
});
