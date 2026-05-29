import { useState } from "react";
import { Link } from "react-router-dom";

import imgAirMax90 from "../../images/c57f27605095ed093092327ad747982c2ce4bf7d.avif";
import imgUltraboost from "../../images/Adizero_EVO_SL_KI6913_06_standard.avif";
import imgPegasus from "../../images/AIR+ZOOM+PEGASUS+42.avif";
import imgClifton from "../../images/NOVABLAST-5-M.png";
import imgCloud5 from "../../images/1162030-NSS-0_page1.webp";
import imgAdizeroBoston from "../../images/Adizero_Boston_13_Shoes_White_JP9252_HM1.avif";
import imgReactInfinity from "../../images/AIR+ZOOM+PEGASUS+42+DSRPT.avif";
import imgGelKayano from "../../images/ASICS-GEL-KAYANO-30.jpg";

// ── Data ──────────────────────────────────────────────────────────────────────

const PRODUCTS = [
  {
    id: 1,
    brand: "NIKE",
    name: "Air Max 90",
    price: 5400,
    rating: 4.8,
    reviews: 120,
    image: imgAirMax90,
  },
  {
    id: 2,
    brand: "ADIDAS",
    name: "Ultraboost 22",
    price: 6200,
    rating: 4.9,
    reviews: 98,
    image: imgUltraboost,
  },
  {
    id: 3,
    brand: "NIKE",
    name: "Air Zoom Pegasus 40",
    price: 4900,
    rating: 4.7,
    reviews: 76,
    image: imgPegasus,
  },
  {
    id: 4,
    brand: "HOKA",
    name: "Clifton 9",
    price: 5800,
    rating: 4.8,
    reviews: 64,
    image: imgClifton,
  },
  {
    id: 5,
    brand: "ON RUNNING",
    name: "Cloud 5",
    price: 5600,
    rating: 4.8,
    reviews: 110,
    image: imgCloud5,
  },
  {
    id: 6,
    brand: "ADIDAS",
    name: "Adizero Boston 11",
    price: 5200,
    rating: 4.7,
    reviews: 53,
    image: imgAdizeroBoston,
  },
  {
    id: 7,
    brand: "NIKE",
    name: "React Infinity Run 4",
    price: 5100,
    rating: 4.6,
    reviews: 41,
    image: imgReactInfinity,
  },
  {
    id: 8,
    brand: "ASICS",
    name: "Gel-Kayano 30",
    price: 6400,
    rating: 4.9,
    reviews: 88,
    image: imgGelKayano,
  },
];

const SPOTLIGHT_ITEMS = [
  "Air Jordan 1 Low",
  "Dunk",
  "Air Force 1",
  "Yeezy Foam",
  "Pegasus Premium",
  "Trackpant 2.0",
  "Performance Jacket",
  "Vaporfly",
  "Sabrina",
  "Converse",
  "Metcon 10",
  "Jersey",
  "Air Max Dn",
  "Merchandise",
];

const FOOTER_LINKS = {
  SHOP: ["All Products", "Men", "Women", "Kids", "Sale"],
  BRANDS: ["Nike", "Adidas", "HOKA", "On Running", "ASICS"],
  HELP: ["FAQ", "Shipping", "Returns", "Size Guide", "Contact"],
  ABOUT: ["About Us", "Our Technology", "Sustainability", "Careers", "Blog"],
};

const NAV_LINKS = ["MEN", "WOMEN", "KIDS", "BRANDS", "COLLECTIONS", "SALE"];

// ── Product Card ──────────────────────────────────────────────────────────────

function ProductCard({ product }) {
  const [wished, setWished] = useState(false);

  return (
    <div className="bg-[#0f0f10] border border-[#1e1e20] rounded-xl overflow-hidden group hover:border-[#C3FF51]/20 transition-all duration-300 flex flex-col">
      {/* Image area */}
      <div
        className="relative bg-[#141415] flex items-center justify-center overflow-hidden"
        style={{ aspectRatio: "1/1" }}
      >
        <button
          onClick={() => setWished(!wished)}
          className="absolute top-2 right-2 z-10 w-6 h-6 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform"
          aria-label="Wishlist"
        >
          <svg
            className={`w-3 h-3 ${wished ? "text-red-400" : "text-white/40"}`}
            fill={wished ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-300"
        />

        <div className="absolute inset-0 bg-[#C3FF51]/0 group-hover:bg-[#C3FF51]/[0.03] transition-colors duration-300" />
      </div>

      {/* Info */}
      <div className="p-2.5 flex flex-col gap-1.5 flex-1">
        <div>
          <p className="text-white/35 text-[9px] font-bold tracking-widest uppercase">
            {product.brand}
          </p>
          <p className="text-white text-[11px] font-semibold leading-snug mt-0.5 line-clamp-2">
            {product.name}
          </p>
        </div>
        <div className="flex items-center justify-between mt-0.5">
          <span className="text-white font-bold text-xs">
            ฿{product.price.toLocaleString()}
          </span>
          <div className="flex items-center gap-0.5">
            <span className="text-yellow-400 text-[10px]">★</span>
            <span className="text-white/50 text-[10px]">
              {product.rating} ({product.reviews})
            </span>
          </div>
        </div>
        <button className="w-full mt-auto bg-[#C3FF51] text-[#080809] text-[10px] font-bold py-1.5 rounded-md hover:bg-[#d3ff70] active:scale-95 transition-all duration-200 flex items-center justify-center gap-1 tracking-wide">
          + ADD TO CART
        </button>
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function Catalog() {
  const [activeFilters, setActiveFilters] = useState([
    "Running",
    "Nike",
    "Size 42",
    "Price < ฿6,000",
  ]);
  const [sortOpen, setSortOpen] = useState(false);
  const [sortBy, setSortBy] = useState("Newest");

  const removeFilter = (f) =>
    setActiveFilters((prev) => prev.filter((x) => x !== f));
  const clearAll = () => setActiveFilters([]);

  return (
    <div className="min-h-screen bg-[#080809] font-sora text-white">
      {/* ── Main Navbar ───────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-[#080809]/95 backdrop-blur-md border-b border-[#1e1e20]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-6 h-14">
            {/* Logo */}
            <Link to="/" className="shrink-0">
              <span className="text-[24px] font-extrabold tracking-widest text-white">
                KINETI<span className="text-[#C3FF51]">X</span>
              </span>
            </Link>

            {/* Nav links */}
            <nav className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-[11px] font-semibold text-white/55 hover:text-white transition-colors tracking-wider"
                >
                  {link}
                </a>
              ))}
            </nav>

            {/* Search */}
            <div className="hidden lg:flex flex-1 max-w-[280px] ml-2">
              <div className="relative w-full">
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/25"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search sneakers..."
                  className="w-full bg-[#0f0f10] border border-[#1e1e20] rounded-full pl-9 pr-4 py-1.5 text-xs text-white/60 placeholder-white/20 focus:outline-none focus:border-[#C3FF51]/30 transition-colors"
                />
              </div>
            </div>

            {/* Icon group */}
            <div className="ml-auto flex items-center gap-1">
              <button
                className="hidden md:flex items-center gap-1 px-2 h-8 text-white/35 hover:text-[#C3FF51] transition-colors text-[11px] font-semibold tracking-wider"
                aria-label="Language"
              >
                EN / TH
              </button>
              <button
                className="w-8 h-8 flex items-center justify-center text-white/35 hover:text-[#C3FF51] transition-colors"
                aria-label="Wishlist"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>
              <button
                className="w-8 h-8 flex items-center justify-center text-white/35 hover:text-[#C3FF51] transition-colors"
                aria-label="Account"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </button>
              <button
                className="relative w-8 h-8 flex items-center justify-center text-white/35 hover:text-[#C3FF51] transition-colors"
                aria-label="Cart"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z"
                  />
                </svg>
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#C3FF51] text-[#080809] text-[9px] font-bold rounded-full flex items-center justify-center">
                  2
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Page Hero ─────────────────────────────────────────────────────── */}
      <div
        className="relative bg-[#080809] overflow-hidden"
        style={{ minHeight: 220 }}
      >
        {/* Large X background */}
        <div
          className="absolute right-4 top-0 bottom-0 flex items-center pointer-events-none select-none"
          aria-hidden="true"
        >
          <span
            className="font-extrabold leading-none"
            style={{
              fontSize: "28vw",
              color: "rgba(255,255,255,0.025)",
              letterSpacing: "-0.05em",
            }}
          >
            X
          </span>
        </div>

        {/* Neon radial glow (right side) */}
        <div
          className="absolute right-[30%] top-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(195,255,81,0.1) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        {/* Shoe placeholder (right half) */}
        <div className="absolute right-0 top-0 bottom-0 w-[48%] hidden md:flex items-center justify-center pr-10">
          <div className="relative flex flex-col items-center">
            {/* Outer glow ring */}
            <div
              className="absolute w-64 h-64 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(195,255,81,0.12) 0%, transparent 65%)",
              }}
              aria-hidden="true"
            />
            <div className="relative w-56 h-40 rounded-2xl border border-[#1e1e20] bg-[#0f0f10] flex flex-col items-center justify-center gap-2 z-10">
              <svg
                className="w-20 h-14 text-white/10"
                viewBox="0 0 100 50"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path d="M8 38 Q15 10 38 14 Q62 18 86 26 L90 36 Q60 44 24 42 Z" />
                <path d="M8 38 Q9 42 14 43" />
                <path d="M38 14 Q42 8 50 8 Q58 8 62 14" />
              </svg>
              <p className="text-white/15 text-[9px] text-center leading-relaxed px-4">
                Drop <code className="text-[#C3FF51]/30">hero-banner.jpg</code>
                <br />
                into <code className="text-[#C3FF51]/30">public/catalog/</code>
              </p>
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 py-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-[11px] text-white/35 mb-4">
            <Link to="/" className="hover:text-[#C3FF51] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white/60">All Products</span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white leading-none mb-3">
            ALL PRODUCTS
          </h1>
          <p className="text-white/35 text-sm mb-4">
            Discover the best performance sneakers and gear.
          </p>
          <p className="text-white/55 text-sm font-semibold">1,248 products</p>
        </div>
      </div>

      {/* ── Filter Bar ────────────────────────────────────────────────────── */}
      <div className="bg-[#080809] border-b border-[#1e1e20] sticky top-14 z-40">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-2.5">
          <div className="flex items-center gap-2 flex-wrap">
            {/* Filters button */}
            <button className="flex items-center gap-1.5 border border-[#1e1e20] rounded-lg px-3 py-1.5 text-[11px] font-bold text-white/70 hover:border-[#C3FF51]/40 hover:text-white transition-all tracking-wider">
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                />
              </svg>
              FILTERS
            </button>

            {["Category", "Brand", "Size", "Price"].map((filter) => (
              <button
                key={filter}
                className="flex items-center gap-1 border border-[#1e1e20] rounded-lg px-3 py-1.5 text-[11px] text-white/55 hover:border-[#C3FF51]/40 hover:text-white transition-all"
              >
                {filter}
                <svg
                  className="w-2.5 h-2.5 ml-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
            ))}

            {/* Sort by */}
            <div className="flex items-center gap-1.5 ml-auto relative">
              <span className="text-[11px] text-white/35">Sort by:</span>
              <button
                onClick={() => setSortOpen(!sortOpen)}
                className="flex items-center gap-1 border border-[#1e1e20] rounded-lg px-3 py-1.5 text-[11px] text-white/60 hover:border-[#C3FF51]/40 transition-all"
              >
                {sortBy}
                <svg
                  className="w-2.5 h-2.5 ml-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              {sortOpen && (
                <div className="absolute right-0 top-full mt-1 bg-[#141415] border border-[#1e1e20] rounded-xl shadow-xl overflow-hidden z-50 min-w-[130px]">
                  {[
                    "Newest",
                    "Price: Low–High",
                    "Price: High–Low",
                    "Top Rated",
                  ].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => {
                        setSortBy(opt);
                        setSortOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-[11px] hover:bg-[#1e1e20] transition-colors ${sortBy === opt ? "text-[#C3FF51]" : "text-white/60"}`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Clear all */}
            {activeFilters.length > 0 && (
              <button
                onClick={clearAll}
                className="text-[11px] text-[#C3FF51]/60 hover:text-[#C3FF51] transition-colors ml-1"
              >
                Clear all
              </button>
            )}
          </div>

          {/* Active filter chips */}
          {activeFilters.length > 0 && (
            <div className="flex items-center gap-2 mt-2 flex-wrap">
              <span className="text-[10px] text-white/25">Active filters:</span>
              {activeFilters.map((f) => (
                <button
                  key={f}
                  onClick={() => removeFilter(f)}
                  className="flex items-center gap-1 bg-[#141415] border border-[#1e1e20] rounded-full px-2.5 py-0.5 text-[10px] text-white/55 hover:border-[#C3FF51]/40 hover:text-white transition-all"
                >
                  {f}
                  <svg
                    className="w-2.5 h-2.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── Main Content ──────────────────────────────────────────────────── */}
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8">
        {/* ── Product Grid ──────────────────────────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-10">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* ── 3 Promo Banners ───────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {/* Banner 1 — Featured Nike Air Max 270 */}
          <div className="relative bg-[#0f0f10] border border-[#1e1e20] rounded-2xl overflow-hidden p-6 flex flex-col justify-between min-h-[200px]">
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, #111 0%, #0a0a0a 100%)",
              }}
            />
            {/* Decorative shoe shape bg */}
            <div
              className="absolute right-4 bottom-4 opacity-10 pointer-events-none"
              aria-hidden="true"
            >
              <svg
                className="w-32 h-20 text-[#C3FF51]"
                viewBox="0 0 100 50"
                fill="currentColor"
              >
                <path d="M8 38 Q15 10 38 14 Q62 18 86 26 L90 36 Q60 44 24 42 Z" />
              </svg>
            </div>
            <div className="relative">
              <p className="text-[#C3FF51] text-[9px] font-bold tracking-[0.25em] uppercase mb-2">
                FEATURED
              </p>
              <h3 className="text-white text-xl font-extrabold leading-tight tracking-tight">
                NIKE AIR
                <br />
                MAX 270
              </h3>
              <p className="text-white/35 text-[11px] mt-2">
                Maximum style. Ultimate cushion.
              </p>
            </div>
            <div className="relative mt-5">
              <button className="border border-[#C3FF51]/60 text-[#C3FF51] text-[11px] font-bold px-5 py-2 rounded-full hover:bg-[#C3FF51]/10 transition-all tracking-wider">
                SHOP NOW
              </button>
            </div>
          </div>

          {/* Banner 2 — Performance */}
          <div className="relative bg-[#0f0f10] border border-[#1e1e20] rounded-2xl overflow-hidden p-6 flex flex-col justify-between min-h-[200px]">
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, #0d0d0d 0%, #111 100%)",
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 80% 50%, rgba(195,255,81,0.06) 0%, transparent 60%)",
              }}
              aria-hidden="true"
            />
            {/* Athlete placeholder */}
            <div
              className="absolute right-0 top-0 bottom-0 w-2/5 flex items-center justify-center opacity-20 pointer-events-none"
              aria-hidden="true"
            >
              <svg
                className="w-20 h-32 text-white"
                viewBox="0 0 40 80"
                fill="none"
                stroke="currentColor"
                strokeWidth={1}
              >
                <circle cx="20" cy="8" r="5" />
                <path d="M20 13 L16 28 L10 48" />
                <path d="M20 13 L24 28 L30 48" />
                <path d="M16 28 L8 38" />
                <path d="M24 28 L32 38" />
                <path d="M16 48 L12 62" />
                <path d="M24 48 L28 62" />
              </svg>
            </div>
            <div className="relative">
              <p className="text-white/30 text-[9px] font-semibold tracking-[0.25em] uppercase mb-1">
                ENGINEERED FOR
              </p>
              <h3 className="text-white text-2xl font-extrabold leading-tight tracking-tight">
                PERFORMANCE
              </h3>
              <p className="text-white/35 text-[11px] mt-2">
                Built for speed. Designed for athletes.
              </p>
            </div>
            <div className="relative mt-5">
              <button className="border border-[#C3FF51]/60 text-[#C3FF51] text-[11px] font-bold px-5 py-2 rounded-full hover:bg-[#C3FF51]/10 transition-all tracking-wider">
                EXPLORE COLLECTION
              </button>
            </div>
          </div>

          {/* Banner 3 — Community */}
          <div className="relative bg-[#0f0f10] border border-[#1e1e20] rounded-2xl overflow-hidden p-6 flex flex-col min-h-[200px]">
            <div className="mb-3">
              <h3 className="text-white text-lg font-extrabold leading-snug tracking-tight">
                JOIN THE
                <br />
                COMMUNITY
              </h3>
              <p className="text-white/35 text-[11px] mt-1.5">
                Built for athletes. Backed by community.
              </p>
            </div>
            {/* Photo collage placeholders */}
            <div className="grid grid-cols-3 gap-1.5 flex-1 mb-4">
              {[
                <svg
                  key="a"
                  className="w-6 h-6 text-white/10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0"
                  />
                </svg>,
                <svg
                  key="b"
                  className="w-6 h-6 text-white/10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0"
                  />
                </svg>,
                <svg
                  key="c"
                  className="w-6 h-6 text-white/10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0"
                  />
                </svg>,
              ].map((icon, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg bg-[#141415] border border-[#1e1e20] flex items-center justify-center"
                >
                  {icon}
                </div>
              ))}
            </div>
            <button className="w-full bg-[#C3FF51] text-[#080809] text-[11px] font-bold py-2.5 rounded-full hover:bg-[#d3ff70] active:scale-95 transition-all tracking-wider">
              VIEW COMMUNITY
            </button>
          </div>
        </div>

        {/* ── Spotlight ─────────────────────────────────────────────── */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-[#1e1e20]" />
            <h2 className="text-white text-xs font-bold tracking-[0.4em] uppercase">
              SPOTLIGHT
            </h2>
            <div className="flex-1 h-px bg-[#1e1e20]" />
          </div>

          <div
            className="flex gap-3 overflow-x-auto pb-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {SPOTLIGHT_ITEMS.map((item) => (
              <div
                key={item}
                className="flex-shrink-0 w-[88px] cursor-pointer group"
              >
                <div className="w-[88px] h-[88px] rounded-xl bg-[#0f0f10] border border-[#1e1e20] flex items-center justify-center group-hover:border-[#C3FF51]/30 transition-all duration-200 mb-1.5 overflow-hidden">
                  <svg
                    className="w-8 h-6 text-white/8"
                    viewBox="0 0 80 40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1}
                  >
                    <path d="M8 30 Q15 8 35 10 Q55 12 72 20 L74 28 Q52 34 20 33 Z" />
                  </svg>
                </div>
                <p className="text-white/40 text-[10px] text-center leading-tight group-hover:text-white/70 transition-colors">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <footer className="bg-[#060607] border-t border-[#1e1e20]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-7 gap-8">
            {/* Brand col */}
            <div className="col-span-2 flex flex-col gap-4">
              <Link to="/">
                <span className="text-[24px] font-extrabold tracking-widest text-white">
                  KINETI<span className="text-[#C3FF51]">X</span>
                </span>
              </Link>
              <p className="text-white/30 text-xs leading-relaxed">
                Rent. Test. Run. Repeat.
                <br />
                Premium running shoes, by the block.
              </p>
              <div className="flex gap-2 mt-1">
                {[
                  {
                    label: "instagram",
                    d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z",
                  },
                  {
                    label: "facebook",
                    d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
                  },
                  {
                    label: "twitter",
                    d: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
                  },
                  {
                    label: "youtube",
                    d: "M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z",
                  },
                ].map(({ label, d }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-7 h-7 rounded-full border border-[#1e1e20] flex items-center justify-center text-white/25 hover:border-[#C3FF51]/40 hover:text-[#C3FF51] transition-all"
                  >
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={d}
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
              <div key={heading} className="flex flex-col gap-3">
                <p className="text-white/25 text-[10px] font-bold tracking-[0.2em] uppercase">
                  {heading}
                </p>
                <ul className="flex flex-col gap-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-white/45 text-xs hover:text-[#C3FF51] transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter */}
            <div className="col-span-2 md:col-span-1 flex flex-col gap-3">
              <p className="text-white/25 text-[10px] font-bold tracking-[0.2em] uppercase">
                STAY IN THE LOOP
              </p>
              <p className="text-white/35 text-xs leading-relaxed">
                Get exclusive offers, new arrivals, and more.
              </p>
              <div className="flex mt-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-[#0f0f10] border border-[#1e1e20] border-r-0 rounded-l-lg px-3 py-2 text-xs text-white/60 placeholder-white/20 focus:outline-none focus:border-[#C3FF51]/30 transition-colors"
                />
                <button className="bg-[#C3FF51] text-[#080809] px-3 py-2 rounded-r-lg hover:bg-[#d3ff70] transition-colors flex items-center justify-center">
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
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 pt-6 border-t border-[#1e1e20] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-white/20">
            <span>© 2024 KINETIX. All rights reserved.</span>
            <div className="flex items-center gap-5">
              {["Terms of Service", "Privacy Policy", "Cookie Policy"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="hover:text-white/45 transition-colors"
                  >
                    {item}
                  </a>
                ),
              )}
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                Thailand (฿)
              </span>
              <span>EN / TH</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
