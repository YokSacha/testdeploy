import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  Upload,
  ArrowRight,
  Plus,
} from "lucide-react";
import { useState } from "react";
// import { Link } from "react-router-dom";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    orderId: "",
    issueType: "เลือกประเภทปัญหา...",
    details: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
    alert("ข้อความของคุณถูกส่งแล้ว! ทีมงานจะติดต่อกลับโดยเร็วที่สุด");
    setFormData({
      name: "",
      email: "",
      phone: "",
      orderId: "",
      issueType: "เลือกประเภทปัญหา...",
      details: "",
    });
  };
  return (
    <div className="min-h-screen bg-[#080809] text-white font-sora">
      {/* MAIN */}
      <div className="px-6 md:px-10 py-10">
        {/* HERO */}
        <div className="mb-14">
          <p className="text-[#C3FF51] text-[32px] font-medium mb-2 uppercase">
            Contact us
          </p>

          <h1 className="text-[48px] font-extrabold leading-none mb-5">
            ติดต่อเรา
          </h1>

          <p className="text-[13px] text-[#808090]">
            มีปัญหาหรือข้อสงสัย ? ทีมงาน Kenetix พร้อมช่วยคุณ
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-[360px_1fr] gap-8">
          {/* LEFT */}
          <div>
            <p className="text-[11px] text-[#808090] mb-5">ช่องทางติดต่อ</p>

            <div className="space-y-4">
              <ContactCard
                icon={<Phone size={22} />}
                title="โทรศัพท์"
                value="02-821-5700"
                sub="เปิดทุกวัน 9.00 - 21.00 น."
                badge="Online"
              />

              <ContactCard
                icon={<Mail size={22} />}
                title="Email"
                value="kinetix@co.th"
              />

              <ContactCard
                icon={<Plus size={22} />}
                title="Line Official Account"
                value="@kinetix"
              />

              <ContactCard
                icon={<Mail size={22} />}
                title="Instagram"
                value="@kinetix"
              />
            </div>

            {/* RESPONSE */}
            <div className="mt-5 bg-[#0f1115] border border-[#C3FF51] rounded-2xl p-5">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#15171d] flex items-center justify-center text-[#C3FF51]">
                  <Clock3 size={20} />
                </div>

                <div>
                  <p className="text-[13px] leading-relaxed">
                    ทีมงานจะ
                    <span className="text-[#C3FF51]">
                      ติดต่อกลับภายใน 24 ชั่วโมง
                    </span>
                    หลังจากได้รับแบบฟอร์มของคุณ
                  </p>
                </div>
              </div>
            </div>

            {/* LOCATION */}
            <div className="mt-6">
              <p className="text-[11px] text-[#808090] mb-4">ที่อยู่สำนักงาน</p>

              <div className="bg-[#1A1C22] border border-[#2A2D35] rounded-2xl p-5">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#15171d] flex items-center justify-center text-[#C3FF51]">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <h3 className="text-[16px] font-semibold mb-2">
                      Kinetix HQ
                    </h3>

                    <p className="text-[13px] text-[#808090] leading-relaxed">
                      3. ไทย เขตจตุจักร <br />
                      เขตบางบัว กรุงเทพมหานคร 10330
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <div className="mb-8">
              <h2 className="text-[26px] font-bold leading-snug mb-3">
                แจ้งปัญหา / ส่งข้อความ <br />
                กรอกแบบฟอร์มด้านล่าง ทีมงานจะรีบดูแลเร็วที่สุด
              </h2>

              <p className="text-[#C3FF51] text-[13px]">* จำเป็นต้องกรอก</p>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* NAME */}
              <div>
                <label className="block text-[16px] font-semibold mb-3">
                  ชื่อ-นามสกุล
                  <span className="text-[#C3FF51]"> *</span>
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="เช่น สมชาย ใจดี"
                  required
                  className="w-full h-[54px] bg-[#1A1C22] border border-[#2A2D35] rounded-xl px-5 outline-none focus:border-[#C3FF51] text-[13px]"
                />
              </div>

              {/* TWO COL */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[16px] font-semibold mb-3">
                    Email
                    <span className="text-[#C3FF51]"> *</span>
                  </label>

                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full h-[54px] bg-[#1A1C22] border border-[#2A2D35] rounded-xl px-5 outline-none focus:border-[#C3FF51] text-[13px]"
                  />
                </div>

                <div>
                  <label className="block text-[16px] font-semibold mb-3">
                    เบอร์โทรศัพท์
                  </label>

                  <input
                    type="text"
                    placeholder="08X-XXX-XXXX"
                    className="w-full h-[54px] bg-[#1A1C22] border border-[#2A2D35] rounded-xl px-5 outline-none focus:border-[#C3FF51] text-[13px]"
                  />
                </div>
              </div>

              {/* ORDER ID */}
              <div>
                <label className="block text-[16px] font-semibold mb-3">
                  หมายเลขออเดอร์ (Order ID)
                </label>

                <input
                  type="text"
                  placeholder="เช่น KNX-2025-00123 (ไม่บังคับแต่ช่วยให้ทีมงานตรวจสอบได้เร็ว)"
                  className="w-full h-[54px] bg-[#1A1C22] border border-[#2A2D35] rounded-xl px-5 outline-none focus:border-[#C3FF51] text-[13px]"
                />
              </div>

              {/* ISSUE TYPE */}
              <div>
                <label className="block text-[16px] font-semibold mb-3">
                  ประเภทปัญหา
                  <span className="text-[#C3FF51]"> *</span>
                </label>

                <select className="w-full h-[54px] bg-[#1A1C22] border border-[#2A2D35] rounded-xl px-5 outline-none focus:border-[#C3FF51] text-[13px]">
                  <option>เลือกประเภทปัญหา...</option>

                  <option>ปัญหาการเช่า</option>

                  <option>ปัญหาการจัดส่ง</option>

                  <option>ปัญหาการชำระเงิน</option>

                  <option>ปัญหาสินค้า</option>
                </select>
              </div>

              {/* DETAIL */}
              <div>
                <label className="block text-[16px] font-semibold mb-3">
                  รายละเอียดปัญหา
                  <span className="text-[#C3FF51]"> *</span>
                </label>

                <textarea
                  rows="7"
                  placeholder="โปรดอธิบายปัญหาของคุณโดยละเอียด เพื่อให้ทีมงานสามารถช่วยเหลือได้อย่างถูกต้องและรวดเร็ว..."
                  className="w-full bg-[#1A1C22] border border-[#2A2D35] rounded-xl px-5 py-5 outline-none resize-none focus:border-[#C3FF51] text-[13px]"
                />
              </div>

              {/* UPLOAD */}
              <div>
                <p className="text-[16px] font-semibold mb-3">
                  แนบรูปภาพ
                  <span className="text-[#808090] text-[13px] font-normal">
                    {" "}
                    (แนะนำสำหรับกรณีร้องเท้ามีปัญหา)
                  </span>
                </p>

                <div className="bg-[#1A1C22] border border-[#2A2D35] rounded-2xl p-5 flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-xl bg-[#15171d] flex items-center justify-center text-[#808090]">
                      <Upload size={22} />
                    </div>

                    <div>
                      <p className="text-[13px] mb-2">คลิกเพื่ออัปโหลดรูปภาพ</p>

                      <p className="text-[11px] text-[#808090]">
                        PNG, JPG, HEIC — ขนาดไม่เกิน 10MB ต่อไฟล์ (สูงสุด 5 รูป)
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="border border-[#C3FF51] text-[#C3FF51] hover:bg-[#C3FF51] hover:text-black duration-200 px-6 py-2 rounded-full text-[12px] font-bold"
                  >
                    +เพิ่ม
                  </button>
                </div>
              </div>

              {/* FOOT */}
              <div className="flex items-end justify-between pt-4">
                <p className="text-[11px] text-[#808090] leading-relaxed max-w-[400px]">
                  ข้อมูลของคุณจะถูกใช้เพื่อแก้ไขปัญหาเท่านั้น <br />
                  และจะไม่ถูกเปิดเผยต่อบุคคลอื่น
                </p>

                <button
                  type="submit"
                  className="bg-[#C3FF51] hover:bg-[#D3FE51] duration-200 text-black font-bold px-8 py-4 rounded-2xl flex items-center gap-3 text-[13px]"
                >
                  ส่งข้อความ
                  <ArrowRight size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

/* CONTACT CARD */

function ContactCard({ icon, title, value, sub, badge }) {
  return (
    <div className="bg-[#1A1C22] border border-[#2A2D35] rounded-2xl p-5 flex items-center gap-5">
      <div className="w-14 h-14 rounded-2xl bg-[#2A2D35] flex items-center justify-center text-[#808090]">
        {icon}
      </div>

      <div className="flex-1">
        <p className="text-[11px] text-[#808090] mb-1">{title}</p>

        <h3 className="text-[26px] font-bold leading-none mb-2">{value}</h3>

        {sub && <p className="text-[11px] text-[#808090]">{sub}</p>}
      </div>

      {badge && (
        <div className="border border-[#C3FF51] text-[#C3FF51] px-3 py-1 rounded-full text-[10px]">
          {badge}
        </div>
      )}
    </div>
  );
}
