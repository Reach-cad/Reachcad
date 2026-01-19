import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
const books = [
  {
    title: "Case Study",
    pdf: "CaseStudy.pdf",
    cover: "/CaseStudy.png",
  }
]
const Casestudies: React.FC = () => {
   return (
    <>
      <Header />
      <HeroSection />

<div className="bg-gray-200 m-4 py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-3f4f17">
    Case Study
  </h1>
</div>

<div className="max-w-7xl mx-auto px-4 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {books.map((book, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col"
            >
 <img
  src={book.cover}
  alt={`${book.title} – REACH CAD case study cover`}
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


export default Casestudies;
