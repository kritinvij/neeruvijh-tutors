import AnimateIn from "@/components/AnimateIn";

export default function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left column: photo placeholder */}
          <AnimateIn delay={0.1}>
            <div className="bg-gray-100 rounded-2xl aspect-square max-w-sm mx-auto md:mx-0 flex items-center justify-center">
              {/* TODO: Replace with real photo of Neeru Vijh */}
              <span className="text-6xl text-gray-400">📷</span>
            </div>
          </AnimateIn>

          {/* Right column: text content */}
          <AnimateIn delay={0.2}>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-orange-500 mb-3">
                About
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Meet Neeru Maam
              </h2>
              {/* TODO: Replace with Neeru Vijh's actual bio */}
              {/* TODO: Add specific school names - "Having spent her career at [School A], [School B] and [School C]..." - naming recognisable Delhi schools significantly increases credibility with local families */}
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
