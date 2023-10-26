export interface Products {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  rating: { rate: number; count: number };
  newTitle?: string;
  newDescription?: string;
  category: string;
}
