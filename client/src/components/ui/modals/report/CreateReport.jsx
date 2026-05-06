import { useState } from "react";

export default function CreateReport() {
  const [categories, setCategories] = useState({
    attendance: false,
    lifegroup: false,
    finance: false,
    ministries: false,
  });

  const handleToggle = (category) => {
    setCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <div className=" font-secondary max-w-md mx-auto">
      <div className="space-y-1 sm:space-y-2">
        <h2 className="text-lg sm:text-2xl font-semibold">Report Categories</h2>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          Select the categories you want included in the report.
        </p>
      </div>

      <div className="rounded-lg bg-white p-3 sm:p-5 w-full">
        <div className="space-y-2 sm:space-y-3">
          <label className="flex items-center gap-3 p-1 rounded hover:bg-gray-50 active:bg-gray-100 cursor-pointer transition-colors">
            <input
              type="checkbox"
              checked={categories.attendance}
              onChange={() => handleToggle("attendance")}
              className="h-5 w-5 sm:h-4 sm:w-4 rounded border-gray-300 text-black focus:ring-black cursor-pointer"
            />
            <span className="text-sm sm:text-sm text-gray-700">Attendance</span>
          </label>

          <label className="flex items-center gap-3 p-1 rounded hover:bg-gray-50 active:bg-gray-100 cursor-pointer transition-colors">
            <input
              type="checkbox"
              checked={categories.lifegroup}
              onChange={() => handleToggle("lifegroup")}
              className="h-5 w-5 sm:h-4 sm:w-4 rounded border-gray-300 text-black focus:ring-black cursor-pointer"
            />
            <span className="text-sm sm:text-sm text-gray-700">Life Group</span>
          </label>

          <label className="flex items-center gap-3 p-1 rounded hover:bg-gray-50 active:bg-gray-100 cursor-pointer transition-colors">
            <input
              type="checkbox"
              checked={categories.finance}
              onChange={() => handleToggle("finance")}
              className="h-5 w-5 sm:h-4 sm:w-4 rounded border-gray-300 text-black focus:ring-black cursor-pointer"
            />
            <span className="text-sm sm:text-sm text-gray-700">Finance</span>
          </label>

          <label className="flex items-center gap-3 p-1 rounded hover:bg-gray-50 active:bg-gray-100 cursor-pointer transition-colors">
            <input
              type="checkbox"
              checked={categories.ministries}
              onChange={() => handleToggle("ministries")}
              className="h-5 w-5 sm:h-4 sm:w-4 rounded border-gray-300 text-black focus:ring-black cursor-pointer"
            />
            <span className="text-sm sm:text-sm text-gray-700">Ministries</span>
          </label>
        </div>
      </div>
    </div>
  );
}
