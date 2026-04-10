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
];

function StarRating() {
  return (
    <div className="flex gap-0.5 mb-3" aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateIn>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-500 mb-3">
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
            <AnimateIn key={`${t.name}-${t.context}`} delay={i * 0.15}>
              <div className="bg-white rounded-2xl p-6 shadow-md border border-orange-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 h-full flex flex-col">
                <StarRating />
                <div className="text-4xl text-orange-300 font-serif leading-none mb-3 -mt-1">&ldquo;</div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-1">{t.quote}</p>
                <div className="border-t border-orange-50 pt-3 mt-auto">
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.context}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
