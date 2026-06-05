import { useState } from "react";

const MOCK_DRIVERS = [
  { id: "DRV-001", name: "สมชาย ขับดี" },
  { id: "DRV-002", name: "วิชัย เร็วแรง" },
  { id: "DRV-003", name: "ประสิทธิ์ ตรงเวลา" },
];

const MOCK_JOBS = [
  {
    id: "JOB-000001", customer: "สมชาย ใจดี", phone: "081-111-2222",
    address: "123 ถ.สุขุมวิท กรุงเทพฯ", item: "Ultra Boost size 44",
    type: "DELIVERY", status: "WAITING_FOR_ADMIN_CONFIRMATION",
    driverId: null, note: "กรุณาโทรก่อนส่ง", createdAt: "2026-06-03T10:00:00Z",
  },
  {
    id: "JOB-000002", customer: "วิภา รักดี", phone: "089-333-4444",
    address: "456 ถ.นิมมาน เชียงใหม่", item: "Air Max size 40",
    type: "RETURN", status: "WAITING_FOR_RETURN_APPROVAL",
    driverId: null, note: "", createdAt: "2026-06-03T09:30:00Z",
  },
  {
    id: "JOB-000003", customer: "ประสิทธิ์ มั่นคง", phone: "062-555-6666",
    address: "789 ถ.ราษฎร์บูรณะ กรุงเทพฯ", item: "Gel-Kayano size 43",
    type: "DELIVERY", status: "IN_TRANSIT",
    driverId: "DRV-001", note: "", createdAt: "2026-06-02T14:00:00Z",
  },
  {
    id: "JOB-000004", customer: "มาลี สวยงาม", phone: "095-777-8888",
    address: "321 ถ.มิตรภาพ ขอนแก่น", item: "Pegasus size 38",
    type: "DELIVERY", status: "WAITING_FOR_ADMIN_CONFIRMATION",
    driverId: null, note: "ส่งช่วงบ่าย", createdAt: "2026-06-03T08:00:00Z",
  },
  {
    id: "JOB-000005", customer: "สุรศักดิ์ แข็งแกร่ง", phone: "083-999-0000",
    address: "654 ถ.พระราม9 กรุงเทพฯ", item: "React Infinity size 42",
    type: "DELIVERY", status: "DELIVERED",
    driverId: "DRV-002", note: "", createdAt: "2026-05-28T11:00:00Z",
  },
];

const STATUS_STYLES = {
  WAITING_FOR_ADMIN_CONFIRMATION: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
  WAITING_FOR_RETURN_APPROVAL: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
  WAITING_FOR_DRIVER_CONFIRMATION: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  DRIVER_CONFIRMED: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  PICKED_UP: "text-cyan bg-cyan/10 border-cyan/20",
  IN_TRANSIT: "text-cyan bg-cyan/10 border-cyan/20",
  DELIVERED: "text-neon bg-neon/10 border-neon/20",
  RETURN_DRIVER_PENDING: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  RETURN_COMPLETED: "text-neon bg-neon/10 border-neon/20",
  REJECT_REQUESTED: "text-red-400 bg-red-500/10 border-red-500/20",
  REJECT_APPROVED: "text-red-400 bg-red-500/10 border-red-500/20",
  CANCELLATION_APPROVED: "text-red-400 bg-red-500/10 border-red-500/20",
};

const TYPE_STYLES = {
  DELIVERY: "text-cyan bg-cyan/10 border-cyan/20",
  RETURN: "text-neon bg-neon/10 border-neon/20",
};

const WAITING_STATUSES = ["WAITING_FOR_ADMIN_CONFIRMATION", "WAITING_FOR_RETURN_APPROVAL"];
const FINAL_STATUSES = ["DELIVERED", "RETURN_COMPLETED", "REJECT_APPROVED", "CANCELLATION_APPROVED"];

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("th-TH", {
    day: "2-digit", month: "short", year: "numeric",
    hour: "2-digit", minute: "2-digit",
  });

export default function JobTable({ onViewTimeline }) {
  const [jobs, setJobs] = useState(MOCK_JOBS);
  const [filterType, setFilterType] = useState("ALL");
  const [filterStatus, setFilterStatus] = useState("ALL");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [confirmMode, setConfirmMode] = useState(false);
  const [assignDriver, setAssignDriver] = useState("");

  const filtered = jobs.filter((j) => {
    const matchType = filterType === "ALL" || j.type === filterType;
    const matchStatus = filterStatus === "ALL" || j.status === filterStatus;
    const matchSearch = search === "" || j.id.toLowerCase().includes(search.toLowerCase()) || j.customer.toLowerCase().includes(search.toLowerCase());
    return matchType && matchStatus && matchSearch;
  });

  const handleConfirm = (jobId) => {
    const nextStatus = jobs.find((j) => j.id === jobId)?.type === "RETURN"
      ? "RETURN_DRIVER_PENDING"
      : "WAITING_FOR_DRIVER_CONFIRMATION";
    setJobs((prev) => prev.map((j) =>
      j.id === jobId ? { ...j, status: nextStatus, driverId: assignDriver || j.driverId } : j
    ));
    setSelected((prev) => prev ? { ...prev, status: nextStatus, driverId: assignDriver || prev.driverId } : null);
    setConfirmMode(false);
    setAssignDriver("");
  };

  const handleReject = (jobId) => {
    setJobs((prev) => prev.map((j) =>
      j.id === jobId ? { ...j, status: "REJECT_REQUESTED" } : j
    ));
    setSelected((prev) => prev ? { ...prev, status: "REJECT_REQUESTED" } : null);
  };

  const driverName = (id) => MOCK_DRIVERS.find((d) => d.id === id)?.name || "-";

  return (
    <div className="flex gap-5">
      {/* Left — list */}
      <div className="flex-1 bg-dark-card border border-dark-border rounded-xl p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-semibold font-sora">Job Management</h3>
          <span className="text-xs text-gray-400 font-sora">
            {jobs.filter((j) => WAITING_STATUSES.includes(j.status)).length} รอ confirm
          </span>
        </div>

        {/* Search */}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="ค้นหา Job ID หรือลูกค้า..."
          className="w-full bg-dark-elevated border border-dark-border text-white text-sm rounded-lg px-3 py-2 font-sora placeholder-gray-600 focus:outline-none focus:border-neon/50 mb-3"
        />

        {/* Filters */}
        <div className="flex gap-2 mb-3 flex-wrap">
          {["ALL", "DELIVERY", "RETURN"].map((t) => (
            <button key={t} onClick={() => setFilterType(t)}
              className={`text-xs px-3 py-1.5 rounded-lg border font-sora transition-colors ${
                filterType === t ? "bg-neon/10 text-neon border-neon/30" : "text-gray-400 border-dark-border hover:text-white"
              }`}>
              {t === "ALL" ? "ทุก Type" : t}
            </button>
          ))}
        </div>
        <div className="flex gap-2 mb-4 flex-wrap">
          {["ALL", "WAITING", "IN_TRANSIT", "DELIVERED"].map((s) => (
            <button key={s} onClick={() => setFilterStatus(s === "WAITING" ? "WAITING_FOR_ADMIN_CONFIRMATION" : s === "ALL" ? "ALL" : s)}
              className={`text-xs px-3 py-1.5 rounded-lg border font-sora transition-colors ${
                (s === "ALL" && filterStatus === "ALL") ||
                (s === "WAITING" && filterStatus === "WAITING_FOR_ADMIN_CONFIRMATION") ||
                filterStatus === s
                  ? "bg-neon/10 text-neon border-neon/30"
                  : "text-gray-400 border-dark-border hover:text-white"
              }`}>
              {s === "ALL" ? "ทุก Status" : s === "WAITING" ? "Waiting" : s.replace(/_/g, " ")}
            </button>
          ))}
        </div>

        {/* Job list */}
        <div className="flex flex-col gap-2">
          {filtered.length === 0 && (
            <p className="text-gray-500 text-sm font-sora text-center py-6">ไม่พบรายการ</p>
          )}
          {filtered.map((job) => (
            <div
              key={job.id}
              onClick={() => { setSelected(job); setConfirmMode(false); }}
              className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-colors ${
                selected?.id === job.id ? "border-neon/40 bg-neon/5" : "border-dark-border hover:bg-dark-elevated/50"
              }`}
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-neon text-xs font-semibold font-sora">{job.id}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full border font-sora ${TYPE_STYLES[job.type]}`}>{job.type}</span>
                </div>
                <p className="text-gray-400 text-xs font-sora">{job.customer}</p>
              </div>
              <span className={`text-xs px-2 py-0.5 rounded-full border font-sora ${STATUS_STYLES[job.status] || "text-gray-400 border-gray-700"}`}>
                {job.status.replace(/_/g, " ")}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right — detail panel */}
      {selected && (
        <div className="w-80 bg-dark-card border border-dark-border rounded-xl p-5 flex flex-col gap-4 self-start">
          <div className="flex items-center justify-between">
            <h4 className="text-white font-semibold font-sora">รายละเอียด Job</h4>
            <button onClick={() => { setSelected(null); setConfirmMode(false); }} className="text-gray-500 hover:text-white text-lg leading-none">✕</button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-neon font-semibold font-sora text-sm">{selected.id}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full border font-sora ${TYPE_STYLES[selected.type]}`}>{selected.type}</span>
          </div>

          <div className={`text-xs px-3 py-1.5 rounded-lg border font-sora text-center ${STATUS_STYLES[selected.status] || "text-gray-400 border-gray-700"}`}>
            {selected.status.replace(/_/g, " ")}
          </div>

          <div className="flex flex-col gap-3 border-t border-dark-border pt-3">
            {[
              { label: "ลูกค้า", value: selected.customer },
              { label: "เบอร์โทร", value: selected.phone },
              { label: "ที่อยู่", value: selected.address },
              { label: "รายการ", value: selected.item },
              { label: "Driver", value: selected.driverId ? driverName(selected.driverId) : "ยังไม่ได้ assign" },
              { label: "หมายเหตุ", value: selected.note || "-" },
              { label: "วันที่สร้าง", value: formatDate(selected.createdAt) },
            ].map((f) => (
              <div key={f.label}>
                <p className="text-xs text-gray-500 font-sora">{f.label}</p>
                <p className="text-sm text-white font-sora">{f.value}</p>
              </div>
            ))}
          </div>

          {/* Confirm flow */}
          {WAITING_STATUSES.includes(selected.status) && (
            <div className="border-t border-dark-border pt-3 flex flex-col gap-3">
              {confirmMode ? (
                <>
                  <div>
                    <label className="text-xs text-gray-500 font-sora mb-1 block">Assign Driver</label>
                    <select
                      value={assignDriver}
                      onChange={(e) => setAssignDriver(e.target.value)}
                      className="w-full bg-dark-elevated border border-dark-border text-white text-sm rounded-lg px-3 py-2 font-sora focus:outline-none focus:border-neon/50"
                    >
                      <option value="">-- เลือก Driver --</option>
                      {MOCK_DRIVERS.map((d) => (
                        <option key={d.id} value={d.id}>{d.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleConfirm(selected.id)}
                      className="flex-1 text-xs text-dark bg-neon py-2 rounded-lg font-semibold font-sora hover:bg-neon-hover transition-colors"
                    >
                      ยืนยัน Confirm
                    </button>
                    <button
                      onClick={() => setConfirmMode(false)}
                      className="flex-1 text-xs text-gray-400 border border-dark-border py-2 rounded-lg font-sora hover:bg-dark-elevated transition-colors"
                    >
                      ยกเลิก
                    </button>
                  </div>
                </>
              ) : (
                <div className="flex gap-2">
                  <button
                    onClick={() => setConfirmMode(true)}
                    className="flex-1 text-xs text-neon border border-neon/30 py-2 rounded-lg hover:bg-neon/10 transition-colors font-sora"
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => handleReject(selected.id)}
                    className="flex-1 text-xs text-red-400 border border-red-400/30 py-2 rounded-lg hover:bg-red-400/10 transition-colors font-sora"
                  >
                    Reject
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Timeline button */}
          {!FINAL_STATUSES.includes(selected.status) && (
            <button
              onClick={() => onViewTimeline && onViewTimeline(selected.id)}
              className="w-full text-xs text-gray-400 border border-dark-border py-2 rounded-lg hover:bg-dark-elevated transition-colors font-sora"
            >
              ดู Timeline →
            </button>
          )}
        </div>
      )}
    </div>
  );
}
