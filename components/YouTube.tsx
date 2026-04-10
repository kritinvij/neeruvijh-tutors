// TODO: Replace with real video IDs from her YouTube channel
// How to find: open a video at youtube.com/c/MathAndMorewithNeeruVijh, copy the ?v=XXXXXXXXXXX part
const VIDEO_IDS = [
  "VIDEO_ID_1_HERE", // replace with first video ID
  "VIDEO_ID_2_HERE", // replace with second video ID
  "VIDEO_ID_3_HERE", // replace with third video ID
];

export default function YouTube() {
  return (
    <section id="youtube" className="bg-orange-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-500 mb-3">
            Free Resources
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Learn on YouTube
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hundreds of free lessons on Maths and Science, explained clearly in English and Hindi.
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 mt-6 mb-10">
          <svg
            className="w-7 h-7 flex-shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect width="24" height="24" rx="5" fill="#FF0000" />
            <polygon points="9.5,7 9.5,17 17,12" fill="white" />
          </svg>
          <span className="font-bold text-gray-900">Math And More with Neeru Vijh</span>
          <a
            href="https://www.youtube.com/c/MathAndMorewithNeeruVijh"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Visit Channel
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VIDEO_IDS.map((id) => (
            <div key={id} className="aspect-video rounded-xl overflow-hidden">
              <iframe
                width="100%"
                height="200"
                src={`https://www.youtube.com/embed/${id}`}
                title="Neeru Vijh - YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
