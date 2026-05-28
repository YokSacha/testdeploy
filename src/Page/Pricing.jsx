// src/pages/Pricing.jsx

export default function Pricing() {
  return (
    <div className="min-h-screen bg-[#E4E6EB] px-6 md:px-16 py-14">
      {/* HEADER */}
      <div className="mb-14">
        <p className="text-[10px] uppercase tracking-[3px] text-[#808090] font-bold mb-3">
          ราคาและแพ็กเกจ
        </p>

        <h1 className="text-[32px] md:text-[48px] font-extrabold text-[#1A1A1A] mb-4">
          เลือกแพ็กเกจที่เหมาะกับคุณ
        </h1>

        <p className="text-[13px] text-[#808090]">
          ทดลองรองเท้าวิ่งก่อนซื้อจริง
        </p>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* CARD */}
        <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8">
          <div className="mb-8">
            <span className="bg-[#C3FF51] text-black text-[11px] px-3 py-1 rounded-lg font-bold">
              BASIC
            </span>
          </div>

          <h2 className="text-[26px] font-extrabold text-[#1A1A1A] mb-1">
            ฿299
          </h2>

          <p className="text-[13px] text-[#808090] mb-8">
            / 3 วัน
          </p>

          <ul className="space-y-4 text-[13px] text-[#1A1A1A]">
            <li>✔ รองเท้า 1 คู่</li>
            <li>✔ ส่งคืนฟรี</li>
            <li>✔ เปลี่ยนไซซ์ได้</li>
          </ul>

          <button className="mt-10 w-full bg-[#C3FF51] hover:bg-[#D3FE51] text-black font-bold py-3 rounded-xl duration-200">
            เช่าเลย
          </button>
        </div>

        {/* PRO */}
        <div className="bg-[#080809] border border-[#C3FF51] rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-[#00E5FF] text-black text-[10px] font-bold px-3 py-1 rounded-bl-xl">
            POPULAR
          </div>

          <div className="mb-8">
            <span className="bg-[#C3FF51] text-black text-[11px] px-3 py-1 rounded-lg font-bold">
              PRO
            </span>
          </div>

          <h2 className="text-[26px] font-extrabold text-white mb-1">
            ฿599
          </h2>

          <p className="text-[13px] text-[#808090] mb-8">
            / 7 วัน
          </p>

          <ul className="space-y-4 text-[13px] text-white">
            <li>✔ รองเท้า 2 คู่</li>
            <li>✔ ส่งด่วนฟรี</li>
            <li>✔ เปลี่ยนรุ่นได้</li>
          </ul>

          <button className="mt-10 w-full bg-gradient-to-r from-[#00FF41] to-[#00E5FF] text-black font-bold py-3 rounded-xl hover:scale-[1.02] duration-200">
            เช่าเลย
          </button>
        </div>

        {/* PREMIUM */}
        <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8">
          <div className="mb-8">
            <span className="bg-[#00E5FF] text-black text-[11px] px-3 py-1 rounded-lg font-bold">
              ELITE
            </span>
          </div>

          <h2 className="text-[26px] font-extrabold text-[#1A1A1A] mb-1">
            ฿999
          </h2>

          <p className="text-[13px] text-[#808090] mb-8">
            / 14 วัน
          </p>

          <ul className="space-y-4 text-[13px] text-[#1A1A1A]">
            <li>✔ รองเท้าไม่จำกัด</li>
            <li>✔ Priority Support</li>
            <li>✔ VIP Delivery</li>
          </ul>

          <button className="mt-10 w-full bg-[#080809] hover:bg-black text-white font-bold py-3 rounded-xl duration-200">
            เช่าเลย
          </button>
        </div>
      </div>
    </div>
  );
}