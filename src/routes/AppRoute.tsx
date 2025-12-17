import { Routes, Route } from "react-router-dom";
import Index from "@/pages/Home/Index";
import AboutPage from "@/pages/About/About";
import Benefits from "@/pages/Benefits/Benefits";
import LearningGuides from "@/pages/LearningGuides/LearningGuides.tsx";
import Presentations from "@/pages/Presentations/Presentations";
import CaseStudies from "@/pages/CaseStudies/CaseStudies";
import ProductVids from "@/pages/ProductVids/ProductVids";
import BenefitDetailRouter from "@/pages/Benefits/BenefitDetailRouter";
import REACHCADBooks from "@/pages/REACHCADBooks/REACHCADBooks"; 
import NotFound from "@/pages/NotFound";
import CaseStudy from "@/pages/CaseStudy/CaseStudy";
import Articles from "@/pages/Articles/Articles";
import ReachCADImagesSelector from "@/pages/REACHCADImages/selector";
import HindiImages from "@/pages/REACHCADImages/HindiImages";
import EnglishImages from "@/pages/REACHCADImages/EnglishImages";
import Aboutreachtech from "@/pages/Aboutreachtech/Aboutreachtech";
import SalesPartners from  "@/pages/SalesPartners/SalesPartners";
import TrainingPartners from "@/pages/TrainingPartners/TrainingPartners"
import GovernmentAgencies from "@/pages/GovernmentAgencies/GovernmentAgencies"
import NonProfitOrganisations from "@/pages/NonProfitOrganisations/NonProfitOrganisations";
import SupportPartners from "@/pages/SupportPartners/SupportPartners";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/benefits" element={<Benefits />} />
      <Route path="/LearningGuides" element={<LearningGuides />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/presentations" element={<Presentations />} />
      <Route path="/productvids" element={<ProductVids />} />
      <Route path="/casestudies" element={<CaseStudies />} />
      <Route path="/CaseStudy" element={<CaseStudy />} /> 
      <Route path="/REACHCADBooks" element={<REACHCADBooks />} /> 
      <Route path="/REACHCADImages" element={<ReachCADImagesSelector />} />
      <Route path="/REACHCADImages/hindi" element={<HindiImages />} />
      <Route path="/REACHCADImages/english" element={<EnglishImages />} />
      <Route path="/aboutreachtech" element={<Aboutreachtech/>} />
      <Route path="/benefits/detail/:id" element={<BenefitDetailRouter />} />
      <Route path="/SalesPartners" element={<SalesPartners />} />
      <Route path="/TrainingPartners" element={<TrainingPartners />} />
      <Route path="/GovernmentAgencies" element={<GovernmentAgencies />} />
      <Route path="/NonProfitOrganisations" element={<NonProfitOrganisations />} />
      <Route path="/SupportPartners" element={<SupportPartners />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
