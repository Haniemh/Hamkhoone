import {
    MapPin,
    Wallet,
    Clock3,
    User
  } from "lucide-react";
  
  import { useNavigate } from "react-router-dom";
  
  export default function AdCard({ ad }) {
  
    const navigate = useNavigate();
  
    return (
      <div
        onClick={() => navigate(`/ads/${ad.id}`)}
        className="
          bg-white
          rounded-[30px]
          p-4
          shadow-sm
          cursor-pointer
          hover:shadow-md
          transition
        "
      >
        <div className="flex gap-4">
  
          <img
            src={ad.image}
            alt=""
            className="
              w-24
              h-24
              rounded-2xl
              object-cover
            "
          />
  
          <div className="flex-1">
  
            <h3 className="font-bold text-lg">
              {ad.title}
            </h3>
  
            <div className="mt-2 flex items-center gap-2 text-gray-500">
              <MapPin size={16}/>
              <span>{ad.location}</span>
            </div>
  
            <div className="mt-2 flex items-center gap-2">
              <Wallet size={16}/>
              <span>
                {ad.rentBudget}
              </span>
            </div>
  
            <div className="mt-2 flex items-center gap-2">
              <User size={16}/>
              <span>
                {ad.gender}
              </span>
            </div>
  
            <div className="mt-2 flex items-center gap-2 text-gray-400">
              <Clock3 size={15}/>
              <span>
                ۲ ساعت پیش
              </span>
            </div>
  
          </div>
  
        </div>
      </div>
    );
  }