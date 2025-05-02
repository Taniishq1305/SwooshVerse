import React from 'react';
import { motion } from 'framer-motion';
import { Cuboid as Cube, RotateCcw, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const TechFeature: React.FC = () => {
  return (
    <section className="py-8 bg-dark-300 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-500/10 rounded-full filter blur-[100px]"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary-500/10 rounded-full filter blur-[100px]"></div>
      
      <div className="container-custom mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg gradient-text font-bold mb-4">Revolutionary Tech</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            SwooshVerse brings cutting-edge technology to enhance your sneaker shopping experience. Explore our interactive 3D technology that lets you see every detail before you buy.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card glass-effect group"
          >
            <div className="p-4 rounded-full bg-primary-500/10 inline-flex mb-6 group-hover:bg-primary-500/20 transition-colors">
              <Cube size={28} className="text-primary-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">3D Visualization</h3>
            <p className="text-gray-400">
              Explore every angle of your favorite sneakers with our interactive 3D model viewer. Zoom, rotate, and see detailed textures.
            </p>
          </motion.div>
          
          {/* Feature 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card glass-effect group"
          >
            <div className="p-4 rounded-full bg-secondary-500/10 inline-flex mb-6 group-hover:bg-secondary-500/20 transition-colors">
              <RotateCcw size={28} className="text-secondary-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Virtual Try-On</h3>
            <p className="text-gray-400">
              See how sneakers look on your feet with our augmented reality technology. Ensure the perfect fit before purchase.
            </p>
          </motion.div>
          
          {/* Feature 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card glass-effect group"
          >
            <div className="p-4 rounded-full bg-accent-500/10 inline-flex mb-6 group-hover:bg-accent-500/20 transition-colors">
              <Zap size={28} className="text-accent-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Performance Analysis</h3>
            <p className="text-gray-400">
              Understand how each sneaker performs for different activities with our detailed performance metrics and visualizations.
            </p>
          </motion.div>
        </div>
        
        {/* Tech Preview */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 bg-dark-400 rounded-2xl p-6 md:p-10 overflow-hidden relative"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Experience The Future</h3>
              <p className="text-gray-300 mb-6">
                Our 3D technology gives you unprecedented control to examine every stitch, material texture, and design element before making your purchase.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-500/20 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-primary-500 text-sm">✓</span>
                  </div>
                  <span className="text-gray-300">Zoom in to see detailed textures and materials</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-500/20 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-primary-500 text-sm">✓</span>
                  </div>
                  <span className="text-gray-300">Rotate to view from any angle</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-500/20 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-primary-500 text-sm">✓</span>
                  </div>
                  <span className="text-gray-300">Switch colorways in real-time</span>
                </li>
              </ul>
              <Link to="/product/5" className="btn btn-primary">
                Try Demo
              </Link>
            </div>
            <div className="relative h-[300px] md:h-[400px]">
              <img 
                src="https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="3D Technology Preview" 
                className="absolute inset-0 w-full h-full object-contain"
              />
              
              {/* Interactive elements overlay */}
              <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-primary-500/20 border border-primary-500 animate-pulse-slow"></div>
              <div className="absolute bottom-1/3 right-1/3 w-8 h-8 rounded-full bg-secondary-500/20 border border-secondary-500 animate-pulse-slow"></div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-radial from-primary-500/10 to-transparent opacity-70"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechFeature;