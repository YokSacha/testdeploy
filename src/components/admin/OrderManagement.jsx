import { useState } from "react";

const mockOrders = [
  {
    id: "ORD-001",
    status: "Waiting",
    is_active: true,
    customer: "สมชาย ใจดี",
    phone: "081-234-5678",
    address: "123 ถ.สุขุมวิท กรุงเทพฯ",
    item: "Ultra Boost size 44",
    rental_plan: "3 วัน",
    deposit: 500,
    ordered_at: "2026-06-03T10:00:00Z",
  },
  {
    id: "ORD-002",
    status: "successful",
    is_active: true,
    customer: "วิภา รักดี",
    phone: "089-876-5432",
    address: "456 ถ.นิมมาน เชียงใหม่",
    item: "Air Max size 40",
    rental_plan: "7 วัน",
    deposit: 800,
    ordered_at: "2026-06-02T14:30:00Z",
  },
  {
    id: "ORD-003",
    status: "Fail",
    is_active: false,
    customer: "ประสิทธิ์ มั่นคง",
    phone: "062-111-2222",
    address: "789 ถ.ราษฎร์บูรณะ กรุงเทพฯ",
    item: "Gel-Kayano size 43",
    rental_plan: "1 วัน",
    deposit: 300,
    ordered_at: "2026-06-01T09:15:00Z",
  },
  {
    id: "ORD-004",
    status: "Waiting",
    is_active: true,
    customer: "มาลี สวยงาม",
    phone: "095-333-4444",
    address: "321 ถ.มิตรภาพ ขอนแก่น",
    item: "Pegasus size 38",
    rental_plan: "3 วัน",
    deposit: 500,
    ordered_at: "2026-06-03T08:00:00Z",
  },
  {
    id: "ORD-005",
    status: "Done",
    is_active: true,
    customer: "สุรศักดิ์ แข็งแกร่ง",
    phone: "083-555-6666",
    address: "654 ถ.พระราม9 กรุงเทพฯ",
    item: "React Infinity size 42",
    rental_plan: "7 วัน",
    deposit: 800,
    ordered_at: "2026-05-28T11:00:00Z",
  },
];

const STATUS_STYLES = {
  Waiting: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
  Done: "text-neon bg-neon/10 border-neon/20",
  Fail: "text-red-400 bg-red-500/10 border-red-500/20",
  successful: "text-cyan bg-cyan/10 border-cyan/20",
};

const ALL_STATUSES = ["Waiting", "Done", "Fail", "successful"];

export default function OrderManagement() {
  const [orders, setOrders] = useState(mockOrders);
  const [confirmId, setConfirmId] = useState(null);
  const [filterStatus, setFilterStatus] = useState("ALL");
  const [searchId, setSearchId] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleSoftDelete = (id) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === id ? { ...o, is_active: false } : o))
    );
    setConfirmId(null);
    if (selectedOrder?.id === id) setSelectedOrder(null);
  };

  const filtered = orders.filter((o) => {
    const matchStatus = filterStatus === "ALL" || o.status === filterStatus;
    const matchSearch = searchId === "" || o.id.toLowerCase().includes(searchId.toLowerCase());
    return matchStatus && matchSearch;
  });

  const formatDate = (iso) =>
    new Date(iso).toLocaleDateString("th-TH", {
      day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit",
    });

  return (
    <div className="flex gap-5">
      {/* Left — list */}
      <div className="flex-1 bg-dark-card border border-dark-border rounded-xl p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-semibold font-sora">Order Management</h3>
          <span className="text-xs text-gray-400 font-sora">
            {orders.filter((o) => o.is_active).length} active
          </span>
        </div>

        {/* Search */}
        <input
          type="text"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          placeholder="ค้นหา Order ID..."
          className="w-full bg-dark-elevated border border-dark-border text-white text-sm rounded-lg px-3 py-2 font-sora placeholder-gray-600 focus:outline-none focus:border-neon/50 mb-3"
        />

        {/* Filter */}
        <div className="flex gap-2 mb-4 flex-wrap">
          <button
            onClick={() => setFilterStatus("ALL")}
            className={`text-xs px-3 py-1.5 rounded-lg border font-sora transition-colors ${
              filterStatus === "ALL"
                ? "bg-neon/10 text-neon border-neon/30"
                : "text-gray-400 border-dark-border hover:text-white"
            }`}
          >
            ทั้งหมด ({orders.length})
          </button>
          {ALL_STATUSES.map((s) => (
            <button
              key={s}
              onClick={() => setFilterStatus(s)}
              className={`text-xs px-3 py-1.5 rounded-lg border font-sora transition-colors ${
                filterStatus === s
                  ? "bg-neon/10 text-neon border-neon/30"
                  : "text-gray-400 border-dark-border hover:text-white"
              }`}
            >
              {s} ({orders.filter((o) => o.status === s).length})
            </button>
          ))}
        </div>

        {/* List */}
        <div className="flex flex-col gap-2">
          {filtered.length === 0 && (
            <p className="text-gray-500 text-sm font-sora text-center py-6">ไม่พบรายการ</p>
          )}
          {filtered.map((order) => (
            <div
              key={order.id}
              onClick={() => setSelectedOrder(order)}
              className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-colors ${
                selectedOrder?.id === order.id
                  ? "border-neon/40 bg-neon/5"
                  : order.is_active
                  ? "border-dark-border hover:bg-dark-elevated/50"
                  : "border-dark-border/30 opacity-50"
              }`}
            >
              <div>
                <p className={`text-sm font-semibold font-sora ${order.is_active ? "text-white" : "text-gray-600 line-through"}`}>
                  {order.id}
                </p>
                <p className="text-xs text-gray-500 font-sora">{order.customer}</p>
              </div>

              <div className="flex items-center gap-2">
                <span className={`text-xs px-2 py-0.5 rounded-full border font-sora ${STATUS_STYLES[order.status] || "text-gray-400"}`}>
                  {order.status}
                </span>
                {order.is_active && confirmId !== order.id && (
                  <button
                    onClick={(e) => { e.stopPropagation(); setConfirmId(order.id); }}
                    className="text-xs text-red-400 border border-red-400/30 px-2 py-1 rounded-lg hover:bg-red-400/10 transition-colors font-sora"
                  >
                    Delete
                  </button>
                )}
                {confirmId === order.id && (
                  <div className="flex gap-1" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={() => handleSoftDelete(order.id)}
                      className="text-xs text-red-400 border border-red-400/30 px-2 py-1 rounded-lg hover:bg-red-400/10 font-sora"
                    >
                      ยืนยัน
                    </button>
                    <button
                      onClick={() => setConfirmId(null)}
                      className="text-xs text-gray-400 border border-dark-border px-2 py-1 rounded-lg hover:bg-dark-elevated font-sora"
                    >
                      ยกเลิก
                    </button>
                  </div>
                )}
                {!order.is_active && (
                  <span className="text-xs text-gray-600 font-sora">Deleted</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right — detail modal */}
      {selectedOrder && (
        <div className="w-72 bg-dark-card border border-dark-border rounded-xl p-5 flex flex-col gap-4 self-start">
          <div className="flex items-center justify-between">
            <h4 className="text-white font-semibold font-sora">รายละเอียด</h4>
            <button
              onClick={() => setSelectedOrder(null)}
              className="text-gray-500 hover:text-white text-lg leading-none"
            >
              ✕
            </button>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-neon font-semibold font-sora text-sm">{selectedOrder.id}</p>
            <span className={`text-xs px-2 py-0.5 rounded-full border font-sora ${STATUS_STYLES[selectedOrder.status]}`}>
              {selectedOrder.status}
            </span>
          </div>

          <div className="flex flex-col gap-3">
            {[
              { label: "ลูกค้า", value: selectedOrder.customer },
              { label: "เบอร์โทร", value: selectedOrder.phone },
              { label: "ที่อยู่", value: selectedOrder.address },
              { label: "รายการ", value: selectedOrder.item },
              { label: "แผนเช่า", value: selectedOrder.rental_plan },
              { label: "มัดจำ", value: `฿${selectedOrder.deposit.toLocaleString()}` },
              { label: "วันที่สั่ง", value: formatDate(selectedOrder.ordered_at) },
              { label: "สถานะ", value: selectedOrder.is_active ? "Active" : "Deleted" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-0.5">
                <p className="text-xs text-gray-500 font-sora">{item.label}</p>
                <p className="text-sm text-white font-sora">{item.value}</p>
              </div>
            ))}
          </div>

          {selectedOrder.is_active && (
            <button
              onClick={() => {
                setConfirmId(selectedOrder.id);
                setSelectedOrder(null);
              }}
              className="w-full text-xs text-red-400 border border-red-400/30 py-2 rounded-lg hover:bg-red-400/10 transition-colors font-sora mt-2"
            >
              Soft Delete Order นี้
            </button>
          )}
        </div>
      )}
    </div>
  );
}
