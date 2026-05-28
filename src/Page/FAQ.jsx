// src/pages/FAQ.jsx

const faq = [
  {
    q: "รองเท้าทำความสะอาดไหม ?",
    a: "รองเท้าทุกคู่ผ่านการฆ่าเชื้อและทำความสะอาดก่อนจัดส่ง",
  },
  {
    q: "ส่งคืนยังไง ?",
    a: "มีใบส่งคืนให้ในกล่อง สามารถส่งคืนผ่านขนส่งได้ทันที",
  },
  {
    q: "เปลี่ยนไซซ์ได้ไหม ?",
    a: "สามารถเปลี่ยนไซซ์ได้ภายใน 24 ชั่วโมงหลังได้รับสินค้า",
  },
];


export default function FAQ() {
  return (
    <div className="min-h-screen bg-[#E4E6EB] px-6 md:px-16 py-14">
      <div className="mb-14">
        <p className="text-[10px] uppercase tracking-[3px] text-[#808090] font-bold mb-3">
          FAQ
        </p>

        <h1 className="text-[32px] md:text-[48px] font-extrabold text-[#1A1A1A]">
          คำถามที่พบบ่อย
        </h1>
      </div>

      <div className="space-y-5">
        {faq.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-[#E2E8F0] rounded-2xl p-6"
          >
            <h2 className="text-[20px] font-bold mb-3 text-[#1A1A1A]">
              {item.q}
            </h2>

            <p className="text-[13px] text-[#808090] leading-relaxed">
              {item.a}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}