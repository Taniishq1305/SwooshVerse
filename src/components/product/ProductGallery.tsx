import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images, productName }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  
  return (
    <div className="grid grid-cols-12 gap-4 h-full">
      {/* Thumbnails */}
      <div className="col-span-2 flex flex-col gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative aspect-square rounded-lg overflow-hidden border ${
              selectedImage === index ? 'border-primary-500' : 'border-gray-700'
            }`}
          >
            <img 
              src={image} 
              alt={`${productName} thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
      
      {/* Main Image */}
      <motion.div 
        className="col-span-10 relative rounded-lg overflow-hidden bg-dark-200 border border-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        key={selectedImage}
      >
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ 
            scale: 1,
            y: [0, -5, 0],
            rotateY: [0, 2, 0],
          }}
          transition={{ 
            scale: { duration: 0.3 },
            y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
            rotateY: { repeat: Infinity, duration: 8, ease: "easeInOut" }
          }}
          className="w-full h-full max-h-[500px] flex items-center justify-center p-8"
        >
          <img 
            src={images[selectedImage]} 
            alt={`${productName} image ${selectedImage + 1}`}
            className="max-w-full max-h-full object-contain"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProductGallery;