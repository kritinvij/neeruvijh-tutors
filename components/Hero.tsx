export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-orange-500 to-amber-400 overflow-hidden">
      {/* Subtle dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/40 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
          <span>🏅</span>
          <span>Delhi State Teachers&apos; Award 2022</span>
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white">
          Neeru Vijh
        </h1>
        <p className="text-xl sm:text-2xl font-medium mt-4 text-white/90">
          38 Years of Teaching Maths &amp; Science
        </p>
        <p className="text-base sm:text-lg mt-3 text-white/80">
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

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 72"
          className="w-full fill-white"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0,36 C480,72 960,0 1440,36 L1440,72 L0,72 Z" />
        </svg>
      </div>
    </section>
  );
}
