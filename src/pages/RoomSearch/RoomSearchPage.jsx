import { useState } from "react";

import SearchFilters from "./SearchFilters";
import BottomNav from "../BottomNav";
import RoomCard from "./RoomCard";
import AdvancedFilterModal from "./AdvancedFilterModal";

export default function RoomSearchPage() {
  const [gender, setGender] = useState(null);
  const [activeSort, setActiveSort] = useState(null);

  const [advancedModal, setAdvancedModal] = useState(false);

  const [advancedFilters, setAdvancedFilters] =
  useState({
    maxRent: "",
    maxDeposit: "",
    minBedrooms: "",
    mapType: "",
    unitType: "",
  });
  const [draftFilters, setDraftFilters] =
  useState({
    maxRent: "",
    maxDeposit: "",
    minBedrooms: "",
    mapType: "",
    unitType: "",
  });
  const bedroomValue = {
  studio: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
};

  const rooms = [
  {
  id: 1,
  title: "هم خونه ی خانم",
  roomDescription:
    "یک اتاق بزرگ با نورگیری مناسب...",

  neighborhoodDescription:
    "محله صادقیه دسترسی عالی به مترو دارد...",

  city: "تهران",
  district: "صادقیه",
  mainImage: "/images/room1.jpg",
  galleryImages: [
    "/images/room2.jpg",
  ],
  bathrooms: 1,
  roommates: 2,
  deposit: "۳۰۰ میلیون",
  rent: "۸ میلیون",
  mapType: "full_unit",
  bedrooms: 2,
  unitType: "apartment",
  fullName: "زهرا محمدی",
  gender: "female",
  age: 30,
  duration: "yearly",
  profileImage: "/images/default-female.png",
  date: "1405/01/01",
},
{
  id: 2,
  mainImage: "/images/room1.jpg",
  title: "هم خونه ی آقا",
  roomDescription:
    "یک اتاق بزرگ با نورگیری خوب...",

  neighborhoodDescription:
    "محله سعادت آباد دسترسی عالی به مترو دارد...",

  city: "تهران",
  district: "صادقیه",
  mainImage: "/images/room1.jpg",
  galleryImages: [
    "/images/room2.jpg",
  ],
  city: "تهران",
  district: "سعادت آباد",
  bathrooms: 1,
  roommates: 2,
  deposit: "۵۰۰ میلیون",
  rent: "۱۲ میلیون",
  mapType: "private_room",
  bedrooms: 1,
  unitType: "apartment",
  fullName: "علی رضایی",
  gender: "male",
  age: 27,
  duration: "fixed",
  profileImage: "/images/default-female.png",
  date: "1405/02/01",
},
{
  id: 3,
  mainImage: "/images/room1.jpg",
  title: "همخونه خانم",
  roomDescription:
    "یک اتاق  با نورگیری مناسب...",

  neighborhoodDescription:
    "محله صادقیه دسترسی عالی به مترو دارد...",

  city: "تهران",
  district: "صادقیه",
  mainImage: "/images/room1.jpg",
  galleryImages: [
    "/images/room2.jpg",
    "/images/room3.jpg",
    "/images/room4.jpg",
  ],
  city: "تهران",
  district: "صادقیه",
  bathrooms: 2,
  roommates: 3,
  deposit: "۲۰۰ میلیون",
  rent: "۶ میلیون",
  mapType: "full_unit",
  bedrooms: 3,
  unitType: "villa",
  fullName: "زهرا احمدی",
  gender: "female",
  age: 30,
  duration: "flexible",
  profileImage: "/images/default-female.png",
  date: "1405/03/01",
}
  ];

  const getNumber = (value) =>
    Number(
      value
        .replace(/[۰-۹]/g, (d) =>
          "۰۱۲۳۴۵۶۷۸۹".indexOf(d)
        )
        .replace(/[^\d]/g, "")
    );

  const durationOrder = {
    flexible: 1,
    yearly: 2,
    fixed: 3,
  };

  let filteredRooms = [...rooms];

  // فیلتر جنسیت
  if (gender) {
    filteredRooms = filteredRooms.filter(
      (room) => room.gender === gender
    );
  }

  if (advancedFilters.mapType) {
  filteredRooms = filteredRooms.filter(
    (room) =>
      room.mapType ===
      advancedFilters.mapType
  );
}

 if (advancedFilters.unitType) {
  filteredRooms = filteredRooms.filter(
    (room) =>
      room.unitType ===
      advancedFilters.unitType
  );
}
 
if (advancedFilters.minBedrooms) {
  filteredRooms = filteredRooms.filter(
    (room) =>
      bedroomValue[room.bedrooms] >=
      Number(
        advancedFilters.minBedrooms
      )
  );
}
  if (advancedFilters.maxRent) {
  filteredRooms = filteredRooms.filter(
    (room) =>
      getNumber(room.rent) <=
      Number(advancedFilters.maxRent)
  );
} 

if (advancedFilters.maxDeposit) {
  filteredRooms = filteredRooms.filter(
    (room) =>
      getNumber(room.deposit) <=
      Number(
        advancedFilters.maxDeposit
      )
  );
}

  // مرتب سازی ودیعه
  if (activeSort === "deposit") {
    filteredRooms.sort(
      (a, b) =>
        getNumber(a.deposit) -
        getNumber(b.deposit)
    );
  }

  // مرتب سازی اجاره
  if (activeSort === "rent") {
    filteredRooms.sort(
      (a, b) =>
        getNumber(a.rent) -
        getNumber(b.rent)
    );
  }

  // مرتب سازی تاریخ خالی شدن
  if (activeSort === "duration") {
    filteredRooms.sort(
      (a, b) =>
        durationOrder[a.duration] -
        durationOrder[b.duration]
    );
  }

  // جدیدترین
  if (activeSort === "latest") {
    filteredRooms.sort(
      (a, b) =>
        new Date(
          b.date.replaceAll("/", "-")
        ) -
        new Date(
          a.date.replaceAll("/", "-")
        )
    );
  }

  return (
    <div dir="rtl" className="min-h-screen bg-[#f5f6fa] md:pt-16">
      <div className="max-w-7xl mx-auto p-4 pb-32">

        {/* Header */}
        <div className="mb-6">

          <div className="hidden md:flex items-center justify-between">

            <h1 className="text-2xl font-bold">
              جستجوی اتاق
            </h1>

            <div
              className="
                flex
                bg-yellow-100
                text-yellow-800
                px-4
                py-2
                rounded-xl
                text-sm
                font-medium
              "
            >
              {filteredRooms.length} اتاق فعال پیدا شد
            </div>

          </div>

          <div className="md:hidden">

            <h1 className="text-2xl font-bold mb-2">
              جستجوی اتاق
            </h1>

            <div
              className="
                flex
                w-full
                bg-yellow-100
                text-yellow-800
                px-4
                py-2
                rounded-xl
                text-sm
                font-medium
              "
            >
              {filteredRooms.length} اتاق فعال پیدا شد
            </div>

          </div>

        </div>

        <SearchFilters
          gender={gender}
          setGender={setGender}
          activeSort={activeSort}
          setActiveSort={setActiveSort}
          onAdvancedClick={() => {
            setDraftFilters(advancedFilters);
            setAdvancedModal(true);
          }}
/>

        {filteredRooms.length === 0 ? (
          <div
            className="
              mt-5
              bg-white
              rounded-3xl
              p-10
              text-center
              text-gray-500
            "
          >
            آگهی‌ای با این فیلتر پیدا نشد
          </div>
        ) : (
          <div
            className="
              mt-5
              grid
              grid-cols-1
              md:grid-cols-2
              xl:grid-cols-3
              gap-5
            "
          >
            {filteredRooms.map((room) => (
              <RoomCard
                key={room.id}
                room={room}
              />
            ))}
          </div>
        )}

      </div>

      <AdvancedFilterModal
       open={advancedModal}
       onClose={() => setAdvancedModal(false)}
       filters={draftFilters}
       setFilters={setDraftFilters}
       onApply={() => {
        setAdvancedFilters(draftFilters);
        setAdvancedModal(false);}
      }
/>

      <BottomNav />
    </div>
  );
}