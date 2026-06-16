import { useState } from "react";
import {
  X,
  SlidersHorizontal,
  ChevronDown,
} from "lucide-react";

import AdvancedSelectModal from "./AdvancedSelectModal";

export default function AdvancedFilterModal({
  open,
  onClose,
  filters,
  setFilters,
  onApply,
}) {
  const [activeModal, setActiveModal] =
    useState(null);

  if (!open) return null;

  const mapOptions = [
    {
      value: "",
      label: "چیدمان واحد",
    },
    {
      value: "full_unit",
      label: "کل واحد",
    },
    {
      value: "private_room",
      label: "اتاق اختصاصی",
    },
    {
      value: "shared_room",
      label: "اتاق اشتراکی",
    },
  ];

  const unitOptions = [
    {
      value: "",
      label: "نوع اتاق(همه)",
    },
    {
      value: "apartment",
      label: "آپارتمان",
    },
    {
      value: "villa",
      label: "خانه ویلایی",
    },
    {
      value: "dormitory",
      label: "خوابگاه",
    },
    {
      value: "guesthouse",
      label: "مهمانسرا",
    },
    {
      value: "shared_apartment",
      label: "آپارتمان اشتراکی",
    },
    {
      value: "garden_house",
      label: "خانه باغ",
    },
    {
      value: "basement",
      label: "زیرزمین",
    },
  ];

  return (
    <>
      <div
        className="
          fixed
          inset-0
          z-[100]
          bg-black/40
          flex
          items-end
          justify-center
        "
        onClick={onClose}
      >
        <div
          onClick={(e) =>
            e.stopPropagation()
          }
          className="
            bg-white
            w-full
            max-w-lg
            rounded-t-[40px]
            max-h-[90vh]
            overflow-y-auto
            relative
          "
        >
          {/* Header */}
          <div className="px-6 pt-6 pb-4 relative">

           <button
             onClick={onClose}
             className="
              absolute
              left-6
              top-6
              w-12
              h-12
              rounded-full
              bg-gray-100
              flex
              items-center
              justify-center
            "
          >
           <X size={22} />
          </button>
        
         <div
          className="
           absolute
           right-6
           top-6
           w-14
           h-14
           rounded-2xl
           bg-blue-600
           text-white
           flex
           items-center
           justify-center
           shadow-lg
          "
        >
        <SlidersHorizontal size={24} />
      </div>

            <div className="text-center pt-4">
              <h2 className="text-2xl font-bold">
                فیلتر هوشمند اتاق‌ها
              </h2>

              <p className="text-gray-400 mt-2">
                بر اساس جزئیات ملک و قرارداد
              </p>
            </div>

          </div>

          <div className="px-6 pb-8">

            {/* مالی */}
            <div className="mb-8">

              <h3 className="text-blue-600 font-medium mb-4">
                محدوده مالی
              </h3>

              <div className="space-y-4">

                <input
                  type="number"
                  placeholder="حداکثر اجاره"
                  value={filters.maxRent}
                  onChange={(e) =>
                    setFilters({
                      ...filters,
                      maxRent:
                        e.target.value,
                    })
                  }
                  className="
                    w-full
                    h-16
                    bg-gray-100
                    rounded-3xl
                    px-5
                  "
                />

                <input
                  type="number"
                  placeholder="حداکثر ودیعه"
                  value={filters.maxDeposit}
                  onChange={(e) =>
                    setFilters({
                      ...filters,
                      maxDeposit:
                        e.target.value,
                    })
                  }
                  className="
                    w-full
                    h-16
                    bg-gray-100
                    rounded-3xl
                    px-5
                  "
                />

              </div>

            </div>

            {/* مشخصات */}
            <div>

              <h3 className="text-blue-600 font-medium mb-4">
                مشخصات ملک
              </h3>

              <div className="space-y-4">

                <input
                  type="number"
                  placeholder="حداقل خواب"
                  value={
                    filters.minBedrooms
                  }
                  onChange={(e) =>
                    setFilters({
                      ...filters,
                      minBedrooms:
                        e.target.value,
                    })
                  }
                  className="
                    w-full
                    h-16
                    bg-gray-100
                    rounded-3xl
                    px-5
                  "
                />

                {/* چیدمان واحد */}

                <button
                  onClick={() =>
                    setActiveModal("map")
                  }
                  className="
                    w-full
                    h-16
                    bg-gray-100
                    rounded-3xl
                    px-5
                    flex
                    flex-row-reverse
                    items-center
                    justify-between
                  "
                >
                  <ChevronDown size={18} />
                  
                  <span
                   className={
                     filters.mapType
                     ? "text-gray-800"
                     : "text-gray-400"
                    }
                  >
                     {
                     mapOptions.find(
                      (item) =>
                        item.value === filters.mapType
                      )?.label ||"چیدمان واحد (همه)"
                     }
                    </span>
                </button>

                {/* نوع اتاق */}

                <button
                  onClick={() =>
                    setActiveModal("unit")
                  }
                  className="
                    w-full
                    h-16
                    bg-gray-100
                    rounded-3xl
                    px-5
                    flex
                    flex-row-reverse
                    items-center
                    justify-between
                  "
                >
                  <ChevronDown size={18} />
                  <span
                    className={
                       filters.unitType
                       ? "text-gray-800"
                       : "text-gray-400"
                      }
                    >
                      {
                       unitOptions.find(
                         (item) => item.value === filters.unitType
                         )?.label || "نوع اتاق (همه)"
                         }
                    </span>
                </button>

              </div>

            </div>

          </div>

          {/* Footer */}

          <div
            className="
              sticky
              bottom-0
              bg-white
              border-t
              p-5
              rounded-b-[40px]
            "
          >
            <button
              onClick={() =>
                setFilters({
                  maxRent: "",
                  maxDeposit: "",
                  minBedrooms: "",
                  mapType: "",
                  unitType: "",
                })
              }
              className="
                w-full
                text-gray-500
                mb-4
              "
            >
              پاک کردن همه
            </button>

            <button
              onClick={onApply}
              className="
                w-full
                h-16
                rounded-3xl
                bg-blue-600
                text-white
                text-lg
              "
            >
              جستجو و اعمال فیلتر
            </button>

          </div>

        </div>
      </div>

    <AdvancedSelectModal
     open={!!activeModal}
      title={
        activeModal === "map"
        ? "چیدمان واحد"
        : "نوع اتاق"
      }
      options={
         activeModal === "map"
         ? mapOptions
         : unitOptions
        }
      value={
        activeModal === "map"
        ? filters.mapType
        : filters.unitType
      }
       onClose={() => setActiveModal(null)}
       onSelect={(value) => {
        if (activeModal === "map") {
          setFilters({
        ...filters,
        mapType: value,
      });
    }

    if (activeModal === "unit") {
      setFilters({
        ...filters,
        unitType: value,
      });
    }
  }}
/>
    </>
  );
}