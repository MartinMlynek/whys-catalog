import { createFileRoute } from "@tanstack/react-router";
import { ProductDetail } from "../../products/product-detail";

export const Route = createFileRoute("/products/$productId")({
  component: ProductDetail,

  parseParams: ({ productId }) => {
    const parsedId = Number(productId);
    if (isNaN(parsedId)) {
      throw new Error("Unknown product id");
    }

    return { productId: parsedId };
  },
});
