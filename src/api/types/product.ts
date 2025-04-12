export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  categoryId?: number;
  category?: {
    id: number;
    name: string;
    image: string;
  };
  slug?: string;
  creationAt?: string;
  updatedAt?: string;
}
