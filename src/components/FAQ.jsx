import { useState } from 'react'

const FAQS = [
  {
    q: 'How does a "block" work?',
    a: 'A block is your rental period. The 48h block starts the moment you pick up the shoes and ends 48 hours later. The weekly block runs for 7 full days. You can always extend a block from the app before it expires.',
  },
  {
    q: 'Where can I pick up and return shoes?',
    a: 'We have partner locations across Bangkok — running stores, gyms, and sports hubs. You can see all pick-up points on the map in the app. No shipping is required.',
  },
  {
    q: 'What condition are the shoes in?',
    a: 'Every pair is professionally cleaned, sanitised, and inspected between rentals. We retire pairs after a defined mileage threshold so you always get near-new performance.',
  },
  {
    q: 'What if I damage the shoes?',
    a: 'Normal training wear is fully covered. Accidental damage (e.g. a rock tearing the upper) incurs a flat ฿300 assessment fee. Intentional or extreme damage is charged at replacement cost. Full policy is available during checkout.',
  },
  {
    q: 'Can I buy the shoes I rented?',
    a: 'Yes! If you fall in love with a pair, you get a 10–15% discount on a brand-new purchase (depending on your plan). We can connect you with our retail partners instantly.',
  },
  {
    q: 'Is there a membership or subscription?',
    a: 'No. KINETIX is entirely pay-per-block. There are no recurring fees, no credit card holds beyond your active block, and you can rent as often or as rarely as you like.',
  },
]

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-dark-border transition-colors duration-200 hover:border-neon/20 first:border-t">
      <button
        onClick={onToggle}
        onMouseEnter={() => { if (!isOpen) onToggle() }}
        className="w-full flex items-center justify-between gap-4 px-6 py-1.5 text-left"
        aria-expanded={isOpen}
      >
        <span className={`text-sm font-semibold leading-relaxed transition-colors duration-200 ${isOpen ? 'text-neon' : 'text-white'}`}>
          {faq.q}
        </span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen
              ? 'border-neon bg-neon/10 rotate-45 text-neon'
              : 'border-dark-border text-white/40'
            }`}
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-60' : 'max-h-0'
          }`}
      >
        <p className="px-6 pb-5 text-sm text-white/50 leading-relaxed">
          {faq.a}
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="pt-10 pb-6 lg:pt-12 lg:pb-8 bg-dark-card/20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-neon text-xs font-semibold tracking-widest uppercase">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Questions answered
          </h2>
        </div>

        <div className="flex flex-col">
          {FAQS.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>

        <p className="mt-10 text-center text-white/35 text-sm">
          Still have questions?{' '}
          <a href="mailto:hello@kinetix.run" className="text-neon hover:underline underline-offset-2 transition-colors">
            hello@kinetix.run
          </a>
        </p>
      </div>
    </section>
  )
}
