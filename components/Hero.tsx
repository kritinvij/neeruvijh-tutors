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
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/40 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 nv-fade-in">
          <span>🏅</span>
          <span>Delhi State Teachers&apos; Award 2022</span>
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white nv-fade-in nv-delay-1">
          Neeru Vijh
        </h1>
        <p className="text-xl sm:text-2xl font-medium mt-4 text-white/90 nv-fade-in nv-delay-2">
          38 Years of Teaching Maths &amp; Science
        </p>
        <p className="text-base sm:text-lg mt-3 text-white/80 nv-fade-in nv-delay-3">
          CBSE · ICSE · English &amp; Hindi Medium · Online Tutoring
        </p>
        <div className="flex gap-4 justify-center mt-8 flex-wrap nv-fade-in nv-delay-4">
          <a
            href="#contact"
            className="bg-white text-orange-600 hover:bg-orange-100 hover:shadow-xl hover:scale-105 active:scale-95 px-8 py-3 rounded-lg font-semibold transition-all duration-150"
          >
            Get in Touch
          </a>
          <a
            href="https://www.youtube.com/c/MathAndMorewithNeeruVijh"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white hover:bg-white/25 hover:scale-105 active:scale-95 px-8 py-3 rounded-lg font-semibold transition-all duration-150"
          >
            Watch on YouTube
          </a>
        </div>
      </div>

      {/* Wave into Stats (orange-50) */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 72"
          className="w-full fill-orange-50"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0,36 C480,72 960,0 1440,36 L1440,72 L0,72 Z" />
        </svg>
      </div>
    </section>
  );
}
