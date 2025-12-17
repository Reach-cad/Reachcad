import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';

const Casestudies: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      
      <div className="h-screen">
        <h1 className="text-7xl font-bold text-center m-12">Case Studies</h1>
      </div>

      <Footer />
    </>
  );
};

export default Casestudies;
