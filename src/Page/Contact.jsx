// src/pages/Contact.jsx

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#E4E6EB] px-6 md:px-16 py-14">
      <div className="mb-14">
        <p className="text-[10px] uppercase tracking-[3px] text-[#808090] font-bold mb-3">
          CONTACT
        </p>

        <h1 className="text-[32px] md:text-[48px] font-extrabold text-[#1A1A1A] mb-4">
          ติดต่อเรา
        </h1>

        <p className="text-[13px] text-[#808090]">
          ทีมงานพร้อมช่วยเหลือคุณตลอดเวลา
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* INFO */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] p-8">
          <h2 className="text-[20px] font-bold mb-8 text-[#6B717F]">
            ช่องทางติดต่อ
          </h2>

          <div className="space-y-6 text-[13px]">
            <div>
              <p className="text-[#6B717F] mb-1">Email</p>
              <p className="font-semibold text-[#6B717F]">
                support@kinetix.com
              </p>
            </div>

            <div>
              <p className="text-[#6B717F] mb-1">Phone</p>
              <p className="font-semibold text-[#6B717F]">099-999-9999</p>
            </div>

            <div>
              <p className="text-[#6B717F] mb-1">Instagram</p>
              <p className="font-semibold text-[#6B717F]">@kinetix</p>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] p-8">
          <div className="space-y-5">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-[#F8FAFC] border text-[#6B717F] border-[#CBD5E1] rounded-xl px-4 py-3 outline-none focus:border-[#C3FF51]"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full bg-[#F8FAFC] border text-[#6B717F] border-[#CBD5E1] rounded-xl px-4 py-3 outline-none focus:border-[#C3FF51]"
            />

            <textarea
              rows="5"
              placeholder="message"
              className="w-full bg-[#F8FAFC] border text-[#6B717F] border-[#CBD5E1] rounded-xl px-4 py-3 outline-none resize-none focus:border-[#C3FF51]"
            />

            <button className="w-full bg-[#080809] hover:bg-black text-white font-bold py-4 rounded-xl duration-200">
              ส่งข้อความ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
