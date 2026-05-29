import Footer         from "../components/Footer";
import CatalogNavbar  from "../components/catalog/CatalogNavbar";
import CatalogHero    from "../components/catalog/CatalogHero";
import CatalogFilters from "../components/catalog/CatalogFilters";
import ProductCard    from "../components/catalog/ProductCard";


const PRODUCTS = [
  { id: 1, brand: "NIKE",       name: "Air Max 90",           price: 5400, rating: 4.8, reviews: 120 },
  { id: 2, brand: "ADIDAS",     name: "Ultraboost 22",        price: 6200, rating: 4.9, reviews: 98  },
  { id: 3, brand: "NIKE",       name: "Air Zoom Pegasus 40",  price: 4900, rating: 4.7, reviews: 76  },
  { id: 4, brand: "HOKA",       name: "Clifton 9",            price: 5800, rating: 4.8, reviews: 64  },
  { id: 5, brand: "ON RUNNING", name: "Cloud 5",              price: 5600, rating: 4.8, reviews: 110 },
  { id: 6, brand: "ADIDAS",     name: "Adizero Boston 11",    price: 5200, rating: 4.7, reviews: 53  },
  { id: 7, brand: "NIKE",       name: "React Infinity Run 4", price: 5100, rating: 4.6, reviews: 41  },
  { id: 8, brand: "ASICS",      name: "Gel-Kayano 30",        price: 6400, rating: 4.9, reviews: 88  },
];

const PARTNERS = [
  "Nike", "Adidas", "Hoka", "ASICS", "New Balance",
  "Saucony", "On Running", "Puma", "Under Armour", "Mizuno",
];

export default function Catalog() {
  return (
    <div className="min-h-screen bg-[#080809] font-sora text-white">
      <CatalogNavbar />
      <CatalogHero />
      <CatalogFilters />

      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8">
        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-10">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Promo Banners */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="relative bg-[#0f0f10] border border-[#1e1e20] rounded-2xl overflow-hidden p-6 flex flex-col justify-between min-h-[200px]">
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #111 0%, #0a0a0a 100%)" }} />
            <div className="relative">
              <p className="text-[#C3FF51] text-[9px] font-bold tracking-[0.25em] uppercase mb-2">PARTNER</p>
              <h3 className="text-white text-xl font-extrabold leading-tight tracking-tight">STRAVA</h3>
              <p className="text-white/35 text-[11px] mt-2">Track every run. Connect with 100M+ athletes worldwide.</p>
            </div>
            <div className="relative mt-5">
              <button className="border border-[#C3FF51]/60 text-[#C3FF51] text-[11px] font-bold px-5 py-2 rounded-full hover:bg-[#C3FF51]/10 transition-all tracking-wider">CONNECT STRAVA</button>
            </div>
          </div>

          <div className="relative bg-[#0f0f10] border border-[#1e1e20] rounded-2xl overflow-hidden p-6 flex flex-col justify-between min-h-[200px]">
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0d0d0d 0%, #111 100%)" }} />
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 80% 50%, rgba(195,255,81,0.06) 0%, transparent 60%)" }} aria-hidden="true" />
            <div className="relative">
              <p className="text-white/30 text-[9px] font-semibold tracking-[0.25em] uppercase mb-1">LEADERBOARD</p>
              <h3 className="text-white text-2xl font-extrabold leading-tight tracking-tight">COMPETE & WIN</h3>
              <p className="text-white/35 text-[11px] mt-2">Track your stats, climb the ranks, and race against runners across Thailand.</p>
            </div>
            <div className="relative mt-5">
              <button className="border border-[#C3FF51]/60 text-[#C3FF51] text-[11px] font-bold px-5 py-2 rounded-full hover:bg-[#C3FF51]/10 transition-all tracking-wider">VIEW LEADERBOARD</button>
            </div>
          </div>

          <div className="relative bg-[#0f0f10] border border-[#1e1e20] rounded-2xl overflow-hidden p-6 flex flex-col min-h-[200px]">
            <div className="mb-3">
              <h3 className="text-white text-lg font-extrabold leading-snug tracking-tight">JOIN THE<br />COMMUNITY</h3>
              <p className="text-white/35 text-[11px] mt-1.5">Built for athletes. Backed by community.</p>
            </div>
            <div className="grid grid-cols-3 gap-1.5 flex-1 mb-4">
              {[0, 1, 2].map((i) => (
                <div key={i} className="aspect-square rounded-lg bg-[#141415] border border-[#1e1e20] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white/10" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
                  </svg>
                </div>
              ))}
            </div>
            <button className="w-full bg-[#C3FF51] text-[#080809] text-[11px] font-bold py-2.5 rounded-full hover:bg-[#d3ff70] active:scale-95 transition-all tracking-wider">VIEW COMMUNITY</button>
          </div>
        </div>

        {/* Partners marquee */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-[#1e1e20]" />
            <h2 className="text-white text-xs font-bold tracking-[0.4em] uppercase">PARTNERS</h2>
            <div className="flex-1 h-px bg-[#1e1e20]" />
          </div>
          <div className="overflow-hidden">
            <div className="flex gap-4 animate-marquee w-max">
              {[...PARTNERS, ...PARTNERS].map((item, i) => (
                <div key={i} className="flex-shrink-0 w-[120px] h-[64px] border border-[#1e1e20] rounded-xl bg-[#0f0f10] hover:border-[#C3FF51]/30 transition-colors duration-200 cursor-pointer flex items-center justify-center">
                  <span className="text-white/30 text-[11px] font-semibold tracking-wider">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
