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
      deposit: "۳۰۰ میلیون",
      rent: "۸ میلیون",
      mapType: "کل واحد",
      bedrooms: "۲ خواب",
      unitType: "آپارتمان",
      owner: "زهرا محمدی",
      gender: "female",
      age: 30,
      duration: "۳۰ روز",
      ownerImage: "/images/default-female.png",
      date: "یکشنبه 1405/01/01",
    },
  ];
  
  return (
    <div dir="rtl" className="min-h-screen bg-[#f5f6fa]">
      <div className="max-w-7xl mx-auto p-4 pb-32">

        <div className="mb-6 text-right">
          <h1 className="text-2xl font-bold mb-4">جستجوی اتاق</h1>
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