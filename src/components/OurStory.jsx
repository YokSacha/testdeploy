export default function OurStory() {
  return (
    <section id="ourstory" className="py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — label + heading */}
          <div>
            <span className="text-neon text-xs font-semibold tracking-widest uppercase">
              Our Story
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              The story behind
              <br />
              <span className="text-white">KINETI<span className="text-[#C3FF51]">X</span></span>
            </h2>
          </div>

          {/* Right — story text */}
          <div className="flex flex-col gap-6">
            <p className="text-white/70 text-lg leading-relaxed">
              KINETIX was born from a simple desire — to give everyone the chance to try on shoes and find the pair that truly fits before committing to buy.
            </p>
            <div className="border-l-2 border-neon pl-5">
              <p className="text-white font-semibold text-xl sm:text-2xl leading-relaxed">
                "Because we believe the right shoe will take you further than you've ever gone before."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
