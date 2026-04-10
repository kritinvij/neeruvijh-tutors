export default function Navbar() {
  return (
    <nav aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5 shrink-0">
          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Neeru Vijh logo mark"
            className="shrink-0 drop-shadow-sm"
          >
            <defs>
              <linearGradient id="nv-logo-grad" x1="2" y1="2" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                <stop stopColor="#f97316" />
                <stop offset="1" stopColor="#f59e0b" />
              </linearGradient>
            </defs>
            <circle cx="19" cy="19" r="19" fill="url(#nv-logo-grad)" />
            <circle cx="19" cy="19" r="15.5" fill="none" stroke="white" strokeWidth="0.75" strokeOpacity="0.35" />
            <polyline
              points="7.5,28 7.5,10 17,28 17,10"
              stroke="white"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <polyline
              points="21.5,10 25.75,27 30,10"
              stroke="white"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
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
