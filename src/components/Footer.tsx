import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = [
    { label: "About REACH CAD", path: "/about" },
    // { label: "The Problem REACH CAD solves", path: "/Problemsolve" },
    { label: "Benefits of REACH CAD", path: "/benefits" },
    // { label: "Features of REACH CAD", path: "/features" },
    { label: "Presentations", path: "/presentations" },
    // { label: "Case Studies", path: "/casestudies" },
    { label: "Product Videos", path: "/productvids" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link to="/" className="text-2xl font-bold mb-4 block w-fit">
              <span className="text-primary">REACH</span> CAD
            </Link>
            <p className="text-gray-300 max-w-md">
              REACH CAD enables Digital Apparel Pattern Design, Grading, and Automated Marker Planning
            </p>
          </div>

          <div>
            <nav className="space-y-3">
              {footerLinks.map((link, index) => (
                <div key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-primary transition-colors duration-300 block"
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </nav>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 REACH CAD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
