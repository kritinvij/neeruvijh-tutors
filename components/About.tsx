export default function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left column: photo placeholder */}
          <div className="bg-gray-100 rounded-2xl aspect-square max-w-sm mx-auto md:mx-0 flex items-center justify-center">
            {/* TODO: Replace with real photo of Neeru Vijh */}
            <span className="text-6xl text-gray-400">📷</span>
          </div>

          {/* Right column: text content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-500 mb-3">
              About
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Meet Neeru Maam
            </h2>
            {/* TODO: Replace with Neeru Vijh's actual bio */}
            <p className="text-gray-600 leading-relaxed text-base mb-4">
              With over 38 years of teaching experience in Delhi&apos;s top schools, Neeru Maam
              has guided thousands of students through Maths and Science with patience, clarity,
              and deep expertise. Whether you&apos;re preparing for your Class 10 or 12 board
              exams, or building a strong foundation in middle school, her teaching adapts to
              your pace and learning style.
            </p>
            <p className="text-gray-600 leading-relaxed text-base mb-4">
              Teaching in both English and Hindi medium, covering CBSE and ICSE curricula,
              Neeru Maam brings classroom expertise to your home through online sessions.
            </p>
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mt-2">
              <span>🏅</span>
              <span>Delhi State Teachers&apos; Award 2022</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
