// AdminDashboard Main Page
// This is the main dashboard that brings everything together
// It imports and uses all the smaller components we created

import DashboardHeader from "../componente/DashboardHeader";
import StatCard from "../componente/StatCard";
import PlaceholderBox from "../componente/PlaceholderBox";
import RecentCustomer from "../componente/RecentCustomer";
import { productsData } from "../MockData/Mockdata.js";

export default function AdminDashboard() {
  // Simple calculations from mock data
  const totalProducts = productsData.length;
  const brands = [...new Set(productsData.map((p) => p.brand))].length;
  const avgRentalPrice = Math.round(
    productsData.reduce((acc, p) => acc + p.rental_price["1_day"], 0) ,
      totalProducts,
  );

  return (
    <div className="min-h-screen bg-[#080809] text-white p-6 md:p-8">
      {/* Container - keeps content organized */}
      <div className="max-w-7xl mx-auto">
        {/* ====== TOP SECTION - HEADER ====== */}
        <DashboardHeader />

        {/* ====== STATS CARDS SECTION ====== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            label="Total Shoes"
            value={totalProducts.toString()}
            note="ในระบบทั้งหมด"
          />

          <StatCard
            label="Total Brands"
            value={brands.toString()}
            note="แบรนด์ชั้นนำ"
          />

          <StatCard
            label="Avg Rental"
            value={`฿${avgRentalPrice}`}
            note="ราคาเฉลี่ยต่อวัน"
          />

          <StatCard
            label="Total Customers"
            value="1,254"
            note="+5% from last week"
          />
        </div>

        {/* ====== MIDDLE SECTION - PLACEHOLDER BOXES ====== */}
        {/* These are placeholder boxes where you'll add charts later */}

        {/* First Row - 2 large boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <PlaceholderBox title="Sales Chart" height="h-72" />
          <PlaceholderBox title="Revenue Chart" height="h-72" />
        </div>

        {/* Second Row - 1 large box on left, 2 smaller boxes on right */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Large box - takes 2 columns on desktop */}
          <div className="lg:col-span-2">
            <PlaceholderBox title="Sales Analytics" height="h-64" />
          </div>

          {/* Right column - 2 stacked boxes */}
          <div className="flex flex-col gap-6">
            <PlaceholderBox title="Top Products" height="h-28" />
            <PlaceholderBox title="Quick Stats" height="h-28" />
          </div>
        </div>

        {/* Third Row - 3 boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <PlaceholderBox title="Metric 1" height="h-48" />
          <PlaceholderBox title="Metric 2" height="h-48" />
          <PlaceholderBox title="Metric 3" height="h-48" />
        </div>

        {/* ====== BOTTOM SECTION - RECENT CUSTOMER ====== */}
        <RecentCustomer />
      </div>
    </div>
  );
}
