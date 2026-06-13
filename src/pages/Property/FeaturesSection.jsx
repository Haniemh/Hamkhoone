import { ChevronDown } from "lucide-react";

export default function FeaturesSection({
  mapType,
  unitType,
  duration,
  bedrooms,
  setActiveModal,

  roommatesCount,
  setRoommatesCount,

  bathroomsCount,
  setBathroomsCount,

  city,
  setCity,
  
  district,
  setDistrict,
  
}) 
{
  const inputClass =
    "w-full h-16 bg-[#F3F5F8] rounded-3xl pr-5";

  return (
    <div className="px-6 py-6">

      <div className="grid grid-cols-2 gap-4">

        {[
          { label: mapType, modal: "map" },
          { label: unitType, modal: "unit" },
          { label: duration, modal: "duration" },
          { label: bedrooms, modal: "bedrooms" },
        ].map((item) => (
          <button
            key={item.modal}
            onClick={() => setActiveModal(item.modal)}
            className="
              h-16
              bg-[#F3F5F8]
              rounded-3xl
              px-5
              flex
              flex-row-reverse
              justify-between
              items-center
            "
          >
            <ChevronDown size={18} />

            <span
            className={
               item.label === "نقشه" ||
               item.label === "نوع واحد" ||
               item.label === "مدت" ||
               item.label === "تعداد خواب"
                ? "text-gray-400"
                : "text-gray-700"
                }>
                {item.label}
            </span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <input
          type="number"
          placeholder="تعداد هم‌اتاقی‌ها"
          value={roommatesCount}
          onChange={(e) =>setRoommatesCount(e.target.value)}
          className={inputClass}
        />

        <input
          type="number"
          placeholder="تعداد سرویس"
          value={bathroomsCount}
          onChange={(e) =>setBathroomsCount(e.target.value)}
          className={inputClass}
        />
      </div>

      <div className="space-y-4 mt-4">
        <input
          type="text"
          placeholder="جستجوی شهر..."
          value={city}
          onChange={(e) =>setCity(e.target.value)}
          className={inputClass}
        />

        <input
          type="text"
          placeholder="جستجوی محله..."
          value={district}
          onChange={(e) =>setDistrict(e.target.value)}
          className={inputClass}
        />
      </div>
    </div>
  );
}