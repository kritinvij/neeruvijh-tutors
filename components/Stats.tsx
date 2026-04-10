const stats = [
  { value: "38+", label: "Years of Teaching" },
  { value: "CBSE & ICSE", label: "Both Boards" },
  { value: "Classes 6–12", label: "Maths & Science" },
  { value: "🏅 2022", label: "Delhi State Award" },
];

export default function Stats() {
  return (
    <section className="bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 border-b border-amber-100">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="p-4">
              <div className="text-2xl sm:text-3xl font-bold text-orange-500">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
