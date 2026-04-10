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

export default function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-gray-50 rounded-xl p-6 border border-gray-100"
            >
              <div className="text-4xl text-orange-300 font-serif leading-none mb-4">&ldquo;</div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">{t.quote}</p>
              <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
              <p className="text-xs text-gray-500">{t.context}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
