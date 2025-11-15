import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { benefitPoints } from "../components/BenefitLinks";
import Footer from "@/components/Footer";

const Link11 = () => {
  return (
    <>
      <Header />

      <div className="bg-white text-gray-800">
        {/* Hero Section */}
        <section className="bg-yellow-400 px-4 py-10 text-black">
          <div className="max-w-4xl mx-auto pl-6 border-l-2 border-gray-800 text-xl leading-relaxed space-y-1">
            <div className="py-2">
              <p>Garment grading CAD software for discerning customers.</p>
              <p>Garment grading CAD that saves time and fabric.</p>
              <p>Garment grading CAD software that enables consistent quality. Every time.</p>
              <p>Garment grading CAD software that enables your team to collaborate seamlessly to deliver on time.</p>
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
              <p>Save hours of hard work while grading patterns.</p>
              <p>Manual grading of patterns is laborious and takes many hours of hard work.</p>
              <p>REACH CAD automates grading, saving you a lot of time.</p>
              <p>Just think of a situation where you need to create a new garment style that is a slight variation of an existing one. Manually all patterns have to be created afresh and graded.</p>
              <p>With REACH CAD, you will save many, many hours of laborious work in this!</p>
            </div>
          </div>
        </section>

        {/* Optional Sections */}
        {/* <ReachWebinar /> */}
        {/* <Testimonials /> */}
        {/* <ShareSection /> */}
        <Footer />
      </div>
    </>
  );
};

export default Link11;
