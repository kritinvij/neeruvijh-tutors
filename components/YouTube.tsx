"use client";

import { useState } from "react";
import AnimateIn from "@/components/AnimateIn";

// Top 3 most-viewed videos from the channel (from Popular tab)
const VIDEO_IDS = [
  "RvK147Eeloc",
  "7aBYd9Ie7j4",
  "yJp78g2zTUc",
];

function VideoFacade({ id, index }: { id: string; index: number }) {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-md">
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          title={`Neeru Vijh - YouTube Video ${index + 1}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0 rounded-xl"
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setActive(true)}
      className="relative w-full aspect-video rounded-xl overflow-hidden shadow-md group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
      aria-label={`Play video ${index + 1}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
        alt={`Video thumbnail ${index + 1}`}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-200" />
      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-red-700 transition-all duration-200">
          <svg
            className="w-6 h-6 text-white ml-1"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </button>
  );
}

export default function YouTube() {
  return (
    <section id="youtube" className="bg-orange-50 nv-textured py-20">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateIn>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-500 mb-3 nv-label">
              Free Resources
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Learn on YouTube
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hundreds of free lessons on Maths and Science, explained clearly in English and Hindi.
            </p>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="flex items-center justify-center gap-3 mt-6 mb-10">
            <svg
              className="w-7 h-7 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect width="24" height="24" rx="5" fill="#FF0000" />
              <polygon points="9.5,7 9.5,17 17,12" fill="white" />
            </svg>
            <span className="font-bold text-gray-900">Math And More with Neeru Vijh</span>
            <a
              href="https://www.youtube.com/c/MathAndMorewithNeeruVijh"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-800 hover:shadow-md hover:scale-105 active:scale-95 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150"
            >
              Visit Channel
            </a>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VIDEO_IDS.map((id, i) => (
            <AnimateIn key={id} delay={i * 0.12} className={i > 0 ? "hidden sm:block" : undefined}>
              <VideoFacade id={id} index={i} />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
