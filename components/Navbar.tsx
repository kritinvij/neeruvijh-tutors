export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <span className="text-lg font-bold text-gray-900">Neeru Vijh</span>
        <div className="flex items-center gap-6 sm:gap-8">
          <a href="#about" className="text-gray-600 hover:text-orange-500 transition-colors text-sm font-medium">
            About
          </a>
          <a href="#subjects" className="text-gray-600 hover:text-orange-500 transition-colors text-sm font-medium">
            Subjects
          </a>
          <a href="#youtube" className="text-gray-600 hover:text-orange-500 transition-colors text-sm font-medium">
            YouTube
          </a>
          <a href="#contact" className="text-gray-600 hover:text-orange-500 transition-colors text-sm font-medium">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
