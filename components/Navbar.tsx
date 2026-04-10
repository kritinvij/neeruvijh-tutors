"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#subjects", label: "Subjects" },
  { href: "#youtube", label: "YouTube" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || menuOpen;

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo + brand */}
        <a href="#" className="flex items-center gap-2.5 shrink-0">
          <svg
            width="36"
            height="36"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Neeru Vijh logo mark"
            className="shrink-0 drop-shadow-sm"
          >
            <defs>
              <linearGradient id="nv-logo-grad" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
                <stop stopColor="#f97316" />
                <stop offset="1" stopColor="#f59e0b" />
              </linearGradient>
              <linearGradient id="nv-nib-grad" x1="40" y1="5" x2="40" y2="79" gradientUnits="userSpaceOnUse">
                <stop stopColor="#fff7ed" />
                <stop offset="1" stopColor="#ffffff" />
              </linearGradient>
            </defs>
            <circle cx="40" cy="40" r="40" fill="url(#nv-logo-grad)" />
            <path d="M14,62 C14,74 26,79 40,79 C54,79 66,74 66,62 L40,5 Z" fill="url(#nv-nib-grad)" />
            <path d="M14,62 C14,74 26,79 40,79 L40,5 Q27,20 21,36 Q15,48 14,62 Z" fill="#f97316" fillOpacity="0.07" />
            <line x1="30" y1="34" x2="50" y2="34" stroke="#f97316" strokeWidth="1.75" strokeLinecap="round" strokeOpacity="0.4" />
            <circle cx="40" cy="28" r="3.5" fill="#f97316" fillOpacity="0.38" />
            <line x1="40" y1="24.5" x2="40" y2="5" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" />
            <polyline points="25,62 25,43 34,62 34,43" stroke="#f97316" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <polyline points="38,43 46,62 54,43" stroke="#f97316" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
          <span className={`text-base sm:text-lg font-bold transition-colors duration-300 ${solid ? "text-gray-900" : "text-white"}`}>
            Neeru Vijh
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-3 sm:gap-5 lg:gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:rounded focus-visible:outline-orange-500 ${
                solid
                  ? "text-gray-600 hover:text-orange-500"
                  : "text-white/85 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-150 shrink-0 hover:scale-105 active:scale-95 ${
              solid
                ? "bg-orange-500 hover:bg-orange-600 hover:shadow-md text-white"
                : "bg-white/20 hover:bg-white/30 border border-white/50 text-white backdrop-blur-sm"
            }`}
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-md focus-visible:outline-2 focus-visible:outline-orange-500"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className={`block w-5 h-0.5 transition-all duration-200 origin-center ${solid ? "bg-gray-700" : "bg-white"} ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 transition-all duration-200 ${solid ? "bg-gray-700" : "bg-white"} ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 transition-all duration-200 origin-center ${solid ? "bg-gray-700" : "bg-white"} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="sm:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100 px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-orange-500 py-2.5 text-sm font-medium border-b border-gray-50 last:border-0 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2.5 rounded-lg text-sm font-semibold text-center transition-colors"
          >
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  );
}
