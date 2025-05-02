import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-400 pt-8 pb-4">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-6 gradient-text">SwooshVerse</h3>
            <p className="text-gray-400 mb-6">Revolutionizing the sneaker experience with cutting-edge technology and timeless design.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Links Column */}
          <div>
            <h4 className="text-lg font-bold mb-6">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop?category=running" className="text-gray-400 hover:text-primary-400 transition-colors">Running</Link></li>
              <li><Link to="/shop?category=basketball" className="text-gray-400 hover:text-primary-400 transition-colors">Basketball</Link></li>
              <li><Link to="/shop?category=lifestyle" className="text-gray-400 hover:text-primary-400 transition-colors">Lifestyle</Link></li>
              <li><Link to="/shop?category=training" className="text-gray-400 hover:text-primary-400 transition-colors">Training</Link></li>
              <li><Link to="/shop?category=skateboarding" className="text-gray-400 hover:text-primary-400 transition-colors">Skateboarding</Link></li>
            </ul>
          </div>
          
          {/* Help Column */}
          <div>
            <h4 className="text-lg font-bold mb-6">Help</h4>
            <ul className="space-y-3">
              <li><Link to="/faq" className="text-gray-400 hover:text-primary-400 transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="text-gray-400 hover:text-primary-400 transition-colors">Shipping Info</Link></li>
              <li><Link to="/returns" className="text-gray-400 hover:text-primary-400 transition-colors">Returns & Exchanges</Link></li>
              <li><Link to="/sizing" className="text-gray-400 hover:text-primary-400 transition-colors">Sizing Guide</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Store No. 1 Sneaker StreetViman Nagar,<br /> Pune, Maharashtra<br /></span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-primary-500 flex-shrink-0" />
                <span className="text-gray-400">123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-primary-500 flex-shrink-0" />
                <span className="text-gray-400">support@swooshverse.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="pt-4 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-0 md:mb-0">© 2025 SwooshVerse. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-500 hover:text-primary-400 text-sm">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-500 hover:text-primary-400 text-sm">Terms of Service</Link>
            <Link to="/accessibility" className="text-gray-500 hover:text-primary-400 text-sm">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;