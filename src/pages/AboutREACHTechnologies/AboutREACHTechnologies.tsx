import { useEffect } from "react";

const AboutREACHTechnologies: React.FC = () => {
  useEffect(() => {
    window.location.href = "https://share.google/l0Hi3EEV3ElvGZo8R"; // ✅ Actual link provided by you
  }, []);

  return (
    <div className="flex items-center justify-center h-screen text-2xl font-semibold">
      Redirecting to About REACH Technologies...
    </div>
  );
};

export default AboutREACHTechnologies;
