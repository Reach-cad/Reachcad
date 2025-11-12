import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ReachCADImagesSelector = () => {
  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto text-center py-20 px-4">
        <h1 className="text-3xl font-bold mb-8">Choose Image Category</h1>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <Link
            to="/REACHCADImages/hindi"
            className="bg-yellow-500 text-black px-6 py-3 rounded shadow hover:bg-yellow-600 text-xl"
          >
            Hindi Images
          </Link>
          <Link
            to="/REACHCADImages/english"
            className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 text-xl"
          >
            English Images
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ReachCADImagesSelector;
