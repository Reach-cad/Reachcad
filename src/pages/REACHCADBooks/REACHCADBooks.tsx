import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';

const books = [
  {
    title: "Pattern Design for T-shirt using REACH CAD",
    pdf: "/REACH-CAD-Book-1.pdf",
    cover: "/Book1.png",
  },
  {
    title: "Pattern Grading for T-shirt using REACH CAD",
    pdf: "/REACH-CAD-Book-2.pdf",
    cover: "/Book2.png",
  },
  {
    title: "Marker Planning for T-shirt using REACH CAD",
    pdf: "/REACH-CAD-Book-3.pdf",
    cover: "/Book3.png",
  },
];

const ProductVids: React.FC = () => {
  return (
    <>
      <Header />
      <HeroSection />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-10">REACH CAD Books</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {books.map((book, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col"
            >
              <img
                src={book.cover}
                alt={`Cover of ${book.title}`}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 flex flex-col justify-between flex-1">
                <h2 className="text-lg font-semibold mb-4">{book.title}</h2>
                <div className="mt-auto space-x-4">
                  <a
                    href={book.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Open
                  </a>
                  <a
                    href={book.pdf}
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

export default ProductVids;
