const metrics = [
  { label: "Total Jobs", value: 128, icon: "💼", color: "text-neon" },
  { label: "In Transit", value: 14, icon: "🚚", color: "text-cyan" },
  { label: "Active Staff", value: 12, icon: "👥", color: "text-neon" },
  { label: "Cancellations", value: 3, icon: "❌", color: "text-red-400" },
];

export default function SummaryMetrics() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {metrics.map((m) => (
        <div
          key={m.label}
          className="bg-dark-card border border-dark-border rounded-xl p-4 flex flex-col gap-1"
        >
          <span className="text-xl">{m.icon}</span>
          <span className="text-xs text-gray-400 font-sora">{m.label}</span>
          <span className={`text-3xl font-semibold font-sora ${m.color}`}>
            {m.value}
          </span>
        </div>
      ))}
    </div>
  );
}
