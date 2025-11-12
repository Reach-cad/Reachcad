import { Check, X } from "lucide-react";
import comparisonTableImage from "@/assets/comparison-table.jpg";

const ComparisonTable = () => {
  const features = [
    {
      feature: "Built for the Apparel Sector",
      manual: false,
      autocad: false,
      gerber: true,
      reach: true,
    },
    {
      feature: "Pre-loaded Libraries",
      manual: false,
      autocad: false,
      gerber: false,
      reach: "Extensive Libraries",
    },
    {
      feature: "Collaboration Tools",
      manual: false,
      autocad: "Moderate",
      gerber: "Limited",
      reach: "Seamless Collaboration",
    },
    {
      feature: "AI-Powered",
      manual: false,
      autocad: "Moderate",
      gerber: "No",
      reach: "Advanced AI Capabilities",
    },
    {
      feature: "Speed",
      manual: "Slow",
      autocad: "Moderate",
      gerber: "Moderate",
      reach: "Superfast",
    },
  ];

  // 👉 Define renderCell here
  const renderCell = (value) => {
    if (typeof value === "boolean") {
      return value ? "✔" : "✘";
    }

    return <span className="text-maroon">{value}</span>;
  };

  return (
    <section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4 text-center">
    {/*<h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#9C1F45]">
      What makes <span className="font-extrabold">REACH CAD</span> the best apparel CAD software?
    </h2>*/}

    <img
      src={comparisonTableImage}
      alt="Comparison Table"
      className="mx-auto w-full max-w-7xl rounded-lg shadow-lg"
    />
  </div>
</section>

  );
};

export default ComparisonTable;
