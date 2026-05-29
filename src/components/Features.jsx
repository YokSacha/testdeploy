const FEATURES = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: 'Try before you buy',
    description:
      'Test run the latest models during a real workout. Only pay for the pair you love.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
    title: 'Always fresh pairs',
    description:
      'Every rental is professionally cleaned and inspected. You get near-new condition every time.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5" />
      </svg>
    ),
    title: 'Flexible blocks',
    description:
      'Rent by the block — 48 hours, a week, or a full month. No subscriptions or surprise fees.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: 'Convenient pick-up',
    description:
      'Pick up and return at partner locations across Bangkok — no shipping required.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: 'Damage protection',
    description:
      'Normal wear is covered. Rent with confidence knowing you are protected from unexpected costs.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: 'Performance data',
    description:
      'Get personalized insights after each rental to find the shoe that truly matches your gait.',
  },
]

const STEPS = [
  { num: '01', label: 'Choose your shoe', desc: 'Browse 120+ models and reserve your block.' },
  { num: '02', label: 'Pick it up', desc: 'Grab the pair from your nearest partner location.' },
  { num: '03', label: 'Run & test', desc: 'Put the shoes through real training sessions.' },
  { num: '04', label: 'Return or buy', desc: 'Love them? Buy at a discount. Not for you? Return.' },
]

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-neon text-xs font-semibold tracking-widest uppercase">
            Why KINETIX
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            The smarter way to run
          </h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto text-base sm:text-lg">
            Stop guessing which shoe is right for you. Rent first, buy with confidence.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-24">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="group bg-dark-card border border-dark-border rounded-2xl p-6 transition-all duration-300 card-glow hover:border-neon/20"
            >
              <div className="w-11 h-11 rounded-xl bg-neon/10 border border-neon/15 flex items-center justify-center text-neon mb-4 group-hover:bg-neon/15 transition-colors duration-200">
                {f.icon}
              </div>
              <h3 className="text-white font-semibold text-base mb-2">{f.title}</h3>
              <p className="text-white/45 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        {/* How it works — steps */}
        <div className="relative">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">How it works</h2>
          </div>

          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-[72px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-neon/25 to-transparent"
            aria-hidden="true"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center gap-4">
                <div className="relative w-14 h-14 rounded-full bg-neon/10 border border-neon/30 flex items-center justify-center">
                  <span className="text-neon font-bold text-lg">{step.num}</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-base mb-1">{step.label}</p>
                  <p className="text-white/45 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
