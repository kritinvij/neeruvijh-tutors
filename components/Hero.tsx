export default function Hero() {
  return (
    <section
      className="min-h-[85vh] flex items-center justify-center"
      style={{ background: "linear-gradient(135deg, #f97316 0%, #f59e0b 100%)" }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white">
          Neeru Vijh
        </h1>
        <p className="text-xl sm:text-2xl font-medium mt-4 text-white opacity-90">
          38 Years of Teaching Maths &amp; Science
        </p>
        <p className="text-base sm:text-lg mt-3 text-white opacity-80">
          CBSE · ICSE · English &amp; Hindi Medium · Online Tutoring
        </p>
        <div className="flex gap-4 justify-center mt-8 flex-wrap">
          <a
            href="#contact"
            className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Get in Touch
          </a>
          <a
            href="https://www.youtube.com/c/MathAndMorewithNeeruVijh"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Watch on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
