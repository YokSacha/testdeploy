import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import API from "../api/axios";

const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  shoeSize: "",

  bankName: "",
  accountNumber: "",
  accountName: "",

  password: "",
  confirmPassword: "",

  agreeTerms: false,
  ageConfirm: false,
};

export default function SignupPage() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [previewData, setPreviewData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "Please enter your first name";
    if (!formData.lastName.trim()) newErrors.lastName = "Please enter your last name";

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number";
    } else if (!/^\d{9,15}$/.test(formData.phone.replace(/[-\s]/g, ""))) {
      newErrors.phone = "Invalid phone number";
    }

    if (!formData.address.trim()) newErrors.address = "Please enter your address";

    if (!formData.shoeSize) {
      newErrors.shoeSize = "Please enter your shoe size";
    } else if (formData.shoeSize < 30 || formData.shoeSize > 60) {
      newErrors.shoeSize = "Shoe size must be between 30 and 60";
    }

    if (!formData.bankName.trim()) newErrors.bankName = "Please enter bank name";
    if (!formData.accountNumber.trim()) {
      newErrors.accountNumber = "Please enter account number";
    } else if (!/^\d{10,16}$/.test(formData.accountNumber.replace(/[-\s]/g, ""))) {
      newErrors.accountNumber = "Account number must be 10-16 digits";
    }
    if (!formData.accountName.trim()) newErrors.accountName = "Please enter account name";

    if (!formData.password) {
      newErrors.password = "Please enter password";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.agreeTerms) newErrors.agreeTerms = "Please accept terms";
    if (!formData.ageConfirm) newErrors.ageConfirm = "Please confirm your age";

    return newErrors;
  };

  const buildPayload = () => ({
    name: `${formData.firstName.trim()} ${formData.lastName.trim()}`,
    email: formData.email.trim().toLowerCase(),
    password: formData.password,
    address: formData.address.trim(),
    phone: formData.phone.trim(),
    shoeSize: Number(formData.shoeSize),
    bankInfo: {
      bankName: formData.bankName.trim(),
      accountNumber: formData.accountNumber.trim(),
      accountName: formData.accountName.trim(),
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError("");

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstErrorField = document.querySelector(".error-field");
      if (firstErrorField) firstErrorField.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    const payload = buildPayload();
    setLoading(true);

    try {
      // Step 1: Register the user
      const registerResponse = await API.post("/api/users/register", payload);
      console.log("✅ Registration successful:", registerResponse.data);

      // Step 2: Auto-login with the same credentials
      try {
        const loginResponse = await API.post("/api/users/login", {
          email: payload.email,
          password: payload.password,
        });
        console.log("✅ Auto-login successful:", loginResponse.data);

        // Step 3: Set success state and redirect to dashboard
        setPreviewData({
          ...payload,
          userId: registerResponse.data?.data?._id || loginResponse.data?.user?._id,
        });
        setSubmitted(true);

        setTimeout(() => {
          navigate("/userdashboard");
        }, 1500);

      } catch (loginError) {
        console.error("⚠️ Registration succeeded but auto-login failed:", loginError);
        console.log("Login error response:", loginError.response?.data);

        // Registration worked, but login failed
        setApiError(
          "Account created successfully! However, auto-login failed. Please go to the login page."
        );
        setSubmitted(true);
        // Don't redirect — let user click the button to go to login
      }

    } catch (registerError) {
      console.error("❌ Registration failed:");
      console.log("Error object:", registerError);
      console.log("Error response:", registerError.response);
      console.log("Error response data:", registerError.response?.data);

      const message =
        registerError.response?.data?.message ||
        registerError.response?.data?.error?.message ||
        registerError.message ||
        "Registration failed. Please try again.";

      setApiError(message);

      if (registerError.response?.data?.errors) {
        setErrors(registerError.response.data.errors);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setErrors({});
    setSubmitted(false);
    setPreviewData(null);
    setApiError("");
    setLoading(false);
  };

  const ErrorMsg = ({ field }) =>
    errors[field] ? (
      <p className="text-red-400 text-xs mt-1 ml-1">{errors[field]}</p>
    ) : null;

  const inputClass = (field) =>
    `w-full bg-black border rounded-xl px-4 py-3 focus:outline-none transition-colors ${errors[field]
      ? "border-red-500 focus:border-red-400 error-field"
      : "border-zinc-700 focus:border-lime-400"
    }`;

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
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
              {
                title: "Profile Data",
                desc: "Store customer information including full name, email, phone number, address, and shoe size.",
              },
              {
                title: "Bank Information",
                desc: "Securely save bank name, account number, and account owner details for refund processing.",
              },
              {
                title: "Account Status",
                desc: "System tracks reject count, account status, suspended date, and account activity.",
              },
              {
                title: "Secure Access",
                desc: "Your account is protected with authentication and encrypted password management.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6"
              >
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Show success preview after registration */}
          {submitted && previewData && (
            <div className="bg-zinc-950 border border-lime-400/30 rounded-3xl p-6 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
                <h3 className="text-lime-400 font-semibold text-sm uppercase tracking-wider">
                  Registration Successful
                </h3>
              </div>
              <p className="text-zinc-500 text-xs">
                {apiError
                  ? "Account created! Please login manually."
                  : "Redirecting to your dashboard..."}
              </p>
              {previewData.userId && (
                <p className="text-zinc-500 text-xs">
                  User ID: {previewData.userId}
                </p>
              )}
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

              {/* API Error Message */}
              {apiError && (
                <div className="mb-6 bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-red-400 text-sm">
                  {apiError}
                </div>
              )}

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
                  disabled={loading}
                  className={`w-full py-4 rounded-2xl font-bold transition-all mt-4 ${loading
                    ? "bg-zinc-700 text-zinc-400 cursor-not-allowed"
                    : "bg-lime-400 text-black hover:scale-[1.01]"
                    }`}
                >
                  {loading ? "CREATING ACCOUNT..." : "+ CREATE ACCOUNT"}
                </button>

                <p className="text-center text-zinc-500 text-sm pt-2">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-white hover:text-lime-400 cursor-pointer"
                  >
                    Sign In
                  </Link>
                </p>
              </form>
            </>
          ) : (
            /* Success State */
            <div className="flex flex-col items-center justify-center py-16 space-y-6 text-center">
              <div className="w-20 h-20 rounded-full bg-lime-400/10 border border-lime-400/30 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-lime-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl font-bold">Account Created!</h2>
                {apiError ? (
                  <p className="text-amber-400 mt-2 text-sm">{apiError}</p>
                ) : (
                  <p className="text-zinc-400 mt-2">
                    Redirecting to your dashboard...
                  </p>
                )}
                <p className="text-lime-400 font-medium mt-1">
                  {previewData?.name}
                </p>
              </div>

              {apiError ? (
                /* Show Login button if auto-login failed */
                <button
                  onClick={() => navigate("/login")}
                  className="w-full bg-lime-400 text-black py-3 rounded-2xl font-semibold hover:scale-[1.01] transition-transform"
                >
                  Go to Login
                </button>
              ) : (
                /* Show Dashboard button on full success */
                <button
                  onClick={() => navigate("/userdashboard")}
                  className="w-full bg-lime-400 text-black py-3 rounded-2xl font-semibold hover:scale-[1.01] transition-transform"
                >
                  Go to Dashboard
                </button>
              )}

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