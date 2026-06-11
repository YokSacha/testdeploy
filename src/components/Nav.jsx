import { Link } from "react-router-dom";
import { useKinetix } from "../context/KinetixContext";

export default function Nav() {
  const { user, login, logout } = useKinetix();

  const handleLogin = () => {
    login({ name: "สมชาย นิจวัง", email: "somchai@example.com" });
  };

  return (
    <nav className="bg-black border-b border-[#1f2937] sticky top-0 z-50">
      <div className="mx-auto max-w-[1560px] px-6 py-4 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center ">
            <span className="text-xl font-black text-white tracking-[0.32em]">KINETI</span>
            <p className=" text-[#C3FF51]  text-[22px] font-bold  tracking-[0.22em]">
              X
            </p>
          </Link>

          {/* Links */}
          <div className="hidden md:flex items-center gap-8 text-[13px] text-[#8f94a5]">
            <Link to="/" className="hover:text-[#C3FF51] transition">
              Home
            </Link>
            <Link to="/how-it-works" className="hover:text-[#C3FF51] transition">
              How it Works
            </Link>
            <Link to="/pricing" className="hover:text-[#C3FF51] transition">
              Pricing
            </Link>
            <Link to="/contact" className="hover:text-[#C3FF51] transition">
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="hidden sm:inline-flex rounded-3xl border border-[#1f2937] bg-transparent px-5 py-3 text-[13px] font-semibold text-[#C3FF51] hover:border-[#C3FF51] transition"
                >
                  Dashboard
                </Link>
                <button 
                  onClick={logout}
                  className="inline-flex rounded-3xl bg-[#C3FF51] px-6 py-3 text-[13px] font-semibold text-black hover:bg-[#D3FE51] transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <button 
                onClick={handleLogin}
                className="inline-flex rounded-3xl bg-[#C3FF51] px-6 py-3 text-[13px] font-semibold text-black hover:bg-[#D3FE51] transition"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
