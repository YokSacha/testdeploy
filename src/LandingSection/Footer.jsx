import { Link } from "react-router-dom";

export default function Footer() {
  //   const navigate = useNavigate();

  //   const handleNavigate = () => {
  //     navigate("/FAQ");
  //   };

  return (
    <footer className="bg-black text-white   px-8 md:px-16 py-14">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* LEFT */}
        <div>
          <h1 className="text-5xl font-bold mb-4">โลโก้</h1>

          <p className="text-sm text-gray-300 leading-relaxed max-w-[260px]">
            บริการเช่ารองเท้าวิ่งออนไลน์ หลากแบรนด์ชั้นนำ <br />
            สำหรับนักวิ่งทุกระดับ
          </p>
        </div>

        {/* SHIPPING */}
        <div>
          <h2 className="text-[#C3FF51] mb-5 font-medium">ประเภทจัดส่ง</h2>

          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/shipping/normal"
                className="hover:text-[#C3FF51] duration-200"
              >
                จัดส่งปกติ
              </Link>
            </li>

            <li>
              <Link
                to="/shipping/express"
                className="hover:text-[#C3FF51] duration-200"
              >
                จัดส่งด่วน
              </Link>
            </li>
          </ul>
        </div>

        {/* INFO */}
        <div>
          <h2 className="text-[#C3FF51] mb-5 font-medium">ข้อมูล</h2>

          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/how-it-works"
                className="hover:text-[#C3FF51] duration-200"
              >
                วิธีเช่า
              </Link>
            </li>

            <li>
              <Link to="/pricing" className="hover:text-[#C3FF51] duration-200">
                ราคาและแพ็กเกจ
              </Link>
            </li>

            <li>
              <Link to="/faq" className="hover:text-[#C3FF51] duration-200">
                FAQ
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-[#C3FF51] duration-200">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h2 className="text-[#C3FF51] mb-5 font-medium">ติดตาม</h2>

          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/instagram"
                className="hover:text-[#C3FF51] duration-200"
              >
                Instagram
              </Link>
            </li>

            <li>
              <Link
                to="/facebook"
                className="hover:text-[#C3FF51] duration-200"
              >
                Facebook
              </Link>
            </li>

            <li>
              <Link to="/line" className="hover:text-[#C3FF51] duration-200">
                Line OA
              </Link>
            </li>

            <li>
              <Link to="/tiktok" className="hover:text-[#C3FF51] duration-200">
                Tiktok
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-20 text-sm text-gray-300 gap-4">
        <p>© 2026 KINETI X. All right reserved.</p>

        <div className="flex gap-3">
          <Link
            to="/privacy-policy"
            className="hover:text-[#C3FF51] duration-200"
          >
            นโยบายความเป็นส่วนตัว
          </Link>

          <span>/</span>

          <Link to="/terms" className="hover:text-[#C3FF51] duration-200">
            ข้อกำหนดการใช้งาน
          </Link>
        </div>
      </div>
    </footer>
  );
}
