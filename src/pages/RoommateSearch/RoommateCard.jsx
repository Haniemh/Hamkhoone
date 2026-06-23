import { useNavigate } from "react-router-dom";
import { MapPin, Calendar, Home, Check } from "lucide-react";

export default function RoommateCard({ roommate }) {
  const navigate = useNavigate();

  const formatPrice = (price) => {
    return price.toLocaleString("fa-IR");
  };

  const handleClick = () => {
    navigate(`/roommate-search/${roommate.id}`);
  };

  const isVerified = roommate.phoneVerified && roommate.emailVerified;

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer h-full flex flex-col"
    >
      <div className="p-5 flex flex-col h-full">
        <div className="flex items-start gap-3 mb-4">
          <div className="relative shrink-0">
            <div className={`w-16 h-16 rounded-full ${isVerified ? "ring-2 ring-offset-2 ring-blue-500" : ""}`}>
              <img
                src={
                  roommate.profileImage ||
                  (roommate.gender === "female"
                    ? "/images/default-female.png"
                    : "/images/default-male.png")
                }
                alt={roommate.fullName}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            {isVerified && (
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center">
                <Check size={12} className="text-white" />
              </div>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-base truncate">{roommate.fullName}</h3>
              <span className="text-xs text-gray-400">{"@" + roommate.username}</span>
            </div>
            <div className="flex items-center justify-between mt-0.5">
              <p className="text-gray-500 text-sm bg-gray-100 border border-gray-300 rounded-md px-2 py-0.5 inline-block">
                {roommate.gender === "female" ? "زن" : "مرد"}، {roommate.age} ساله
              </p>

            </div>
          </div>
        </div>

        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
          {roommate.about}
        </p>

        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="bg-linear-to-br from-indigo-50 to-indigo-100 rounded-xl p-3 border border-indigo-200">
            <p className="text-xs text-indigo-600 font-medium">اجاره ماهانه</p>
            <p className="font-bold text-indigo-700 text-sm mt-1">
              {formatPrice(roommate.rentBudget)} تومان
            </p>
          </div>

          <div className="bg-linear-to-br from-emerald-50 to-emerald-100 rounded-xl p-3 border border-emerald-200">
            <p className="text-xs text-emerald-600 font-medium">بودجه کل</p>
            <p className="font-bold text-emerald-700 text-sm mt-1">
              {formatPrice(roommate.depositBudget)} تومان
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 mb-4">
          <div className="flex items-center gap-1 bg-gray-100 border border-gray-300 rounded-md px-2 py-0.5">
            <MapPin size={14} />
            <span>{roommate.city}</span>
          </div>
          <div className="flex items-center gap-1 bg-gray-100 border border-gray-300 rounded-md px-2 py-0.5">
            <Home size={14} />
            <span>{roommate.neighborhood}</span>
          </div>
          {roommate.moreLocations && (
            <span className="text-indigo-600">+{roommate.moreLocations} محله دیگر</span>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 text-xs mb-4">
          <span
            className={`inline-flex items-center gap-1 px-2 py-1 rounded-full ${
              roommate.haveHouse
                ? "bg-green-50 text-green-600"
                : "bg-blue-50 text-blue-600"
            }`}
          >
            <Home size={12} />
            {roommate.haveHouse ? "صاحب خانه" : "دنبال همخونه"}
          </span>
          
          <span className="inline-flex items-center gap-1 bg-yellow-50 border border-yellow-300 rounded-md px-2 py-0.5 text-gray-600">
            <Calendar size={12} className="text-yellow-600" />
            {roommate.deadline}
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {roommate.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs"
            >
              #{tag}
            </span>
          ))}
          {roommate.tags.length > 4 && (
            <span className="text-gray-400 text-xs">+{roommate.tags.length - 4}</span>
          )}
        </div>
      </div>
    </div>
  );
}