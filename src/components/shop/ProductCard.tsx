import React from 'react';
import { Link } from 'react-router-dom';
import { Sneaker } from '../../types';

interface ProductCardProps {
  sneaker: Sneaker;
}

const ProductCard: React.FC<ProductCardProps> = ({ sneaker }) => {
  return (
    <div className="sneaker-card group">
      <div className="relative overflow-hidden">
        <div className="sneaker-image-container">
          <img
            src={sneaker.thumbnailImage}
            alt={sneaker.name}
            className="sneaker-image"
          />
        </div>
        
        {/* New tag */}
        {sneaker.isNew && (
          <div className="absolute top-3 left-3 bg-primary-500 text-white text-xs font-bold px-2 py-1 rounded-md">
            NEW
          </div>
        )}
        
        {/* Sale tag */}
        {sneaker.originalPrice && (
          <div className="absolute top-3 right-3 bg-accent-500 text-white text-xs font-bold px-2 py-1 rounded-md">
            SALE
          </div>
        )}
        
        {/* Quick action buttons - appears on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="glass-effect p-2 rounded-xl">
            <Link to={`/product/${sneaker.id}`} className="btn-primary py-2 px-4 rounded-lg text-sm">
              Quick View
            </Link>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <Link to={`/product/${sneaker.id}`} className="block">
          <h3 className="font-bold text-lg hover:text-primary-400 transition-colors">{sneaker.name}</h3>
          <p className="text-gray-400 text-sm mb-2">{sneaker.brand}</p>
          <div className="flex items-baseline">
            {sneaker.originalPrice ? (
              <>
                <span className="text-lg font-bold">${sneaker.price.toFixed(2)}</span>
                <span className="text-sm text-gray-400 line-through ml-2">${sneaker.originalPrice.toFixed(2)}</span>
              </>
            ) : (
              <span className="text-lg font-bold">${sneaker.price.toFixed(2)}</span>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;