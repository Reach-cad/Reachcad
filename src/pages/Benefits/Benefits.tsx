import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import BenefitLinks from './components/BenefitLinks';

const Benefits: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <BenefitLinks />
      <Footer />
    </>
  );
};

export default Benefits;
