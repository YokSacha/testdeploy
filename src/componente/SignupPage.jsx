import { useState } from "react";

// ค่าเริ่มต้นของ form ทั้งหมด
const initialFormData = {
  // Personal Information
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  shoeSize: "",

  // Bank Information
  bankName: "",
  accountNumber: "",
  accountName: "",

  // Security
  password: "",
  confirmPassword: "",

  // Terms
  agreeTerms: false,
  ageConfirm: false,
};

export default function SignupPage() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [previewData, setPreviewData] = useState(null);

  // Handler สำหรับ input ทุกชนิด
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // ลบ error ของ field นั้นทันทีที่ user แก้ไข
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Validation ทุก field
  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "กรุณากรอกชื่อ";
    if (!formData.lastName.trim()) newErrors.lastName = "กรุณากรอกนามสกุล";

    if (!formData.email.trim()) {
      newErrors.email = "กรุณากรอกอีเมล";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "รูปแบบอีเมลไม่ถูกต้อง";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "กรุณากรอกเบอร์โทรศัพท์";
    } else if (!/^\d{9,15}$/.test(formData.phone.replace(/[-\s]/g, ""))) {
      newErrors.phone = "เบอร์โทรศัพท์ไม่ถูกต้อง";
    }

    if (!formData.address.trim()) newErrors.address = "กรุณากรอกที่อยู่";

    if (!formData.shoeSize) {
      newErrors.shoeSize = "กรุณากรอกไซส์รองเท้า";
    } else if (formData.shoeSize < 30 || formData.shoeSize > 60) {
      newErrors.shoeSize = "ไซส์รองเท้าต้องอยู่ระหว่าง 30-60";
    }

    if (!formData.bankName.trim()) newErrors.bankName = "กรุณากรอกชื่อธนาคาร";
    if (!formData.accountNumber.trim()) {
      newErrors.accountNumber = "กรุณากรอกเลขบัญชี";
    } else if (!/^\d{10,16}$/.test(formData.accountNumber.replace(/[-\s]/g, ""))) {
      newErrors.accountNumber = "เลขบัญชีต้องเป็นตัวเลข 10-16 หลัก";
    }
    if (!formData.accountName.trim()) newErrors.accountName = "กรุณากรอกชื่อบัญชี";

    if (!formData.password) {
      newErrors.password = "กรุณากรอกรหัสผ่าน";
    } else if (formData.password.length < 8) {
      newErrors.password = "รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "กรุณายืนยันรหัสผ่าน";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "รหัสผ่านไม่ตรงกัน";
    }

    if (!formData.agreeTerms) newErrors.agreeTerms = "กรุณายอมรับเงื่อนไข";
    if (!formData.ageConfirm) newErrors.ageConfirm = "กรุณายืนยันอายุ";

    return newErrors;
  };

  // เตรียม payload สำหรับส่งไป database (ไม่รวม password ซ้ำ และ terms checkbox)
  const buildPayload = () => ({
    personalInfo: {
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      fullName: `${formData.firstName.trim()} ${formData.lastName.trim()}`,
      email: formData.email.trim().toLowerCase(),
      phone: formData.phone.trim(),
      address: formData.address.trim(),
      shoeSize: Number(formData.shoeSize),
    },
    bankInfo: {
      bankName: formData.bankName.trim(),
      accountNumber: formData.accountNumber.trim(),
      accountName: formData.accountName.trim(),
    },
    security: {
      password: formData.password, // ในงานจริงควร hash ก่อนส่ง
    },
    meta: {
      agreedToTerms: formData.agreeTerms,
      ageConfirmed: formData.ageConfirm,
      registeredAt: new Date().toISOString(),
      accountStatus: "active",
      rejectCount: 0,
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Scroll ขึ้นไปหา error แรก
      const firstErrorField = document.querySelector(".error-field");
      if (firstErrorField) firstErrorField.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    const payload = buildPayload();
    setPreviewData(payload);
    setSubmitted(true);

    // =========================================================
    // ตรงนี้คือจุดที่จะส่งข้อมูลไป backend / database
    // ตัวอย่างเช่น:
    //
    // const response = await fetch("/api/register", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(payload),
    // });
    // const result = await response.json();
    // =========================================================

    console.log("✅ Payload ready to send to database:", JSON.stringify(payload, null, 2));
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setErrors({});
    setSubmitted(false);
    setPreviewData(null);
  };

  // Component แสดง error ใต้ input
  const ErrorMsg = ({ field }) =>
    errors[field] ? (
      <p className="text-red-400 text-xs mt-1 ml-1">{errors[field]}</p>
    ) : null;

  // class สำหรับ input ปกติ vs มี error
  const inputClass = (field) =>
    `w-full bg-black border rounded-xl px-4 py-3 focus:outline-none transition-colors ${
      errors[field]
        ? "border-red-500 focus:border-red-400 error-field"
        : "border-zinc-700 focus:border-lime-400"
    }`;

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-6 border-b border-zinc-900">
        <div className="text-3xl font-bold tracking-wide">
          KINETI<span className="text-lime-400">X</span>
        </div>
        <div className="hidden md:flex items-center gap-16 text-sm text-zinc-400">
          <a href="#" className="hover:text-lime-400 transition-colors">Rental</a>
          <a href="#" className="hover:text-lime-400 transition-colors">Brand</a>
          <a href="#" className="hover:text-lime-400 transition-colors">How to</a>
          <a href="#" className="hover:text-lime-400 transition-colors">Contact</a>
        </div>
        <button className="bg-lime-400 text-black px-8 py-3 rounded-2xl font-semibold hover:scale-105 transition-transform">
          Login
        </button>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left Content */}
        <div className="space-y-8">
          <div>
            <p className="text-lime-400 uppercase tracking-[0.2em] text-sm mb-4">
              Customer Registration
            </p>
            <h1 className="text-5xl font-bold leading-tight">
              Join the <span className="text-lime-400">KINETIX</span>
              <br />
              Running Shoe Rental Platform
            </h1>
            <p className="text-zinc-400 mt-6 max-w-lg leading-relaxed">
              Register your account to start renting premium running shoe,
              manage your profile, and track your rental history.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { title: "Profile Data", desc: "Store customer information including full name, email, phone number, address, and shoe size." },
              { title: "Bank Information", desc: "Securely save bank name, account number, and account owner details for refund processing." },
              { title: "Account Status", desc: "System tracks reject count, account status, suspended date, and account activity." },
              { title: "Secure Access", desc: "Your account is protected with authentication and encrypted password management." },
            ].map((card) => (
              <div key={card.title} className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6">
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* แสดง JSON Payload หลัง submit สำเร็จ */}
          {submitted && previewData && (
            <div className="bg-zinc-950 border border-lime-400/30 rounded-3xl p-6 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
                <h3 className="text-lime-400 font-semibold text-sm uppercase tracking-wider">
                  Data Ready — Payload Preview
                </h3>
              </div>
              <p className="text-zinc-500 text-xs">
                ข้อมูลด้านล่างพร้อมส่งไป API / Database แล้ว
              </p>
              <pre className="text-xs text-zinc-300 bg-black rounded-xl p-4 overflow-auto max-h-64 border border-zinc-800">
                {JSON.stringify(previewData, null, 2)}
              </pre>
            </div>
          )}
        </div>

        {/* Register Form */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-[32px] p-8 shadow-2xl shadow-lime-500/10">
          {!submitted ? (
            <>
              <div className="mb-8 text-center">
                <h2 className="text-4xl font-bold">Create Account</h2>
                <p className="text-zinc-400 mt-3">Join the Kinetix ecosystem today</p>
              </div>

              <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                {/* Personal Information */}
                <div>
                  <h3 className="text-lime-400 font-semibold mb-4 text-sm uppercase tracking-wider">
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={inputClass("firstName")}
                      />
                      <ErrorMsg field="firstName" />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={inputClass("lastName")}
                      />
                      <ErrorMsg field="lastName" />
                    </div>
                  </div>

                  <div className="mt-4 space-y-4">
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClass("email")}
                      />
                      <ErrorMsg field="email" />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClass("phone")}
                      />
                      <ErrorMsg field="phone" />
                    </div>
                    <div>
                      <textarea
                        name="address"
                        placeholder="Address"
                        rows={3}
                        value={formData.address}
                        onChange={handleChange}
                        className={`${inputClass("address")} resize-none`}
                      />
                      <ErrorMsg field="address" />
                    </div>
                    <div>
                      <input
                        type="number"
                        name="shoeSize"
                        placeholder="Shoe Size"
                        value={formData.shoeSize}
                        onChange={handleChange}
                        className={inputClass("shoeSize")}
                      />
                      <ErrorMsg field="shoeSize" />
                    </div>
                  </div>
                </div>

                {/* Bank Information */}
                <div>
                  <h3 className="text-lime-400 font-semibold mb-4 text-sm uppercase tracking-wider">
                    Bank Information
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <input
                        type="text"
                        name="bankName"
                        placeholder="Bank Name"
                        value={formData.bankName}
                        onChange={handleChange}
                        className={inputClass("bankName")}
                      />
                      <ErrorMsg field="bankName" />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="accountNumber"
                        placeholder="Account Number"
                        value={formData.accountNumber}
                        onChange={handleChange}
                        className={inputClass("accountNumber")}
                      />
                      <ErrorMsg field="accountNumber" />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="accountName"
                        placeholder="Account Name"
                        value={formData.accountName}
                        onChange={handleChange}
                        className={inputClass("accountName")}
                      />
                      <ErrorMsg field="accountName" />
                    </div>
                  </div>
                </div>

                {/* Security */}
                <div>
                  <h3 className="text-lime-400 font-semibold mb-4 text-sm uppercase tracking-wider">
                    Security
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className={inputClass("password")}
                      />
                      <ErrorMsg field="password" />
                    </div>
                    <div>
                      <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className={inputClass("confirmPassword")}
                      />
                      <ErrorMsg field="confirmPassword" />
                    </div>
                  </div>
                </div>

                {/* Terms */}
                <div className="space-y-3 text-sm text-zinc-400 pt-2">
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                        className="mt-1 accent-lime-400"
                      />
                      <span>I agree to the Terms of Service and Privacy Policy.</span>
                    </label>
                    <ErrorMsg field="agreeTerms" />
                  </div>
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="ageConfirm"
                        checked={formData.ageConfirm}
                        onChange={handleChange}
                        className="mt-1 accent-lime-400"
                      />
                      <span>I confirm that I am over 20 years old.</span>
                    </label>
                    <ErrorMsg field="ageConfirm" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-lime-400 text-black py-4 rounded-2xl font-bold hover:scale-[1.01] transition-transform mt-4"
                >
                  + CREATE ACCOUNT
                </button>

                <p className="text-center text-zinc-500 text-sm pt-2">
                  Already have an account?{" "}
                  <span className="text-white hover:text-lime-400 cursor-pointer">Sign In</span>
                </p>
              </form>
            </>
          ) : (
            /* Success State */
            <div className="flex flex-col items-center justify-center py-16 space-y-6 text-center">
              <div className="w-20 h-20 rounded-full bg-lime-400/10 border border-lime-400/30 flex items-center justify-center">
                <svg className="w-10 h-10 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl font-bold">Account Created!</h2>
                <p className="text-zinc-400 mt-2">
                  ข้อมูลถูกเก็บแล้ว พร้อมส่งไปยัง database
                </p>
                <p className="text-lime-400 font-medium mt-1">
                  {previewData?.personalInfo?.fullName}
                </p>
              </div>
              <div className="w-full bg-black rounded-2xl p-4 border border-zinc-800 text-left space-y-2">
                <p className="text-xs text-zinc-500 uppercase tracking-wider">ข้อมูลที่บันทึก</p>
                {[
                  ["Email", previewData?.personalInfo?.email],
                  ["Phone", previewData?.personalInfo?.phone],
                  ["Shoe Size", previewData?.personalInfo?.shoeSize],
                  ["Bank", previewData?.bankInfo?.bankName],
                  ["Account", previewData?.bankInfo?.accountNumber],
                  ["Registered At", new Date(previewData?.meta?.registeredAt).toLocaleString("th-TH")],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between text-sm">
                    <span className="text-zinc-500">{label}</span>
                    <span className="text-white">{value}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={handleReset}
                className="w-full border border-zinc-700 text-zinc-300 py-3 rounded-2xl font-semibold hover:border-lime-400 hover:text-lime-400 transition-colors"
              >
                Register Another Account
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
