export interface Sneaker {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  colors?: string[];
  sizes: number[];
  images: string[];
  thumbnailImage: string;
  description?: string;
  features?: string[];
  isNew: boolean;
  isFeatured: boolean;
  category: string;
  releaseDate: string;
  modelUrl?: string;
}

export type SneakerCategory = 'running' | 'basketball' | 'lifestyle' | 'training' | 'skateboarding';

export type SneakerBrand = 'Nike' | 'Adidas' | 'Jordan' | 'New Balance' | 'Puma' | 'Reebok';

export interface FilterOptions {
  category?: SneakerCategory | null;
  brand?: SneakerBrand | null;
  minPrice?: number | null;
  maxPrice?: number | null;
  color?: string | null;
  size?: number | null;
}

export interface SortOption {
  label: string;
  value: 'newest' | 'price-low-high' | 'price-high-low' | 'popular';
}