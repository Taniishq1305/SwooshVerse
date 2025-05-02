import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../context/CartContext';

interface AddToCartButtonProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
    size?: string;
  };
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
  const { addItem } = useCart();
  const [showNotification, setShowNotification] = useState(false);

  const handleAddToCart = () => {
    addItem({
      ...product,
      quantity: 1
    });
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  return (
    <div className="relative">
      <button
        onClick={handleAddToCart}
        className="btn btn-primary w-full"
      >
        Add to Cart
      </button>
      
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 right-0 bg-primary-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
          >
            +1
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AddToCartButton; 