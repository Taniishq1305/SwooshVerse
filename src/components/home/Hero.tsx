import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center hero-grid overflow-hidden pt-20">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-radial from-primary-500/10 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-secondary-500/10 via-transparent to-transparent"></div>
      
      <div className="container-custom mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <h1 className="heading-xl font-black mb-6">
              <span className="gradient-text">Future</span> of Sneakers is Here
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
              Experience the next evolution of footwear with interactive 3D exploration, ultra-modern designs, and innovation that pushes boundaries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/shop" className="btn btn-primary">
                Shop Collection
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link to="/about" className="btn btn-outline">
                Our Technology
              </Link>
            </div>
          </motion.div>
          
          {/* Featured Sneaker */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center">
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotateZ: [0, 5, 0], 
                  rotateY: [0, 5, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 8,
                  ease: "easeInOut"
                }}
                className="w-full h-full relative z-10"
              >
                <img 
                  src="images/nike-air-max.png" 
                  alt="Featured Sneaker" 
                  className="object-contain w-full h-full rounded-lg transform -rotate-12"
                />
              </motion.div>
              
              {/* Glow effects */}
              <div className="absolute inset-0 bg-gradient-radial from-primary-500/20 to-transparent rounded-full filter blur-xl"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary-500/30 rounded-full filter blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;