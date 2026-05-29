import Button from "./ui/Button";

export default function CTA() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(195,255,81,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-grid-dark bg-grid opacity-50 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Pill */}
        <div className="inline-flex items-center gap-2 bg-neon/10 border border-neon/20 rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
          <span className="text-neon text-xs font-semibold tracking-wider uppercase">
            Ready to run?
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
          Stop wondering.{" "}
          <span className="text-neon text-neon-glow">Start running.</span>
        </h2>

        <p className="text-white/50 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10">
          Your next PR might be on your feet already. Browse the catalog, and
          test the shoes that elite runners swear by
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg" href="#catalog">
            Browse the catalog
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Button>
          <Button variant="outline" size="lg" href="#features">
            See how it works
          </Button>
        </div>

        {/* Social proof */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-white/35">
          <span className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-neon/60"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            4.9 / 5 average rating
          </span>
          <span className="hidden sm:block w-px h-4 bg-dark-border" />
          <span>12,000+ happy runners</span>
          <span className="hidden sm:block w-px h-4 bg-dark-border" />
          <span>No subscription needed</span>
        </div>
      </div>
    </section>
  );
}
