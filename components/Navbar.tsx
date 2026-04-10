export default function Navbar() {
  return (
    <nav aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center shadow-sm">
            <span className="text-white font-black text-sm tracking-tight">NV</span>
          </div>
          <span className="text-base sm:text-lg font-bold text-gray-900">Neeru Vijh</span>
        </div>
        <div className="flex items-center gap-3 sm:gap-5 lg:gap-7">
          <a href="#about" className="hidden sm:block text-gray-600 hover:text-orange-500 transition-colors text-sm font-medium">
            About
          </a>
          <a href="#subjects" className="hidden sm:block text-gray-600 hover:text-orange-500 transition-colors text-sm font-medium">
            Subjects
          </a>
          <a href="#youtube" className="hidden md:block text-gray-600 hover:text-orange-500 transition-colors text-sm font-medium">
            YouTube
          </a>
          <a href="#contact" className="hidden md:block text-gray-600 hover:text-orange-500 transition-colors text-sm font-medium">
            Contact
          </a>
          <a
            href="#contact"
            className="bg-orange-500 hover:bg-orange-700 hover:shadow-md active:scale-95 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-150 shrink-0"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
}
