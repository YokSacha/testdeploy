import Navbar from "./Navbar";

const rentalSteps = [
  {
    number: "01",
    title: "สมัครและยืนยันตัวตน",
    description:
      "สร้างบัญชี KenetiX พร้อมข้อมูลติดต่อ ไซส์รองเท้า และข้อมูลสำหรับเงินประกัน เพื่อให้ระบบเตรียมการเช่าได้ถูกต้อง",
    meta: "Profile setup",
  },
  {
    number: "02",
    title: "เลือกรองเท้าที่เหมาะกับคุณ",
    description:
      "เลือกแบรนด์ รุ่น ไซส์ และประเภทการวิ่งจาก catalog ก่อนตรวจสอบสถานะรองเท้าว่าพร้อมให้เช่าในช่วงวันที่ต้องการ",
    meta: "Shoe catalog",
  },
  {
    number: "03",
    title: "จองวันและชำระเงิน",
    description:
      "กำหนดวันรับ-คืน ตรวจสอบค่าเช่า เงินประกัน และรายละเอียดคำสั่งเช่า จากนั้นชำระเงินเพื่อยืนยัน booking",
    meta: "Booking payment",
  },
  {
    number: "04",
    title: "รับรองเท้าไปใช้งาน",
    description:
      "รับรองเท้าที่หน้าร้านหรือเลือกจัดส่งตามที่อยู่ ระบบจะอัปเดตสถานะการเช่าให้ติดตามได้ตลอดช่วงใช้งาน",
    meta: "Pickup delivery",
  },
  {
    number: "05",
    title: "คืนรองเท้าและรับเงินประกัน",
    description:
      "คืนรองเท้าตามกำหนด ทีมงานตรวจสภาพ แล้วระบบสรุปยอดคืนเงินประกันหรือค่าเสียหายอย่างโปร่งใส",
    meta: "Return refund",
  },
];

const checkpoints = [
  "เลือกไซส์และรุ่นจากข้อมูลจริง",
  "เห็นยอดค่าเช่าและเงินประกันก่อนจ่าย",
  "ติดตามสถานะคำสั่งเช่าได้",
  "มีขั้นตอนคืนและ refund ชัดเจน",
];

export default function HowItWorks() {
  return (
    <main className="min-h-screen bg-kinetix-black text-kinetix-white">
      <Navbar active="how-to" />

      <section className="border-y border-kinetix-border/80">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-12 lg:py-20">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-kinetix-lime">
              How KenetiX Works
            </p>
            <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              เช่ารองเท้าวิ่งให้พร้อมซ้อม ในไม่กี่ขั้นตอน
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              KenetiX
              ช่วยให้คุณทดลองรองเท้าวิ่งระดับพรีเมียมก่อนตัดสินใจซื้อจริง
              เลือกรุ่น จองวัน ชำระเงิน รับรองเท้า
              และคืนผ่านระบบเดียวที่ติดตามสถานะได้ตั้งแต่ต้นจนจบ
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="/#signup"
                className="inline-flex h-12 items-center justify-center gap-3 rounded-lg bg-kinetix-lime px-6 text-sm font-bold text-black transition-transform hover:scale-[1.02]"
              >
                เริ่มเช่าเลย
                <span aria-hidden="true">-&gt;</span>
              </a>
              <a
                href="/"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-zinc-700 px-6 text-sm font-semibold text-white transition-colors hover:border-kinetix-aqua hover:text-kinetix-aqua"
              >
                กลับหน้าแรก
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              {checkpoints.map((item) => (
                <div
                  key={item}
                  className="border-l border-kinetix-lime/60 pl-3"
                >
                  <p className="text-xs leading-5 text-zinc-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950">
            <img
              src="/how-it-works-shoe.png"
              alt="รองเท้าวิ่งสำหรับระบบเช่า KenetiX"
              className="h-full min-h-[420px] w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-black/80 px-5 py-4 backdrop-blur-md sm:px-6">
              <div className="grid grid-cols-3 gap-3 text-center">
                <div>
                  <p className="text-2xl font-bold text-kinetix-lime">5</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-zinc-400">
                    Steps
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-kinetix-aqua">24h</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-zinc-400">
                    Pickup
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">100%</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-zinc-400">
                    Trackable
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        {" "}
        <div className="flex flex-col justify-between gap-6 border-b border-zinc-800 pb-8 lg:flex-row lg:items-end">
          {" "}
          <div>
            {" "}
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-kinetix-aqua">
              {" "}
              Experience Flow{" "}
            </p>{" "}
            <h2 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl">
              {" "}
              From booking to finish line{" "}
            </h2>{" "}
          </div>{" "}
          <p className="max-w-xl text-sm leading-7 text-zinc-400">
            {" "}
            Seamlessly rent premium running gear through the KINETIX ecosystem —
            from account setup and shoe selection to booking, live rental
            tracking, and instant refund processing after return.
          </p>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-5">
          {rentalSteps.map((step) => (
            <article
              key={step.number}
              className="flex min-h-[300px] flex-col justify-between rounded-lg border border-zinc-800 bg-white/[0.03] p-5 transition-colors hover:border-kinetix-lime/70"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-4xl font-black leading-none text-kinetix-lime">
                    {step.number}
                  </span>
                  <span className="rounded-md border border-zinc-800 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-500">
                    {step.meta}
                  </span>
                </div>
                <h3 className="mt-8 text-2xl font-bold leading-tight text-white">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  {step.description}
                </p>
              </div>
              <div className="mt-8 h-1 w-full rounded-full bg-zinc-800">
                <div className="h-1 rounded-full bg-gradient-to-r from-kinetix-lime to-kinetix-aqua" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-zinc-800 bg-zinc-950/70">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-kinetix-lime">
              Why it feels simple
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
              ทุกสถานะถูกออกแบบให้ตรวจสอบได้
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Booking", "ระบบบันทึกวันรับ-คืน ยอดชำระ และสถานะคำสั่งเช่า"],
              [
                "Inventory",
                "รองเท้าแต่ละคู่มีสถานะพร้อมเช่า กำลังเช่า หรือรอตรวจสภาพ",
              ],
              [
                "Payment",
                "แยกค่าเช่า เงินประกัน และข้อมูล refund หลังคืนรองเท้า",
              ],
              [
                "Customer",
                "ข้อมูลผู้ใช้ช่วยให้แนะนำไซส์และติดต่อระหว่างการเช่าได้ง่าย",
              ],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="rounded-lg border border-zinc-800 bg-black p-5"
              >
                <h3 className="text-lg font-bold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="flex flex-col items-start justify-between gap-8 rounded-lg border border-kinetix-lime/40 bg-kinetix-lime px-6 py-8 text-black sm:px-8 lg:flex-row lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em]">
              Ready to run
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
              เลือกรองเท้าคู่ต่อไป แล้วเริ่มทดสอบฟีลจริงบนเส้นทางของคุณ
            </h2>
          </div>
          <a
            href="/#signup"
            className="inline-flex h-12 shrink-0 items-center justify-center rounded-lg bg-black px-6 text-sm font-bold text-white transition-transform hover:scale-[1.02]"
          >
            สมัครและเริ่มเช่า
          </a>
        </div>
      </section>
    </main>
  );
}
