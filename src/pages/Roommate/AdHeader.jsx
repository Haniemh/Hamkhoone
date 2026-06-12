import {
    Heart,
    Share2
  } from "lucide-react";
  
  export default function AdHeader({ ad }) {
  
    return (
      <div className="bg-white rounded-[35px] overflow-hidden">
  
        <img
          src={ad.image}
          alt=""
          className="
            w-full
            h-80
            object-cover
          "
        />
  
        <div className="p-5">
  
          <div className="flex justify-between">
  
            <div>
              <h1 className="text-3xl font-bold">
                {ad.title}
              </h1>
  
              <p className="text-gray-500 mt-2">
                {ad.location}
              </p>
            </div>
  
            <div className="flex gap-3">
  
              <Heart />
  
              <Share2 />
  
            </div>
  
          </div>
  
        </div>
  
      </div>
    );
  }