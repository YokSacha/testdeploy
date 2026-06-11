export default function Section03() {
  return (
    <section className="bg-black text-white py-20 lg:py-32 px-6 lg:px-8">
      <div className="mx-auto max-w-[1560px]">
        <div className="rounded-[40px] bg-gradient-to-r from-[#C3FF51] to-[#00E5FF] p-12 md:p-16 lg:p-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 leading-tight">
                เพิ่มพูน
                <br />
                รายได้พิเศษ
              </h2>
              <p className="text-lg text-black/80 mb-8 max-w-lg">
                ปล่อยให้รองเท้าของคุณหา "รายได้พิเศษ" แบบง่าย ๆ ไม่ต้องทำอะไรมาก เพียง
              </p>
              <button className="inline-flex items-center justify-center rounded-3xl bg-black text-[#C3FF51] px-8 py-4 text-base font-semibold hover:bg-black/80 transition">
                เริ่มปล่อยเช่า
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl bg-white/20 backdrop-blur border border-white/30 p-6 text-center">
                <p className="text-3xl font-extrabold text-black mb-2">150+</p>
                <p className="text-sm text-black/80">รองเท้าปล่อยเช่าแล้ว</p>
              </div>
              <div className="rounded-3xl bg-white/20 backdrop-blur border border-white/30 p-6 text-center">
                <p className="text-3xl font-extrabold text-black mb-2">฿5.2M</p>
                <p className="text-sm text-black/80">รายได้ทั้งสิ้น</p>
              </div>
              <div className="rounded-3xl bg-white/20 backdrop-blur border border-white/30 p-6 text-center">
                <p className="text-3xl font-extrabold text-black mb-2">4.8★</p>
                <p className="text-sm text-black/80">คะแนนเฉลี่ย</p>
              </div>
              <div className="rounded-3xl bg-white/20 backdrop-blur border border-white/30 p-6 text-center">
                <p className="text-3xl font-extrabold text-black mb-2">24/7</p>
                <p className="text-sm text-black/80">ทีมสนับสนุน</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
