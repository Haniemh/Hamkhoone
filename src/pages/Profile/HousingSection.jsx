import {
  Home,
  DoorOpen,
  Heart,
  Archive,
  Users
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HousingSection() {
  const navigate = useNavigate();
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

          <button
            onClick={() =>
              navigate("/create-roommate-ad")
            }
            className="
              mt-4
              text-indigo-500
              font-bold
              px-4
              py-2
              rounded-xl
              transition
              hover:bg-indigo-50
            "
          >
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

          <button
            onClick={() =>
              navigate("/create-property")
            }
            className="
              mt-4
              text-sky-500
              font-bold
              px-4
              py-2
              rounded-xl
              transition
              hover:bg-sky-50
            "
          >
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
            onClick={() =>
              navigate("/my-rooms")
            }
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
            onClick={() =>
              navigate("/favorite-rooms")
            }
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
            onClick={() =>
              navigate("/archive")
            }
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