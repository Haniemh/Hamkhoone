import { useLocation } from "react-router-dom";
import BottomNav from "../BottomNav";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  Heart,
  Pencil,
  Calendar,
  BedDouble,
  Home,
  Wallet,
  Users,
  Bath,
  MapPin,
  RefreshCw,
} from "lucide-react";

export default function RoomDetails() {
  const navigate = useNavigate();


  const location = useLocation();

  const labels = {
  // duration
  flexible: "قابل انعطاف",
  fixed: "تمدید ثابت",
  yearly: "سالانه",

  // mapType
  full_unit: "کل واحد",
  private_room: "اتاق اختصاصی",
  shared_room: "اتاق اشتراکی",

  // unitType
  apartment: "آپارتمان",
  villa: "خانه ویلایی",
  dormitory: "خوابگاه",
  guesthouse: "مهمانسرا",
  shared_apartment: "آپارتمان اشتراکی",
  garden_house: "خانه باغ",
  basement: "زیرزمین",

  studio: "استودیو",
  1: "یک خواب",
  2: "دو خواب",
  3: "سه خواب",
  4: "چهار خواب",
  5: "پنج خواب",
  6: "شش خواب",
  7: "هفت خواب",
};

  const room = location.state?.room;
  const isMyRoom = room?.createdByMe;

  const [isFavorite, setIsFavorite] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);

  useEffect(() => {
    const favorites =
     JSON.parse(localStorage.getItem("favoriteRooms")) || [];
    
     setIsFavorite(
       favorites.some((item) => item.id === room.id)
      );
    }, [room]);

  if (!room) {
    return (
      <div className="p-10 text-center">
        اطلاعات آگهی پیدا نشد
      </div>
    );
  }

  const toggleFavorite = () => {
    const favorites =
    JSON.parse(localStorage.getItem("favoriteRooms")) || [];
    
    const exists = favorites.some(
       (item) => item.id === room.id
      );
      
    let updated;

    if (exists) {
       updated = favorites.filter(
       (item) => item.id !== room.id
      );

      setIsFavorite(false);
    } 
    else {
      updated = [...favorites, room];

      setIsFavorite(true);
    }

    localStorage.setItem(
      "favoriteRooms",
      JSON.stringify(updated)
    );
  };

  return (
    <div
      dir="rtl"
      className="
        min-h-screen
        bg-white
        text-gray-900
        p-8
        md:p-8
        pt-24
        md:pt-28
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          md:grid-cols-12
          gap-8
        "
      >
      <div 
        className="
         md:col-span-8
         bg-white
         border
         border-gray-200
         rounded-[40px]
         p-6
         shadow-sm
        "
      >

          <img
            src={room.mainImage}
            alt=""
            className="
              w-full
              h-64
              md:h-[600px]
              rounded-[30px]
              object-cover
            "
          />

          <div className="flex overflow-x-auto gap-4 mt-4">

            {Array.isArray(room.galleryImages) &&
      room.galleryImages.map((img, index) => (
    <img
      key={index}
      src={img}
      alt=""
      className="
        w-32
        h-24
        rounded-2xl
        object-cover
      "
    />
))}

          </div>
          
        <div className="mt-8">
          <h3 className="text-2xl  text-right">
             درباره اتاق
         </h3>
         
        <p className="text-gray-400 text-sm mt-2 mb-4 text-right">
           توضیحات صاحب آگهی
        </p>
        
        <div
         className="
          bg-gray-50
          border
          border-gray-200
          rounded-[24px]
          p-5
          "
        >
          <p className="leading-8 text-gray-600 whitespace-pre-line">
            {room.roomDescription}
          </p>
          
        </div>
          </div>

          <div className="mt-8">
          <h3 className="text-2xl ">
              درباره محله
         </h3>
         
        <p className="text-gray-400 text-sm mt-2 mb-4">
           اطلاعات محیط و محله
        </p>
        
        <div
         className="
          bg-gray-50
          border
          border-gray-200
          rounded-[24px]
          p-5
          "
        >
          <p className="leading-8 text-gray-600 whitespace-pre-line">
            {room.neighborhoodDescription}
          </p>
          
        </div>
          </div>

        </div>
        <div
         className="
          md:col-span-4
          bg-white
          border
          border-gray-200
          rounded-[40px]
          p-6
         shadow-sm
         "
        >
        
        {isMyRoom ? (
           <button
             onClick={() =>
              navigate("/create-property", {
                state: {
                  editMode: true,
                  room,
                },
              })
          }
          className="
           w-12 h-12
           rounded-2xl
           border border-gray-200
           flex items-center justify-center
          "
          >
          <Pencil size={20} />
         </button>
          ) 
          : (
           <button
            onClick={toggleFavorite}
            className="
             w-12 h-12
             rounded-2xl
             border border-gray-200
             flex items-center justify-center
            "
            >
            <Heart
             size={20}
             fill={isFavorite ? 'red' : 'none'}
             color={isFavorite ? 'red' : 'currentColor'}
            />
            </button>
          )}

          <div
            className="
              bg-white
              text-gray-900
              rounded-[30px]
              p-6
            "
          >
            <div className="p-2">
              
              
        <h1 className="text-3xl md:text-4xl text-center mb-6">
          {room.title}
        </h1>

  {/* map type */}
      <div className="flex justify-center mb-4">
         <div
           className="
           inline-flex
           items-center
           gap-2
           bg-blue-50
           text-blue-700
           px-10
           py-3
           rounded-2xl
           text-sm
           font-medium
           h-11
           "
         >
          {labels[room.mapType]}
        </div>
      </div>
      
      <div className="flex justify-center mb-4">
        <div
          className="
           inline-flex
           items-center
           gap-2
           bg-blue-50
           text-blue-700
           px-20
           py-3
           rounded-2xl
           text-sm
           font-medium
           h-12
          "
        >
          <Calendar size={16} />
           {room.date}
        </div>
      </div>

  {/* unit + bedrooms */}
     <div className="grid grid-cols-2 gap-3 mb-5">
       <div
        className="
        border-2
        border-black
        rounded-2xl
        h-12
        flex
        items-center
        justify-center
        gap-2
      "
      >
      <Home size={18} />
      {labels[room.unitType]}
     </div>
     
      <div
       className="
       border-2
       border-black
       rounded-2xl
       h-12
       flex
       items-center
       justify-center
       gap-2
      "
      >
        <BedDouble size={18} />
         {labels[room.bedrooms]}
      </div>

    </div>

  {/* rent */}
    <div className="flex justify-center mb-4">
      <div
      className="
      bg-green-50
      inline-flex
      items-center
      gap-2
      text-green-700
      px-20
      py-3
      rounded-2xl
      text-sm
      font-medium
      h-12
      border
      border-green-200
    "
    >
      <Wallet size={18} />
      <span >
         ماهانه {room.rent}
      </span>
      </div>
    </div>

  {/* deposit */}
  <div className="flex justify-center mb-4">
     <div
      className="
      bg-green-50
      inline-flex
      items-center
      gap-1
      text-green-700
      px-16
      py-3
      rounded-2xl
      text-sm
      font-medium
      h-12
      border
      border-green-200
    "
    >
      <Wallet size={18} />
       <span>
         رهن {room.deposit}
      </span>
    </div>
   </div>
  {/* roommates + bath */}
   <div className="grid grid-cols-2 gap-3 mb-4">

    <div
      className="
      bg-gray-100
      rounded-2xl
      p-3
      flex
      items-center
      justify-center
      gap-1
      text-xs
      whitespace-nowrap
      "
    >
      <Users size={18} className="text-blue-500 shrink-0" />
       <span>{room.roommates} هم‌اتاقی</span>
    </div>

    <div
      className="
        bg-gray-100
      rounded-2xl
      p-3
      flex
      items-center
      justify-center
      gap-2
      text-xs
      whitespace-nowrap
      "
    >
      <Bath size={18} />
      {room.bathrooms} سرویس
    </div>

  </div>

  {/* duration */}
  <div className="flex justify-center mb-4">
   <div
     className="
     inline-flex
     items-center
     gap-2
     bg-gray-100
     rounded-2xl
     px-6
     py-3
     text-sm
     font-medium
     h-12
    "
    >
     <RefreshCw size={18} />
       {labels[room.duration]}
     </div>
    </div>
  {/* location */}

   <div className="flex justify-center mb-4">
    <div
      className="
      inline-flex
      items-center
      gap-2
      bg-gray-100
      rounded-2xl
      px-6
      py-3
      text-sm
      font-medium
      h-12
    "
  >
    <MapPin size={18} className="text-red-500" />
    {room.city} ، {room.district}
  </div>
</div>
</div>
</div>


          {/* صاحب آگهی */}

    <div className="border-t border-gray-200 mt-6 pt-6">
       <div
          className="
           bg-gray-50
           border
           border-gray-200
           rounded-[24px]
           p-6
           text-center
          "
        >
        <img
         src={room.profileImage}
         alt=""
         className="
         w-24
         h-24
         rounded-full
         mx-auto
         object-cover
        "
      />

      <h3 className="mt-4 text-2xl">
       {room.fullName}
      </h3>

      <p className="text-gray-400 mt-2">
        {room.gender === "male"
            ? "آقا"
            : "خانم"}{" "}
          • {room.age} ساله
      </p>

      {isMyRoom ? (
  <button
    onClick={() => setDeleteMode(true)}
    className="
      mt-6
      w-full
      h-14
      rounded-2xl
      border
      border-red-500
      text-red-500
    "
  >
    حذف آگهی
  </button>
) : (
  <button
    className="
      mt-6
      w-full
      h-14
      rounded-2xl
      border
      border-blue-500
      text-blue-400
    "
  >
    ارسال درخواست چت
  </button>
)}
    </div>
       </div>
        </div>

      </div>

      <div className="
      bg-white
      rounded-[40px]
      shadow-sm
      overflow-hidden
      mb-24"
    >
    </div>
      {deleteMode && (
  <div
    className="
      fixed inset-0
      bg-black/40
      flex items-center justify-center
      z-50
    "
  >
    <div
      className="
        bg-white
        rounded-3xl
        p-6
        w-[320px]
        text-center
      "
    >
      <h3 className="text-lg mb-4">
        حذف آگهی
      </h3>

      <p className="text-gray-500 mb-6">
        مطمئنی میخوای این آگهی حذف بشه؟
      </p>

      <div className="flex gap-3">
        <button
          className="
            flex-1
            bg-red-500
            text-white
            py-3
            rounded-2xl
          "
          onClick={() => {
            const rooms =
              JSON.parse(
                localStorage.getItem("myRooms")
              ) || [];

            const updated =
              rooms.filter(
                (item) => item.id !== room.id
              );

            localStorage.setItem(
              "myRooms",
              JSON.stringify(updated)
            );

            navigate("/my-rooms");
          }}
        >
          حذف
        </button>

        <button
          className="
            flex-1
            border
            py-3
            rounded-2xl
          "
          onClick={() =>
            setDeleteMode(false)
          }
        >
          انصراف
        </button>
      </div>
    </div>
  </div>
)}
      <BottomNav />
    </div>
  );
}