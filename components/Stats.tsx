import AnimateIn from "@/components/AnimateIn";

const stats = [
  { value: "38+", label: "Years of Teaching" },
  { value: "CBSE & ICSE", label: "Both Boards" },
  { value: "Classes 6–12", label: "Maths & Science" },
  { value: "🏅 2022", label: "Delhi State Award" },
];

// Border logic (2-col mobile, 4-col desktop):
//   mobile:  [0|1] / [2|3]  → border-r on col-0 (i=0,2), border-b on row-0 (i=0,1)
//   desktop: [0|1|2|3]      → border-r on all except last (i=0,1,2)
const BORDER: Record<number, string> = {
  0: "border-r border-b border-orange-100 md:border-b-0",
  1: "border-b border-orange-100 md:border-b-0 md:border-r",
  2: "border-r border-orange-100",
  3: "",
};

export default function Stats() {
  return (
    <section className="bg-orange-50">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 0.1}>
              <div className={`p-6 text-center ${BORDER[i]}`}>
                <div className="text-2xl sm:text-3xl font-bold text-orange-500">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1 font-medium">{stat.label}</div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
