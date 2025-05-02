import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { allSneakers } from '../data/sneakers';
import ProductCard from '../components/shop/ProductCard';
import { Sneaker, SortOption } from '../types';

const ShopPage: React.FC = () => {
  const [currentSort, setCurrentSort] = useState<SortOption['value']>('newest');
  const [filteredSneakers, setFilteredSneakers] = useState<Sneaker[]>(allSneakers);
  
  const sortOptions: SortOption[] = [
    { label: 'Newest', value: 'newest' },
    { label: 'Price: Low to High', value: 'price-low-high' },
    { label: 'Price: High to Low', value: 'price-high-low' },
    { label: 'Most Popular', value: 'popular' },
  ];
  
  // Sort products
  const sortProducts = (sortBy: SortOption['value']) => {
    const sorted = [...allSneakers];
    
    switch (sortBy) {
      case 'newest':
        sorted.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());
        break;
      case 'price-low-high':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'popular':
        // For now, we'll sort by release date as a proxy for popularity
        sorted.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());
        break;
    }
    
    setFilteredSneakers(sorted);
    setCurrentSort(sortBy);
  };

  return (
    <main className="pt-20">
      <div className="container-custom mx-auto">
        {/* Header */}
        <div className="mb-4">
          <h1 className="heading-xl font-bold mb-4">Shop</h1>
          <p className="text-gray-400">Discover our collection of premium sneakers</p>
        </div>
        
        {/* Sort Options */}
        <div className="flex justify-end mb-2">
          <div className="relative">
            <select
              value={currentSort}
              onChange={(e) => sortProducts(e.target.value as SortOption['value'])}
              className="appearance-none bg-dark-300 border border-gray-700 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:border-primary-500 text-gray-300"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSneakers.map((sneaker, index) => (
            <motion.div
              key={sneaker.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard sneaker={sneaker} />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ShopPage;