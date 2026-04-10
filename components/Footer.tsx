export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm">&copy; 2026 Neeru Vijh. All rights reserved.</p>
        <a
          href="https://www.youtube.com/c/MathAndMorewithNeeruVijh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-400 hover:text-red-400 transition-colors"
        >
          Math And More with Neeru Vijh
        </a>
      </div>
    </footer>
  );
}
