const mockTimeline = {
  "JOB-000001": {
    jobNo: "JOB-000001",
    customer: "สมชาย",
    type: "DELIVERY",
    status: "IN_TRANSIT",
    steps: [
      { status: "WAITING_FOR_ADMIN_CONFIRMATION", done: true, time: "06 Jun 2026 10:00", role: "USER" },
      { status: "WAITING_FOR_DRIVER_CONFIRMATION", done: true, time: "06 Jun 2026 10:30", role: "ADMIN" },
      { status: "DRIVER_CONFIRMED", done: true, time: "06 Jun 2026 10:45", role: "DRIVER" },
      { status: "PICKED_UP", done: true, time: "06 Jun 2026 11:00", role: "DRIVER" },
      { status: "IN_TRANSIT", done: true, time: "06 Jun 2026 11:30", role: "DRIVER" },
      { status: "DELIVERED", done: false, time: null, role: "DRIVER" },
    ],
  },
};

const defaultTimeline = {
  jobNo: "—",
  customer: "—",
  type: "—",
  status: "—",
  steps: [],
};

export default function JobTimeline({ jobId }) {
  const data = (jobId && mockTimeline[jobId]) || defaultTimeline;

  return (
    <div className="bg-dark-card border border-dark-border rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-semibold font-sora">Job Timeline</h3>
        <div className="flex gap-2 items-center">
          <span className="text-gray-400 text-xs font-sora">{data.jobNo}</span>
          {data.status !== "—" && (
            <span className="text-xs bg-cyan/10 text-cyan border border-cyan/20 px-2 py-0.5 rounded-full font-sora">
              {data.status.replace(/_/g, " ")}
            </span>
          )}
        </div>
      </div>

      {data.steps.length === 0 ? (
        <p className="text-gray-500 text-sm font-sora text-center py-8">
          เลือก Job เพื่อดู Timeline
        </p>
      ) : (
        <div className="flex flex-col gap-0">
          {data.steps.map((step, i) => (
            <div key={step.status} className="flex gap-3 items-start">
              <div className="flex flex-col items-center">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 ${
                    step.done
                      ? "bg-neon/20 text-neon"
                      : "bg-dark-elevated border border-dark-border text-gray-600"
                  }`}
                >
                  {step.done ? "✓" : "○"}
                </div>
                {i < data.steps.length - 1 && (
                  <div className={`w-px h-8 ${step.done ? "bg-neon/30" : "bg-dark-border"}`} />
                )}
              </div>
              <div className="pb-4">
                <p className={`text-sm font-sora font-medium ${step.done ? "text-white" : "text-gray-600"}`}>
                  {step.status.replace(/_/g, " ")}
                </p>
                <p className="text-xs text-gray-500 font-sora">
                  {step.done ? step.time : "รอดำเนินการ"} · {step.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
