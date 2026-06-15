import {
    Bell,
    Wallet,
    Menu
  } from "lucide-react";
  
  export default function SearchHeader() {
    return (
      <div
        className="
          bg-white
          rounded-3xl
          p-4
          shadow-sm
        "
      >
        <div
          className="
            flex
            justify-between
            items-center
          "
        >
  
          <button>
            <Menu />
          </button>
  
          <div
            className="
              flex
              gap-3
              items-center
            "
          >
  
            <div
              className="
                bg-indigo-50
                px-3
                py-2
                rounded-xl
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-2
                "
              >
                <Wallet size={16} />
  
                <span>
                  ۲۵۰,۰۰۰ تومان
                </span>
              </div>
            </div>
  
            <button>
              <Bell />
            </button>
  
          </div>
  
        </div>
  
        <div className="mt-5">
  
          <h1
            className="
              text-2xl
              font-bold
            "
          >
            جستجوی هم‌اتاقی
          </h1>
  
          <p
            className="
              text-gray-500
              mt-1
            "
          >
            افراد مناسب برای هم‌خانه شدن
          </p>
  
        </div>
      </div>
    );
  }