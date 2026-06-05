const MOCK_ACTIVITY = [
  { id: "JOB-000013", action: "สร้าง Job ใหม่", status: "WAITING_FOR_ADMIN_CONFIRMATION", actor: "สมชาย ใจดี", role: "USER", time: "2 นาทีที่แล้ว" },
  { id: "JOB-000012", action: "Admin Confirmed", status: "WAITING_FOR_DRIVER_CONFIRMATION", actor: "Admin Test", role: "ADMIN", time: "15 นาทีที่แล้ว" },
  { id: "JOB-000011", action: "Driver รับงาน", status: "DRIVER_CONFIRMED", actor: "สมชาย ขับดี", role: "DRIVER", time: "32 นาทีที่แล้ว" },
  { id: "JOB-000010", action: "User ขอยกเลิก", status: "CANCELLATION_REQUESTED", actor: "มาลี สวยงาม", role: "USER", time: "1 ชั่วโมงที่แล้ว" },
  { id: "JOB-000009", action: "ส่งสำเร็จ", status: "DELIVERED", actor: "วิชัย เร็วแรง", role: "DRIVER", time: "2 ชั่วโมงที่แล้ว" },
  { id: "JOB-000008", action: "Customer ปฏิเสธรับของ", status: "CUSTOMER_REJECTED", actor: "วิภา รักดี", role: "USER", time: "3 ชั่วโมงที่แล้ว" },
];

const ROLE_COLORS = {
  USER: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  ADMIN: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
  DRIVER: "text-neon bg-neon/10 border-neon/20",
};

const STATUS_ICONS = {
  WAITING_FOR_ADMIN_CONFIRMATION: "⏳",
  WAITING_FOR_DRIVER_CONFIRMATION: "🚗",
  DRIVER_CONFIRMED: "✅",
  DELIVERED: "📦",
  CANCELLATION_REQUESTED: "❌",
  CUSTOMER_REJECTED: "🙅",
};

export default function RecentActivity() {
  return (
    <div className="bg-dark-card border border-dark-border rounded-xl p-5">
      <h3 className="text-white font-semibold font-sora mb-4">Recent Activity</h3>
      <div className="flex flex-col gap-0">
        {MOCK_ACTIVITY.map((a, i) => (
          <div
            key={`${a.id}-${i}`}
            className={`flex gap-3 items-start py-3 ${i < MOCK_ACTIVITY.length - 1 ? "border-b border-dark-border/50" : ""}`}
          >
            <div className="w-8 h-8 rounded-full bg-dark-elevated flex items-center justify-center text-sm flex-shrink-0">
              {STATUS_ICONS[a.status] || "🔄"}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-neon text-xs font-semibold font-sora">{a.id}</span>
                <span className="text-white text-xs font-sora">{a.action}</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className={`text-xs px-2 py-0.5 rounded-full border font-sora ${ROLE_COLORS[a.role]}`}>
                  {a.role}
                </span>
                <span className="text-gray-500 text-xs font-sora">{a.actor}</span>
              </div>
            </div>
            <span className="text-gray-600 text-xs font-sora flex-shrink-0">{a.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
