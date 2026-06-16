// src/pages/RoommateSearch/RoommateCard.jsx
import { useNavigate } from "react-router-dom";

export default function RoommateCard({ roommate }) {
  const navigate = useNavigate();

  const formatPrice = (price) => {
    return price.toLocaleString("fa-IR");
  };

  const handleClick = () => {
    navigate(`/roommate/${roommate.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer h-full flex flex-col"
    >
      <div className="p-4 flex flex-col h-full">
        <div className="flex flex-col items-center text-center mb-4">
          <img
            src={
              roommate.profileImage ||
              (roommate.gender === "female"
                ? "/images/default-female.png"
                : "/images/default-male.png")
            }
            alt={roommate.fullName}
            className="w-32 h-32 rounded-full object-cover mb-3"
          />

          <h3 className="font-bold text-lg">{roommate.fullName}</h3>
          <p className="text-gray-500 text-sm">
            {roommate.gender === "female" ? "زن" : "مرد"}، {roommate.age} ساله
          </p>
          <p className="text-gray-400 text-sm mt-1">
            {roommate.city}، {roommate.neighborhood}
          </p>
        </div>

        <div className="text-center mb-3">
          <p className="font-bold text-indigo-600 text-lg">
            {formatPrice(roommate.rentBudget)} تومان
          </p>
          <p className="text-xs text-gray-500">اجاره ماهانه</p>
        </div>

        <div className="flex justify-center mt-2">
          <span
            className={`text-xs px-3 py-1 rounded-full ${
              roommate.haveHouse
                ? "bg-green-50 text-green-600"
                : "bg-blue-50 text-blue-600"
            }`}
          >
            {roommate.haveHouse ? "🏠 خانه دارم" : "🔍 دنبال همخونه"}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mt-3">
          {roommate.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="bg-indigo-50 text-indigo-600 px-2 py-1 rounded-full text-xs"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 mt-4 text-xs">
          <div className="flex items-center gap-1">
            <span
              className={
                Object.values(roommate.psychology).some(
                  (item) => item.result && item.result.trim() !== ""
                )
                  ? "text-green-500"
                  : "text-red-500"
              }
            >
              {Object.values(roommate.psychology).some(
                (item) => item.result && item.result.trim() !== ""
              )
                ? "✓"
                : "✕"}
            </span>
            <span>تست روانشناختی</span>
          </div>
          <div className="flex items-center gap-1">
            <span
              className={
                roommate.phoneVerified ? "text-green-500" : "text-red-500"
              }
            >
              {roommate.phoneVerified ? "✓" : "✕"}
            </span>
            <span>احراز هویت</span>
          </div>
        </div>

        <button className="mt-4 w-full bg-indigo-50 text-indigo-600 py-2 rounded-xl text-sm font-medium hover:bg-indigo-100 transition">
          مشاهده پروفایل و ارسال درخواست
        </button>
      </div>
    </div>
  );
}