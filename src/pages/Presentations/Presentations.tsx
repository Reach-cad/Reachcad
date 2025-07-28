import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';

const Presentations: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      
      <div className="h-screen">
        <h1 className="text-4xl font-bold text-center m-12">Presentations</h1>
      </div>

      <Footer />
    </>
  );
};

export default Presentations;
