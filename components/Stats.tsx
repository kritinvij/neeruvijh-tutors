"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import AnimateIn from "@/components/AnimateIn";

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const el = ref.current;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate(v) {
        el.textContent = String(Math.round(v)) + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, to, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

// Icon SVGs for each stat
function IconYears() {
  return (
    <svg className="w-6 h-6 text-orange-400 mx-auto mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" />
      <path d="M6 12v5c3.333 1.667 8.667 1.667 12 0v-5" />
    </svg>
  );
}

function IconBoards() {
  return (
    <svg className="w-6 h-6 text-orange-400 mx-auto mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
    </svg>
  );
}

function IconSubjects() {
  return (
    <svg className="w-6 h-6 text-orange-400 mx-auto mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
    </svg>
  );
}

function IconAward() {
  return (
    <svg className="w-6 h-6 text-orange-400 mx-auto mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

const stats = [
  { countTo: 38, suffix: "+", label: "Years of Teaching",  Icon: IconYears   },
  { value: "CBSE & ICSE",    label: "Both Boards",         Icon: IconBoards  },
  { value: "Classes 6–12",   label: "Maths & Science",     Icon: IconSubjects},
  { value: "2022",           label: "Delhi State Award",   Icon: IconAward   },
];

const BORDER: Record<number, string> = {
  0: "border-r border-b border-orange-100 md:border-b-0",
  1: "border-b border-orange-100 md:border-b-0 md:border-r",
  2: "border-r border-orange-100",
  3: "",
};

export default function Stats() {
  return (
    <section className="bg-orange-50 nv-textured">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 0.08} direction="scale">
              <div className={`p-6 text-center ${BORDER[i]}`}>
                <stat.Icon />
                <div className="text-3xl sm:text-4xl font-bold text-orange-500 font-serif">
                  {"countTo" in stat && stat.countTo !== undefined ? (
                    <CountUp to={stat.countTo} suffix={stat.suffix ?? ""} />
                  ) : (
                    stat.value
                  )}
                </div>
                <div className="text-sm text-gray-500 mt-1 font-medium">{stat.label}</div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
