import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';

const presentations = [
  {
    title: "35 Benefits of REACH CAD – Revolutionizing Garment Design",
    pdf: "/Presentations/35-Benefits-of-REACH-CAD-Revolutionizing-Garment-Design.pdf",
    cover: "/Presentations/35 Benefits Cover.png",
  },
];

const Presentations: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Presentations</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {presentations.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col"
            >
              {/* Cover image */}
              <img
                src={item.cover}
                alt={`Cover of ${item.title}`}
                className="w-full h-64 object-cover"
              />

              {/* Text + buttons */}
              <div className="p-4 flex flex-col justify-between flex-1">
                <h2 className="text-lg font-semibold mb-4">{item.title}</h2>

                <div className="mt-auto space-x-4">
                  {/* Open button */}
                  <a
                    href={item.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Open
                  </a>

                  {/* Download button */}
                  <a
                    href={item.pdf}
                    download
                    className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Presentations;
