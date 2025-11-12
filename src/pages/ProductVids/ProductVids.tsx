import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

// Convert all YouTube URLs to embed format
const videos = [
  {
    title: "REACH CAD DEMO 1",
    url: "https://www.youtube.com/embed/MKZO5jY_WjQ",
  },
  {
    title: "REACH CAD DEMO 2",
    url: "https://www.youtube.com/embed/NYqZSDVLRhs",
  },
  {
    title: "REACH CAD Skirt 1 in Hindi",
    url: "https://www.youtube.com/embed/NYqZSDVLRhs",
  },
  {
    title: "REACH CAD Skirt 2",
    url: "https://www.youtube.com/embed/P0PNwoXPyZE",
  },
  {
    title: "REACH CAD Skirt 3",
    url: "https://www.youtube.com/embed/k_wI43pN5Ow",
  },
  {
    title: "REACH CAD Skirt 4",
    url: "https://www.youtube.com/embed/VVImnfU-MsU",
  },
  {
    title: "REACH CAD Trouser Grading in Hindi",
    url: "https://www.youtube.com/embed/aBk2hYOAGWA",
  },
  {
    title: "REACH CAD Trouser Marker in Hindi",
    url: "https://www.youtube.com/embed/D6n5BWhFtug",
  },
  {
    title: "REACH CAD Skirt Video 1 in English",
    url: "https://www.youtube.com/embed/9ztgajs5C2Y",
  },
  {
    title: "REACH CAD Skirt Video 2 in English",
    url: "https://www.youtube.com/embed/nUxSz48vObw",
  },
  {
    title: "REACH CAD Skirt Video 3 in English",
    url: "https://www.youtube.com/embed/ITXbbBgop2o",
  },
  {
    title: "REACH CAD Skirt Video 4 in English",
    url: "https://www.youtube.com/embed/ZHoRiVQf2Cc",
  },
];

const ProductVids: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-8">REACH CAD Videos</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div key={index} className="text-center">
              {/* Custom aspect ratio wrapper */}
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-md shadow-lg">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="mt-2 text-pink-700 font-semibold">{video.title}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductVids;
