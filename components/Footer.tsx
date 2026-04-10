export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Neeru Vijh. All rights reserved.</p>

        <div className="flex items-center gap-5">
          <a
            href="https://www.youtube.com/c/MathAndMorewithNeeruVijh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube channel"
            className="flex items-center gap-2 text-sm text-red-500 hover:text-red-400 hover:scale-110 active:scale-95 transition-all duration-150"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current shrink-0" aria-hidden="true">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            <span className="hidden sm:inline">Math And More with Neeru Vijh</span>
          </a>

          <a
            href="https://x.com/NeeruVijh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter) profile"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white hover:scale-110 active:scale-95 transition-all duration-150"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span className="hidden sm:inline">@NeeruVijh</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
