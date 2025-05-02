import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import CartDropdown from '../cart/CartDropdown';
import { useCart } from '../../context/CartContext';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { totalItems, items } = useCart();

  // Open cart when items are added
  useEffect(() => {
    if (items.length > 0) {
      setIsCartOpen(true);
    }
  }, [items.length]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark-400/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container-custom mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center space-x-2"
        >
          <span className="text-2xl font-heading font-bold gradient-text">
            SwooshVerse
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink to="/" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/shop" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
            Shop
          </NavLink>
          <NavLink to="/about" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
            About
          </NavLink>
          <NavLink to="/contact" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
            Contact
          </NavLink>
        </nav>
        
        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-5 relative">
          <button 
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="text-gray-300 hover:text-primary-400 transition-colors relative"
          >
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 bg-primary-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
              >
                {totalItems}
              </motion.span>
            )}
          </button>
          <CartDropdown 
            isOpen={isCartOpen} 
            onClose={() => setIsCartOpen(false)} 
          />
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-200 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-dark-500 z-40 pt-20">
          <div className="flex flex-col px-6 py-8 space-y-8">
            <NavLink 
              to="/" 
              className="text-xl font-medium py-2 border-b border-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/shop" 
              className="text-xl font-medium py-2 border-b border-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shop
            </NavLink>
            <NavLink 
              to="/about" 
              className="text-xl font-medium py-2 border-b border-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink 
              to="/contact" 
              className="text-xl font-medium py-2 border-b border-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;