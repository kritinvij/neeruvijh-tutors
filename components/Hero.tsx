"use client";

import { motion } from "framer-motion";

const MATH_SYMBOLS = [
  { sym: "π",  top: "14%", left: "5%",  size: "4.5rem", float: "nv-float-1", delay: "0s" },
  { sym: "√",  top: "16%", left: "83%", size: "5rem",   float: "nv-float-2", delay: "0s" },
  { sym: "∑",  top: "65%", left: "89%", size: "3.5rem", float: "nv-float-3", delay: "0s" },
  { sym: "∞",  top: "70%", left: "4%",  size: "3rem",   float: "nv-float-1", delay: "3s" },
  { sym: "∂",  top: "40%", left: "93%", size: "2.5rem", float: "nv-float-2", delay: "1.5s" },
  { sym: "∠",  top: "55%", left: "2%",  size: "2.5rem", float: "nv-float-3", delay: "4s" },
];

// Shared spring easing for hero entrance
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const enter = (delay: number) => ({
  initial: { opacity: 0, y: 28 } as const,
  animate: { opacity: 1, y: 0 } as const,
  transition: { duration: 0.65, delay, ease: EASE },
});

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center bg-gradient-to-br from-orange-500 to-amber-400 overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-24">

      {/* Animated background blobs */}
      <div className="absolute top-[-22%] left-[-14%] w-[62%] h-[72%] rounded-full bg-amber-300/30 blur-[100px] nv-float-1 pointer-events-none" />
      <div className="absolute bottom-[-18%] right-[-10%] w-[58%] h-[68%] rounded-full bg-orange-600/25 blur-[90px]  nv-float-2 pointer-events-none" />
      <div className="absolute top-[22%]  right-[14%]  w-[36%] h-[48%] rounded-full bg-white/[0.09]  blur-[70px]  nv-float-3 pointer-events-none" />

      {/* Central light cone */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 42%, rgba(255,255,255,0.13) 0%, transparent 70%)",
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Faint math symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden>
        {MATH_SYMBOLS.map(({ sym, top, left, size, float: floatClass, delay }) => (
          <span
            key={sym}
            className={`absolute font-serif text-white/[0.07] ${floatClass}`}
            style={{ top, left, fontSize: size, animationDelay: delay }}
          >
            {sym}
          </span>
        ))}
      </div>

      {/* Main content — staggered entrance */}
      <div className="relative max-w-4xl mx-auto px-6 text-center">

        {/* Credential badges */}
        <motion.div {...enter(0.08)} className="flex flex-wrap justify-center gap-2 mb-6">
          <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/40 text-white px-4 py-2 rounded-full text-sm font-semibold">
            <span>🏅</span>
            <span>Delhi State Teachers&apos; Award 2022</span>
          </span>
          <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/40 text-white px-4 py-2 rounded-full text-sm font-semibold">
            <span>🌎</span>
            <span>Fulbright Scholar 2015</span>
          </span>
        </motion.div>

        <motion.h1 {...enter(0.18)} className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white">
          Neeru Vijh
        </motion.h1>

        <motion.p {...enter(0.28)} className="text-xl sm:text-2xl font-medium mt-4 text-white/90">
          38 Years of Teaching Maths &amp; Science
        </motion.p>

        <motion.p {...enter(0.36)} className="text-base sm:text-lg mt-3 text-white/80">
          CBSE · ICSE · English &amp; Hindi Medium · Online Tutoring
        </motion.p>

        <motion.div {...enter(0.44)} className="flex gap-4 justify-center mt-8 flex-wrap">
          <a
            href="#contact"
            className="bg-white text-orange-600 hover:bg-orange-50 hover:shadow-xl hover:scale-105 active:scale-95 px-8 py-3 rounded-lg font-semibold transition-all duration-150"
          >
            Get in Touch
          </a>
          <a
            href="https://www.youtube.com/c/MathAndMorewithNeeruVijh"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white hover:bg-white/25 hover:scale-105 active:scale-95 px-8 py-3 rounded-lg font-semibold transition-all duration-150"
          >
            Watch Free Lessons
          </a>
        </motion.div>
      </div>

      {/* Wave into Stats */}
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
