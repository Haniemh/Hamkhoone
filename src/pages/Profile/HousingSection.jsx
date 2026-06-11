import {
  Home,
  DoorOpen,
  Heart,
  Archive,
  Users
} from "lucide-react";

export default function HousingSection() {
  return (
    <div className="bg-white rounded-[35px] p-6 shadow-sm">

      <h2 className="text-2xl font-bold mb-6">
        مدیریت آگهی و هم‌خونه
      </h2>

      {/* آگهی ها */}

      <div className="space-y-4">

        {/* آگهی هم اتاقی */}

        <div className="border border-dashed rounded-3xl p-8 text-center">
          <Users
            size={45}
            className="mx-auto text-indigo-500"
          />

          <h3 className="mt-4 text-xl">
            خانه ندارم،
            دنبال هم‌خونه می‌گردم
          </h3>

          <button className="mt-4 text-indigo-500 font-bold">
            ثبت آگهی جدید
          </button>
        </div>

        {/* آگهی خانه */}

        <div className="border border-dashed rounded-3xl p-8 text-center">
          <Home
            size={45}
            className="mx-auto text-sky-500"
          />

          <h3 className="mt-4 text-xl">
            خانه دارم،
            می‌خواهم اجاره بدهم
          </h3>

          <button className="mt-4 text-sky-500 font-bold">
            ثبت ملک جدید
          </button>
        </div>

      </div>

      {/* دکمه ها */}

      <div className="mt-6">

        {/* موبایل:
            1 ستون
        */}

        {/* دسکتاپ:
            3 ستون
        */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <button
            className="
              bg-gray-50
              rounded-3xl
              p-5
              flex
              items-center
              gap-4
              hover:bg-indigo-50
            "
          >
            <DoorOpen className="text-indigo-500" />

            <span>
              اتاق‌های من
            </span>
          </button>

          <button
            className="
              bg-gray-50
              rounded-3xl
              p-5
              flex
              items-center
              gap-4
              hover:bg-pink-50
            "
          >
            <Heart className="text-pink-500" />

            <span>
              اتاق‌های مورد علاقه
            </span>
          </button>

          <button
            className="
              bg-gray-50
              rounded-3xl
              p-5
              flex
              items-center
              gap-4
              hover:bg-amber-50
            "
          >
            <Archive className="text-amber-500" />

            <span>
              آرشیو
            </span>
          </button>

        </div>

      </div>

    </div>
  );
}