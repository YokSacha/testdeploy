const STATUS_DATA = [
  { label: "Waiting", count: 6, color: "#EAB308" },
  { label: "In Transit", count: 14, color: "#00E5FF" },
  { label: "Delivered", count: 52, color: "#C3FF51" },
  { label: "Return", count: 18, color: "#A78BFA" },
  { label: "Cancelled", count: 8, color: "#F87171" },
];

export default function JobStatusChart() {
  const total = STATUS_DATA.reduce((s, d) => s + d.count, 0);

  // Donut chart
  const radius = 60;
  const cx = 80;
  const cy = 80;
  const stroke = 22;
  const circumference = 2 * Math.PI * radius;

  let offset = 0;
  const slices = STATUS_DATA.map((d) => {
    const pct = d.count / total;
    const dash = pct * circumference;
    const gap = circumference - dash;
    const slice = { ...d, dash, gap, offset, pct };
    offset += dash;
    return slice;
  });

  return (
    <div className="bg-dark-card border border-dark-border rounded-xl p-5">
      <h3 className="text-white font-semibold font-sora mb-4">Jobs by Status</h3>
      <div className="flex items-center gap-6">
        {/* Donut */}
        <div className="relative flex-shrink-0">
          <svg width="160" height="160" viewBox="0 0 160 160">
            <circle cx={cx} cy={cy} r={radius} fill="none" stroke="#1E1E20" strokeWidth={stroke} />
            {slices.map((s) => (
              <circle
                key={s.label}
                cx={cx} cy={cy} r={radius}
                fill="none"
                stroke={s.color}
                strokeWidth={stroke}
                strokeDasharray={`${s.dash} ${s.gap}`}
                strokeDashoffset={-s.offset + circumference * 0.25}
                strokeLinecap="butt"
              />
            ))}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-2xl font-bold text-white font-sora">{total}</p>
            <p className="text-xs text-gray-500 font-sora">total</p>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-col gap-3 flex-1">
          {STATUS_DATA.map((d) => (
            <div key={d.label} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: d.color }} />
                <span className="text-gray-400 text-xs font-sora">{d.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-20 h-1.5 rounded-full bg-dark-elevated overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${(d.count / total) * 100}%`, background: d.color }}
                  />
                </div>
                <span className="text-white text-xs font-semibold font-sora w-5 text-right">{d.count}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
