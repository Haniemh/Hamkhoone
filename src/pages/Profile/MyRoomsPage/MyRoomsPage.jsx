import { useEffect, useState } from "react";

import SearchFilters from "../../RoomSearch/SearchFilters";
import AdvancedFilterModal from "../../RoomSearch/AdvancedFilterModal";
import RoomCard from "../../RoomSearch/RoomCard";

import BottomNav from "../../BottomNav";


export default function FavoritePage() {
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

  
 const [rooms, setRooms] = useState([]);

useEffect(() => {
  const myRooms =
    JSON.parse(
      localStorage.getItem("myRooms")
    ) || [];

  setRooms(myRooms);
}, []);
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
               آگهی های من
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
               آگهی های من
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
            هنوز آگهی ثبت نکرده‌اید
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