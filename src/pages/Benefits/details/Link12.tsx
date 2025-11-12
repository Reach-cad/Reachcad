import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { benefitPoints } from "../components/BenefitLinks";
import ReachWebinar from "../components/ReachWebinar";
import Testimonials from "../components/Testimonals";
import ShareSection from "../components/ShareSection";
import QuoteSection from "../components/QuoteSections";
import Footer from "@/components/Footer";

// Image
import benefitImage from "@/assets/image4.png";

const Link12 = () => {
  return (
    <>
      <Header />

      <div className="bg-white text-gray-800">
        {/* Hero Section */}
        <section className="bg-yellow-400 px-4 py-10 text-black">
          <div className="max-w-4xl mx-auto pl-6 border-l-2 border-gray-800 text-xl leading-relaxed space-y-1">
            <div className="py-2">
              <p>Clothing grading CAD software for discerning customers.</p>
              <p>Clothing grading CAD that saves time and fabric.</p>
              <p>Clothing grading CAD software that enables consistent quality. Every time.</p>
              <p>Clothing grading CAD software that enables your team to collaborate seamlessly to deliver on time.</p>
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
              <p>Superimpose patterns over one another and visually inspect the grading.</p>
              <p>With REACH CAD, patterns can be graded and then these graded patterns can be overlapped on one another to visually analyse even and correct grading.</p>
              <p>This helps in avoiding any errors in grading of some specific areas like the armhole curve, grading around the placket area etc.</p>
              <p>The markings for placing various types of embellishments/embroidery etc. can also be checked by overlapping the graded patterns.</p>
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

export default Link12;
