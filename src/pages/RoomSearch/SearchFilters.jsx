import {
  FunnelIcon,
  CalendarDaysIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

import { FaMale, FaFemale } from "react-icons/fa";

export default function SearchFilters({
  gender,
  setGender,
  activeSort,
  setActiveSort,
  onAdvancedClick,}) 
{
  const filters = [
    {
      key: "deposit",
      label: "ودیعه",
      icon: (
        <CurrencyDollarIcon className="w-4 h-4" />
      ),
    },
    {
      key: "rent",
      label: "اجاره",
      icon: (
        <CurrencyDollarIcon className="w-4 h-4" />
      ),
    },
    {
      key: "duration",
      label: "تاریخ خالی شدن",
      icon: (
        <CalendarDaysIcon className="w-4 h-4" />
      ),
    },
    {
      key: "latest",
      label: "جدیدترین",
      icon: <span>↗</span>,
    },
  ];

  return (
    <>
      <div className="lg:hidden bg-white rounded-[28px] p-4 shadow-sm border border-gray-100">

        <div className="flex gap-2 mb-3">

          <button
            onClick={onAdvancedClick}
            className="
              flex-1
              h-11
              bg-blue-600
              text-white
              rounded-full
              flex
              items-center
              justify-center
              gap-2
              text-sm
              font-medium
              shadow-md
            "
          >
            <FunnelIcon className="w-5 h-5" />
            فیلتر پیشرفته
          </button>

          <div className="w-[38%] h-11 bg-gray-100 rounded-full flex p-1">

            <button
              onClick={() =>
                setGender(
                  gender === "female"
                    ? null
                    : "female"
                )
              }
              className={`flex-1 rounded-full flex items-center justify-center gap-1 text-sm transition
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
                setGender(
                  gender === "male"
                    ? null
                    : "male"
                )
              }
              className={`flex-1 rounded-full flex items-center justify-center gap-1 text-sm transition
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

        <div className="flex gap-3 overflow-x-auto scrollbar-hide">

          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() =>
                setActiveSort(
                  activeSort === filter.key
                    ? null
                    : filter.key
                )
              }
              className={`
                shrink-0
                h-11
                px-5
                rounded-full
                border
                text-sm
                flex
                items-center
                gap-2
                transition

                ${
                  activeSort === filter.key
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-600 border-gray-200"
                }
              `}
            >
              {filter.icon}
              {filter.label}
            </button>
          ))}

        </div>

      </div>

      <div
        className="
          hidden
          lg:flex
          bg-white
          rounded-3xl
          p-4
          shadow-sm
          border
          border-gray-100
          items-center
          gap-3
        "
      >

        <button
          onClick={onAdvancedClick}
          className="
            bg-blue-600
            text-white
            px-8
            h-12
            rounded-full
            flex
            items-center
            gap-2
            shadow-md
          "
        >
          <FunnelIcon className="w-5 h-5" />
          فیلتر پیشرفته
        </button>

        <div className="w-55 h-12 bg-gray-100 rounded-full flex p-1">

          <button
            onClick={() =>
              setGender(
                gender === "female"
                  ? null
                  : "female"
              )
            }
            className={`flex-1 rounded-full flex items-center justify-center gap-2 transition
            ${
              gender === "female"
                ? "bg-blue-600 text-white"
                : "text-gray-500"
            }`}
          >
            <FaFemale />
            خانم
          </button>

          <button
            onClick={() =>
              setGender(
                gender === "male"
                  ? null
                  : "male"
              )
            }
            className={`flex-1 rounded-full flex items-center justify-center gap-2 transition
            ${
              gender === "male"
                ? "bg-blue-600 text-white"
                : "text-gray-500"
            }`}
          >
            <FaMale />
            آقا
          </button>

        </div>

        <div className="flex gap-2 mr-auto">

          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() =>
                setActiveSort(
                  activeSort === filter.key
                    ? null
                    : filter.key
                )
              }
              className={`
                h-12
                px-5
                rounded-full
                border
                flex
                items-center
                gap-2
                transition

                ${
                  activeSort === filter.key
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-600 border-gray-200"
                }
              `}
            >
              {filter.icon}
              {filter.label}
            </button>
          ))}

        </div>

      </div>
    </>
  );
}