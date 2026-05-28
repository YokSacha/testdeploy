// PlaceholderBox Component
// This is a reusable placeholder box for charts and data sections
// You can add charts here later when your API is ready

export default function PlaceholderBox({ title, height = "h-64" }) {
  return (
    <div className={`bg-white rounded-lg p-6 flex items-center justify-center border border-[#C3FF51] ${height}`}>
      {/* Display title if provided, otherwise show placeholder text */}
      {title ? (
        <p className="text-gray-600 font-semibold text-center">{title}</p>
      ) : (
        <p className="text-gray-400 text-center">
          Placeholder for chart / data section
        </p>
      )}
    </div>
  );
}
