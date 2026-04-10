import AnimateIn from "@/components/AnimateIn";

type Practice = {
  icon: string;
  title: string;
  description: string;
};

const practices: Practice[] = [
  {
    icon: "💡",
    title: "Concept Before Formula",
    description:
      "Every topic starts with understanding, not memorisation. Students learn why a formula works before they use it - this is what makes board exam answers stand out.",
  },
  {
    icon: "📝",
    title: "Chapter Tests, Not Surprises",
    description:
      "Short assessments after each chapter catch gaps before they compound. Problems are identified and corrected in real time, not three weeks before the board exam.",
  },
  {
    icon: "📋",
    title: "Notes for Every Session",
    description:
      "Structured notes after each class - so students aren't scrambling before exams. Key concepts, solved examples, and common mistakes, all in one place.",
  },
  {
    icon: "💬",
    title: "Doubt-Clearing Between Classes",
    description:
      "Questions don't wait for the next session. Students can reach out between classes for quick clarifications - learning doesn't stop when the call ends.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="bg-amber-50 nv-textured py-20">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateIn>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-500 mb-3 nv-label">
              How She Teaches
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              The Approach
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              38 years of classroom teaching distilled into a method that builds real
              understanding - not just exam technique.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
          {practices.map((practice, i) => (
            <AnimateIn key={practice.title} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="flex gap-5 bg-white rounded-2xl p-6 shadow-sm border border-amber-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <div className="text-2xl w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center shrink-0">
                  {practice.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{practice.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed min-h-[4.5rem]">{practice.description}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
