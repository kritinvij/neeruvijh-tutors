"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimateIn from "@/components/AnimateIn";

const faqs = [
  {
    q: "What subjects and classes do you teach?",
    a: "Maths from Class 6 to 12, and Science (Physics, Chemistry, Biology) from Class 6 to 10 — covering both CBSE and ICSE boards. Sessions are available in English and Hindi medium.",
  },
  {
    q: "How long is each session, and how many per week?",
    a: "Sessions are typically one hour. Most students take 2-3 sessions per week, though this is flexible based on syllabus coverage and exam timelines.",
  },
  {
    q: "Can my child join mid-year?",
    a: "Absolutely. Students can start any time during the year. The first session is used to assess where they are and build a plan from there — no need to wait for a new academic year.",
  },
  {
    q: "How is doubt-clearing handled between sessions?",
    a: "Students can reach out over WhatsApp between classes for quick questions. Learning doesn't stop when the call ends — doubts get addressed as they come up.",
  },
  {
    q: "What are your session fees?",
    a: "Fees depend on the class, board, and number of sessions per week. Please reach out directly over WhatsApp or call to discuss — most families get an answer the same day.",
  },
  {
    q: "What makes the approach different from school teaching?",
    a: "Every topic starts with the concept before the formula. Short chapter tests catch gaps in real time. Notes are shared after every session. And with 38 years of experience, Neeru Maam knows exactly where students get stuck — and addresses it before it becomes a problem.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white py-20">
      <div className="max-w-3xl mx-auto px-6">
        <AnimateIn>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-500 mb-3 nv-label">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Common Questions
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Everything parents usually ask before getting in touch.
            </p>
          </div>
        </AnimateIn>

        <div className="divide-y divide-amber-100">
          {faqs.map((faq, i) => (
            <AnimateIn key={i} delay={i * 0.04}>
              <div>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left gap-4 group"
                  aria-expanded={open === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="text-base font-semibold text-gray-900 group-hover:text-orange-500 transition-colors duration-150 leading-snug">
                    {faq.q}
                  </span>
                  <span
                    className={`shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-orange-50 text-orange-500 transition-transform duration-200 ${
                      open === i ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      className="w-3.5 h-3.5"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>

                <div id={`faq-answer-${i}`}>
                  <AnimatePresence initial={false}>
                    {open === i && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm text-gray-600 leading-relaxed pb-5 pr-10">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
