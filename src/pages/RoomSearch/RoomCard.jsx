import {
  MapPin,
  Users,
  Bath
} from "lucide-react";

export default function RoomCard({ room }) {

  const unitTypeText =
  room.unitType === "apartment"
    ? "آپارتمان"
    : room.unitType === "villa"
    ? "خانه ویلایی"
    : room.unitType === "dormitory"
    ? "خوابگاه"
    : room.unitType === "guesthouse"
    ? "مهمانسرا"
    : room.unitType === "shared_apartment"
    ? "آپارتمان اشتراکی"
    : room.unitType === "garden_house"
    ? "خانه باغ"
    : room.unitType === "basement"
    ? "زیرزمین"
    : room.unitType;

const mapTypeText =
  room.mapType === "full_unit"
    ? "کل واحد"
    : room.mapType === "private_room"
    ? "اتاق اختصاصی"
    : room.mapType === "shared_room"
    ? "اتاق اشتراکی"
    : room.mapType;

const bedroomText =
  room.bedrooms === "studio"
    ? "استودیو"
    : room.bedrooms === 1
    ? "یک خواب"
    : room.bedrooms === 2
    ? "دو خواب"
    : room.bedrooms === 3
    ? "سه خواب"
    : room.bedrooms === 4
    ? "چهار خواب"
    : room.bedrooms === 5
    ? "پنچ خواب"
    : room.bedrooms === 6
    ? "شش خواب"
    : room.bedrooms === 7
    ? "هفت خواب"
    : room.bedrooms;

  return (
    <div className="bg-white rounded-4xl overflow-hidden shadow-sm">
      <div className="relative h-64">

        <img
          src={room.image}
          alt={room.title}
          className="w-full h-full object-cover"
        />

        <div
          className="
            absolute
            top-3
            right-3
            bg-[#F3F5F8]
            text-gray-700
            px-3
            py-1.5
            rounded-xl
            text-xs
            font-medium
          "
        >
          {room.date}
        </div>

        <div
          className="
            absolute
            bottom-3
            left-3
            bg-blue-500
            text-white
            px-3
            py-1.5
            rounded-xl
            text-xs
            flex
            items-center
            gap-1
          "
        >
          <MapPin size={13} />

          {room.district}، {room.city}
        </div>

        <div
          className="
            absolute
            bottom-3
            right-3
            flex
            gap-2
          "
        >
          <div
            className="
              bg-[#F3F5F8]
              text-gray-700
              px-3
              py-1.5
              rounded-xl
              text-xs
              flex
              items-center
              gap-1
            "
          >
            <Bath size={13} />
            {room.bathrooms}
          </div>

          <div
            className="
              bg-[#F3F5F8]
              text-gray-700
              px-3
              py-1.5
              rounded-xl
              text-xs
              flex
              items-center
              gap-1
            "
          >
            <Users size={13} />
            {room.roommates}
          </div>
        </div>

      </div>
      <div className="p-5">

        <h3 className="font-bold text-lg mb-4">
          {room.title}
        </h3>
        <div className="grid grid-cols-2 gap-3">

          <div
            className="
              bg-[#F3F5F8]
              rounded-2xl
              py-4
              px-3
              text-center
            "
          >
            <p className="text-xs text-gray-400">
              رهن واحد
            </p>

            <p className="mt-2 font-semibold text-gray-800">
              {room.deposit}
            </p>
          </div>

          <div
            className="
              bg-[#EEF5FF]
              rounded-2xl
              py-4
              px-3
              text-center
            "
          >
            <p className="text-xs text-blue-500">
              اجاره ماهیانه
            </p>

            <p className="mt-2 font-semibold text-blue-700">
              {room.rent}
            </p>
          </div>

        </div>
        <div className="flex flex-wrap gap-2 mt-4">

          <div
            className="
              px-4
              py-2
              rounded-xl
              bg-gray-100
              text-gray-600
              text-xs
            "
          >
            {mapTypeText}
          </div>

          <div
            className="
              px-4
              py-2
              rounded-xl
              bg-gray-100
              text-gray-600
              text-xs
            "
          >
            {bedroomText}
          </div>

          <div
            className="
              px-4
              py-2
              rounded-xl
              bg-blue-500
              text-white
              text-xs
            "
          >
            {unitTypeText}
          </div>

        </div>

        <div className="border-t border-gray-100 my-5"></div>
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <img
              src={room.ownerImage}
              alt=""
              className="
                w-12
                h-12
                rounded-full
                object-cover
              "
            />

            <div>

              <p className="font-semibold text-sm">
                {room.owner}
              </p>

              <p className="text-xs text-gray-400 mt-1">
                {room.gender == "male" ? "آقا" : "خانم"} | {room.age} سال
              </p>

            </div>

          </div>

          <div
            className="
              bg-yellow-100
              text-yellow-700
              px-4
              py-2
              rounded-xl
              text-xs
              font-medium
            "
          >
            {room.duration === "flexible"
             ? "تمدید قابل انعطاف"
             : room.duration === "fixed"
             ? "تمدید ثابت"
             : "تمدید سالانه"}
          </div>

        </div>

      </div>

    </div>
  );
}