import { useState } from "react";

const mockShoes = [
  { _id: "6a1eb24e64aac32fd29de3e2", name: "Ultra Boost",   brand: "Adidas",      size: 44, color: "Green", category: "Road",         price: 1683, stock: 39, is_active: true  },
  { _id: "6a1eb24e64aac32fd29de3e3", name: "Air Max",       brand: "Nike",        size: 42, color: "Black", category: "Daily trainer", price: 2100, stock: 15, is_active: true  },
  { _id: "6a1eb24e64aac32fd29de3e4", name: "Gel-Kayano",    brand: "Asics",       size: 41, color: "White", category: "Trail",         price: 3200, stock: 8,  is_active: true  },
  { _id: "6a1eb24e64aac32fd29de3e5", name: "Fresh Foam",    brand: "New Balance", size: 43, color: "Grey",  category: "Road",         price: 2800, stock: 0,  is_active: false },
  { _id: "6a1eb24e64aac32fd29de3e6", name: "React Infinity",brand: "Nike",        size: 40, color: "Red",   category: "Road",         price: 3500, stock: 22, is_active: true  },
  { _id: "6a1eb24e64aac32fd29de3e7", name: "Pegasus",       brand: "Nike",        size: 44, color: "Navy",  category: "Daily trainer", price: 2400, stock: 11, is_active: true  },
];

const SEARCH_FIELDS = [
  { key: "id",       label: "ID"       },
  { key: "brand",    label: "Brand"    },
  { key: "name",     label: "Model"    },
  { key: "size",     label: "Size"     },
  { key: "category", label: "Category" },
];

const placeholder = {
  id: "ใส่ Shoe ID...", brand: "เช่น Nike, Adidas, Asics...",
  name: "เช่น Air Max, Ultra Boost...", size: "เช่น 42", category: "เช่น Road, Trail, Daily trainer",
};

const card         = { background: "#FFFFFF", border: "1px solid #E2E8F0", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" };
const inner        = { background: "#F8FAFC", border: "1px solid #E2E8F0" };
const activeFilter = { background: "rgba(195,255,81,0.10)", color: "#4D7C0F", border: "1px solid rgba(195,255,81,0.30)" };
const idleFilter   = { background: "transparent", color: "#64748B", border: "1px solid #E2E8F0" };

export default function ShoeLookup() {
  const [searchBy, setSearchBy] = useState("brand");
  const [query, setQuery]       = useState("");
  const [results, setResults]   = useState([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    const q = query.trim().toLowerCase();
    if (!q) return;
    const found = mockShoes.filter((shoe) => {
      if (searchBy === "id")       return shoe._id.toLowerCase().includes(q);
      if (searchBy === "brand")    return shoe.brand.toLowerCase().includes(q);
      if (searchBy === "name")     return shoe.name.toLowerCase().includes(q);
      if (searchBy === "size")     return String(shoe.size) === q;
      if (searchBy === "category") return shoe.category.toLowerCase().includes(q);
      return false;
    });
    setResults(found);
    setSearched(true);
  };

  return (
    <div className="rounded-2xl p-5" style={card}>
      <h3 className="font-semibold font-sora text-[14px] mb-4" style={{ color: "#0F172A" }}>Shoe Lookup</h3>

      <div className="flex gap-2 mb-3 flex-wrap">
        {SEARCH_FIELDS.map((f) => (
          <button key={f.key}
            onClick={() => { setSearchBy(f.key); setQuery(""); setResults([]); setSearched(false); }}
            className="text-xs px-3 py-1.5 rounded-lg font-sora transition-colors"
            style={searchBy === f.key ? activeFilter : idleFilter}>
            {f.label}
          </button>
        ))}
      </div>

      <div className="flex gap-2 mb-4">
        <input
          type={searchBy === "size" ? "number" : "text"}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder={placeholder[searchBy]}
          className="flex-1 text-sm rounded-lg px-3 py-2 font-sora focus:outline-none"
          style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", color: "#0F172A" }}
          onFocus={(e) => { e.target.style.borderColor = "#C3FF51"; }}
          onBlur={(e)  => { e.target.style.borderColor = "#E2E8F0"; }}
        />
        <button onClick={handleSearch}
          className="text-sm px-4 py-2 rounded-lg font-semibold font-sora"
          style={{ background: "#C3FF51", color: "#0F172A" }}>
          ค้นหา
        </button>
      </div>

      {searched && results.length === 0 && (
        <p className="text-sm font-sora" style={{ color: "#DC2626" }}>ไม่พบรายการที่ค้นหา</p>
      )}

      {results.length > 0 && (
        <div className="flex flex-col gap-3">
          <p className="text-xs font-sora" style={{ color: "#94A3B8" }}>พบ {results.length} รายการ</p>
          {results.map((shoe) => (
            <div key={shoe._id} className="rounded-xl p-4" style={{ border: "1px solid #E2E8F0" }}>
              <div className="flex items-center justify-between mb-3">
                <p className="font-semibold font-sora" style={{ color: "#0F172A" }}>{shoe.name}</p>
                <span className={`text-xs px-2 py-0.5 rounded-full border font-sora ${
                  shoe.is_active
                    ? "text-[#4D7C0F] bg-[rgba(195,255,81,0.12)] border-[rgba(195,255,81,0.35)]"
                    : "text-[#DC2626] bg-[#FEE2E2] border-[#FECACA]"
                }`}>
                  {shoe.is_active ? "Active" : "Inactive"}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: "Brand",    value: shoe.brand    },
                  { label: "Category", value: shoe.category },
                  { label: "Size",     value: shoe.size     },
                  { label: "Color",    value: shoe.color    },
                  { label: "Price",    value: `฿${shoe.price.toLocaleString()}` },
                  { label: "Stock",    value: shoe.stock    },
                ].map((item) => (
                  <div key={item.label} className="rounded-lg p-2" style={inner}>
                    <p className="text-xs font-sora" style={{ color: "#94A3B8" }}>{item.label}</p>
                    <p className="text-sm font-medium font-sora" style={{ color: "#0F172A" }}>{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {!searched && (
        <p className="text-xs font-sora" style={{ color: "#CBD5E1" }}>
          เลือก search type แล้วพิมพ์ค้นหาได้เลยค่ะ
        </p>
      )}
    </div>
  );
}
