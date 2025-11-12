const guides = [
  {
    title: "Learning Guide: Internal Details and Advanced Viewing in REACH CAD",
    pdf: "/learning1.pdf",
    cover: "/cover1.png",
  },
  {
    title: "REACH CAD Learning Guide",
    pdf: "/learning2.pdf",
    cover: "/cover2.png",
  },
  {
    title: "Using the Block Method for Pattern Drafting in REACH CAD",
    pdf: "/learning3.pdf",
    cover: "/cover3.png",
  },
];

const LearningGuides = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-10">Learning Guides</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {guides.map((guide, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col"
          >
            <img
              src={guide.cover}
              alt={`Cover for ${guide.title}`}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 flex flex-col justify-between flex-1">
              <h2 className="text-lg font-semibold mb-4">{guide.title}</h2>
              <div className="mt-auto space-x-4">
                <a
                  href={guide.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Open
                </a>
                <a
                  href={guide.pdf}
                  download
                  className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningGuides;
