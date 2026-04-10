const navLinks = [
  { href: "#about", label: "About" },
  { href: "#subjects", label: "Subjects" },
  { href: "#youtube", label: "YouTube" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      {/* Main columns */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-3 gap-10">

        {/* Brand */}
        <div className="flex flex-col gap-4">
          <a href="#" className="flex items-center gap-2.5 w-fit">
            <svg
              width="40"
              height="40"
              viewBox="0 0 90 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Neeru Vijh logo mark"
              className="shrink-0 text-white/60"
            >
              <circle cx="45" cy="45" r="40" stroke="currentColor" strokeWidth="2" />
              <circle cx="45" cy="45" r="33" stroke="currentColor" strokeWidth="0.9" opacity="0.35" />
              <text
                x="45" y="54" textAnchor="middle" fill="currentColor"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "30px",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                }}
              >NV</text>
              <path d="M45 5.5 L47.5 9 L45 12.5 L42.5 9 Z" fill="#f97316" />
              <path d="M84.5 45 L88 47.5 L84.5 50 L81 47.5 Z" fill="#f97316" />
              <path d="M45 84.5 L47.5 81 L45 77.5 L42.5 81 Z" fill="#f97316" />
              <path d="M5.5 45 L2 47.5 L5.5 50 L9 47.5 Z" fill="#f97316" />
            </svg>
            <span className="text-lg font-bold text-white/85 font-serif">Neeru Vijh</span>
          </a>
          <p className="text-sm text-gray-500 leading-relaxed">
            38 years of teaching Maths &amp; Science. CBSE, ICSE - English &amp; Hindi medium, online.
          </p>
        </div>

        {/* Navigate */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-orange-500/70 mb-4">
            Navigate
          </p>
          <ul className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-orange-400 transition-colors duration-150"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-orange-500/70 mb-4">
            Connect
          </p>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href="https://www.youtube.com/c/MathAndMorewithNeeruVijh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-red-400 transition-colors duration-150"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                YouTube
              </a>
            </li>
            <li>
              <a
                href="https://x.com/NeeruVijh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors duration-150"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                @NeeruVijh
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/neeruvijh/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-blue-400 transition-colors duration-150"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Neeru Vijh. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Fulbright Scholar 2015 &middot; Delhi State Teachers&apos; Award 2022
          </p>
        </div>
      </div>
    </footer>
  );
}
