import AnimateIn from "@/components/AnimateIn";

const steps = [
  {
    number: "01",
    title: "Reach Out",
    description:
      "Send a WhatsApp message or call to share your child's class, board, and the subject they need help with.",
  },
  {
    number: "02",
    title: "First Class",
    description:
      "Schedule your first class - Neeru Maam will assess your child's level and tailor sessions to their needs.",
  },
  {
    number: "03",
    title: "Start Learning",
    description:
      "Begin regular sessions over video call, at times that work around school, tuition, and everything else.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateIn>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-500 mb-3 nv-label">
              Simple Process
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              One WhatsApp message is all it takes to get started.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {steps.map((step, i) => (
            <AnimateIn key={step.number} delay={i * 0.15} direction={i === 0 ? "left" : i === 2 ? "right" : "scale"}>
              <div className="relative text-center">
                {/* Connector line between steps (desktop only) */}
                {i < steps.length - 1 && (
                  <div
                    className="hidden md:block absolute top-8 h-px bg-orange-200"
                    style={{ left: "calc(50% + 2rem)", right: "-50%" }}
                  />
                )}
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 shadow-md">
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.3}>
          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-block bg-orange-500 hover:bg-orange-700 hover:shadow-lg hover:scale-105 active:scale-95 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-150"
            >
              Get in Touch
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
