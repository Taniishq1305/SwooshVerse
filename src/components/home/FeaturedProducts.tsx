import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { featuredSneakers } from '../../data/sneakers';

const FeaturedProducts: React.FC = () => {
  return (
    <section className="section bg-dark-400">
      <div className="container-custom mx-auto">
        <div className="flex justify-between items-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading-lg font-bold">Featured Sneakers</h2>
            <p className="text-gray-400 mt-2">Discover our most innovative designs</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/shop" className="group flex items-center text-primary-400 hover:text-primary-300 transition-colors">
              <span>View All</span>
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
        
        <div className="product-grid">
          {featuredSneakers.map((sneaker, index) => (
            <motion.div
              key={sneaker.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="sneaker-card group"
            >
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
                
                {/* Price tag */}
                {sneaker.originalPrice && (
                  <div className="absolute top-3 right-3 bg-accent-500 text-white text-xs font-bold px-2 py-1 rounded-md">
                    SALE
                  </div>
                )}
                
                {/* Quick action buttons - appears on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="glass-effect p-2 rounded-xl flex items-center space-x-2">
                    <Link to={`/product/${sneaker.id}`} className="btn-primary py-2 px-4 rounded-lg text-sm">
                      Quick View
                    </Link>
                    <button className="p-2 rounded-lg bg-dark-200 text-gray-300 hover:text-primary-400 transition-colors">
                      <Heart size={18} />
                    </button>
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
                
                {/* Color options */}
                <div className="mt-4 flex items-center space-x-2">
                  {sneaker.colors.slice(0, 3).map((color, idx) => (
                    <div key={idx} className="w-4 h-4 rounded-full border border-gray-700" style={{ background: getColorCode(color) }}></div>
                  ))}
                  {sneaker.colors.length > 3 && (
                    <div className="text-xs text-gray-400">+{sneaker.colors.length - 3} more</div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper function to convert color names to hex codes
const getColorCode = (colorName: string): string => {
  const colorMap: {[key: string]: string} = {
    'Black/Neon': 'linear-gradient(135deg, #000000 50%, #00ff00 50%)',
    'White/Blue': 'linear-gradient(135deg, #ffffff 50%, #0000ff 50%)',
    'Gray/Red': 'linear-gradient(135deg, #888888 50%, #ff0000 50%)',
    'Stealth Gray': '#404040',
    'Navy/Gold': 'linear-gradient(135deg, #000080 50%, #ffd700 50%)',
    'White/Silver': 'linear-gradient(135deg, #ffffff 50%, #c0c0c0 50%)',
    'Carbon/Neon': 'linear-gradient(135deg, #333333 50%, #00ff00 50%)',
    'Core Black': '#000000',
    'White/Gold': 'linear-gradient(135deg, #ffffff 50%, #ffd700 50%)',
    'Eclipse Black': '#121212',
    'Lunar Gray': '#aaaaaa',
    'Comet Red': '#ff4d4d',
    'Digital Pink': '#ff1493',
    'Volt Green': '#ccff00',
    'Obsidian': '#0f1626',
    'Cloud White': '#ffffff',
    'Team Burgundy': '#800020',
    'Red/Black': 'linear-gradient(135deg, #ff0000 50%, #000000 50%)',
    'Olive/Tan': 'linear-gradient(135deg, #556b2f 50%, #d2b48c 50%)',
  };
  
  return colorMap[colorName] || '#888888';
};

export default FeaturedProducts;