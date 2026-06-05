import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./ui/Button";

const NAV_LINKS = [
  { label: "Catalog", to: "/catalog" },
  { label: "How it works", to: "/howitworkspage" },
  { label: "Community", to: "/userdashboard" },
  { label: "Contact Us", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-dark/90 backdrop-blur-md border-b border-dark-border"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link to="/" className="shrink-0">
            <span className="text-[24px] font-extrabold tracking-widest text-white">
              KINETI<span className="text-[#C3FF51]">X</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) =>
              link.to ? (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-white/60 hover:text-neon transition-colors duration-200 font-medium"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/60 hover:text-neon transition-colors duration-200 font-medium"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">

            <Button variant="primary" size="sm" to="/signup" className="text-sm text-white/70 hover:text-dark transition-colors px-3 py-2 rounded-lg font-medium">
              Sign Up
            </Button>
            <Button
              size="sm"
              to="/login"
              className="text-sm text-white/70 hover:text-dark transition-colors px-3 py-2 rounded-lg font-medium"
            >
              Log in
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 group"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""
                }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96 border-b border-dark-border" : "max-h-0"
          } bg-dark/95 backdrop-blur-md`}
      >
        <nav className="flex flex-col px-4 py-4 gap-1">
          {NAV_LINKS.map((link) =>
            link.to ? (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-sm text-white/70 hover:text-neon transition-colors duration-200 border-b border-dark-border/50 last:border-0"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-sm text-white/70 hover:text-neon transition-colors duration-200 border-b border-dark-border/50 last:border-0"
              >
                {link.label}
              </a>
            )
          )}
          <div className="flex flex-col gap-2 pt-4">
            <Button variant="outline" size="sm" to="/login">
              Log in
            </Button>

            <Button variant="primary" size="sm" to="/catalog">
              Browse catalog
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}