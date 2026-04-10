import AnimateIn from "@/components/AnimateIn";

type Feature = {
  emoji: string;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    emoji: "🏆",
    title: "38 Years of Experience",
    description:
      "An entire career in Delhi's classrooms - she knows every gap, misconception, and exam pattern.",
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
      "Comfortable in English and Hindi medium - teaches in the language that works best for you.",
  },
  {
    emoji: "🏅",
    title: "Award-Winning Teacher",
    description:
      "Delhi State Teachers' Award 2022 · Fulbright Scholar 2015 (a US government teaching honour).",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateIn>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-500 mb-3">
              Why Neeru Maam
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Sets Her Apart
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A teaching career built entirely in Delhi classrooms - now available to your child
              at home.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((feature, i) => (
            <AnimateIn key={feature.title} delay={i * 0.1}>
              <div className="text-center bg-orange-50 rounded-2xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-200 border border-orange-100">
                <div className="text-3xl mb-4 w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                  {feature.emoji}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed min-h-[4.5rem]">{feature.description}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
