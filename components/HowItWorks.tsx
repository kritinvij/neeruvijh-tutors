const steps = [
  {
    number: "01",
    title: "Reach Out",
    description:
      "Send a WhatsApp message or call to share your child's class, board, and the subject they need help with.",
  },
  {
    number: "02",
    title: "Introductory Class",
    description:
      "Schedule a 30-minute introductory session to understand your child's level and discuss what they need.",
  },
  {
    number: "03",
    title: "Start Learning",
    description:
      "Begin regular weekly sessions over video call, scheduled around your child's timetable.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-500 mb-3">
            Simple Process
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Getting started takes less than a day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {steps.map((step, i) => (
            <div key={step.number} className="relative text-center">
              {/* Connector line between steps (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] right-[-calc(50%-2rem)] h-px bg-orange-200" />
              )}
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                <span className="text-white font-bold text-lg">{step.number}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-orange-500 hover:bg-orange-700 hover:shadow-lg hover:scale-105 active:scale-95 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-150"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
