import SearchFilters from "./SearchFilters";
import BottomNav from "../BottomNav";
import  RoomCard from "./RoomCard";

export default function RoomSearchPage() {
  const rooms = [
  {
  id: 1,
  image: "/images/room1.jpg",

  city: "تهران",
  district: "صادقیه",

  bathrooms: 1,
  roommates: 2,

  deposit: "۱۰۰ میلیون",
  rent: "۸ میلیون",

  mapType: "کل واحد",
  bedrooms: "۲ خواب",
  unitType: "آپارتمان",

  owner: "نگار محمدی",
  gender: "خانم",
  age: 24,

  duration: "ثابت",

  ownerImage: "/images/default-female.png",

  date: "یکشنبه 1405/01/0",
}

];
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#F6F7FB] py-6 px-4"
    >
      <div className="max-w-md mx-auto">

        <div className="mb-6 text-right">
          <h1 className="text-4xl font-bold text-slate-900">
            جستجوی اتاق
          </h1>

          <p className="text-gray-500 mt-2">
            بهترین گزینه‌ها بر اساس بودجه و نیاز شما
          </p>
        </div>

        <SearchFilters />
        <div className="space-y-4 mt-4">
      {rooms.map((room) => (
        <RoomCard
          key={room.id}
          room={room}
        />
      ))}
    </div>
      
    <div className="
      bg-white
      rounded-[40px]
      shadow-sm
      overflow-hidden
      mb-24"
    >
    </div>
      </div>
      <BottomNav />
    </div>
  );
}