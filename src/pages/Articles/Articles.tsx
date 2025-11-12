import React from "react";
import { Document, Page, pdfjs } from "react-pdf";

// ✅ Use your local worker path
pdfjs.GlobalWorkerOptions.workerSrc = "/pdfjs/pdf.worker.min.js";


import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";


const articles = [
  { title: "Article1", pdf: "/Articles/Article1.pdf" },
  { title: "Article2", pdf: "/Articles/Article2.pdf" },
  { title: "Article3", pdf: "/Articles/Article3.pdf" },
  { title: "Article4", pdf: "/Articles/Article4.pdf" },
  { title: "Article5", pdf: "/Articles/Article5.pdf" },
  { title: "Article6", pdf: "/Articles/Article6.pdf" },
  { title: "Article7", pdf: "/Articles/Article7.pdf" },
  { title: "Article8", pdf: "/Articles/Article8.pdf" },
  { title: "Article9", pdf: "/Articles/Article9.pdf" },
  { title: "Article10", pdf: "/Articles/Article10.pdf" },
  { title: "Article11", pdf: "/Articles/Article11.pdf" },
  { title: "Article12", pdf: "/Articles/Article12.pdf" },
  { title: "Article13", pdf: "/Articles/Article13.pdf" },
  { title: "Article14", pdf: "/Articles/Article14.pdf" },
  { title: "Article15", pdf: "/Articles/Article15.pdf" },
];

const Articles: React.FC = () => {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-10">Articles</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden p-4"
            >
              <div className="mb-4 h-72 overflow-hidden flex justify-center items-center bg-gray-100">
                <Document
                  file={article.pdf}
                  onLoadError={(error) =>
                    console.error("Failed to load PDF:", error)
                  }
                >
                  <Page pageNumber={1} width={200} />
                </Document>
              </div>
              <h2 className="text-lg font-semibold mb-4">{article.title}</h2>
              <div className="space-x-4">
                <a
                  href={article.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Open
                </a>
                <a
                  href={article.pdf}
                  download
                  className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Articles;
