import { Link } from "react-router-dom";
import Slider from "react-slick";
import Header from "@/components/Header";
import { benefitPoints } from "../components/BenefitLinks";
import ReachWebinar from "../components/ReachWebinar";
import Testimonials from "../components/Testimonals";
import ShareSection from "../components/ShareSection";
import QuoteSection from "../components/QuoteSections";
import Footer from "@/components/Footer";

// Images
import slide1 from "@/assets/image1.png";
import slide2 from "@/assets/image2.png";
import slide3 from "@/assets/image3.png";
import slide4 from "@/assets/image5.png";
import slide5 from "@/assets/image6.png";
import slide6 from "@/assets/image7.png";
import slide7 from "@/assets/image8.png";
import slide8 from "@/assets/image9.png";
import slide9 from "@/assets/image10.png";
import slide10 from "@/assets/image11.png";

import benefitImage from "@/assets/image4.png";

const carouselImages = [
  slide1, slide2, slide3, slide4, slide5,
  slide6, slide7, slide8, slide9, slide10,
];

// Optional: for future use
const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <div
    onClick={onClick}
    className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 text-black p-2 rounded-full cursor-pointer shadow hover:bg-gray-50"
  >
    &#9658;
  </div>
);

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <div
    onClick={onClick}
    className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 text-black p-2 rounded-full cursor-pointer shadow hover:bg-gray-50"
  >
    &#9668;
  </div>
);

const carouselSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const Link9 = () => {
  return (
    <>
      <Header />

      <div className="bg-white text-gray-800">
        {/* Hero Section */}
        <section className="bg-yellow-400 px-4 py-10 text-black">
          <div className="max-w-4xl mx-auto pl-6 border-l-2 border-gray-800 text-xl leading-relaxed space-y-1">
            <div className="py-2">
              <p>Clothing pattern CAD software for discerning customers.</p>
              <p>Clothing pattern CAD that saves time and fabric.</p>
              <p>Clothing CAD software that enables consistent quality. Every time.</p>
              <p>Clothing CAD software that enables your team to collaborate seamlessly to deliver on time.</p>
            </div>
            <p className="py-4">Welcome to REACH CAD!</p>
            <p className="py-4">Best In Class Software.</p>
            <div className="py-2">
              <p>Create Apparel Patterns that Fit. Accurately. Always. Fast.</p>
              <p>Save Time. Save Fabric.</p>
              <p>Collaborate with Team Members.</p>
            </div>
          </div>
        </section>

        {/* Main Benefit Section */}
        <section className="text-center py-12 px-4">
          <hr className="border-t border-gray-300 w-16 mx-auto mb-8" />

          <div className="flex justify-center">
            <div className="bg-gray-50 p-8 rounded-xl shadow-md max-w-3xl text-left space-y-6 text-2xl font-medium leading-relaxed text-gray-800">
              <p>Maintain historical records of styles, consumption, patterns, markers etc. easily for future styles and re-orders.</p>
              <p>Storage of manual patterns take a lot of space and careful handling.</p>
              <p>Manual patterns can get worn out and torn and handling is often difficult.</p>
              <p>
                With REACH CAD, you can easily store hundreds or tens of thousands of patterns and related data easily. <br />
                And retrieve these any time, any where.
              </p>
            </div>
          </div>
        </section>

        {/* Optional Sections */}
        {/* <ReachWebinar /> */}
        {/* <Testimonials /> */}
        {/* <ShareSection /> */}
        <QuoteSection />
        <Footer />
      </div>
    </>
  );
};

export default Link9;
