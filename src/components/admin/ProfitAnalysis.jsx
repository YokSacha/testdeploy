import { useState } from "react";

// Mock data based on deposit_amount + rental_plan from Orders model
const WEEKLY_REVENUE = [
  { day: "จ", revenue: 4200, orders: 3 },
  { day: "อ", revenue: 6800, orders: 5 },
  { day: "พ", revenue: 3100, orders: 2 },
  { day: "พฤ", revenue: 8400, orders: 6 },
  { day: "ศ", revenue: 11200, orders: 8 },
  { day: "ส", revenue: 9600, orders: 7 },
  { day: "อา", revenue: 5300, orders: 4 },
];

const RENTAL_PLAN_DATA = [
  { plan: "1 วัน", count: 12, revenue: 3600, color: "#C3FF51" },
  { plan: "3 วัน", count: 18, revenue: 12600, color: "#00E5FF" },
  { plan: "7 วัน", count: 9, revenue: 18900, color: "#A78BFA" },
];

const TOP_ITEMS = [
  { name: "Ultra Boost", brand: "Adidas", rentals: 14, revenue: 16800 },
  { name: "Air Max", brand: "Nike", rentals: 11, revenue: 13200 },
  { name: "Gel-Kayano", brand: "Asics", rentals: 8, revenue: 9600 },
  { name: "React Infinity", brand: "Nike", rentals: 6, revenue: 7200 },
];

const SUMMARY = {
  totalRevenue: 48600,
  depositCollected: 19500,
  rentalIncome: 29100,
  avgOrderValue: 1243,
  successRate: 87,
  totalOrders: 39,
};

const PERIODS = ["สัปดาห์นี้", "เดือนนี้", "3 เดือน"];

export default function ProfitAnalysis() {
  const [period, setPeriod] = useState("สัปดาห์นี้");
  const maxRevenue = Math.max(...WEEKLY_REVENUE.map((d) => d.revenue));

  return (
    <div className="flex flex-col gap-5">

      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-white font-semibold font-sora text-base">Profit & Analysis</h3>
        <div className="flex gap-1">
          {PERIODS.map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`text-xs px-3 py-1.5 rounded-lg border font-sora transition-colors ${
                period === p
                  ? "bg-neon/10 text-neon border-neon/30"
                  : "text-gray-400 border-dark-border hover:text-white"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Summary metrics */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {[
          { label: "รายได้รวม", prefix: "฿", value: SUMMARY.totalRevenue.toLocaleString(), sub: "+12% จากสัปดาห์ก่อน", positive: true },
          { label: "มัดจำที่เก็บได้", prefix: "฿", value: SUMMARY.depositCollected.toLocaleString(), sub: `${SUMMARY.totalOrders} orders`, positive: true },
          { label: "รายได้ค่าเช่า", prefix: "฿", value: SUMMARY.rentalIncome.toLocaleString(), sub: "ไม่รวมมัดจำ", positive: true },
          { label: "เฉลี่ย/order", prefix: "฿", value: SUMMARY.avgOrderValue.toLocaleString(), sub: "avg order value", positive: true },
          { label: "อัตราสำเร็จ", prefix: "", value: `${SUMMARY.successRate}%`, sub: "ของ orders ทั้งหมด", positive: true },
          { label: "Orders ทั้งหมด", prefix: "", value: String(SUMMARY.totalOrders), sub: "สัปดาห์นี้", positive: true },
        ].map((m) => (
          <div key={m.label} className="bg-dark-elevated rounded-xl p-4 border border-dark-border">
            <p className="text-[11px] text-gray-500 font-sora mb-2 tracking-wide uppercase">{m.label}</p>
            <p className="text-white font-sora leading-none">
              {m.prefix && (
                <span className="text-sm text-gray-400 font-normal mr-0.5">{m.prefix}</span>
              )}
              <span className="text-2xl font-semibold tabular-nums tracking-tight">{m.value}</span>
            </p>
            <p className={`text-[11px] font-sora mt-2 ${m.positive ? "text-neon" : "text-red-400"}`}>{m.sub}</p>
          </div>
        ))}
      </div>

      {/* Revenue bar chart */}
      <div className="bg-dark-card border border-dark-border rounded-xl p-5">
        <p className="text-white font-semibold font-sora mb-4 text-sm">รายได้รายวัน (฿)</p>
        <div className="flex items-end gap-2 h-32">
          {WEEKLY_REVENUE.map((d) => {
            const heightPct = (d.revenue / maxRevenue) * 100;
            return (
              <div key={d.day} className="flex-1 flex flex-col items-center gap-1 group">
                <div className="relative w-full flex flex-col items-center justify-end" style={{ height: "96px" }}>
                  {/* Tooltip */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 hidden group-hover:flex flex-col items-center z-10">
                    <div className="bg-dark-elevated border border-dark-border rounded-lg px-2 py-1 text-center whitespace-nowrap">
                      <p className="text-neon text-xs font-semibold font-sora">฿{d.revenue.toLocaleString()}</p>
                      <p className="text-gray-500 text-xs font-sora">{d.orders} orders</p>
                    </div>
                  </div>
                  {/* Bar */}
                  <div
                    className="w-full rounded-t-md transition-all duration-300 group-hover:opacity-100 opacity-80"
                    style={{
                      height: `${heightPct}%`,
                      background: `linear-gradient(to top, #C3FF51aa, #C3FF51)`,
                    }}
                  />
                </div>
                <p className="text-gray-500 text-xs font-sora">{d.day}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Rental plan breakdown */}
        <div className="bg-dark-card border border-dark-border rounded-xl p-5">
          <p className="text-white font-semibold font-sora mb-4 text-sm">สัดส่วน Rental Plan</p>
          <div className="flex flex-col gap-3">
            {RENTAL_PLAN_DATA.map((r) => {
              const totalRevenue = RENTAL_PLAN_DATA.reduce((s, d) => s + d.revenue, 0);
              const pct = Math.round((r.revenue / totalRevenue) * 100);
              return (
                <div key={r.plan}>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ background: r.color }} />
                      <span className="text-gray-300 text-xs font-sora">{r.plan}</span>
                      <span className="text-gray-500 text-xs font-sora">({r.count} orders)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white text-xs font-semibold font-sora">฿{r.revenue.toLocaleString()}</span>
                      <span className="text-gray-500 text-xs font-sora">{pct}%</span>
                    </div>
                  </div>
                  <div className="w-full h-2 bg-dark-elevated rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{ width: `${pct}%`, background: r.color }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Top items */}
        <div className="bg-dark-card border border-dark-border rounded-xl p-5">
          <p className="text-white font-semibold font-sora mb-4 text-sm">Top Items</p>
          <div className="flex flex-col gap-2">
            {TOP_ITEMS.map((item, i) => (
              <div key={item.name} className="flex items-center justify-between py-2 border-b border-dark-border/50 last:border-0">
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-bold font-sora w-5 ${i === 0 ? "text-neon" : i === 1 ? "text-cyan" : "text-gray-500"}`}>
                    #{i + 1}
                  </span>
                  <div>
                    <p className="text-white text-xs font-semibold font-sora">{item.name}</p>
                    <p className="text-gray-500 text-xs font-sora">{item.brand}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-neon text-xs font-semibold font-sora">฿{item.revenue.toLocaleString()}</p>
                  <p className="text-gray-500 text-xs font-sora">{item.rentals} rentals</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
