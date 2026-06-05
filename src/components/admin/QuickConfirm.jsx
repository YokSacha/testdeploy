import { useState } from "react";

const MOCK_DRIVERS = [
  { id: "DRV-001", name: "สมชาย ขับดี" },
  { id: "DRV-002", name: "วิชัย เร็วแรง" },
  { id: "DRV-003", name: "ประสิทธิ์ ตรงเวลา" },
];

const INITIAL_PENDING = [
  { id: "JOB-000013", customer: "สมชาย ใจดี", address: "123 ถ.สุขุมวิท กรุงเทพฯ", type: "DELIVERY", createdAt: "2 นาทีที่แล้ว" },
  { id: "JOB-000004", customer: "มาลี สวยงาม", address: "321 ถ.มิตรภาพ ขอนแก่น", type: "DELIVERY", createdAt: "1 ชั่วโมงที่แล้ว" },
  { id: "JOB-000002", customer: "วิภา รักดี", address: "456 ถ.นิมมาน เชียงใหม่", type: "RETURN", createdAt: "2 ชั่วโมงที่แล้ว" },
];

export default function QuickConfirm() {
  const [pending, setPending] = useState(INITIAL_PENDING);
  const [selectedDriver, setSelectedDriver] = useState({});

  const handleConfirm = (jobId) => {
    setPending((prev) => prev.filter((j) => j.id !== jobId));
  };

  const handleReject = (jobId) => {
    setPending((prev) => prev.filter((j) => j.id !== jobId));
  };

  return (
    <div className="bg-dark-card border border-dark-border rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-semibold font-sora">Quick Confirm</h3>
        <span className="text-xs bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 px-2 py-0.5 rounded-full font-sora">
          {pending.length} รอ confirm
        </span>
      </div>

      {pending.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-2xl mb-2">✅</p>
          <p className="text-gray-500 text-sm font-sora">ไม่มีงานรอ confirm</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {pending.map((job) => (
            <div key={job.id} className="border border-dark-border rounded-lg p-3 flex flex-col gap-3">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-neon text-xs font-semibold font-sora">{job.id}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full border font-sora ${
                      job.type === "DELIVERY" ? "text-cyan bg-cyan/10 border-cyan/20" : "text-neon bg-neon/10 border-neon/20"
                    }`}>
                      {job.type}
                    </span>
                  </div>
                  <p className="text-white text-xs font-sora mt-1">{job.customer}</p>
                  <p className="text-gray-500 text-xs font-sora">{job.address}</p>
                </div>
                <span className="text-gray-600 text-xs font-sora">{job.createdAt}</span>
              </div>

              {/* Assign driver */}
              <select
                value={selectedDriver[job.id] || ""}
                onChange={(e) => setSelectedDriver((prev) => ({ ...prev, [job.id]: e.target.value }))}
                className="w-full bg-dark-elevated border border-dark-border text-white text-xs rounded-lg px-3 py-1.5 font-sora focus:outline-none focus:border-neon/50"
              >
                <option value="">-- Assign Driver (optional) --</option>
                {MOCK_DRIVERS.map((d) => (
                  <option key={d.id} value={d.id}>{d.name}</option>
                ))}
              </select>

              <div className="flex gap-2">
                <button
                  onClick={() => handleConfirm(job.id)}
                  className="flex-1 text-xs text-dark bg-neon py-1.5 rounded-lg font-semibold font-sora hover:bg-neon-hover transition-colors"
                >
                  Confirm
                </button>
                <button
                  onClick={() => handleReject(job.id)}
                  className="flex-1 text-xs text-red-400 border border-red-400/30 py-1.5 rounded-lg hover:bg-red-400/10 transition-colors font-sora"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
