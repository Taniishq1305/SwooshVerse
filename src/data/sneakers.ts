import { Sneaker } from '../types';

export const featuredSneakers: Sneaker[] = [
  {
    id: '1',
    name: 'AirFuze Pro',
    brand: 'Nike',
    price: 229.99,
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    images: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2529146/pexels-photo-2529146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    thumbnailImage: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isNew: true,
    isFeatured: true,
    category: 'running',
    releaseDate: '2025-02-01'
  },
  {
    id: '2',
    name: 'QuadLeap 270',
    brand: 'Nike',
    price: 189.99,
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    images: [
      'https://images.pexels.com/photos/4252950/pexels-photo-4252950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3261069/pexels-photo-3261069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    thumbnailImage: 'https://images.pexels.com/photos/4252950/pexels-photo-4252950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isNew: true,
    isFeatured: true,
    category: 'basketball',
    releaseDate: '2025-01-15'
  },
  {
    id: '3',
    name: 'FutureStep X',
    brand: 'Adidas',
    price: 199.99,
    originalPrice: 249.99,
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    images: [
      'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    thumbnailImage: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isNew: false,
    isFeatured: true,
    category: 'lifestyle',
    releaseDate: '2024-12-01'
  },
  {
    id: '4',
    name: 'OrbitalRun Infinity',
    brand: 'New Balance',
    price: 159.99,
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    images: [
      'https://images.pexels.com/photos/2759783/pexels-photo-2759783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    thumbnailImage: 'https://images.pexels.com/photos/2759783/pexels-photo-2759783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isNew: false,
    isFeatured: true,
    category: 'running',
    releaseDate: '2024-11-15'
  }
];

// Generate a larger list of sneakers for the shop page
export const allSneakers: Sneaker[] = [
  ...featuredSneakers,
  {
    id: '5',
    name: 'NexusFlight 90',
    brand: 'Jordan',
    price: 219.99,
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    images: [
      'https://images.pexels.com/photos/1456705/pexels-photo-1456705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    thumbnailImage: 'https://images.pexels.com/photos/1456705/pexels-photo-1456705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isNew: true,
    isFeatured: false,
    category: 'basketball',
    releaseDate: '2025-01-10'
  },
  {
    id: '6',
    name: 'UrbanGlide Elite',
    brand: 'Puma',
    price: 149.99,
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    images: [
      'https://images.pexels.com/photos/2421374/pexels-photo-2421374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    thumbnailImage: 'https://images.pexels.com/photos/2421374/pexels-photo-2421374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isNew: false,
    isFeatured: false,
    category: 'lifestyle',
    releaseDate: '2024-10-01'
  }
];