// src/pages/RoomSearch/RoomCard.jsx
import { MapPin, Calendar, DollarSign, Heart } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RoomCard({ listing }) {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);

  const formatPrice = (price) => {
    return price.toLocaleString("fa-IR");
  };

  return (
    <div
      onClick={() => navigate(`/roommate/ad/${listing.id}`)}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="flex flex-col md:flex-row">
        {/* تصویر */}
        <div className="md:w-48 h-48 md:h-auto relative">
          <img
            src={listing.images[0]}
            alt={listing.title}
            className="w-full h-full object-cover"
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
            className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md"
          >
            <Heart
              size={18}
              className={isLiked ? "fill-red-500 text-red-500" : "text-gray-500"}
            />
          </button>
        </div>

        {/* اطلاعات */}
        <div className="flex-1 p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-lg mb-1">{listing.title}</h3>
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                <MapPin size={14} />
                <span>
                  {listing.city}، {listing.neighborhood}
                </span>
              </div>
            </div>
            <div className="text-left">
              <div className="font-bold text-indigo-600">
                {formatPrice(listing.price)} تومان
              </div>
              <div className="text-xs text-gray-500">/ ماهانه</div>
            </div>
          </div>

          {/* تگ‌ها */}
          <div className="flex flex-wrap gap-2 my-3">
            {listing.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="bg-indigo-50 text-indigo-600 px-2 py-1 rounded-full text-xs"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* اطلاعات مالک و تاریخ */}
          <div className="flex items-center justify-between text-sm text-gray-500 border-t pt-3 mt-2">
            <div className="flex items-center gap-2">
              <img
                src={
                  listing.ownerImage ||
                  (listing.ownerGender === "female"
                    ? "/images/default-female.png"
                    : "/images/default-male.png")
                }
                alt={listing.ownerName}
                className="w-6 h-6 rounded-full object-cover"
              />
              <span>
                {listing.ownerName}، {listing.ownerAge} ساله
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={14} />
              <span>ورود: {listing.moveInDate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}