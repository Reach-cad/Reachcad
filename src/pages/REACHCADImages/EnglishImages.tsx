import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const englishImageFiles = [
  "english1.png",
  "english2.png",
  "english3.png",
  "english4.png",
  "english5.png",
  "english6.png",
  "english7.png",
  "english8.png",
  "english9.png",
  "english10.png",
  "english11.jpeg",
  "english12.jpeg",
  "english13.jpeg",
  "english14.jpeg",
  "english15.jpeg",
  "english16.jpeg",
  "english17.jpeg",
  "english18.jpeg",
  "english19.jpeg",
  "english20.png",
  "english21.png",
  "english22.png",
  "english23.png",
  "english24.png",
  "english25.png",
  "english26.png",
  "english27.png",
  "english28.png",
  "english29.jpeg",
  "english30.jpeg"
  // Add more image file names here
];

const EnglishImages: React.FC = () => {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-8">REACH CAD - English Images</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {englishImageFiles.map((fileName, index) => (
            <div key={index} className="shadow-lg rounded overflow-hidden">
              <img
                src={`/REACHCADImages/english/${fileName}`}
                alt={`English Image ${index + 1}`}
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

export default EnglishImages;
