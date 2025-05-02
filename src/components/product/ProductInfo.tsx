import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AddToCartButton from './AddToCartButton';

interface ProductInfoProps {
  product: {
    id: string;
    name: string;
    brand: string;
    price: number;
    colors?: string[];
    sizes: string[];
    images: string[];
    thumbnailImage: string;
    description?: string;
    features?: string[];
  };
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  return (
    <div className="space-y-4">
      {/* Brand and Name */}
      <div>
        <h2 className="text-2xl font-bold">{product.brand}</h2>
        <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
        <p className="text-2xl font-bold text-primary-400">${product.price}</p>
      </div>

      {/* Size Selection */}
      <div>
        <h3 className="text-lg font-medium mb-2">Size</h3>
        <div className="grid grid-cols-4 gap-3">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`py-2 px-4 rounded-lg border ${
                selectedSize === size
                  ? 'border-primary-500 bg-primary-500/10 text-primary-400'
                  : 'border-gray-700 hover:border-gray-600'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Add to Cart Button */}
      <AddToCartButton 
        product={{
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.thumbnailImage,
          size: selectedSize
        }}
      />

      {/* Description - Only show if description exists */}
      {product.description && (
        <div>
          <h3 className="text-lg font-medium mb-3">Description</h3>
          <p className="text-gray-400">{product.description}</p>
        </div>
      )}

      {/* Features - Only show if features exist */}
      {product.features && product.features.length > 0 && (
        <div>
          <h3 className="text-lg font-medium mb-3">Features</h3>
          <ul className="space-y-2">
            {product.features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-start"
              >
                <span className="text-primary-400 mr-2">•</span>
                <span className="text-gray-400">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductInfo;