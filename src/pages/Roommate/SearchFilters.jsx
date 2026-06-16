// src/pages/RoommateSearch/SearchFilters.jsx
import { useState } from "react";
import {
  FunnelIcon,
  CalendarDaysIcon,
  CurrencyDollarIcon,
  XMarkIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/outline";
import { FaMale, FaFemale,FaHome } from "react-icons/fa";

export default function SearchFilters({ filters, setFilters, onClear }) {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [tempFilters, setTempFilters] = useState({});

  const openAdvanced = () => {
    setTempFilters({
      budgetMin: filters.budgetMin || "",
      budgetMax: filters.budgetMax || "",
      ageMin: filters.ageMin || "",
      ageMax: filters.ageMax || "",
    });
    setShowAdvanced(true);
  };

  const applyAdvanced = () => {
    setFilters({
      ...filters,
      budgetMin: tempFilters.budgetMin,
      budgetMax: tempFilters.budgetMax,
      ageMin: tempFilters.ageMin,
      ageMax: tempFilters.ageMax,
    });
    setShowAdvanced(false);
  };

  const handleGenderChange = (gender) => {
    setFilters({
      ...filters,
      gender: filters.gender === gender ? "" : gender,
    });
  };

  const handleHouseChange = () => {
    setFilters({
      ...filters,
      houseType: filters.houseType === "owner" ? "" : "owner",
    });
  };

  const handleSortByRent = () => {
    let newOrder = "asc";
    if (filters.sortByRent === "asc") {
      newOrder = "desc";
    } else if (filters.sortByRent === "desc") {
      newOrder = "";
    } else {
      newOrder = "asc";
    }
    setFilters({
      ...filters,
      sortByRent: newOrder,
      sortByBudget: "",
    });
  };

  const handleSortByBudget = () => {
    let newOrder = "asc";
    if (filters.sortByBudget === "asc") {
      newOrder = "desc";
    } else if (filters.sortByBudget === "desc") {
      newOrder = "";
    } else {
      newOrder = "asc";
    }
    setFilters({
      ...filters,
      sortByBudget: newOrder,
      sortByRent: "",
    });
  };

  const handleNewest = () => {
    setFilters({
      ...filters,
      newest: !filters.newest,
      sortByRent: "",
      sortByBudget: "",
    });
  };

  return (
    <>
      <div className="bg-white rounded-[28px] p-4 shadow-sm border border-gray-100">
        <div className="flex gap-2 mb-3">
          <button
            onClick={openAdvanced}
            className="flex-1 h-11 bg-blue-600 text-white rounded-full flex items-center justify-center gap-2 text-sm font-medium shadow-md hover:bg-blue-700 transition"
          >
            <FunnelIcon className="w-5 h-5" />
            فیلتر پیشرفته
          </button>

          <div className="w-[38%] h-11 bg-gray-100 rounded-full flex p-1">
            <button
              onClick={() => handleGenderChange("female")}
              className={`flex-1 h-9 rounded-full flex items-center justify-center gap-1 text-sm transition ${
                filters.gender === "female"
                  ? "bg-blue-600 text-white"
                  : "text-gray-500"
              }`}
            >
              <FaFemale size={14} />
              خانم
            </button>

            <button
              onClick={() => handleGenderChange("male")}
              className={`flex-1 h-9 rounded-full flex items-center justify-center gap-1 text-sm transition ${
                filters.gender === "male"
                  ? "bg-blue-600 text-white"
                  : "text-gray-500"
              }`}
            >
              <FaMale size={14} />
              آقا
            </button>
          </div>
        </div>

        <div dir="rtl" className="flex gap-3 overflow-x-auto scrollbar-hide pb-1">
          <button
            onClick={handleHouseChange}
            className={`shrink-0 h-11 px-5 rounded-full border flex items-center gap-2 text-sm transition-all whitespace-nowrap ${
              filters.houseType === "owner"
                ? "bg-blue-600 border-blue-600 text-white"
                : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
            }`}
          >
            <FaHome size={14} />
            خانه
          </button>

          <button
            onClick={handleNewest}
            className={`shrink-0 h-11 px-5 rounded-full border flex items-center gap-2 text-sm transition-all whitespace-nowrap ${
              filters.newest
                ? "bg-blue-600 border-blue-600 text-white"
                : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
            }`}
          >
            <span className="text-lg">↗</span>
            تازه‌ترین
          </button>

          <button
            onClick={handleSortByRent}
            className={`shrink-0 h-11 px-5 rounded-full border flex items-center gap-2 text-sm transition-all whitespace-nowrap ${
              filters.sortByRent
                ? "bg-blue-600 border-blue-600 text-white"
                : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
            }`}
          >
            <CurrencyDollarIcon className="w-4 h-4" />
            ماهانه
            {filters.sortByRent === "asc" && <ArrowUpIcon className="w-3 h-3" />}
            {filters.sortByRent === "desc" && <ArrowDownIcon className="w-3 h-3" />}
          </button>

          <button
            onClick={handleSortByBudget}
            className={`shrink-0 h-11 px-5 rounded-full border flex items-center gap-2 text-sm transition-all whitespace-nowrap ${
              filters.sortByBudget
                ? "bg-blue-600 border-blue-600 text-white"
                : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
            }`}
          >
            <CurrencyDollarIcon className="w-4 h-4" />
            بودجه
            {filters.sortByBudget === "asc" && <ArrowUpIcon className="w-3 h-3" />}
            {filters.sortByBudget === "desc" && <ArrowDownIcon className="w-3 h-3" />}
          </button>
        </div>

        {(filters.budgetMin || filters.budgetMax || filters.ageMin || filters.ageMax || filters.gender || filters.houseType) && (
          <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-gray-100">
            {(filters.budgetMin || filters.budgetMax) && (
              <span className="bg-gray-100 px-3 py-1 rounded-full text-xs flex items-center gap-1">
                بودجه: {filters.budgetMin ? parseInt(filters.budgetMin).toLocaleString("fa-IR") : "۰"} تا{" "}
                {filters.budgetMax ? parseInt(filters.budgetMax).toLocaleString("fa-IR") : "هر مقدار"} تومان
                <button
                  onClick={() => setFilters({ ...filters, budgetMin: "", budgetMax: "" })}
                  className="hover:text-red-500"
                >
                  <XMarkIcon className="w-3 h-3" />
                </button>
              </span>
            )}
            {(filters.ageMin || filters.ageMax) && (
              <span className="bg-gray-100 px-3 py-1 rounded-full text-xs flex items-center gap-1">
                سن: {filters.ageMin || "۰"} تا {filters.ageMax || "هر سن"}
                <button
                  onClick={() => setFilters({ ...filters, ageMin: "", ageMax: "" })}
                  className="hover:text-red-500"
                >
                  <XMarkIcon className="w-3 h-3" />
                </button>
              </span>
            )}
            {filters.gender && (
              <span className="bg-gray-100 px-3 py-1 rounded-full text-xs flex items-center gap-1">
                {filters.gender === "female" ? "خانم" : "آقا"}
                <button
                  onClick={() => setFilters({ ...filters, gender: "" })}
                  className="hover:text-red-500"
                >
                  <XMarkIcon className="w-3 h-3" />
                </button>
              </span>
            )}
            {filters.houseType === "owner" && (
              <span className="bg-gray-100 px-3 py-1 rounded-full text-xs flex items-center gap-1">
                <FaHome size={14} />
                خانه دار
                <button
                  onClick={() => setFilters({ ...filters, houseType: "" })}
                  className="hover:text-red-500"
                >
                  <XMarkIcon className="w-3 h-3" />
                </button>
              </span>
            )}
            <button onClick={onClear} className="text-red-500 text-xs">
              حذف همه
            </button>
          </div>
        )}
      </div>

      {showAdvanced && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-2xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">فیلتر پیشرفته</h3>
              <button
                onClick={() => setShowAdvanced(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-base font-medium mb-3">
                  محدوده بودجه (تومان)
                </label>
                <div className="flex gap-3">
                  <div className="flex-1">
                    <input
                      type="number"
                      value={tempFilters.budgetMin}
                      onChange={(e) =>
                        setTempFilters({ ...tempFilters, budgetMin: e.target.value })
                      }
                      placeholder="حداقل بودجه"
                      className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
                    />
                  </div>
                  <div className="flex-1">
                    <input
                      type="number"
                      value={tempFilters.budgetMax}
                      onChange={(e) =>
                        setTempFilters({ ...tempFilters, budgetMax: e.target.value })
                      }
                      placeholder="حداکثر بودجه"
                      className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-base font-medium mb-3">
                  محدوده سنی
                </label>
                <div className="flex gap-3">
                  <div className="flex-1">
                    <input
                      type="number"
                      value={tempFilters.ageMin}
                      onChange={(e) =>
                        setTempFilters({ ...tempFilters, ageMin: e.target.value })
                      }
                      placeholder="حداقل سن"
                      className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
                    />
                  </div>
                  <div className="flex-1">
                    <input
                      type="number"
                      value={tempFilters.ageMax}
                      onChange={(e) =>
                        setTempFilters({ ...tempFilters, ageMax: e.target.value })
                      }
                      placeholder="حداکثر سن"
                      className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <button
                onClick={() => setShowAdvanced(false)}
                className="flex-1 py-3 bg-gray-100 rounded-xl font-medium hover:bg-gray-200 transition text-base"
              >
                انصراف
              </button>
              <button
                onClick={applyAdvanced}
                className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition text-base"
              >
                اعمال فیلتر
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}