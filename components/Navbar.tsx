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
            viewBox="0 0 90 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Neeru Vijh logo mark"
            className={`shrink-0 transition-colors duration-300 ${solid ? "text-gray-900" : "text-white drop-shadow-sm"}`}
          >
            {/* Outer ring */}
            <circle cx="45" cy="45" r="40" stroke="currentColor" strokeWidth="2" />
            {/* Inner ring */}
            <circle cx="45" cy="45" r="33" stroke="currentColor" strokeWidth="0.9" opacity="0.35" />
            {/* NV serif monogram */}
            <text
              x="45" y="54" textAnchor="middle" fill="currentColor"
              style={{
                fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
                fontSize: "30px",
                fontWeight: 700,
                letterSpacing: "0.04em",
              }}
            >NV</text>
            {/* Orange ◆ at cardinal points */}
            <path d="M45 5.5 L47.5 9 L45 12.5 L42.5 9 Z" fill="#f97316" />
            <path d="M84.5 45 L88 47.5 L84.5 50 L81 47.5 Z" fill="#f97316" />
            <path d="M45 84.5 L47.5 81 L45 77.5 L42.5 81 Z" fill="#f97316" />
            <path d="M5.5 45 L2 47.5 L5.5 50 L9 47.5 Z" fill="#f97316" />
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
