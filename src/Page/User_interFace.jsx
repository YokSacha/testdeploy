import { Search, ArrowRight, ChevronRight, LogIn } from "lucide-react";
import { useKinetix } from "../context/KinetixContext";
import { Link } from "react-router-dom";

export default function User_interFace() {
  const { user, rentals, returnItem } = useKinetix();

  if (!user) {
    return (
      <div className="min-h-screen bg-[#080809] text-white flex flex-col items-center justify-center p-6 text-center">
        <LogIn size={64} className="text-[#C3FF51] mb-6" />
        <h1 className="text-3xl font-bold mb-4">กรุณาเข้าสู่ระบบ</h1>
        <p className="text-[#8f94a5] mb-8 max-w-md">
          คุณต้องเข้าสู่ระบบเพื่อเข้าถึง Dashboard และจัดการรายการเช่าของคุณ
        </p>
        <Link to="/" className="rounded-3xl bg-[#C3FF51] text-black px-8 py-4 font-bold hover:bg-[#D3FE51] transition">
          กลับไปหน้าแรกเพื่อ Login
        </Link>
      </div>
    );
  }

  // Derived data
  const activeRentals = rentals.filter(r => r.status === "กำลังเช่า");
  const historyItems = rentals; // Show all in history

  const cardStats = [
    {
      label: "ยอดคงเหลือ",
      value: "฿7,840",
      note: "+12% จากเดือนก่อน",
      accent: true,
    },
    { label: "รายการเช่า", value: activeRentals.length.toString(), note: "กำลังใช้งาน" },
    { label: "ยอดเช่ารวม", value: rentals.length.toString(), note: "จำนวนคู่ทั้งหมด" },
    {
      label: "กำไรสะสม",
      value: "฿4,956",
      note: "จากการปล่อยเช่า",
      accent: true,
    },
  ];

  const quickFilters = ["All", "Nike", "Adidas", "ASICS", "Hoka", "Brooks"];
  const menuItems = [
    "ภาพรวม",
    "การแจ้งเตือน",
    "ประวัติการเช่า",
    "นัดรับ-ส่ง",
    "บัญชี",
    "ข้อมูลส่วนตัว",
    "ความปลอดภัย",
    "การชำระเงิน",
  ];

  return (
    <>
      <div className="min-h-screen bg-[#080809] text-white font-sora">
        <div className="mx-auto max-w-[1560px] px-6 py-6">
          <header className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between"></header>

          <div className="mt-8 grid gap-6 xl:grid-cols-[320px_minmax(0,1fr)]">
            <aside className="rounded-[32px] border border-[#1f2937] bg-[#0b0c10] p-6 text-[#c1c5d0] shadow-[0_24px_80px_rgba(0,0,0,0.22)]">
              <div className="flex flex-col items-center gap-4 rounded-3xl border border-[#1f2937] bg-[#090a0d] p-6 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#00FF41] to-[#00E5FF] text-2xl font-black text-black">
                  {user.initials}
                </div>
                <div>
                  <p className="text-[22px] font-bold text-white">
                    {user.name}
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.35em] text-[#8f94a5]">
                    {user.role}
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-3 rounded-3xl border border-[#1f2937] bg-[#080809] p-5">
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="rounded-3xl border border-[#1f2937] bg-[#090a0d] p-4">
                    <p className="text-[14px] text-[#8f94a5]">คะแนน</p>
                    <p className="mt-2 text-2xl font-bold text-[#C3FF51]">
                      {user.score}
                    </p>
                  </div>
                  <div className="rounded-3xl border border-[#1f2937] bg-[#090a0d] p-4">
                    <p className="text-[14px] text-[#8f94a5]">เช่าแล้ว</p>
                    <p className="mt-2 text-2xl font-bold text-white">
                      {rentals.length}
                    </p>
                  </div>
                  <div className="rounded-3xl border border-[#1f2937] bg-[#090a0d] p-4">
                    <p className="text-[14px] text-[#8f94a5]">ระดับ</p>
                    <p className="mt-2 text-2xl font-bold text-[#C3FF51]">
                      {user.level}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-7 space-y-3">
                {menuItems.map((item) => (
                  <button
                    key={item}
                    className="w-full rounded-3xl border border-[#1f2937] bg-[#090a0d] px-5 py-4 text-left text-[14px] font-medium text-[#c1c5d0] transition hover:border-[#C3FF51] hover:text-[#C3FF51]"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </aside>

            <main className="space-y-6">
              <section className="rounded-[32px] border border-[#1f2937] bg-[#0b0c10] p-6 lg:p-8">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-2xl">
                    <p className="text-[13px] uppercase tracking-[0.35em] text-[#8f94a5]">
                      ยินดีต้อนรับกลับมา
                    </p>
                    <h1 className="mt-4 text-[32px] font-extrabold text-white sm:text-[42px]">
                      {user.name}
                    </h1>
                    <p className="mt-4 max-w-xl text-[14px] leading-7 text-[#b8bdce]">
                      ยินดีคืนสู่ KINETI X! ดูรายการเช่า รายได้
                      และสถิติของคุณทั้งหมดได้ในที่เดียว.
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-3 rounded-3xl border border-[#1f2937] bg-[#080809] px-5 py-4 text-sm text-[#c1c5d0]">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00FF41] to-[#00E5FF] text-black">
                      !
                    </span>
                    <div>
                      <p className="text-[13px] text-[#8f94a5]">สถานะสมาชิก</p>
                      <p className="font-semibold text-white">{user.role}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {cardStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-3xl border border-[#1f2937] bg-[#090a0d] p-5"
                    >
                      <p className="text-[12px] uppercase tracking-[0.35em] text-[#8f94a5]">
                        {stat.label}
                      </p>
                      <p
                        className={`mt-4 text-[22px] font-extrabold ${stat.accent ? "text-[#C3FF51]" : "text-white"}`}
                      >
                        {stat.value}
                      </p>
                      <p className="mt-2 text-[12px] text-[#7d82a1]">
                        {stat.note}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[32px] border border-[#1f2937] bg-[#0b0c10] p-6 lg:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.35em] text-[#8f94a5]">
                      กำลังเช่าอยู่
                    </p>
                    <h2 className="mt-3 text-[22px] font-bold text-white">
                      รองเท้าที่เปิดให้เช่า
                    </h2>
                  </div>
                  <button className="inline-flex items-center gap-2 rounded-3xl bg-[#C3FF51] px-5 py-3 text-[13px] font-semibold text-black hover:bg-[#D3FE51]">
                    ดูทั้งหมด
                    <ChevronRight size={16} />
                  </button>
                </div>

                <div className="mt-6 space-y-4">
                  {activeRentals.length > 0 ? (
                    activeRentals.map((item) => (
                      <div
                        key={item.id}
                        className="flex flex-col gap-3 rounded-[28px] border border-[#1f2937] bg-[#080809] p-5 sm:flex-row sm:items-center sm:justify-between"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#0c0d12] text-2xl font-bold text-[#C3FF51]">
                            {item.image}
                          </div>
                          <div>
                            <p className="text-[16px] font-semibold text-white">
                              {item.name}
                            </p>
                            <p className="text-[13px] text-[#8f94a5]">
                              {item.brand} - {item.rentDate}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="inline-flex items-center gap-3 rounded-3xl border border-[#1f2937] bg-[#090a0d] px-4 py-3 text-[13px] font-semibold text-[#C3FF51]">
                            <span>฿{item.price}{item.period}</span>
                          </div>
                          <button 
                            onClick={() => returnItem(item.id)}
                            className="rounded-3xl bg-white/10 hover:bg-white/20 px-4 py-3 text-[12px] font-bold text-white transition"
                          >
                            คืนรองเท้า
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-12 border border-dashed border-[#1f2937] rounded-3xl">
                      <p className="text-[#8f94a5]">ไม่มีรายการเช่าในขณะนี้</p>
                    </div>
                  )}
                </div>
              </section>

              <section className="rounded-[32px] border border-[#1f2937] bg-[#0b0c10] p-6 lg:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.35em] text-[#8f94a5]">
                      History
                    </p>
                    <h2 className="mt-3 text-[22px] font-bold text-white">
                      ประวัติรายการ
                    </h2>
                  </div>
                  <button className="rounded-3xl border border-[#1f2937] bg-[#080809] px-5 py-3 text-[13px] font-semibold text-[#C3FF51] hover:border-[#C3FF51]">
                    ดูทั้งหมด
                  </button>
                </div>

                <div className="mt-6 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                  <label className="relative block w-full xl:max-w-[420px]">
                    <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8f94a5]" />
                    <input
                      type="search"
                      placeholder="ค้นหา"
                      className="w-full rounded-3xl border border-[#1f2937] bg-[#080809] py-4 pl-12 pr-4 text-[13px] text-white outline-none placeholder:text-[#63676f]"
                    />
                  </label>

                  <div className="flex flex-wrap gap-3">
                    {quickFilters.map((filter) => (
                      <button
                        key={filter}
                        className="rounded-full border border-[#1f2937] bg-[#090a0d] px-4 py-2 text-[12px] text-[#8f94a5] transition hover:border-[#C3FF51] hover:text-[#C3FF51]"
                      >
                        {filter}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {historyItems.length > 0 ? (
                    historyItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between rounded-[28px] border border-[#1f2937] bg-[#080809] p-5"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[#0c0d12] text-xl font-bold text-[#C3FF51]">
                            {item.image}
                          </div>
                          <div>
                            <p className="text-[15px] font-semibold text-white">
                              {item.name}
                            </p>
                            <p className={`text-[12px] ${item.status === 'คืนแล้ว' ? 'text-gray-500' : 'text-[#C3FF51]'}`}>
                              {item.status}
                            </p>
                          </div>
                        </div>
                        <div className="inline-flex items-center gap-3 text-[13px] text-white">
                          <span className="font-bold">฿{item.price}</span>
                          <ArrowRight size={16} className="text-[#8f94a5]" />
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8 text-[#8f94a5]">ไม่มีประวัติการเช่า</div>
                  )}
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
