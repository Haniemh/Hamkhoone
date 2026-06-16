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
  const mapLabels = {
  full_unit: "کل واحد",
  private_room: "اتاق اختصاصی",
  shared_room: "اتاق اشتراکی",
};

const unitLabels = {
  apartment: "آپارتمان",
  villa: "خانه ویلایی",
  dormitory: "خوابگاه",
  guesthouse: "مهمانسرا",
  shared_apartment: "آپارتمان اشتراکی",
  garden_house: "خانه باغ",
  basement: "زیرزمین",
};

const durationLabels = {
  flexible: "تمدید قابل انعطاف",
  fixed: "تمدید ثابت",
  yearly: "تمدید سالانه",
};

const bedroomLabels = {
  studio: "استودیو",
  one: "یک خواب",
  two: "دو خواب",
  three: "سه خواب",
  four: "چهار خواب",
  five: "پنج خواب",
  six: "شش خواب",
  seven: "هفت خواب",
};
  const inputClass =
    "w-full h-16 bg-[#F3F5F8] rounded-3xl pr-5";

  return (
    <div className="px-6 py-6">

      <div className="grid grid-cols-2 gap-4">

        {[
          {
            label: mapLabels[mapType] ||"نقشه",
            isPlaceholder: !mapType,
            modal: "map",
          },
          {
            label: unitLabels[unitType] || "نوع واحد",
            isPlaceholder: !unitType,
            modal: "unit",
          },
          {
            label: durationLabels[duration] || "مدت",
            isPlaceholder: !duration,
            modal: "duration",
          },
          {
            label: bedroomLabels[bedrooms] || "تعداد خواب",
            isPlaceholder: !bedrooms,
            modal: "bedrooms",
          },
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
               item.isPlaceholder
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