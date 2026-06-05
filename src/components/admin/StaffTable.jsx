import { useState } from "react";

const MOCK_STAFF = [
  { id: "1", name: "Admin Test", surname: "Kinetix", email: "admin@kinetix.com", phone: "081-000-0001", role: "admin", is_active: true, createdAt: "2026-01-01T00:00:00Z" },
  { id: "2", name: "Ozella", surname: "Smith", email: "ozella@kinetix.com", phone: "082-000-0002", role: "staff", is_active: true, createdAt: "2026-02-10T00:00:00Z" },
  { id: "3", name: "Karen", surname: "Brown", email: "karen@kinetix.com", phone: "083-000-0003", role: "staff", is_active: true, createdAt: "2026-02-15T00:00:00Z" },
  { id: "4", name: "Andres", surname: "Garcia", email: "andres@kinetix.com", phone: "084-000-0004", role: "staff", is_active: false, createdAt: "2026-03-01T00:00:00Z" },
  { id: "5", name: "Laney", surname: "Jones", email: "laney@kinetix.com", phone: "085-000-0005", role: "staff", is_active: true, createdAt: "2026-03-20T00:00:00Z" },
];

const initials = (name, surname) =>
  `${name?.[0] || ""}${surname?.[0] || ""}`.toUpperCase();

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("th-TH", { day: "2-digit", month: "short", year: "numeric" });

const EMPTY_FORM = { name: "", surname: "", email: "", phone: "", role: "staff", is_active: true };

export default function StaffTable() {
  const [staffList, setStaffList] = useState(MOCK_STAFF);
  const [filterRole, setFilterRole] = useState("ALL");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [mode, setMode] = useState(null); // "detail" | "edit" | "add"
  const [form, setForm] = useState(EMPTY_FORM);

  const filtered = staffList.filter((s) => {
    const matchRole = filterRole === "ALL" || s.role === filterRole;
    const matchSearch =
      search === "" ||
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.email.toLowerCase().includes(search.toLowerCase());
    return matchRole && matchSearch;
  });

  const openDetail = (s) => { setSelected(s); setMode("detail"); };
  const openEdit = (s) => { setSelected(s); setForm({ ...s }); setMode("edit"); };
  const openAdd = () => { setSelected(null); setForm(EMPTY_FORM); setMode("add"); };
  const closePanel = () => { setSelected(null); setMode(null); };

  const handleSave = () => {
    if (mode === "edit") {
      setStaffList((prev) => prev.map((s) => (s.id === selected.id ? { ...s, ...form } : s)));
    } else if (mode === "add") {
      const newId = String(Date.now());
      setStaffList((prev) => [...prev, { ...form, id: newId, createdAt: new Date().toISOString() }]);
    }
    closePanel();
  };

  const toggleActive = (id) => {
    setStaffList((prev) => prev.map((s) => (s.id === id ? { ...s, is_active: !s.is_active } : s)));
    if (selected?.id === id) setSelected((prev) => ({ ...prev, is_active: !prev.is_active }));
  };

  return (
    <div className="flex gap-5">
      {/* Left — list */}
      <div className="flex-1 bg-dark-card border border-dark-border rounded-xl p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-semibold font-sora">Staff Management</h3>
          <button
            onClick={openAdd}
            className="text-xs text-dark bg-neon px-3 py-1.5 rounded-lg font-semibold font-sora hover:bg-neon-hover transition-colors"
          >
            + เพิ่ม Staff
          </button>
        </div>

        {/* Search */}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="ค้นหาชื่อหรือ email..."
          className="w-full bg-dark-elevated border border-dark-border text-white text-sm rounded-lg px-3 py-2 font-sora placeholder-gray-600 focus:outline-none focus:border-neon/50 mb-3"
        />

        {/* Filter role */}
        <div className="flex gap-2 mb-4">
          {["ALL", "admin", "staff"].map((r) => (
            <button
              key={r}
              onClick={() => setFilterRole(r)}
              className={`text-xs px-3 py-1.5 rounded-lg border font-sora transition-colors ${
                filterRole === r
                  ? "bg-neon/10 text-neon border-neon/30"
                  : "text-gray-400 border-dark-border hover:text-white"
              }`}
            >
              {r === "ALL" ? `ทั้งหมด (${staffList.length})` : `${r} (${staffList.filter((s) => s.role === r).length})`}
            </button>
          ))}
        </div>

        {/* List */}
        <div className="flex flex-col gap-2">
          {filtered.length === 0 && (
            <p className="text-gray-500 text-sm font-sora text-center py-6">ไม่พบรายการ</p>
          )}
          {filtered.map((s) => (
            <div
              key={s.id}
              onClick={() => openDetail(s)}
              className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-colors ${
                selected?.id === s.id
                  ? "border-neon/40 bg-neon/5"
                  : "border-dark-border hover:bg-dark-elevated/50"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-neon/10 border border-neon/20 flex items-center justify-center text-neon text-xs font-semibold font-sora flex-shrink-0">
                  {initials(s.name, s.surname)}
                </div>
                <div>
                  <p className="text-white text-sm font-medium font-sora">{s.name} {s.surname}</p>
                  <p className="text-gray-400 text-xs font-sora">{s.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-xs px-2 py-0.5 rounded-full border font-sora ${
                  s.role === "admin" ? "bg-cyan/10 text-cyan border-cyan/20" : "bg-neon/10 text-neon border-neon/20"
                }`}>{s.role}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full border font-sora ${
                  s.is_active ? "bg-green-500/10 text-green-400 border-green-500/20" : "bg-red-500/10 text-red-400 border-red-500/20"
                }`}>{s.is_active ? "Active" : "Inactive"}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right — detail / edit / add panel */}
      {mode && (
        <div className="w-72 bg-dark-card border border-dark-border rounded-xl p-5 flex flex-col gap-4 self-start">
          <div className="flex items-center justify-between">
            <h4 className="text-white font-semibold font-sora">
              {mode === "detail" ? "รายละเอียด" : mode === "edit" ? "แก้ไข Staff" : "เพิ่ม Staff"}
            </h4>
            <button onClick={closePanel} className="text-gray-500 hover:text-white text-lg leading-none">✕</button>
          </div>

          {/* Detail mode */}
          {mode === "detail" && selected && (
            <>
              <div className="flex flex-col items-center gap-2 py-2">
                <div className="w-14 h-14 rounded-full bg-neon/10 border border-neon/20 flex items-center justify-center text-neon text-lg font-semibold font-sora">
                  {initials(selected.name, selected.surname)}
                </div>
                <p className="text-white font-semibold font-sora">{selected.name} {selected.surname}</p>
                <div className="flex gap-2">
                  <span className={`text-xs px-2 py-0.5 rounded-full border font-sora ${
                    selected.role === "admin" ? "bg-cyan/10 text-cyan border-cyan/20" : "bg-neon/10 text-neon border-neon/20"
                  }`}>{selected.role}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full border font-sora ${
                    selected.is_active ? "bg-green-500/10 text-green-400 border-green-500/20" : "bg-red-500/10 text-red-400 border-red-500/20"
                  }`}>{selected.is_active ? "Active" : "Inactive"}</span>
                </div>
              </div>

              <div className="flex flex-col gap-3 border-t border-dark-border pt-4">
                {[
                  { label: "Email", value: selected.email },
                  { label: "Phone", value: selected.phone },
                  { label: "เพิ่มเมื่อ", value: formatDate(selected.createdAt) },
                ].map((f) => (
                  <div key={f.label}>
                    <p className="text-xs text-gray-500 font-sora">{f.label}</p>
                    <p className="text-sm text-white font-sora">{f.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => openEdit(selected)}
                  className="flex-1 text-xs text-neon border border-neon/30 py-2 rounded-lg hover:bg-neon/10 transition-colors font-sora"
                >
                  Edit
                </button>
                <button
                  onClick={() => toggleActive(selected.id)}
                  className={`flex-1 text-xs py-2 rounded-lg border transition-colors font-sora ${
                    selected.is_active
                      ? "text-red-400 border-red-400/30 hover:bg-red-400/10"
                      : "text-green-400 border-green-400/30 hover:bg-green-400/10"
                  }`}
                >
                  {selected.is_active ? "Deactivate" : "Activate"}
                </button>
              </div>
            </>
          )}

          {/* Edit / Add mode */}
          {(mode === "edit" || mode === "add") && (
            <>
              <div className="flex flex-col gap-3">
                {[
                  { key: "name", label: "ชื่อ", type: "text" },
                  { key: "surname", label: "นามสกุล", type: "text" },
                  { key: "email", label: "Email", type: "email" },
                  { key: "phone", label: "Phone", type: "text" },
                ].map((f) => (
                  <div key={f.key}>
                    <label className="text-xs text-gray-500 font-sora mb-1 block">{f.label}</label>
                    <input
                      type={f.type}
                      value={form[f.key]}
                      onChange={(e) => setForm((prev) => ({ ...prev, [f.key]: e.target.value }))}
                      className="w-full bg-dark-elevated border border-dark-border text-white text-sm rounded-lg px-3 py-2 font-sora focus:outline-none focus:border-neon/50"
                    />
                  </div>
                ))}

                <div>
                  <label className="text-xs text-gray-500 font-sora mb-1 block">Role</label>
                  <select
                    value={form.role}
                    onChange={(e) => setForm((prev) => ({ ...prev, role: e.target.value }))}
                    className="w-full bg-dark-elevated border border-dark-border text-white text-sm rounded-lg px-3 py-2 font-sora focus:outline-none focus:border-neon/50"
                  >
                    <option value="staff">staff</option>
                    <option value="admin">admin</option>
                  </select>
                </div>

                <div className="flex items-center justify-between p-3 bg-dark-elevated rounded-lg border border-dark-border">
                  <span className="text-sm text-gray-300 font-sora">is_active</span>
                  <button
                    onClick={() => setForm((prev) => ({ ...prev, is_active: !prev.is_active }))}
                    className={`w-10 h-5 rounded-full transition-colors relative ${form.is_active ? "bg-neon" : "bg-dark-border"}`}
                  >
                    <span className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all ${form.is_active ? "left-5" : "left-0.5"}`} />
                  </button>
                </div>
              </div>

              <div className="flex gap-2 mt-2">
                <button
                  onClick={handleSave}
                  className="flex-1 text-sm text-dark bg-neon py-2 rounded-lg font-semibold font-sora hover:bg-neon-hover transition-colors"
                >
                  {mode === "edit" ? "บันทึก" : "เพิ่ม Staff"}
                </button>
                <button
                  onClick={closePanel}
                  className="flex-1 text-sm text-gray-400 border border-dark-border py-2 rounded-lg font-sora hover:bg-dark-elevated transition-colors"
                >
                  ยกเลิก
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
