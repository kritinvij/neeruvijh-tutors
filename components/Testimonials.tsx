import AnimateIn from "@/components/AnimateIn";

type Testimonial = {
  quote: string;
  name: string;
  context: string;
};

// TODO: Replace with real testimonials
const testimonials: Testimonial[] = [
  {
    quote:
      "Neeru Maam explained concepts so clearly that my son went from failing Maths to scoring 85 in his Class 10 boards. Her patience and deep knowledge made all the difference.",
    name: "Parent of Class 10 Student",
    context: "CBSE Board, 2023",
  },
  {
    quote:
      "I struggled with Maths for years, but Neeru Maam's teaching style - in Hindi - made everything click. Highly recommended for any student who needs a strong foundation.",
    name: "Class 8 Student",
    context: "ICSE Curriculum",
  },
  {
    quote:
      "38 years of experience shows in every class. She knows exactly where students get stuck and addresses it proactively. My daughter scored 92 in Science.",
    name: "Parent of Class 9 Student",
    context: "CBSE Board, 2024",
  },
  {
    quote:
      "I was terrified of Class 12 Maths - integration, vectors, probability. Neeru Maam built everything from first principles. Ended up scoring 91 in boards. Couldn't have done it without her.",
    name: "Class 12 Student",
    context: "CBSE Board, 2024",
  },
  {
    quote:
      "My daughter had a genuine fear of fractions in Class 6. Two months with Neeru Maam and she's explaining concepts to her classmates. The patience and step-by-step method is what makes the difference.",
    name: "Parent of Class 6 Student",
    context: "Delhi, CBSE",
  },
  {
    quote:
      "The WhatsApp doubt-clearing between sessions is what sets Neeru Maam apart. No waiting a whole week for an answer. We've covered more syllabus in 3 months than the entire school year.",
    name: "Parent of Class 11 Student",
    context: "CBSE Board, Science",
  },
];

function StarRating() {
  return (
    <div className="flex gap-1 mb-4" aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-orange-500"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const DIRS: Array<"left" | "scale" | "right"> = [
  "left", "scale", "right",
  "right", "scale", "left",
];

export default function Testimonials() {
  return (
    <section className="bg-amber-50 nv-textured py-20">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateIn>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-500 mb-3 nv-label">
              Testimonials
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Students &amp; Parents Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from families who have learned with Neeru Maam.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((t, i) => (
            <AnimateIn
              key={`${t.name}-${t.context}`}
              delay={(i % 3) * 0.12}
              direction={DIRS[i]}
            >
              <div className="relative bg-white rounded-2xl p-7 shadow-sm border border-amber-100 hover:shadow-[0_10px_32px_rgba(249,115,22,0.12)] hover:-translate-y-1.5 transition-all duration-200 h-full flex flex-col overflow-hidden">
                {/* Decorative large quotation mark */}
                <span
                  className="absolute top-3 right-5 font-serif text-[5.5rem] leading-none text-orange-100 select-none pointer-events-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <StarRating />
                <p className="text-gray-700 text-sm leading-relaxed flex-1 italic font-serif relative z-10">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-5 pt-4 border-t border-amber-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-orange-500">
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">{t.context}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
