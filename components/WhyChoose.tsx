type Feature = {
  emoji: string;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    emoji: "🏆",
    title: "38 Years of Experience",
    description: "Taught thousands of students across Delhi's schools from 1986 to 2024.",
  },
  {
    emoji: "📚",
    title: "Board Exam Specialist",
    description:
      "Deep expertise in both CBSE and ICSE curricula - knows exactly what examiners look for.",
  },
  {
    emoji: "🗣️",
    title: "Bilingual Teaching",
    description:
      "Comfortable in both English and Hindi medium - teaches in the language that works best for you.",
  },
  {
    emoji: "💻",
    title: "Online Classes",
    description:
      "Learn from anywhere via video call. Flexible scheduling to fit your routine.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-500 mb-3">
            Why Choose
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Neeru Maam
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Decades of experience, proven results, and a teaching style that adapts to every
            student.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div className="text-3xl mb-4 w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto">
                {feature.emoji}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
