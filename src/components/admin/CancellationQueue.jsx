import { useState } from "react";

const MOCK_QUEUE = [
  {
    id: "JOB-000010", customer: "สมหมาย ใจดี", phone: "081-111-2222",
    address: "123 ถ.สุขุมวิท กรุงเทพฯ", item: "Ultra Boost size 44",
    reason: "เปลี่ยนใจ ไม่ต้องการแล้ว", type: "CANCELLATION_REQUESTED",
    requestedAt: "2026-06-03T09:00:00Z",
  },
  {
    id: "JOB-000008", customer: "วิภา รักดี", phone: "089-333-4444",
    address: "456 ถ.นิมมาน เชียงใหม่", item: "Air Max size 40",
    reason: "ไม่อยู่บ้านตอน Driver มาถึง", type: "CUSTOMER_REJECT_ACKNOWLEDGED",
    requestedAt: "2026-06-03T08:30:00Z",
  },
  {
    id: "JOB-000007", customer: "ประสิทธิ์ มั่นคง", phone: "062-555-6666",
    address: "789 ถ.ราษฎร์บูรณะ กรุงเทพฯ", item: "Gel-Kayano size 43",
    reason: "ที่อยู่ไม่ถูกต้อง ส่งไม่ได้", type: "REJECT_DRIVER_CONFIRMED",
    requestedAt: "2026-06-02T16:00:00Z",
  },
  {
    id: "JOB-000005", customer: "มาลี สวยงาม", phone: "095-777-8888",
    address: "321 ถ.มิตรภาพ ขอนแก่น", item: "Pegasus size 38",
    reason: "สินค้าไม่ตรงตามที่สั่ง", type: "CANCELLATION_REQUESTED",
    requestedAt: "2026-06-02T14:00:00Z",
  },
];

const TYPE_META = {
  CANCELLATION_REQUESTED: { label: "User ขอยกเลิก", color: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20", tab: "cancellation" },
  CUSTOMER_REJECT_ACKNOWLEDGED: { label: "Customer Reject", color: "text-purple-400 bg-purple-500/10 border-purple-500/20", tab: "customer_reject" },
  REJECT_DRIVER_CONFIRMED: { label: "Admin Reject", color: "text-red-400 bg-red-500/10 border-red-500/20", tab: "admin_reject" },
};

const TABS = [
  { key: "all", label: "ทั้งหมด" },
  { key: "cancellation", label: "User ขอยกเลิก" },
  { key: "customer_reject", label: "Customer Reject" },
  { key: "admin_reject", label: "Admin Reject" },
  { key: "history", label: "History" },
];

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("th-TH", {
    day: "2-digit", month: "short", year: "numeric",
    hour: "2-digit", minute: "2-digit",
  });

export default function CancellationQueue() {
  const [queue, setQueue] = useState(MOCK_QUEUE);
  const [history, setHistory] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);

  const handleAction = (id, action) => {
    const item = queue.find((i) => i.id === id);
    if (!item) return;
    setHistory((prev) => [
      { ...item, action, actionAt: new Date().toISOString() },
      ...prev,
    ]);
    setQueue((prev) => prev.filter((i) => i.id !== id));
    if (selectedItem?.id === id) setSelectedItem(null);
  };

  const filtered = queue.filter((item) => {
    if (activeTab === "all") return true;
    if (activeTab === "history") return false;
    return TYPE_META[item.type]?.tab === activeTab;
  });

  const countByTab = (tabKey) => {
    if (tabKey === "all") return queue.length;
    if (tabKey === "history") return history.length;
    return queue.filter((i) => TYPE_META[i.type]?.tab === tabKey).length;
  };

  return (
    <div className="flex gap-5">
      {/* Left — list */}
      <div className="flex-1 bg-dark-card border border-dark-border rounded-xl p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-semibold font-sora">Cancellation Queue</h3>
          <span className="text-xs bg-red-500/10 text-red-400 border border-red-500/20 px-2 py-0.5 rounded-full font-sora">
            {queue.length} รอดำเนินการ
          </span>
        </div>

        {/* Tabs */}
        <div className="flex gap-1.5 mb-4 flex-wrap">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => { setActiveTab(tab.key); setSelectedItem(null); }}
              className={`text-xs px-3 py-1.5 rounded-lg border font-sora transition-colors ${
                activeTab === tab.key
                  ? "bg-neon/10 text-neon border-neon/30"
                  : "text-gray-400 border-dark-border hover:text-white"
              }`}
            >
              {tab.label}
              <span className="ml-1.5 opacity-60">({countByTab(tab.key)})</span>
            </button>
          ))}
        </div>

        {/* Queue list */}
        {activeTab !== "history" && (
          <div className="flex flex-col gap-2">
            {filtered.length === 0 && (
              <p className="text-gray-500 text-sm font-sora text-center py-8">ไม่มีรายการรอดำเนินการ</p>
            )}
            {filtered.map((item) => {
              const meta = TYPE_META[item.type];
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-colors ${
                    selectedItem?.id === item.id
                      ? "border-neon/40 bg-neon/5"
                      : "border-dark-border hover:bg-dark-elevated/50"
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-neon text-xs font-semibold font-sora">{item.id}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full border font-sora ${meta.color}`}>
                        {meta.label}
                      </span>
                    </div>
                    <p className="text-gray-400 text-xs font-sora">{item.customer} — {item.reason}</p>
                  </div>
                  <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={() => handleAction(item.id, "approved")}
                      className="text-xs text-neon border border-neon/30 px-3 py-1 rounded-lg hover:bg-neon/10 transition-colors font-sora"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleAction(item.id, "denied")}
                      className="text-xs text-red-400 border border-red-400/30 px-3 py-1 rounded-lg hover:bg-red-400/10 transition-colors font-sora"
                    >
                      Deny
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* History list */}
        {activeTab === "history" && (
          <div className="flex flex-col gap-2">
            {history.length === 0 && (
              <p className="text-gray-500 text-sm font-sora text-center py-8">ยังไม่มีประวัติการดำเนินการ</p>
            )}
            {history.map((item, i) => {
              const meta = TYPE_META[item.type];
              return (
                <div key={`${item.id}-${i}`} className="flex items-center justify-between p-3 rounded-lg border border-dark-border opacity-80">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-gray-400 text-xs font-semibold font-sora">{item.id}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full border font-sora ${meta.color}`}>
                        {meta.label}
                      </span>
                      <span className={`text-xs px-2 py-0.5 rounded-full border font-sora ${
                        item.action === "approved"
                          ? "text-neon bg-neon/10 border-neon/20"
                          : "text-red-400 bg-red-500/10 border-red-500/20"
                      }`}>
                        {item.action === "approved" ? "✓ Approved" : "✗ Denied"}
                      </span>
                    </div>
                    <p className="text-gray-500 text-xs font-sora">
                      {item.customer} · {formatDate(item.actionAt)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Right — detail panel */}
      {selectedItem && activeTab !== "history" && (
        <div className="w-72 bg-dark-card border border-dark-border rounded-xl p-5 flex flex-col gap-4 self-start">
          <div className="flex items-center justify-between">
            <h4 className="text-white font-semibold font-sora">รายละเอียด</h4>
            <button onClick={() => setSelectedItem(null)} className="text-gray-500 hover:text-white text-lg leading-none">✕</button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-neon font-semibold font-sora text-sm">{selectedItem.id}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full border font-sora ${TYPE_META[selectedItem.type].color}`}>
              {TYPE_META[selectedItem.type].label}
            </span>
          </div>

          <div className="flex flex-col gap-3">
            {[
              { label: "ลูกค้า", value: selectedItem.customer },
              { label: "เบอร์โทร", value: selectedItem.phone },
              { label: "ที่อยู่", value: selectedItem.address },
              { label: "รายการ", value: selectedItem.item },
              { label: "เหตุผล", value: selectedItem.reason },
              { label: "วันที่ขอ", value: formatDate(selectedItem.requestedAt) },
            ].map((f) => (
              <div key={f.label}>
                <p className="text-xs text-gray-500 font-sora">{f.label}</p>
                <p className="text-sm text-white font-sora">{f.value}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-2 mt-2">
            <button
              onClick={() => handleAction(selectedItem.id, "approved")}
              className="flex-1 text-xs text-neon border border-neon/30 py-2 rounded-lg hover:bg-neon/10 transition-colors font-sora"
            >
              Approve
            </button>
            <button
              onClick={() => handleAction(selectedItem.id, "denied")}
              className="flex-1 text-xs text-red-400 border border-red-400/30 py-2 rounded-lg hover:bg-red-400/10 transition-colors font-sora"
            >
              Deny
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
