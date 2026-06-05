import { useState } from "react";

const mockNotifications = [
  { id: "1", title: "งานใหม่รอการอนุมัติ — JOB-000013", time: "2 นาทีที่แล้ว", read: false },
  { id: "2", title: "JOB-000011 ส่งสำเร็จแล้ว", time: "1 ชั่วโมงที่แล้ว", read: false },
  { id: "3", title: "สมหมาย ขอยกเลิก JOB-000010", time: "2 ชั่วโมงที่แล้ว", read: false },
  { id: "4", title: "JOB-000009 Driver รับงานแล้ว", time: "3 ชั่วโมงที่แล้ว", read: true },
  { id: "5", title: "JOB-000008 Customer ปฏิเสธการรับของ", time: "เมื่อวาน", read: true },
];

export default function NotificationPanel() {
  const [notifications, setNotifications] = useState(mockNotifications);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const markRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  return (
    <div className="bg-dark-card border border-dark-border rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h3 className="text-white font-semibold font-sora">Notifications</h3>
          {unreadCount > 0 && (
            <span className="text-xs bg-neon/10 text-neon border border-neon/20 px-2 py-0.5 rounded-full font-sora">
              {unreadCount} ใหม่
            </span>
          )}
        </div>
        <button
          onClick={markAllRead}
          className="text-xs text-gray-400 hover:text-neon transition-colors font-sora"
        >
          Mark all read
        </button>
      </div>

      <div className="flex flex-col gap-0">
        {notifications.map((n, i) => (
          <div
            key={n.id}
            onClick={() => markRead(n.id)}
            className={`flex gap-3 items-start px-2 py-3 cursor-pointer hover:bg-dark-elevated/50 transition-colors rounded-lg ${
              i < notifications.length - 1 ? "border-b border-dark-border/50" : ""
            }`}
          >
            <div
              className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                n.read ? "bg-dark-border" : "bg-neon"
              }`}
            />
            <div>
              <p className={`text-sm font-sora ${n.read ? "text-gray-500" : "text-white"}`}>
                {n.title}
              </p>
              <p className="text-xs text-gray-600 font-sora">{n.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
