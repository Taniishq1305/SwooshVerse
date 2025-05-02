import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <main className="pt-12">
      {/* Hero Section */}
      <section className="bg-dark-300 py-8 relative overflow-hidden">
        {/* Background effect */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-500/10 rounded-full filter blur-[100px]"></div>
        
        <div className="container-custom mx-auto relative z-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl text-center mx-auto"
          >
            <h1 className="heading-lg font-bold mb-6">
              Contact <span className="gradient-text">SwooshVerse</span>
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Have questions, feedback, or just want to chat about sneakers? We'd love to hear from you. Reach out using any of the methods below.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Info & Form */}
      <section className="py-20 bg-dark-400">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-8">Get In Touch</h2>
              
              <div className="space-y-8">
                {/* Address */}
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center">
                      <MapPin className="text-primary-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Our Location</h3>
                    <address className="text-gray-300 not-italic">
                      Store No. 1 Sneaker Street,<br />
                      Viman Nagar, Pune<br />
                      Maharashtra, India
                    </address>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center">
                      <Mail className="text-primary-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Email Us</h3>
                    <p className="text-gray-300 mb-1">Support: <a href="mailto:support@swooshverse.com" className="text-primary-400 hover:underline">support@swooshverse.com</a></p>
                    <p className="text-gray-300">Partnerships: <a href="mailto:partners@swooshverse.com" className="text-primary-400 hover:underline">partners@swooshverse.com</a></p>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center">
                      <Phone className="text-primary-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Call Us</h3>
                    <p className="text-gray-300">Customer Support: <a href="tel:+15557891234" className="text-primary-400 hover:underline">789-1234</a></p>
                  </div>
                </div>
              </div>
              
              {/* Hours */}
              <div className="mt-12">
                <h3 className="text-lg font-medium mb-3">Hours of Operation</h3>
                <table className="w-full text-gray-300">
                  <tbody>
                    <tr>
                      <td className="py-2">Monday - Friday:</td>
                      <td className="py-2">9:00 AM - 6:00 PM PST</td>
                    </tr>
                    <tr>
                      <td className="py-2">Saturday & Sunday:</td>
                      <td className="py-2">10:00 AM - 4:00 PM PST</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="bg-dark-300 rounded-2xl p-8 border border-gray-800">
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                <form>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Name
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-3 bg-dark-200 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Email
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-3 bg-dark-200 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-3 bg-dark-200 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea 
                      id="message" 
                      rows={6}
                      className="w-full px-4 py-3 bg-dark-200 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                      placeholder="Tell us more about your inquiry..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full btn btn-primary"
                  >
                    <Send size={18} className="mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;