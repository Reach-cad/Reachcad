import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from '@/components/HeroSection';

const hindiImageFiles = [
 "hindi27.png",
  "hindi26.png",
  "hindi25.jpg",
  "hindi24.png",
  "hindi23.jpg",
  "hindi22.png",
  "hindi21.jpg",
  "hindi20.png",
  "hindi19.png",
  "hindi18.jpg",
  "hindi17.png",
  "hindi16.jpg",
  "hindi15.png",
  "hindi14.png",
  "hindi13.jpg",
  "hindi12.png",
  "hindi11.png",
  "hindi10.png",
  "hindi9.png",
  "hindi8.jpg",
  "hindi7.png",
  "hindi6.png",
  "hindi5.jpg",
  "hindi4.png",
  "hindi3.png",
  "hindi2.jpg",
  "hindi1.png"

  // Add more filenames as needed
];

const HindiImages: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-8">REACH CAD - Hindi Images</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

          {hindiImageFiles.map((fileName, index) => (
            <div key={index} className="shadow-lg rounded overflow-hidden">
              <img
                src={`/REACHCADImages/hindi/${fileName}`}
                alt={`Hindi Image ${index + 1}`}
                className="w-full h-40 object-contain"

              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HindiImages;
