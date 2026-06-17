import { useNavigate } from "react-router-dom";
import { MapPin, Calendar, Home, Check, X, Shield } from "lucide-react";

export default function RoommateCard({ roommate }) {
  const navigate = useNavigate();

  const formatPrice = (price) => {
    return price.toLocaleString("fa-IR");
  };

  const handleClick = () => {
    navigate(`/roommate/${roommate.id}`);
  };

  const isVerified = roommate.phoneVerified && roommate.emailVerified;

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer h-full flex flex-col"
    >
      <div className="p-4 flex flex-col h-full">
        {/* هدر با عکس و اطلاعات اصلی */}
        <div className="flex items-start gap-3 mb-3">
          <img
            src={
              roommate.profileImage ||
              (roommate.gender === "female"
                ? "/images/default-female.png"
                : "/images/default-male.png")
            }
            alt={roommate.fullName}
            className="w-16 h-16 rounded-full object-cover shrink-0"
          />

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-base truncate">{roommate.fullName}</h3>
              <span className="text-xs text-gray-400">{"@" + roommate.username}</span>
            </div>
            <p className="text-gray-500 text-sm">
              {roommate.gender === "female" ? "زن" : "مرد"}، {roommate.age} ساله
            </p>
          </div>
        </div>

        {/* توضیحات کوتاه */}
        <p className="text-gray-600 text-sm line-clamp-2 mb-3">
          {roommate.about}
        </p>

        {/* اطلاعات مالی - باکس‌های جداگانه */}
        <div className="grid grid-cols-2 gap-2 mb-3">
          {/* اجاره ماهانه */}
          <div className="bg-linear-to-br from-indigo-50 to-indigo-100 rounded-xl p-3 border border-indigo-200">
            <p className="text-xs text-indigo-600 font-medium">اجاره ماهانه</p>
            <p className="font-bold text-indigo-700 text-sm mt-1">
              {formatPrice(roommate.rentBudget)} تومان
            </p>
          </div>

          {/* بودجه کل */}
          <div className="bg-linear-to-br from-emerald-50 to-emerald-100 rounded-xl p-3 border border-emerald-200">
            <p className="text-xs text-emerald-600 font-medium">بودجه کل</p>
            <p className="font-bold text-emerald-700 text-sm mt-1">
              {formatPrice(roommate.depositBudget)} تومان
            </p>
          </div>
        </div>

        {/* موقعیت مکانی */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <MapPin size={14} />
            <span>{roommate.city}</span>
          </div>
          <div className="flex items-center gap-1">
            <Home size={14} />
            <span>{roommate.neighborhood}</span>
          </div>
          {roommate.moreLocations && (
            <span className="text-indigo-600">+{roommate.moreLocations} محله دیگر</span>
          )}
        </div>

        {/* وضعیت خانه و مهلت */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs mb-3">
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
          
          <span className="inline-flex items-center gap-1 text-gray-500">
            <Calendar size={12} />
            {roommate.deadline}
          </span>
        </div>

        {/* هشتگ‌ها */}
        <div className="flex flex-wrap gap-1.5 mb-3">
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

        {/* احراز هویت */}
        <div className="flex items-center gap-3 border-t border-gray-100 pt-3 mt-auto">
          <div className={`p-2 rounded-full ${isVerified ? "bg-green-100" : "bg-red-100"}`}>
            <Shield size={18} className={isVerified ? "text-green-600" : "text-red-600"} />
          </div>
          <div>
            <p className="text-xs text-gray-500">احراز هویت</p>
            <div className="flex items-center gap-1.5">
              {isVerified ? (
                <>
                  <Check size={16} className="text-green-600" />
                  <span className="text-sm font-semibold text-green-600">تایید شده</span>
                </>
              ) : (
                <>
                  <X size={16} className="text-red-600" />
                  <span className="text-sm font-semibold text-red-600">تایید نشده</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}