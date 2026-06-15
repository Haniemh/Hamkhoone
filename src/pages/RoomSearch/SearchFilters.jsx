import { useState } from "react";
import {
  FunnelIcon,
  UserIcon,
  CalendarDaysIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

import { FaMale, FaFemale } from "react-icons/fa";

export default function SearchFilters() {
  const [gender, setGender] = useState(null);

  const filters = [
    "ودیعه",
    "اجاره",
    "تاریخ خالی شدن",
    "جدیدترین",
  ];

  return (
    <div className="bg-white rounded-[28px] p-4 shadow-sm border border-gray-100">
      {/* row 1 */}
        <div className="flex gap-2 mb-3">
        {/* advanced */}
        <button className="flex-1 h-11 bg-blue-600 text-white rounded-full flex items-center justify-center gap-2 text-sm font-medium shadow-md">
          <FunnelIcon className="w-5 h-5" />
          فیلتر پیشرفته
        </button>

        {/* gender */}
        <div className="w-[38%] h-11 bg-gray-100 rounded-full flex p-1">
          <button
            onClick={() =>
              setGender(gender === "female" ? null : "female")
            }
            className={`flex-1 h-9 rounded-full flex items-center justify-center gap-1 text-sm transition
            ${
              gender === "female"
                ? "bg-blue-600 text-white"
                : "text-gray-500"
            }`}
          >
            <FaFemale size={14} />
            خانم
          </button>

          <button
            onClick={() =>
              setGender(gender === "male" ? null : "male")
            }
            className={`flex-1 h-10 rounded-full flex items-center justify-center gap-2 text-sm transition
            ${
              gender === "male"
                ? "bg-blue-600 text-white"
                : "text-gray-500"
            }`}
          >
            <FaMale size={14} />
            آقا
          </button>
        </div>
      </div>

      {/* row 2 */}
      <div
        dir="rtl"
        className="flex gap-3 overflow-x-auto scrollbar-hide pb-1"
      >
        {filters.map((item) => (
          <button
            key={item}
            className={` shrink-0 h-11 px-5 rounded-full border border-gray-200 bg-white text-gray-600 text-sm flex items-center gap-2`}
          >
            {item === "تاریخ خالی شدن" && (
              <CalendarDaysIcon className="w-4 h-4" />
            )}

            {(item === "اجاره" || item === "ودیعه") && (
              <CurrencyDollarIcon className="w-4 h-4" />
            )}

            {item === "جدیدترین" && (
              <span className="text-lg">↗</span>
            )}

            {item}
          </button>
        ))}
      </div>
    </div>
  );
}