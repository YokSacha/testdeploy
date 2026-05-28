
const steps = [
  {
    number: "01",
    title: "เลือกรองเท้า",
    description: "เลือกรุ่น แบรนด์ และไซส์ที่ต้องการจาก catalog ออนไลน์",
    icon: "🔍",
  },
  {
    number: "02",
    title: "จองวันที่",
    description: "เลือกรับ-คืน ชำระเงินออนไลน์ปลอดภัย รับ confirmation ทันที",
    icon: "📅",
  },
  {
    number: "03",
    title: "รับรองเท้า",
    description: "รับหน้าร้าน หรือเลือกจัดส่งถึงที่อยู่ภายใน 24 ชั่วโมง",
    icon: "📦",
  },
  {
    number: "04",
    title: "คืนรองเท้า",
    description: "คืนเมื่อหมดสัญญา ไม่ต้องทำความสะอาด เราดูแลให้ทั้งหมด",
    icon: "✅",
  },
];

export default function Section01() {
  return (
    <section className="bg-black text-white py-20 lg:py-32 px-6 lg:px-8">
      <div className="mx-auto max-w-[1560px]">
        <div className="mb-16">
          <p className="text-[13px] font-semibold text-[#C3FF51] uppercase tracking-[0.35em] mb-4">
            -------- ขั้นตอนง่ายๆ
          </p>
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
            เช่า ใน <span className="text-[#C3FF51]">4 ขั้นตอน</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-[28px] border border-[#1f2937] bg-[#0b0c10] p-8 hover:border-[#C3FF51] transition group"
            >
              <div className="text-5xl mb-6">{step.icon}</div>

              <p className="text-6xl font-extrabold text-[#C3FF51] mb-6 leading-none">
                {step.number}
              </p>

              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>

              <p className="text-[15px] text-[#b8bdce] leading-relaxed">
                {step.description}
              </p>

              <div className="mt-6 pt-6 border-t border-[#1f2937]">
                <div className="w-12 h-1 bg-gradient-to-r from-[#00FF41] to-[#00E5FF] rounded-full group-hover:w-20 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

