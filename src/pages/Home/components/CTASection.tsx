const CTASection = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Hear what our customers have to say
        </h2>

        <div className="flex justify-center">
          <div className="w-full max-w-5xl px-4 md:px-0">
            <video
              src="/videos/video.mp4"
              controls
              className="w-full h-auto rounded-xl ring-2 ring-white shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
