import AnimateIn from "@/components/AnimateIn";

export default function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left column: photo placeholder — slides in from left */}
          <AnimateIn direction="left" delay={0.05}>
            <div className="relative rounded-2xl aspect-square max-w-sm mx-auto md:mx-0 overflow-hidden bg-gradient-to-br from-amber-50 to-orange-100">
              {/* Jali texture */}
              <div className="absolute inset-0 nv-textured opacity-60" />
              {/* Decorative corner brackets */}
              <div className="absolute top-4 left-4 w-10 h-10 border-l-2 border-t-2 border-orange-300/50 rounded-tl-sm" />
              <div className="absolute top-4 right-4 w-10 h-10 border-r-2 border-t-2 border-orange-300/50 rounded-tr-sm" />
              <div className="absolute bottom-4 left-4 w-10 h-10 border-l-2 border-b-2 border-orange-300/50 rounded-bl-sm" />
              <div className="absolute bottom-4 right-4 w-10 h-10 border-r-2 border-b-2 border-orange-300/50 rounded-br-sm" />
              {/* Placeholder content */}
              {/* TODO: Replace entire div below with <Image src="..." alt="Neeru Vijh" fill className="object-cover" /> */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div className="w-24 h-24 rounded-full bg-orange-200/50 border-2 border-orange-300/40 flex items-center justify-center">
                  <svg className="w-12 h-12 text-orange-400/60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-orange-500/60 tracking-wide">Photo coming soon</p>
              </div>
            </div>
          </AnimateIn>

          {/* Right column: text content — slides in from right */}
          <AnimateIn direction="right" delay={0.12}>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-orange-500 mb-3 nv-label">
                About
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Meet Neeru Maam
              </h2>
              {/* TODO: Replace with Neeru Vijh's actual bio */}
              {/* TODO: Add specific school names - "Having spent her career at [School A], [School B] and [School C]..." */}
              <p className="text-gray-600 leading-relaxed text-base mb-4">
                Having spent her entire career in Delhi&apos;s top schools, Neeru Maam has guided
                thousands of students through Maths and Science with patience, clarity, and deep
                expertise. Whether your child is preparing for Class 10 or 12 board exams, or
                building a strong foundation in middle school, her teaching meets each student
                where they are - no two sessions look exactly alike.
              </p>
              <p className="text-gray-600 leading-relaxed text-base mb-4">
                Whether your child studies in English or Hindi medium, follows CBSE or ICSE - the
                same depth of classroom teaching is now available from home.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 px-3 py-1.5 rounded-full text-sm font-semibold">
                  <span>🎓</span>
                  <span>M.Sc. Mathematics, University of Delhi</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 px-3 py-1.5 rounded-full text-sm font-semibold">
                  <span>📚</span>
                  <span>B.Ed., University of Delhi (CIE)</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 px-3 py-1.5 rounded-full text-sm font-semibold">
                  <span>🌎</span>
                  <span>Fulbright Scholar 2015</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 px-3 py-1.5 rounded-full text-sm font-semibold">
                  <span>🏅</span>
                  <span>Delhi State Teachers&apos; Award 2022</span>
                </div>
              </div>
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}
