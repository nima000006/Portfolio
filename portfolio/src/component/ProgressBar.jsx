/* eslint-disable react/prop-types */
function ProgressBar({ percent, label }) {
  return (
    <div className="w-full mb-5">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-gray-50 font-medium">{label}</span>
        <span className="text-sm text-gray-50 font-medium">{percent}%</span>
      </div>
      <div className="w-full h-2 bg-gray-700 rounded-full">
        <div
          className="h-full bg-theme rounded-full"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
