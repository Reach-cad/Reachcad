import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';

const ProductVids: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      
      <div className="h-screen">
        <h1 className="text-5xl font-bold text-center m-12">Product videos</h1>
      </div>

      <Footer />
    </>
  );
};

export default ProductVids;
