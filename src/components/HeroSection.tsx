import heroImage from "@/assets/hero-new.png.jpg";

const HeroSection = () => {
  return (
    <section className="w-full bg-white">
      {/* 🔒 Hidden SEO H1 – Not visible on UI */}
      <h1 className="sr-only">
        REACH CAD – Apparel CAD Software for Pattern Design, Grading & Marker Planning
      </h1>

      {/* Hero Wrapper */}
      <div
        className="
          relative
          w-full
          flex
          items-center
          justify-center
          overflow-hidden
        "
        style={{
          aspectRatio: "16 / 9", // keeps image proportion
        }}
      >
        {/* Hero Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
