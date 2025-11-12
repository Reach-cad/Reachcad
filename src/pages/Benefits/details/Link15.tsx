import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { benefitPoints } from "../components/BenefitLinks";
import ReachWebinar from "../components/ReachWebinar";
import Testimonials from "../components/Testimonals";
import ShareSection from "../components/ShareSection";
import QuoteSection from "../components/QuoteSections";
import Footer from "@/components/Footer";

const Link15 = () => {
  return (
    <>
      <Header />

      <div className="bg-white text-gray-800">
        {/* Hero Section */}
        <section className="bg-yellow-400 px-4 py-10 text-black">
          <div className="max-w-4xl mx-auto pl-6 border-l-2 border-gray-800 text-xl leading-relaxed space-y-1">
            <div className="py-2">
              <p>Clothing marker CAD software for discerning customers.</p>
              <p>Clothing marker CAD that saves time and fabric.</p>
              <p>Clothing marker CAD software that enables consistent quality. Every time.</p>
              <p>Clothing marker CAD software that enables your team to collaborate seamlessly to deliver on time.</p>
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
              <p>Enable production teams to avoid errors while laying patterns on raw material.</p>
              <p>In the conventional method, patterns are laid on fabric manually to achieve the required consumption.</p>
              <p>
                In this process, a skilled pattern lay expert needs to be there all the time to ensure that the patterns are laid correctly every time a new fabric lay is cut.
                Manually, this is a risky process and often results in incorrect laying of patterns causing increased consumption and wastage.
              </p>
              <p>With REACH CAD, a fixed marker can be printed on a plotter and the chances that of a mistake in laying the patterns manually is eliminated!</p>
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

export default Link15;
