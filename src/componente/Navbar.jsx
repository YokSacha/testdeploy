import { useLanguage } from "../context/useLanguage";

export default function Navbar({ active = "" }) {
  const { language, toggleLanguage } = useLanguage();

  const copy = {
    th: {
      rental: "เช่า",
      brand: "แบรนด์",
      howTo: "วิธีใช้งาน",
      contact: "ติดต่อ",
      login: "เข้าสู่ระบบ",
      switchLabel: "Switch language",
    },
    en: {
      rental: "Rental",
      brand: "Brand",
      howTo: "How to",
      contact: "Contact",
      login: "Login",
      switchLabel: "เปลี่ยนภาษา",
    },
  }[language];

  const links = [
    { label: copy.rental, href: "/#rental", key: "rental" },
    { label: copy.brand, href: "/#brand", key: "brand" },
    { label: copy.howTo, href: "/how-it-works", key: "how-to" },
    { label: copy.contact, href: "/#contact", key: "contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black">
      <nav className="mx-auto flex h-[96px] max-w-[1920px] items-center justify-between px-5 sm:px-10">
        <a
          href="/"
          className="font-display text-[28px] font-extrabold leading-none tracking-[0.04em] text-white sm:text-[30px]"
          aria-label="KenetiX home"
        >
          KINETI<span className="text-kinetix-lime">X</span>
        </a>

        <div className="hidden items-center gap-14 text-[13px] font-medium text-zinc-300 md:flex lg:gap-16">
          {links.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className={`transition-colors hover:text-kinetix-lime ${
                active === link.key ? "text-kinetix-lime" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={copy.switchLabel}
            className="inline-flex h-10 items-center rounded-[14px] border border-white/15 bg-white/[0.04] p-1 text-[12px] font-bold text-white transition-colors hover:border-kinetix-lime/70"
          >
            <span
              className={`flex h-8 min-w-9 items-center justify-center rounded-[10px] px-2 transition-colors ${
                language === "th" ? "bg-kinetix-lime text-black" : "text-zinc-500"
              }`}
            >
              TH
            </span>
            <span
              className={`flex h-8 min-w-9 items-center justify-center rounded-[10px] px-2 transition-colors ${
                language === "en" ? "bg-kinetix-lime text-black" : "text-zinc-500"
              }`}
            >
              EN
            </span>
          </button>

          <a
            href="/#signup"
            className="hidden h-12 min-w-[106px] items-center justify-center rounded-[16px] bg-kinetix-lime px-7 text-[15px] font-bold text-black transition-all hover:bg-gradient-to-r hover:from-[#00ff41] hover:to-kinetix-aqua sm:inline-flex"
          >
            {copy.login}
          </a>
        </div>
      </nav>
    </header>
  );
}
