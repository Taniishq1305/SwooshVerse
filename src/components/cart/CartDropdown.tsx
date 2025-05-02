import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';

interface CartDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDropdown: React.FC<CartDropdownProps> = ({ isOpen, onClose }) => {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute right-0 top-full mt-2 w-80 bg-dark-400 rounded-lg shadow-xl border border-gray-800 z-50"
        >
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Your Cart</h3>
              <button onClick={onClose} className="text-gray-400 hover:text-white">
                <X size={20} />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="text-center py-8">
                <ShoppingBag size={32} className="mx-auto mb-4 text-gray-500" />
                <p className="text-gray-400">Your cart is empty</p>
              </div>
            ) : (
              <>
                <div className="max-h-96 overflow-y-auto space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="text-sm font-medium">{item.name}</h4>
                        <p className="text-gray-400 text-sm">
                          ${item.price} x {item.quantity}
                          {item.size && ` • Size: ${item.size}`}
                          {item.color && ` • Color: ${item.color}`}
                        </p>
                        <div className="flex items-center space-x-2 mt-1">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 rounded-full hover:bg-dark-300"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-sm">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 rounded-full hover:bg-dark-300"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <p className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-500 mt-1"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-800">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-400">Total</span>
                    <span className="font-bold">${totalPrice.toFixed(2)}</span>
                  </div>
                  <button className="w-full btn btn-primary">
                    Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CartDropdown; 