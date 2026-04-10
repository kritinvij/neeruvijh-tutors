"use client";

import { useState } from "react";
import type { ReactNode } from "react";

// ─── Logo Components ──────────────────────────────────────────────────────────
// Each accepts: size (px), className (for currentColor theming via text-* classes)

/** A: Bold Serif Monogram — NV strokes, no container, orange baseline rule */
function LogoA({ size = 90, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 90 90" fill="none" className={className}>
      <polyline
        points="13,70 13,18 29,70 29,18"
        stroke="currentColor" strokeWidth="7.5"
        strokeLinecap="round" strokeLinejoin="round"
      />
      <polyline
        points="39,18 51,70 63,18"
        stroke="currentColor" strokeWidth="7.5"
        strokeLinecap="round" strokeLinejoin="round"
      />
      <line x1="11" y1="79" x2="65" y2="79" stroke="#f97316" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

/** B: Scholar's Seal — thin double ring, serif NV inside, orange diamond ornaments */
function LogoB({ size = 90, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 90 90" fill="none" className={className}>
      <circle cx="45" cy="45" r="40" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="45" cy="45" r="32" stroke="currentColor" strokeWidth="0.8" opacity="0.35" />
      <text
        x="45" y="54" textAnchor="middle" fill="currentColor"
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "27px",
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
  );
}

/** C: Diya Flame — Indian oil lamp, knowledge as light. Always orange/amber. */
function LogoC({ size = 90, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 90 90" fill="none" className={className}>
      <defs>
        <linearGradient id="c-flame" x1="45" y1="9" x2="45" y2="74" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ea580c" />
          <stop offset="45%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
        <radialGradient id="c-bowl" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#b45309" />
        </radialGradient>
      </defs>
      {/* Bowl */}
      <ellipse cx="45" cy="76" rx="24" ry="8.5" fill="url(#c-bowl)" />
      {/* Flame teardrop */}
      <path
        d="M45 10 C38 24 34 38 34 51 C34 64 38 74 45 74 C52 74 56 64 56 51 C56 38 52 24 45 10 Z"
        fill="url(#c-flame)"
      />
      {/* Inner shimmer */}
      <path
        d="M45 20 C41 31 39 41 39 51 C39 61 42 71 45 72 C48 71 51 61 51 51 C51 41 49 31 45 20 Z"
        fill="white" fillOpacity="0.13"
      />
      {/* Wick */}
      <line x1="45" y1="68" x2="45" y2="76" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/** D: Drawing Compass — the geometer's precision instrument */
function LogoD({ size = 90, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 90 90" fill="none" className={className}>
      {/* Left arm */}
      <line x1="45" y1="22" x2="22" y2="72" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" />
      {/* Right arm */}
      <line x1="45" y1="22" x2="68" y2="72" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" />
      {/* Hinge joint */}
      <circle cx="45" cy="22" r="5.5" fill="currentColor" />
      {/* Sweep arc (orange) */}
      <path d="M22 72 A35 35 0 0 1 68 72" stroke="#f97316" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      {/* Needle tip */}
      <circle cx="22" cy="72" r="2.5" fill="#f97316" />
      {/* Pencil tip */}
      <circle cx="68" cy="72" r="2" fill="currentColor" opacity="0.55" />
    </svg>
  );
}

/** E: Calligraphy Nib — writing and teaching refined to one mark */
function LogoE({ size = 90, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 90 90" fill="none" className={className}>
      {/* Nib body */}
      <path
        d="M45 8 C47 10 68 27 68 46 C68 60 62 72 56 78 L45 86 L34 78 C28 72 22 60 22 46 C22 27 43 10 45 8 Z"
        stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinejoin="round"
      />
      {/* Shoulder line */}
      <line x1="28" y1="38" x2="62" y2="38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.45" />
      {/* Center slit */}
      <line x1="45" y1="38" x2="45" y2="83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.55" />
      {/* Vent hole — orange */}
      <circle cx="45" cy="57" r="4.5" stroke="#f97316" strokeWidth="2" fill="none" />
      {/* Subtle nib fill for body definition */}
      <path
        d="M45 14 C47 16 62 30 62 46 C62 58 57 69 52 75 L45 82 L38 75 C33 69 28 58 28 46 C28 30 43 16 45 14 Z"
        fill="currentColor" fillOpacity="0.05"
      />
    </svg>
  );
}

// ─── Option Metadata ──────────────────────────────────────────────────────────

const OPTIONS = [
  {
    id: "A",
    name: "Stroke Monogram",
    tagline: "The name as a mark",
    desc: "Pure letterforms — N and V drawn as bold geometric strokes, anchored by an orange baseline. No outer container. The simplest thing that could possibly be distinctive.",
    Logo: LogoA,
    alwaysColored: false,
  },
  {
    id: "B",
    name: "Scholar's Seal",
    tagline: "Academic authority",
    desc: "A fine-line double ring with a Playfair Display NV at centre. The four orange diamond ornaments at the cardinal points mirror the ◆ motif already used throughout the site.",
    Logo: LogoB,
    alwaysColored: false,
  },
  {
    id: "C",
    name: "Knowledge Flame",
    tagline: "The diya of learning",
    desc: "A diya oil lamp — the Indian symbol of knowledge and enlightenment. Always rendered in warm amber-to-orange, self-contained and instantly recognisable at any size.",
    Logo: LogoC,
    alwaysColored: true,
  },
  {
    id: "D",
    name: "Drawing Compass",
    tagline: "Precision geometry",
    desc: "The draughtsman's compass — the defining instrument of classical mathematics. The orange arc suggests a circle mid-draw. Clean, professional, and unlike any letter-based mark.",
    Logo: LogoD,
    alwaysColored: false,
  },
  {
    id: "E",
    name: "Calligraphy Nib",
    tagline: "The craft of teaching",
    desc: "A fountain pen nib with shoulder, slit, and vent hole — writing as a refined craft. Elegant and unmistakable, tied to the act of teaching through putting thought on paper.",
    Logo: LogoE,
    alwaysColored: false,
  },
] as const;

// ─── Context Strip ────────────────────────────────────────────────────────────

function ContextStrip({
  Logo,
  alwaysColored,
}: {
  Logo: (p: { size: number; className?: string }) => ReactNode;
  alwaysColored: boolean;
}) {
  return (
    <div className="flex border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
      {/* Scrolled nav — ivory */}
      <div
        className="flex-1 flex flex-col items-center justify-center gap-1.5 py-3"
        style={{ background: "#FFFDF7" }}
      >
        <div className="flex items-center gap-2">
          <Logo
            size={30}
            className={alwaysColored ? "" : "text-[#28190E]"}
          />
          <span
            className="text-[10px] font-bold"
            style={{ color: "#28190E", fontFamily: "'DM Sans', sans-serif" }}
          >
            Neeru Vijh
          </span>
        </div>
        <span className="text-[8px] font-semibold uppercase tracking-widest" style={{ color: "#A89078" }}>
          Scrolled
        </span>
      </div>

      <div className="w-px" style={{ background: "rgba(255,255,255,0.08)" }} />

      {/* Hero — orange gradient */}
      <div
        className="flex-1 flex flex-col items-center justify-center gap-1.5 py-3"
        style={{ background: "linear-gradient(135deg, #f97316 0%, #f59e0b 100%)" }}
      >
        <div className="flex items-center gap-2">
          <Logo size={30} className="text-white" />
          <span
            className="text-[10px] font-bold text-white"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Neeru Vijh
          </span>
        </div>
        <span className="text-[8px] font-semibold uppercase tracking-widest text-white/60">
          On Hero
        </span>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LogoPreview() {
  const [picked, setPicked] = useState<string | null>(null);

  return (
    <div
      style={{
        background: "linear-gradient(160deg, #0D0804 0%, #170C06 60%, #0E0906 100%)",
        minHeight: "100vh",
      }}
    >
      {/* Subtle grain overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/><feColorMatrix type='saturate' values='0'/></filter><rect width='200' height='200' filter='url(%23n)'/></svg>")`,
        }}
      />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-8 py-14">

        {/* Header */}
        <header className="text-center mb-12">
          <p
            className="text-[10px] font-bold uppercase tracking-[0.4em] mb-4"
            style={{ color: "#f97316" }}
          >
            Brand Identity · Neeru Vijh Tutoring
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-3"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              color: "#FFFDF7",
            }}
          >
            Choose Your Logo
          </h1>
          <p
            className="text-sm max-w-sm mx-auto leading-relaxed"
            style={{ color: "#7A5C48" }}
          >
            Five distinct directions. Each shown at full scale and in both
            navbar states. Click one to select, then tell me.
          </p>
        </header>

        {/* Options grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {OPTIONS.map((opt) => {
            const isSelected = picked === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => setPicked(isSelected ? null : opt.id)}
                className="text-left rounded-2xl overflow-hidden transition-all duration-200 cursor-pointer"
                style={{
                  background: "#190F08",
                  outline: isSelected
                    ? "2px solid #f97316"
                    : "1px solid rgba(255,255,255,0.07)",
                  boxShadow: isSelected
                    ? "0 0 48px rgba(249,115,22,0.18)"
                    : "0 2px 12px rgba(0,0,0,0.4)",
                }}
              >
                {/* Large preview */}
                <div
                  className="relative flex items-center justify-center"
                  style={{
                    height: 200,
                    background:
                      "radial-gradient(ellipse 80% 60% at 50% 55%, #261507 0%, #110804 100%)",
                  }}
                >
                  {/* Option letter watermark */}
                  <span
                    className="absolute top-3 right-4 font-bold select-none pointer-events-none"
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: "3.5rem",
                      color: "rgba(249,115,22,0.10)",
                      lineHeight: 1,
                    }}
                  >
                    {opt.id}
                  </span>

                  <opt.Logo
                    size={105}
                    className={opt.alwaysColored ? "" : "text-white"}
                  />

                  {isSelected && (
                    <div
                      className="absolute bottom-3 right-3 flex items-center justify-center rounded-full"
                      style={{ width: 22, height: 22, background: "#f97316" }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <polyline
                          points="2,6 5,9 10,3"
                          stroke="white" strokeWidth="1.8"
                          strokeLinecap="round" strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Both-context strip */}
                <ContextStrip Logo={opt.Logo} alwaysColored={opt.alwaysColored} />

                {/* Info */}
                <div className="p-5 pb-6">
                  <p
                    className="text-[9px] font-bold uppercase tracking-[0.25em] mb-1.5"
                    style={{ color: "#f97316", opacity: 0.8 }}
                  >
                    {opt.id} · {opt.tagline}
                  </p>
                  <p
                    className="font-bold text-lg leading-snug mb-2.5"
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      color: "#FFFDF7",
                    }}
                  >
                    {opt.name}
                  </p>
                  <p
                    className="text-[12px] leading-relaxed"
                    style={{ color: "#6B4E3A" }}
                  >
                    {opt.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selection banner */}
        {picked && (
          <div
            className="mt-8 text-center py-4 rounded-xl"
            style={{
              background: "rgba(249,115,22,0.08)",
              border: "1px solid rgba(249,115,22,0.2)",
            }}
          >
            <p className="text-sm" style={{ color: "#9A7860" }}>
              Option{" "}
              <span
                className="font-bold"
                style={{
                  color: "#f97316",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                {picked}
              </span>{" "}
              — {OPTIONS.find((o) => o.id === picked)?.name}.{" "}
              <span style={{ color: "#6B4E3A" }}>
                Tell me to apply it and I&apos;ll update the navbar immediately.
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
