type SubjectCard = {
  emoji: string;
  subject: string;
  classes: string;
  description: string;
};

const cards: SubjectCard[] = [
  {
    emoji: "📐",
    subject: "Mathematics",
    classes: "Classes 6-8",
    description: "Building strong foundations in algebra, geometry, and arithmetic",
  },
  {
    emoji: "📊",
    subject: "Mathematics",
    classes: "Classes 9-10",
    description:
      "Board exam preparation for CBSE & ICSE with focus on problem-solving",
  },
  {
    emoji: "🔢",
    subject: "Mathematics",
    classes: "Classes 11-12",
    description: "Advanced topics: calculus, statistics, and board exam mastery",
  },
  {
    emoji: "🔬",
    subject: "Science",
    classes: "Classes 6-10",
    description:
      "Physics, Chemistry, and Biology - conceptual clarity for board exams",
  },
];

export default function Subjects() {
  return (
    <section id="subjects" className="bg-amber-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-500 mb-3">
            What I Teach
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Subjects &amp; Classes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expert tutoring in Maths and Science for Classes 6-12, available in English and
            Hindi medium.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
          {cards.map((card) => (
            <div
              key={`${card.subject}-${card.classes}`}
              className="bg-gradient-to-br from-white to-amber-50 rounded-2xl border border-amber-100 border-l-4 border-l-orange-400 p-6 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-200"
            >
              <div className="text-2xl mb-4 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                {card.emoji}
              </div>
              <p className="text-lg font-bold text-gray-900">{card.subject}</p>
              <p className="text-sm font-medium text-orange-500 mt-1">{card.classes}</p>
              <p className="text-sm text-gray-600 mt-3 leading-relaxed">{card.description}</p>
              <div className="flex gap-2 mt-4 flex-wrap">
                <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-medium">
                  CBSE
                </span>
                <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-medium">
                  ICSE
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
