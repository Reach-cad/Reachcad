import { Check, X } from "lucide-react";

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

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#9C1F45]">
          What makes <span className="font-extrabold">REACH CAD</span> the best apparel CAD software?
        </h2>

        <div className="overflow-x-auto mt-12">
          <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden text-black">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-4 text-left font-semibold">FEATURE</th>
                <th className="px-6 py-4 text-center font-semibold">MANUAL METHODS</th>
                <th className="px-6 py-4 text-center font-semibold">AUTO CAD</th>
                <th className="px-6 py-4 text-center font-semibold">Gerber CAD (Accumark)</th>
                <th className="px-6 py-4 text-center font-semibold">REACH CAD</th>
              </tr>
            </thead>
            <tbody>
              {features.map((row, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">{row.feature}</td>

                  {[row.manual, row.autocad, row.gerber, row.reach].map((col, i) => (
                    <td key={i} className="px-6 py-4 text-center">
                      {typeof col === "boolean" ? (
                        col ? <Check className="w-5 h-5 text-[#9C1F45] mx-auto" /> : <X className="w-5 h-5 text-[#9C1F45] mx-auto" />
                      ) : (
                        <span className="font-medium">{col}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
