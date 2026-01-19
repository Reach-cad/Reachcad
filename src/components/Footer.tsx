import { Link } from "react-router-dom";

// Import icons
import emailIcon from "@/assets/email_icon_transparent.png";
import whatsappIcon from "@/assets/whatsapp_icon_transparent.png";
import contactIcon from "@/assets/contact_icon_transparent.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">

        {/* Main Footer Section */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Column 1 */}
          <div>
            <Link to="/" className="text-2xl font-bold mb-4 block w-fit">
              <span className="text-primary">REACH</span> CAD
            </Link>
            <p className="text-gray-300 max-w-md">
              The Best Apparel CAD software for Digital Apparel Pattern Design,
              Grading, and Automated Marker Planning
            </p>

            {/* Contact Icons Section */}
            <div className="mt-6 space-y-4">

              {/* Email */}
              <div className="flex items-center gap-3">
                <img
                  src={emailIcon}
                  alt="Email icon for contacting REACH Technologies"
                  className="w-7 icon-a03359"
                />
                <span className="text-gray-300 text-lg">
                  info@reach-tech.com
                </span>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/918459278496"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <img
                  src={whatsappIcon}
                  alt="WhatsApp icon for contacting REACH CAD support"
                  className="w-8 icon-a03359"
                />
                <span className="text-gray-300 text-lg">
                  +91 84592 78496
                </span>
              </a>

              {/* Write to Us */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdwXlZfazuaOvXWFpWIwwNPoiAmqj4m_Gl_LzUsFKGkyZHF5Q/viewform?usp=sharing&ouid=102794643040205824313"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4"
              >
                <img
                  src={contactIcon}
                  alt="Contact form icon for writing to REACH Technologies"
                  className="w-7 icon-a03359"
                />
                <span className="text-gray-300 text-lg">
                  Write to Us
                </span>
              </a>

            </div>
          </div>

          {/* Column 2 */}
          <div>
            <nav className="space-y-3">
              <Link to="/about" className="block text-gray-300 hover:text-primary transition">About REACH CAD</Link>
              <Link to="/benefits" className="block text-gray-300 hover:text-primary transition">Benefits of REACH CAD</Link>
              <Link to="/LearningGuides" className="block text-gray-300 hover:text-primary transition">Learning Guides</Link>
              <Link to="/presentations" className="block text-gray-300 hover:text-primary transition">Presentations</Link>
              <Link to="/productvids" className="block text-gray-300 hover:text-primary transition">Product Videos</Link>

              <div className="relative group">
                <span className="block text-gray-300 hover:text-primary transition cursor-pointer">
                  REACH CAD Images
                </span>
                <div className="absolute hidden group-hover:block bg-white text-gray-900 mt-1 shadow-lg rounded w-52 z-10">
                  <Link to="/REACHCADImages/english" className="block px-4 py-2 hover:bg-gray-100">REACH CAD English Images</Link>
                  <Link to="/REACHCADImages/hindi" className="block px-4 py-2 hover:bg-gray-100">REACH CAD Hindi Images</Link>
                </div>
              </div>

              <Link to="/Articles" className="block text-gray-300 hover:text-primary transition">Articles</Link>
              <Link to="/REACHCADBooks" className="block text-gray-300 hover:text-primary transition">REACH CAD Books</Link>
              <Link to="/CaseStudy" className="block text-gray-300 hover:text-primary transition">Case Study</Link>

              <a
                href="https://share.google/l0Hi3EEV3ElvGZo8R"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-primary transition"
              >
                About REACH Technologies
              </a>
            </nav>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Partners</h3>
            <nav className="space-y-3">
              <Link to="/SalesPartners" className="block text-gray-300 hover:text-primary transition">Sales Partners</Link>
              <Link to="/TrainingPartners" className="block text-gray-300 hover:text-primary transition">Training Partners</Link>
              <Link to="/SupportPartners" className="block text-gray-300 hover:text-primary transition">Support Partners</Link>
              <Link to="/GovernmentAgencies" className="block text-gray-300 hover:text-primary transition">Government Agencies</Link>
              <Link to="/NonProfitOrganisations" className="block text-gray-300 hover:text-primary transition">Non Profit Organisations</Link>
            </nav>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; REACH Technologies 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
