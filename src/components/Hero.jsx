import Button from "./ui/Button";
import vaporfly3 from "../../images/Nike Vaporfly 3.webp";

const STATS = [
  { value: "120+", label: "Premium models" },
  { value: "4.9★", label: "Avg. rating" },
  { value: "48h", label: "Min. block" },
  { value: "12k+", label: "Happy runners" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 bg-grid-dark bg-grid opacity-100 pointer-events-none"
        aria-hidden="true"
      />

      {/* Radial gradient blobs */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(195,255,81,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,229,255,0.04) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — copy */}
          <div className="flex flex-col gap-6 animate-fade-up">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 bg-neon/10 border border-neon/20 rounded-full px-4 py-1.5 w-fit">
              <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
              <span className="text-neon text-xs font-semibold tracking-wider uppercase">
                Now in Bangkok
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.08] tracking-tight">
              <span className="text-white">Rent.</span>{" "}
              <span className="text-white">Test.</span>{" "}
              <span className="text-neon text-neon-glow">Run.</span>
              <br />
              <span className="text-white/40">Decide.</span>
            </h1>

            <p className="text-base sm:text-lg text-white/55 max-w-md leading-relaxed">
              Try the world's best running shoes before you commit. Premium
              models. Flexible blocks. No subscription required.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button variant="primary" size="lg" to="/catalog">
                Browse catalog
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
                How it works
              </Button>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-dark-border">
              {STATS.map((s) => (
                <div key={s.label} className="flex flex-col gap-0.5">
                  <span className="text-2xl font-bold text-neon">
                    {s.value}
                  </span>
                  <span className="text-xs text-white/40 font-medium">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — hero visual */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Glow ring */}
            <div
              className="absolute w-80 h-80 lg:w-[480px] lg:h-[480px] rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(195,255,81,0.12) 0%, transparent 65%)",
              }}
              aria-hidden="true"
            />

            {/* Floating shoe placeholder */}
            <div className="relative animate-float z-10">
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-3xl bg-dark-card border border-dark-border flex items-center justify-center overflow-hidden">
                <img
                  src={vaporfly3}
                  alt="Nike Vaporfly 3"
                  className="w-full h-full object-contain p-6"
                />

                {/* Neon corner accents */}
                <span className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-neon/40 rounded-tl-lg" />
                <span className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-neon/40 rounded-tr-lg" />
                <span className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-neon/40 rounded-bl-lg" />
                <span className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-neon/40 rounded-br-lg" />
              </div>

              {/* Floating badge — price */}
              <div className="absolute -bottom-4 -left-6 bg-dark-elevated border border-dark-border rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-neon/15 flex items-center justify-center">
                  <span className="text-neon text-sm font-bold">฿</span>
                </div>
                <div>
                  <p className="text-xs text-white/40">From</p>
                  <p className="text-white font-bold text-sm">290 / day</p>
                </div>
              </div>

              {/* Floating badge — model */}
              <div className="absolute -top-4 -right-6 bg-dark-elevated border border-neon/20 rounded-2xl px-4 py-3 shadow-xl">
                <p className="text-neon text-xs font-semibold">
                  Nike Vaporfly 3
                </p>
                <p className="text-white/40 text-xs">Available now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
