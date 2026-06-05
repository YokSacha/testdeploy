import { useState } from "react";
import AdminSidebar from "../components/admin/AdminSidebar";
import SummaryMetrics from "../components/admin/SummaryMetrics";
import JobTable from "../components/admin/JobTable";
import JobTimeline from "../components/admin/JobTimeline";
import StaffTable from "../components/admin/StaffTable";
import CancellationQueue from "../components/admin/CancellationQueue";
import NotificationPanel from "../components/admin/NotificationPanel";
import OrderManagement from "../components/admin/OrderManagement";
import ShoeLookup from "../components/admin/ShoeLookup";
import JobStatusChart from "../components/admin/JobStatusChart";
import RecentActivity from "../components/admin/RecentActivity";
import QuickConfirm from "../components/admin/QuickConfirm";
import ProfitAnalysis from "../components/admin/ProfitAnalysis";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedJobId, setSelectedJobId] = useState(null);

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="flex flex-col gap-6">
            <SummaryMetrics />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <JobStatusChart />
              <div className="lg:col-span-2">
                <QuickConfirm />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RecentActivity />
              <NotificationPanel />
            </div>
          </div>
        );
      case "profit":
        return <ProfitAnalysis />;
      case "jobs":
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <JobTable onViewTimeline={setSelectedJobId} />
            </div>
            <JobTimeline jobId={selectedJobId} />
          </div>
        );
      case "staff":
        return <StaffTable />;
      case "cancellations":
        return <CancellationQueue />;
      case "notifications":
        return <NotificationPanel />;
      case "orders":
        return <OrderManagement />;
      case "shoes":
        return <ShoeLookup />;
      default:
        return null;
    }
  };

  const tabTitles = {
    overview: "Overview",
    profit: "Profit & Analysis",
    jobs: "Job Management",
    staff: "Staff Management",
    cancellations: "Cancellation Queue",
    notifications: "Notifications",
    orders: "Order Management",
    shoes: "Shoe Lookup",
  };

  return (
    <div className="flex h-screen bg-dark overflow-hidden">
      <AdminSidebar active={activeTab} onChange={setActiveTab} />
      <main className="flex-1 overflow-y-auto">
        <div className="px-6 py-6 max-w-6xl mx-auto">
          <h1 className="text-white text-xl font-semibold font-sora mb-6">
            {tabTitles[activeTab]}
          </h1>
          {renderContent()}
        </div>
      </main>
    </div>
  );
}
