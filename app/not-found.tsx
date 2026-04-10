export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center bg-amber-50 nv-textured overflow-hidden pt-16">
      {/* Floating math symbol decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
        <span className="absolute top-[18%] left-[7%] font-serif text-[4rem] text-orange-200 nv-float-1">π</span>
        <span className="absolute top-[14%] right-[9%] font-serif text-[3.5rem] text-orange-200 nv-float-2">√</span>
        <span className="absolute bottom-[22%] left-[5%] font-serif text-[3rem] text-orange-200 nv-float-3">∞</span>
        <span className="absolute bottom-[18%] right-[7%] font-serif text-[2.5rem] text-orange-200 nv-float-1">∑</span>
      </div>

      {/* Large decorative 404 */}
      <div
        className="font-serif font-bold text-orange-100 leading-none select-none"
        style={{ fontSize: "clamp(6rem, 20vw, 12rem)" }}
        aria-hidden="true"
      >
        404
      </div>

      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 -mt-4">
        Page not found
      </h1>
      <p className="text-gray-500 mt-3 max-w-sm text-sm leading-relaxed">
        This page doesn&apos;t exist. Head back to the main site — the lessons are still there.
      </p>

      <a
        href="/"
        className="mt-8 bg-orange-500 hover:bg-orange-600 hover:shadow-lg hover:scale-105 active:scale-95 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-150"
      >
        Go back home
      </a>
    </div>
  );
}
