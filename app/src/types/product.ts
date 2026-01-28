export interface Product {
  _id: number;
  name: string;
  price: number;
  mainImages?: { path: string; name: string }[];
  seller?: { name?: string };
  rating?: number;
  replies?: number;
  myBookmarkId?: unknown;
  extra?: {
    category?: string[];
    categoryLabel?: string;
  };
}
