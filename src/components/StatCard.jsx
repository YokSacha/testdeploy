// StatCard Component
// This component displays a single stat card (like Total Sales, Total Income, etc.)
// It's reusable - we'll use it 4 times for the 4 different stats

export default function StatCard({ label, value, note }) {
  return (
    <div className="bg-[#1A1A1A] border border-[#C3FF51] rounded-lg p-4 md:p-6">
      {/* Label - the title of the stat */}
      <p className="text-[#8f94a5] text-sm font-semibold mb-2">
        {label}
      </p>

      {/* Value - the main number */}
      <p className="text-white text-2xl md:text-3xl font-extrabold mb-1">
        {value}
      </p>

      {/* Note - small text like "+12% من الشهر الماضي" */}
      <p className="text-[#00FF41] text-xs font-medium">
        {note}
      </p>
    </div>
  );
}
