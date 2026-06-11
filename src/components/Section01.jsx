
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

<<<<<<< HEAD:src/componente/Section01.jsx
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
=======
    return (
        <>
            {/* <!-- Section 01 --> */}
            <section className="flex flex-col ">

                {/* <!-- Nav Bar เคลื่อนที่--> */}
                <div className="marquee-strip">
                    <div className="marquee-inner">
                        {/* <!-- duplicate for seamless loop --> */}
                        <span className="marquee-item">NIKE <span className="marquee-dot"></span></span>
                        <span className="marquee-item">ADIDAS <span className="marquee-dot"></span></span>
                        <span className="marquee-item">ASICS <span className="marquee-dot"></span></span>
                        <span className="marquee-item">BROOKS <span className="marquee-dot"></span></span>
                        <span className="marquee-item">HOKA <span className="marquee-dot"></span></span>
                        <span className="marquee-item">NEW BALANCE <span className="marquee-dot"></span></span>
                        <span className="marquee-item">SALOMON <span className="marquee-dot"></span></span>
                        <span className="marquee-item">MIZUNO <span className="marquee-dot"></span></span>
                        <span className="marquee-item">SAUCONY <span className="marquee-dot"></span></span>
                        <span className="marquee-item">NIKE <span className="marquee-dot"></span></span>
                        <span className="marquee-item">ADIDAS <span className="marquee-dot"></span></span>
                        <span className="marquee-item">ASICS <span className="marquee-dot"></span></span>
                        <span className="marquee-item">BROOKS <span className="marquee-dot"></span></span>
                        <span className="marquee-item">HOKA <span className="marquee-dot"></span></span>
                        <span className="marquee-item">NEW BALANCE <span className="marquee-dot"></span></span>
                        <span className="marquee-item">SALOMON <span className="marquee-dot"></span></span>
                        <span className="marquee-item">MIZUNO <span className="marquee-dot"></span></span>
                        <span className="marquee-item">SAUCONY <span className="marquee-dot"></span></span>
                    </div>
                </div>

                {/* <!-- หัวข้อ --> */}

                <div className="mt-20 ml-15 mb-5">
                    <div>
                        <span className="text-[#C3FF51] text-sm">———— PARTNER BRANDS</span>
                    </div>
                </div>

                <div>
                    <div className="ml-15 text-white">
                        <span className="text-5xl">Choose your brand</span>
                    </div>
                </div>

                {/* <!-- กล่องแบรนด์ --> */}
                <div className="flex justify-center">
                    <div className="mt-15 w-fit h-fit flex gap-10">
                        <div className="w-50 h-50 bg-[rgba(248,250,244,0.05)] text-white flex flex-col items-center justify-center gap-5">
                            <img src="./shoe logo/Nike.jpg" className="w-10 h-10 rounded-md" />
                            <span>Nike</span>
                            <span>10 Models</span>
                        </div>
                        <div className="w-50 h-50 bg-[rgba(248,250,244,0.05)] text-white flex flex-col items-center justify-center gap-5">
                            <img src="./shoe logo/Adidas.jpg" className="w-10 h-10 rounded-md" />
                            <span>Adidas</span>
                            <span>10 Models</span>
                        </div>
                        <div className="w-50 h-50 bg-[rgba(248,250,244,0.05)] text-white flex flex-col items-center justify-center gap-5">
                            <img src="./shoe logo/ASICS.jpg" className="w-10 h-10 rounded-md" />
                            <span>ASIC</span>
                            <span>10 Models</span>
                        </div>
                        <div className="w-50 h-50 bg-[rgba(248,250,244,0.05)] text-white flex flex-col items-center justify-center gap-5">
                            <img src="./shoe logo/Brooks.jpg" className="w-10 h-10 rounded-md" />
                            <span>brooks</span>
                            <span>10 Models</span>
                        </div>
                        <div className="w-50 h-50 bg-[rgba(248,250,244,0.05)] text-white flex flex-col items-center justify-center gap-5">
                            <img src="./shoe logo/Hoka.png" className="w-10 h-10 rounded-md" />
                            <span>Hoka</span>
                            <span>10 Models</span>
                        </div>
                        <div className="w-50 h-50 bg-[rgba(248,250,244,0.05)] text-white flex flex-col items-center justify-center gap-5">
                            <img src="./shoe logo/New Balance.jpg" className="w-10 h-10 rounded-md" />
                            <span>New Balance</span>
                            <span>10 Models</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
>>>>>>> dd6513017cd14769dbc41f58ffdb2ef8f2777899:src/components/Section01.jsx
}

