export default function Navbar({ active = "" }) {
  const links = [
    { label: "Rental", href: "/#rental", key: "rental" },
    { label: "Brand", href: "/#brand", key: "brand" },
    { label: "How to", href: "/how-it-works", key: "how-to" },
    { label: "Contact", href: "/#contact", key: "contact" },
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

        <a
          href="/#signup"
          className="inline-flex h-12 min-w-[106px] items-center justify-center rounded-[16px] bg-kinetix-lime px-7 text-[15px] font-bold text-black transition-all hover:bg-gradient-to-r hover:from-[#00ff41] hover:to-kinetix-aqua"
        >
          Login
        </a>
      </nav>
    </header>
  );
}
