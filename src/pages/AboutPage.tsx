import React from 'react';
import { motion } from 'framer-motion';
import Newsletter from '../components/home/Newsletter';

const AboutPage: React.FC = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-dark-300 py-20 md:py-28 relative overflow-hidden">
        {/* Background effect */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-500/5 to-transparent"></div>
        
        <div className="container-custom mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              <h1 className="heading-xl font-bold mb-6">
                About <span className="gradient-text">SwooshVerse</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                SwooshVerse is revolutionizing the way sneaker enthusiasts discover, explore, and experience premium footwear using cutting-edge technology and immersive design.
              </p>
            </motion.div>

            {/* Shoe Image */}
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
                    src="/images/shoeimage.png" 
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
      
      {/* Mission Section */}
      <section className="py-20 bg-dark-400">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl overflow-hidden relative"
            >
              <img 
                src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="SwooshVerse Mission" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-500/80 to-transparent"></div>
            </motion.div>
            
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="heading-md font-bold mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                At SwooshVerse, we believe that the future of sneaker shopping lies at the intersection of technology and design. Our mission is to create an unparalleled shopping experience that allows sneaker enthusiasts to engage with footwear in ways never before possible.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We're committed to pushing the boundaries of what's possible in e-commerce by leveraging the latest advancements in 3D visualization, augmented reality, and interactive technology to bring sneakers to life in the digital realm.
              </p>
              <div className="flex flex-col space-y-4 text-gray-300">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-500/20 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-primary-500 text-sm">✓</span>
                  </div>
                  <span>Providing immersive 3D experiences for every sneaker</span>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-500/20 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-primary-500 text-sm">✓</span>
                  </div>
                  <span>Curating the most innovative and exclusive sneaker designs</span>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-500/20 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-primary-500 text-sm">✓</span>
                  </div>
                  <span>Creating a community for sneaker enthusiasts and collectors</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Technology Section */}
      <section className="py-20 bg-dark-300">
        <div className="container-custom mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-lg gradient-text font-bold mb-4">Our Technology</h2>
            <p className="text-gray-300 text-lg">
              We're leveraging cutting-edge technology to transform how you discover and experience sneakers online.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tech Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-dark-400 rounded-xl p-6 border border-gray-800"
            >
              <div className="h-48 overflow-hidden rounded-lg mb-6 relative bg-gradient-to-br from-primary-500/10 to-secondary-500/10">
                <img 
                  src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="3D Visualization" 
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">3D Visualization</h3>
              <p className="text-gray-400">
                Our proprietary 3D rendering technology allows users to view sneakers from every angle with photorealistic detail, zooming in to examine materials, stitching, and design elements.
              </p>
            </motion.div>
            
            {/* Tech Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-dark-400 rounded-xl p-6 border border-gray-800"
            >
              <div className="h-48 overflow-hidden rounded-lg mb-6 relative bg-gradient-to-br from-primary-500/10 to-secondary-500/10">
                <img 
                  src="https://images.pexels.com/photos/5632386/pexels-photo-5632386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Augmented Reality" 
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">AR Try-On</h3>
              <p className="text-gray-400">
                Experience sneakers as if they were right in front of you with our augmented reality try-on feature. See how they'll look on your feet before making a purchase.
              </p>
            </motion.div>
            
            {/* Tech Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-dark-400 rounded-xl p-6 border border-gray-800"
            >
              <div className="h-48 overflow-hidden rounded-lg mb-6 relative bg-gradient-to-br from-primary-500/10 to-secondary-500/10">
                <img 
                  src="https://images.pexels.com/photos/2759783/pexels-photo-2759783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Performance Analysis" 
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">Performance Insights</h3>
              <p className="text-gray-400">
                Our interactive visualizations break down the technology and features of each sneaker, helping you understand how they'll perform for specific activities and conditions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <Newsletter />
    </main>
  );
};

export default AboutPage;