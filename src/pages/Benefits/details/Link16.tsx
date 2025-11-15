import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { benefitPoints } from "../components/BenefitLinks";
import ReachWebinar from "../components/ReachWebinar";
import Testimonials from "../components/Testimonals";
import ShareSection from "../components/ShareSection";
import Footer from "@/components/Footer";

const Link16 = () => {
  return (
    <>
      <Header />

      <div className="bg-white text-gray-800">
        {/* Hero Section */}
        <section className="bg-yellow-400 px-4 py-10 text-black">
          <div className="max-w-4xl mx-auto pl-6 border-l-2 border-gray-800 text-xl leading-relaxed space-y-1">
            <div className="py-2">
              <p>Apparel CAD software for discerning customers.</p>
              <p>Apparel CAD software that saves time and fabric.</p>
              <p>Apparel pattern CAD software that enables consistent quality. Every time.</p>
              <p>Apparel pattern CAD software that enables your team to collaborate seamlessly to deliver on time.</p>
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

        {/* Benefit Explanation */}
        <section className="text-center py-12 px-4">
          <hr className="border-t border-gray-300 w-16 mx-auto mb-8" />
          <div className="flex justify-center">
            <div className="bg-gray-50 p-8 rounded-xl shadow-md max-w-3xl text-left space-y-6 text-2xl font-medium leading-relaxed text-gray-800">
              <p>Avoid human errors in the repetitive and laborious process of grading.</p>
              <p>Errors can creep in when patterns are graded manually for many reasons.</p>
              <p>
                Manual pattern grading process is laborious, repetitive and the most disciplined pattern maker too can make mistakes. <br />
                Or errors might be introduced because of the differences in the instruments used. <br />
                And when an error is made it is double the effort to make the correction.
              </p>
              <p>
                Not so with REACH CAD. <br />
                With REACH CAD your pattern grading process is effortless. <br />
                And even when an error is made unintentionally, you can make corrections in a jiffy!
              </p>
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

export default Link16;
