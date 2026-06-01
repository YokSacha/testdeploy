const STEPS = [
  { num: '01', label: 'Choose your shoe', desc: 'Browse 120+ models and find the pair that fits you.' },
  { num: '02', label: 'Door to door', desc: 'We deliver straight to you — no travel needed.' },
  { num: '03', label: 'Run & test', desc: 'Put the shoes through real training sessions.' },
  { num: '04', label: 'Return or buy', desc: 'Love them? Buy at a discount. Not for you? Return.' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">How it works</h2>
        </div>

        <div className="relative">
          <div
            className="hidden lg:block absolute top-[28px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-neon/25 to-transparent"
            aria-hidden="true"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-neon/10 border border-neon/30 flex items-center justify-center">
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
