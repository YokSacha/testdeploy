const FOOTER_LINKS = {
  RENTAL: [
    { label: 'Catalog', href: '#catalog' },
    { label: 'How it works', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Pick-up points', href: '#pickup' },
  ],
  BRAND: [
    { label: 'Our story', href: '#story' },
    { label: 'Partners', href: '#partners' },
    { label: 'Press', href: '#press' },
    { label: 'Careers', href: '#careers' },
  ],
  LEGAL: [
    { label: 'Terms', href: '#terms' },
    { label: 'Privacy', href: '#privacy' },
    { label: 'Damage policy', href: '#damage' },
    { label: 'Contact', href: 'mailto:hello@kinetix.run' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#0e0e0f] border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <a href="/" className="text-white font-bold text-[24px] tracking-widest">
              KINETI<span className="text-[#C3FF51]">X</span>
            </a>
            <p className="text-white/35 text-sm leading-relaxed">
              Rent. Test. Run. Decide.
              <br />
              Premium running shoes, by the block.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-2">
              {['instagram', 'strava', 'x'].map((platform) => (
                <a
                  key={platform}
                  href={`#${platform}`}
                  className="w-8 h-8 rounded-full border border-dark-border flex items-center justify-center text-white/30 hover:border-neon/40 hover:text-neon transition-all duration-200"
                  aria-label={platform}
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading} className="flex flex-col gap-4">
              <p className="text-white/30 text-xs font-semibold tracking-widest uppercase">
                {heading}
              </p>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/55 text-sm hover:text-neon transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-dark-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">© 2026 KINETIX. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <button className="text-neon text-xs font-semibold px-3 py-1 rounded-full border border-neon/30 hover:bg-neon/10 transition-colors duration-200">
              EN
            </button>
            <button className="text-white/30 text-xs px-3 py-1 rounded-full hover:text-white transition-colors duration-200">
              TH
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
