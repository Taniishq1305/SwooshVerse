import React from 'react';
import Hero from '../components/home/Hero';
import TechFeature from '../components/home/TechFeature';
import Newsletter from '../components/home/Newsletter';

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <TechFeature />
      <Newsletter />
    </main>
  );
};

export default HomePage;