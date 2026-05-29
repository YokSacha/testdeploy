// DashboardHeader Component
// This is the top section with the title and user profile info

export default function DashboardHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
      {/* Left side - Title and subtitle */}
      <div>
        <p className="text-[11px] uppercase tracking-[3px] text-[#808090] font-bold mb-2">
          Admin Dashboard
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white">
          KINETI X Overview
        </h1>
      </div>

      {/* Right side - User Profile */}
      <div className="flex items-center gap-4 bg-[#1A1A1A] border border-[#C3FF51] rounded-lg px-4 py-3">
        {/* User Avatar - circle with initials */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00FF41] to-[#00E5FF] flex items-center justify-center">
          <span className="text-black font-extrabold text-lg">A</span>
        </div>

        {/* User Info */}
        <div>
          <p className="text-white font-semibold text-sm">Admin007</p>
          <p className="text-[#8f94a5] text-xs">Project Manager</p>
        </div>
      </div>
    </div>
  );
}
