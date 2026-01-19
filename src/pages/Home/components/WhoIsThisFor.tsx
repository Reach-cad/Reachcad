const WhoIsThisFor = () => {
  return (
    <section className="py-16 bg-e6f6a5">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          style={{ color: "#a61042" }}
        >
          Who is REACH CAD for?
        </h2>

        <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-10">
          REACH CAD is designed for organizations and professionals who need fast,
          accurate, and industrial-grade apparel pattern design, grading, and marker
          planning to improve fabric utilization and production efficiency.
        </p>

        <div className="max-w-4xl mx-auto space-y-8 text-muted-foreground text-lg">

          {/* Apparel Manufacturers */}
          <div>
            <h3 className="font-semibold text-primary mb-2">
              Apparel manufacturers
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Export houses, domestic brands, and MSME factories needing industrial-grade pattern design, grading, and marker planning.</li>
              <li>Factories focused on improving fabric utilization and production throughput.</li>
            </ul>
          </div>

          {/* Fashion Brands */}
          <div>
            <h3 className="font-semibold text-primary mb-2">
              Fashion brands and designers
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Independent designers, fashion labels, and private-label brands needing fast pattern iterations.</li>
              <li>Teams requiring accurate grading and consistent fit across sizes.</li>
              <li>Useful from sample development through production handover, reducing dependence on manual pattern masters.</li>
            </ul>
          </div>

          {/* Service Bureaus */}
          <div>
            <h3 className="font-semibold text-primary mb-2">
              Pattern and grading service bureaus and BPOs
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Studios supplying digital patterns and markers to multiple factories and brands.</li>
              <li>Apparel BPOs offering remote digital pattern, grading, and marker services for India and overseas markets.</li>
            </ul>
          </div>

          {/* Training Institutes */}
          <div>
            <h3 className="font-semibold text-primary mb-2">
              Training institutes and universities
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Fashion design colleges, polytechnics, IITs, NIDs, NIFTs, and skill-development centres.</li>
              <li>Government-funded training centres and skilling programs focused on apparel and fashion technology.</li>
            </ul>
          </div>

          {/* Government & Clusters */}
          <div>
            <h3 className="font-semibold text-primary mb-2">
              Government, clusters, and MSME support bodies
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>State and central government departments, textile parks, and cluster agencies implementing CAD for MSME competitiveness.</li>
              <li>Associations and incubators setting up shared CAD labs or Common Facility Centres.</li>
            </ul>
          </div>

          {/* Technology Partners */}
          <div>
            <h3 className="font-semibold text-primary mb-2">
              Technology, IT partners and consultants
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>IT firms and system integrators adding apparel CAD solutions to their portfolio.</li>
              <li>Consultants working on digital transformation, Industry 4.0, and productivity improvement in apparel manufacturing.</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;
