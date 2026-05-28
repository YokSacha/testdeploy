// RecentCustomer Component
// This shows the recent customer section with customer info

export default function RecentCustomer() {
  return (
    <div className="bg-[#1A1A1A] border border-[#C3FF51] rounded-lg p-6">
      {/* Title */}
      <h3 className="text-white font-bold text-lg mb-6">
        Recent Customer
      </h3>

      {/* Customer Box - placeholder for API data */}
      <div className="bg-[#080809] border border-[#C3FF51] rounded-lg p-8 min-h-40 flex items-center justify-center">
        <p className="text-[#8f94a5] text-center">
          Waiting for customer data from API...
        </p>
      </div>

      {/* Note for user */}
      <p className="text-[#8f94a5] text-xs mt-4">
        💡 Tip: When your API is ready, replace this with real customer data
      </p>
    </div>
  );
}
