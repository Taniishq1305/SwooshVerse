import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Newsletter: React.FC = () => {
  return (
    <section className="py-8 bg-dark-400 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-500/5 to-transparent"></div>
      
      <div className="container-custom mx-auto relative z-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center justify-center p-3 bg-primary-500/10 rounded-full mb-4">
            <Mail size={24} className="text-primary-400" />
          </div>
          <h2 className="heading-md font-bold mb-3">Stay Updated</h2>
          <p className="text-gray-300 mb-8">
            Subscribe to our newsletter for exclusive drops, technology updates, and special offers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 bg-dark-300 border border-gray-700 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
            />
            <button className="btn btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </div>
          
          <p className="text-gray-500 text-sm mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from SwooshVerse.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;