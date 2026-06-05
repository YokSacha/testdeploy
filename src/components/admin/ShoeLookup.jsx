import { useState } from "react";

const mockShoes = [
  { _id: "6a1eb24e64aac32fd29de3e2", name: "Ultra Boost", brand: "Adidas", size: 44, color: "Green", category: "Road", price: 1683, stock: 39, is_active: true },
  { _id: "6a1eb24e64aac32fd29de3e3", name: "Air Max", brand: "Nike", size: 42, color: "Black", category: "Daily trainer", price: 2100, stock: 15, is_active: true },
  { _id: "6a1eb24e64aac32fd29de3e4", name: "Gel-Kayano", brand: "Asics", size: 41, color: "White", category: "Trail", price: 3200, stock: 8, is_active: true },
  { _id: "6a1eb24e64aac32fd29de3e5", name: "Fresh Foam", brand: "New Balance", size: 43, color: "Grey", category: "Road", price: 2800, stock: 0, is_active: false },
  { _id: "6a1eb24e64aac32fd29de3e6", name: "React Infinity", brand: "Nike", size: 40, color: "Red", category: "Road", price: 3500, stock: 22, is_active: true },
  { _id: "6a1eb24e64aac32fd29de3e7", name: "Pegasus", brand: "Nike", size: 44, color: "Navy", category: "Daily trainer", price: 2400, stock: 11, is_active: true },
];

const SEARCH_FIELDS = [
  { key: "id", label: "ID" },
  { key: "brand", label: "Brand" },
  { key: "name", label: "Model" },
  { key: "size", label: "Size" },
  { key: "category", label: "Category" },
];

export default function ShoeLookup() {
  const [searchBy, setSearchBy] = useState("brand");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    const q = query.trim().toLowerCase();
    if (!q) return;

    const found = mockShoes.filter((shoe) => {
      if (searchBy === "id") return shoe._id.toLowerCase().includes(q);
      if (searchBy === "brand") return shoe.brand.toLowerCase().includes(q);
      if (searchBy === "name") return shoe.name.toLowerCase().includes(q);
      if (searchBy === "size") return String(shoe.size) === q;
      if (searchBy === "category") return shoe.category.toLowerCase().includes(q);
      return false;
    });

    setResults(found);
    setSearched(true);
  };

  const placeholder = {
    id: "ใส่ Shoe ID...",
    brand: "เช่น Nike, Adidas, Asics...",
    name: "เช่น Air Max, Ultra Boost...",
    size: "เช่น 42",
    category: "เช่น Road, Trail, Daily trainer",
  };

  return (
    <div className="bg-dark-card border border-dark-border rounded-xl p-5">
      <h3 className="text-white font-semibold font-sora mb-4">Shoe Lookup</h3>

      {/* Search type tabs */}
      <div className="flex gap-2 mb-3 flex-wrap">
        {SEARCH_FIELDS.map((f) => (
          <button
            key={f.key}
            onClick={() => { setSearchBy(f.key); setQuery(""); setResults([]); setSearched(false); }}
            className={`text-xs px-3 py-1.5 rounded-lg border font-sora transition-colors ${
              searchBy === f.key
                ? "bg-neon/10 text-neon border-neon/30"
                : "text-gray-400 border-dark-border hover:text-white hover:border-gray-600"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Search input */}
      <div className="flex gap-2 mb-4">
        <input
          type={searchBy === "size" ? "number" : "text"}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder={placeholder[searchBy]}
          className="flex-1 bg-dark-elevated border border-dark-border text-white text-sm rounded-lg px-3 py-2 font-sora placeholder-gray-600 focus:outline-none focus:border-neon/50"
        />
        <button
          onClick={handleSearch}
          className="text-sm text-dark bg-neon px-4 py-2 rounded-lg font-semibold font-sora hover:bg-neon-hover transition-colors"
        >
          ค้นหา
        </button>
      </div>

      {/* Results */}
      {searched && results.length === 0 && (
        <p className="text-red-400 text-sm font-sora">ไม่พบรายการที่ค้นหา</p>
      )}

      {results.length > 0 && (
        <div className="flex flex-col gap-3">
          <p className="text-gray-400 text-xs font-sora">พบ {results.length} รายการ</p>
          {results.map((shoe) => (
            <div key={shoe._id} className="border border-dark-border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <p className="text-neon font-semibold font-sora">{shoe.name}</p>
                <span className={`text-xs px-2 py-0.5 rounded-full border font-sora ${
                  shoe.is_active
                    ? "bg-neon/10 text-neon border-neon/20"
                    : "bg-red-500/10 text-red-400 border-red-500/20"
                }`}>
                  {shoe.is_active ? "Active" : "Inactive"}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: "Brand", value: shoe.brand },
                  { label: "Category", value: shoe.category },
                  { label: "Size", value: shoe.size },
                  { label: "Color", value: shoe.color },
                  { label: "Price", value: `฿${shoe.price.toLocaleString()}` },
                  { label: "Stock", value: shoe.stock },
                ].map((item) => (
                  <div key={item.label} className="bg-dark-elevated rounded-lg p-2">
                    <p className="text-xs text-gray-500 font-sora">{item.label}</p>
                    <p className="text-sm text-white font-medium font-sora">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {!searched && (
        <p className="text-gray-600 text-xs font-sora">
          เลือก search type แล้วพิมพ์ค้นหาได้เลยค่ะ
        </p>
      )}
    </div>
  );
}
