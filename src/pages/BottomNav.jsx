import {
    Home,
    MessageCircle,
    User,
    DoorOpen,
    Heart
  } from "lucide-react";
  
  export default function BottomNav() {
    return (
      <div
        className="
          fixed
          bottom-4
          left-4
          right-4
          max-w-md
          mx-auto
          bg-white
          rounded-[30px]
          shadow-xl
          p-4
        "
      >
        <div className="flex justify-around items-center">
  
          <MessageCircle />
  
          <DoorOpen />
  
          <div
            className="
              w-16
              h-16
              rounded-full
              bg-indigo-600
              text-white
              flex
              items-center
              justify-center
              -mt-10
            "
          >
            <Home />
          </div>
  
          <Heart />
  
          <User />
  
        </div>
      </div>
    );
  }