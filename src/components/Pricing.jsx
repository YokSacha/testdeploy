import Button from "./ui/Button";

const PLANS = [
  {
    name: "Single rental",
    price: "290",
    period: "per 24h rental",
    desc: "Perfect for testing a shoe before your next race.",
    highlight: false,
    features: [
      "1 pair per rental",
      "Standard catalog access",
      "We will deliver it to you",
    ],
    cta: "Reserve a pair",
    ctaVariant: "outline",
  },
  {
    name: "3-day pass",
    price: "690",
    period: "per 3-day rental",
    desc: "A full training week to truly feel the difference.",
    highlight: true,
    features: [
      "1 pair for 3 days",
      "Pick-up & return at partner locations",
      "Damage protection included",
      "Priority reservation",
      "10% discount on purchase",
    ],
    cta: "Start a 3-day pass",
    ctaVariant: "primary",
  },
  {
    name: "7-day bundle",
    price: "1,490",
    period: "weekly rental",
    desc: "Try 3 different models in one week. The ultimate comparison.",
    highlight: false,
    features: [
      "3 pairs (swap once/rental)",
      "Full catalog + early access",
      "Home delivery in Bangkok",
      "Damage protection included",
      "Priority reservation",
      "15% discount on purchase",
    ],
    cta: "Get the bundle",
    ctaVariant: "outline",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-neon text-xs font-semibold tracking-widest uppercase">
            Pricing
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Simple, honest pricing
          </h2>
          <p className="mt-4 text-white/50 max-w-md mx-auto text-base sm:text-lg">
            Pick a plan, we deliver the shoes. Your next favorite shoe is one run away.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 items-start">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-7 flex flex-col gap-6 transition-all duration-300 ${
                plan.highlight
                  ? "bg-neon/5 border-neon/40 shadow-[0_0_40px_rgba(195,255,81,0.08)] scale-[1.02]"
                  : "bg-dark-card border-dark-border hover:border-neon/15"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-neon text-dark text-[10px] font-extrabold px-4 py-1 rounded-full uppercase tracking-wider shadow-[0_0_16px_rgba(195,255,81,0.4)]">
                  Most popular
                </span>
              )}

              <div>
                <p
                  className={`text-sm font-semibold ${plan.highlight ? "text-neon" : "text-white/50"}`}
                >
                  {plan.name}
                </p>
                <div className="flex items-end gap-1.5 mt-2">
                  <span className="text-white font-extrabold text-4xl">
                    ฿{plan.price}
                  </span>
                  <span className="text-white/35 text-sm mb-1">
                    {plan.period}
                  </span>
                </div>
                <p className="text-white/40 text-sm mt-2 leading-relaxed">
                  {plan.desc}
                </p>
              </div>

              <ul className="flex flex-col gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className="flex-shrink-0 w-4 h-4 rounded-full bg-neon/15 flex items-center justify-center mt-0.5">
                      <svg
                        className="w-2.5 h-2.5 text-neon"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={3}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="text-white/65">{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.ctaVariant}
                size="md"
                href="#catalog"
                className="mt-auto w-full"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-white/25 text-xs mt-10">
          All prices in Thai Baht (฿). Rentals begin at pick-up and end at
          return. Damage policy applies — see{" "}
          <a
            href="#faq"
            className="text-neon/60 underline underline-offset-2 hover:text-neon"
          >
            FAQ
          </a>{" "}
          for details.
        </p>
      </div>
    </section>
  );
}
