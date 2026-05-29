import { useState } from 'react'
import Button from './ui/Button'

const CATEGORIES = ['All', 'Road', 'Trail', 'Track', 'Daily trainer']

const SHOES = [
  {
    id: 1,
    name: 'Nike Vaporfly 3',
    category: 'Road',
    price: 490,
    badge: 'Most popular',
    badgeColor: 'neon',
    desc: 'Carbon-plate race day rocket. Best for marathon & tempo.',
    image: '/shoes/1.webp',
  },
  {
    id: 2,
    name: 'Adidas Adizero Adios Pro 3',
    category: 'Road',
    price: 450,
    badge: 'Editor\'s pick',
    badgeColor: 'cyan',
    desc: 'Energyrods technology. Lethal for long-distance speed.',
  },
  {
    id: 3,
    name: 'ASICS MetaSpeed Sky+',
    category: 'Road',
    price: 420,
    badge: null,
    desc: 'Stride-type racer. Ideal for runners with longer stride.',
  },
  {
    id: 4,
    name: 'Nike Pegasus 42',
    category: 'Daily trainer',
    price: 290,
    badge: 'New arrival',
    badgeColor: 'neon',
    desc: 'The do-everything daily trainer. ReactX foam for bounce.',
  },
  {
    id: 5,
    name: 'Hoka Speedgoat 6',
    category: 'Trail',
    price: 360,
    badge: null,
    desc: 'Maximum grip, maximum protection. Kings of the trails.',
  },
  {
    id: 6,
    name: 'Brooks Hyperion Elite 4',
    category: 'Road',
    price: 440,
    badge: null,
    desc: 'DNA Flash foam and carbon plate. Zero compromise.',
  },
]

function ShoeCard({ shoe }) {
  return (
    <div className="group bg-dark-card border border-dark-border rounded-2xl overflow-hidden transition-all duration-300 card-glow hover:border-neon/20 flex flex-col">
      {/* Image placeholder */}
      <div className="relative bg-dark-elevated h-48 flex items-center justify-center overflow-hidden">
        {shoe.badge && (
          <span
            className={`absolute top-3 left-3 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10 ${
              shoe.badgeColor === 'neon'
                ? 'bg-neon text-dark'
                : 'bg-cyan text-dark'
            }`}
          >
            {shoe.badge}
          </span>
        )}
        {shoe.image ? (
          <img
            src={shoe.image}
            alt={shoe.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-center px-6">
            <div className="w-14 h-14 rounded-full bg-neon/8 border border-neon/15 flex items-center justify-center">
              <svg className="w-7 h-7 text-neon/50" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <p className="text-white/20 text-xs">
              <code className="text-neon/40">public/shoes/{shoe.id}.png</code>
            </p>
          </div>
        )}
        <span className="absolute bottom-3 right-3 bg-dark-card/80 backdrop-blur-sm border border-dark-border rounded-lg px-2.5 py-1 text-xs font-semibold text-white">
          {shoe.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="text-white font-semibold text-sm leading-snug">{shoe.name}</h3>
          <p className="text-white/40 text-xs mt-1 leading-relaxed">{shoe.desc}</p>
        </div>

        <div className="flex items-center justify-between mt-auto pt-3 border-t border-dark-border">
          <div>
            <span className="text-neon font-bold text-lg">฿{shoe.price}</span>
            <span className="text-white/35 text-xs ml-1">/ block</span>
          </div>
          <button className="text-xs font-semibold text-neon border border-neon/30 rounded-full px-3 py-1.5 hover:bg-neon hover:text-dark transition-all duration-200">
            Reserve
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Showcase() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? SHOES
      : SHOES.filter((s) => s.category === activeCategory)

  return (
    <section id="catalog" className="py-16 lg:py-20 bg-dark-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-neon text-xs font-semibold tracking-widest uppercase">
              Catalog
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Our shoes
            </h2>
          </div>
          <Button variant="outline" size="sm" href="#catalog">
            View full catalog
          </Button>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-neon text-dark'
                  : 'bg-dark-elevated border border-dark-border text-white/50 hover:border-neon/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.slice(0, 4).map((shoe) => (
            <ShoeCard key={shoe.id} shoe={shoe} />
          ))}
        </div>

        {/* View all */}
        <div className="flex justify-center mt-8">
          <Button variant="outline" size="md" to="/catalog">
            View all shoes →
          </Button>
        </div>

        {/* Community UGC strip */}
        <div className="mt-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-neon text-xs font-semibold tracking-widest uppercase">
                Community
              </span>
              <h3 className="mt-1 text-2xl font-extrabold text-white">
                Runners sharing the experience
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { handle: '@junnee_jun',  img: '/community/junnee_jun.avif' },
              { handle: '@puntantav',   img: '/community/puntantav.avif' },
              { handle: '@kiekleee',    img: '/community/kiekleee.avif' },
              { handle: '@runwithbkk', img: '/community/runwithbkk.avif' },
            ].map(({ handle, img }) => (
              <div
                key={handle}
                className="group relative rounded-2xl bg-dark-elevated border border-dark-border aspect-[3/4] overflow-hidden flex items-end p-3 cursor-pointer hover:border-neon/20 transition-all duration-300"
              >
                {/* Real photo */}
                <img
                  src={img}
                  alt={handle}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span className="relative text-white/90 text-xs font-medium drop-shadow">{handle}</span>
                {/* + overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-white text-xl font-light leading-none">+</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
