// import { Check, X } from "lucide-react";
// import comparisonTableImage from "@/assets/comparison-table.jpg";

// const ComparisonTable = () => {
//   const features = [
//     {
//       feature: "Built for the Apparel Sector",
//       manual: false,
//       autocad: false,
//       gerber: true,
//       reach: true,
//     },
//     {
//       feature: "Pre-loaded Libraries",
//       manual: false,
//       autocad: false,
//       gerber: false,
//       reach: "Extensive Libraries",
//     },
//     {
//       feature: "Collaboration Tools",
//       manual: false,
//       autocad: "Moderate",
//       gerber: "Limited",
//       reach: "Seamless Collaboration",
//     },
//     {
//       feature: "AI-Powered",
//       manual: false,
//       autocad: "Moderate",
//       gerber: "No",
//       reach: "Advanced AI Capabilities",
//     },
//     {
//       feature: "Speed",
//       manual: "Slow",
//       autocad: "Moderate",
//       gerber: "Moderate",
//       reach: "Superfast",
//     },
//   ];

//   // 👉 Define renderCell here
//   const renderCell = (value) => {
//     if (typeof value === "boolean") {
//       return value ? "✔" : "✘";
//     }

//     return <span className="text-maroon">{value}</span>;
//   };

//   return (
//     <section className="py-16 bg-gray-50">
//   <div className="container mx-auto px-4 text-center">
//     {/*<h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#9C1F45]">
//       What makes <span className="font-extrabold">REACH CAD</span> the best apparel CAD software?
//     </h2>*/}

//     <img
//       src={comparisonTableImage}
//       alt="Comparison Table"
//       className="mx-auto w-full max-w-7xl rounded-lg shadow-lg"
//     />
//   </div>
// </section>

//   );
// };

// export default ComparisonTable;



import { Check, X } from "lucide-react";

const ComparisonTable = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#9C1F45]">
          What makes <span className="font-bold">REACH CAD</span> the best apparel CAD software?
        </h2>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full max-w-5xl mx-auto bg-white shadow-lg rounded-lg border border-gray-200">
            
            <thead>
              <tr className="bg-gray-100 text-[#9C1F45] text-lg">
                <th className="py-4 px-2 text-left">FEATURE</th>
                <th className="py-4 px-2">MANUAL METHODS</th>
                <th className="py-4 px-2">AUTO CAD</th>
                <th className="py-4 px-2">Gerber CAD (Accumark)</th>
                <th className="py-4 px-2">REACH CAD</th>
              </tr>
            </thead>

            <tbody className="text-gray-700">

              {/* Row 1 */}
              <tr className="border-t">
                <td className="py-4 px-2 text-left">Built for Apparel Sector</td>
                <td className="py-4 px-2 text-red-600 text-xl">✘</td>
                <td className="py-4 px-2 text-red-600 text-xl">✘</td>
                <td className="py-4 px-2 text-green-700 text-xl">✔</td>
                <td className="py-4 px-2 text-green-700 text-xl">✔</td>
              </tr>

              {/* Row 2 */}
              <tr className="border-t">
                <td className="py-4 px-2 text-left">Preloaded Libraries</td>
                <td className="py-4 px-2 text-red-600 text-xl">✘</td>
                <td className="py-4 px-2 text-red-600 text-xl">✘</td>
                <td className="py-4 px-2 text-red-600">Limited</td>
                <td className="py-4 px-2 text-[#9C1F45]">Extensive libraries</td>
              </tr>

              {/* Row 3 */}
              <tr className="border-t">
                <td className="py-4 px-2 text-left">Collaboration Tools</td>
                <td className="py-4 px-2 text-red-600 text-xl">✘</td>
                <td className="py-4 px-2 text-[#9C1F45]">Moderate</td>
                <td className="py-4 px-2 text-red-600">Limited</td>
                <td className="py-4 px-2 text-[#9C1F45]">Seamless collaboration</td>
              </tr>

              {/* Row 4 */}
              <tr className="border-t">
                <td className="py-4 px-2 text-left">AI-Powered</td>
                <td className="py-4 px-2 text-red-600 text-xl">✘</td>
                <td className="py-4 px-2 text-[#9C1F45]">Moderate</td>
                <td className="py-4 px-2 text-red-600">No</td>
                <td className="py-4 px-2 text-[#9C1F45]">Advanced AI capabilities</td>
              </tr>

              {/* Row 5 */}
              <tr className="border-t">
                <td className="py-4 px-2 text-left">Speed</td>
                <td className="py-4 px-2 text-red-600">Slow</td>
                <td className="py-4 px-2 text-[#9C1F45]">Moderate</td>
                <td className="py-4 px-2 text-[#9C1F45]">Moderate</td>
                <td className="py-4 px-2 text-green-700 font-semibold">Superfast</td>
              </tr>

            </tbody>

          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
