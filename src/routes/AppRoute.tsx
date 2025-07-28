import { Routes, Route } from "react-router-dom";
import Index from "@/pages/Home/Index";
import AboutPage from "@/pages/About/About";
import Benefits from "@/pages/Benefits/Benefits";
import Presentations from "@/pages/Presentations/Presentations";
import CaseStudies from "@/pages/CaseStudies/CaseStudies";
import ProductVids from "@/pages/ProductVids/ProductVids";

import BenefitDetailRouter from "@/pages/Benefits/BenefitDetailRouter";
import NotFound from "@/pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/benefits" element={<Benefits />} />
      <Route path="/presentations" element={<Presentations />} />
      <Route path="/casestudies" element={<CaseStudies />} />
      <Route path="/productvids" element={<ProductVids />} />
      <Route path="/benefits/detail/:id" element={<BenefitDetailRouter />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
