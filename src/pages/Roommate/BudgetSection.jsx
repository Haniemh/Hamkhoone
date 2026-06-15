import {
    Wallet,
    Calendar,
    MapPin
  } from "lucide-react";
  
  export default function BudgetSection({
    roommate
  }) {
    return (
      <div
        className="
          bg-white
          rounded-[28px]
          p-5
        "
      >
        <h2
          className="
            font-bold
            text-lg
            mb-4
          "
        >
          شرایط سکونت
        </h2>
  
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-4
          "
        >
  
          <div
            className="
              bg-gray-50
              rounded-2xl
              p-4
            "
          >
            <div className="flex gap-2 items-center">
              <Wallet size={18} />
              <span>
                بودجه رهن
              </span>
            </div>
  
            <p
              className="
                mt-3
                font-bold
                text-lg
              "
            >
              {roommate.depositBudget.toLocaleString()}
              تومان
            </p>
          </div>
  
          <div
            className="
              bg-gray-50
              rounded-2xl
              p-4
            "
          >
            <div className="flex gap-2 items-center">
              <Wallet size={18} />
              <span>
                اجاره ماهانه
              </span>
            </div>
  
            <p
              className="
                mt-3
                font-bold
                text-lg
              "
            >
              {roommate.rentBudget.toLocaleString()}
              تومان
            </p>
          </div>
  
          <div
            className="
              bg-gray-50
              rounded-2xl
              p-4
            "
          >
            <div className="flex gap-2 items-center">
              <Calendar size={18} />
              <span>
                مهلت
              </span>
            </div>
  
            <p className="mt-3 font-bold">
              {roommate.deadline}
            </p>
          </div>
  
          <div
            className="
              bg-gray-50
              rounded-2xl
              p-4
            "
          >
            <div className="flex gap-2 items-center">
              <MapPin size={18} />
              <span>
                محله ها
              </span>
            </div>
  
            <div
              className="
                flex
                flex-wrap
                gap-2
                mt-3
              "
            >
              {roommate.districts.map(
                (district) => (
                  <span
                    key={district}
                    className="
                      bg-white
                      px-3
                      py-1
                      rounded-full
                      text-sm
                    "
                  >
                    {district}
                  </span>
                )
              )}
            </div>
  
          </div>
  
        </div>
      </div>
    );
  }