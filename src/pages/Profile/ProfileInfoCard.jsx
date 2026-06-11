import {
  Bell,
  Menu,
  Camera,
  Pencil
} from "lucide-react";

export default function ProfileInfoCard() {
  const tags = [
    "برونگرا",
    "کتابخوان",
    "ورزشکار",
    "اجتماعی"
  ];

  return (
    <div className="bg-white rounded-[35px] shadow-sm overflow-hidden">

      {/* Header */}
      <div className="flex justify-between items-center p-4">
        <Menu />
        <div className="bg-indigo-50 px-4 py-2 rounded-full">
          50,000 تومان
        </div>
        <Bell />
      </div>

      {/* Avatar */}
      <div className="text-center p-6">

        <div className="relative inline-block">
          <img
            src="https://i.pravatar.cc/300"
            alt=""
            className="
              w-40
              h-40
              rounded-full
              object-cover
              shadow-lg
            "
          />

          <button
            className="
              absolute
              bottom-0
              left-0
              p-3
              rounded-2xl
              bg-white
              shadow
            "
          >
            <Camera />
          </button>
        </div>

        <h1 className="mt-4 text-3xl font-bold">
          زهرا محمدی
        </h1>

        <p className="text-gray-500">
          25 ساله
        </p>

      </div>

      {/* About */}
      <div className="px-5 pb-5">

        <div className="flex justify-between items-center mb-3">

          <h2 className="font-bold text-lg">
            درباره من
          </h2>

          <button
            className="
              flex
              items-center
              gap-1
              text-indigo-600
            "
          >
            <Pencil size={16} />
            ویرایش
          </button>

        </div>

        <div className="bg-indigo-50 rounded-3xl p-4">

          <p className="leading-8">
            دانشجوی مهندسی نرم افزار و
            به دنبال هم‌خانه‌ای منظم و اجتماعی.
          </p>

        </div>

      </div>

      {/* Budget */}
      <div className="px-5 pb-5">

        <h2 className="font-bold text-lg mb-3">
          شرایط مالی
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

          <div className="bg-gray-50 rounded-2xl p-4">
            <p className="text-gray-500 text-sm">
              بودجه اجاره
            </p>
            <p className="font-bold">
              ۸ میلیون
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-4">
            <p className="text-gray-500 text-sm">
              بودجه رهن
            </p>
            <p className="font-bold">
              ۳۰۰ میلیون
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-4">
            <p className="text-gray-500 text-sm">
              مهلت زمانی
            </p>
            <p className="font-bold">
              ۳۰ روز
            </p>
          </div>

        </div>

      </div>

      {/* Tags */}

      <div className="px-5 pb-6">

        <h2 className="font-bold text-lg mb-3">
          هشتگ‌ها
        </h2>

        <div className="flex flex-wrap gap-2">

          {tags.map(tag => (
            <span
              key={tag}
              className="
                bg-indigo-50
                text-indigo-600
                px-4
                py-2
                rounded-full
              "
            >
              #{tag}
            </span>
          ))}

        </div>

      </div>

    </div>
  );
}