import { z } from "zod";

export const ProductSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  description: z.string(),
  images: z.array(z.string().url()),
  categoryId: z.number().optional(),
  category: z
    .object({
      id: z.number(),
      name: z.string(),
      image: z.string().url(),
    })
    .optional(),
  slug: z.string().optional(),
  creationAt: z.string().optional(),
  updatedAt: z.string().optional(),
});

export const ProductsSchema = z.array(ProductSchema);

export type Product = z.infer<typeof ProductSchema>;
