import {
    Bell,
    CheckCircle
  } from "lucide-react";
  
  export default function RoommateProfileCard({
    roommate
  }) {
  
    return (
      <div
        className="
          bg-white
          rounded-[35px]
          shadow-sm
          overflow-hidden
        "
      >
  
        {/* Header */}
  
        <div
          className="
            flex
            justify-end
            items-center
            p-4
          "
        >
          <Bell />
        </div>
  
        {/* Avatar */}
  
        <div className="text-center p-6">
  
          <div
            className="
              relative
              inline-block
            "
          >
  
            <img
              src={roommate.avatar}
              alt={roommate.fullName}
              className="
                w-40
                h-40
                rounded-full
                object-cover
                shadow-lg
              "
            />
  
          </div>
  
          <div
            className="
              flex
              justify-center
              items-center
              gap-2
              mt-4
            "
          >
  
            <h1
              className="
                text-3xl
                font-bold
              "
            >
              {roommate.fullName}
            </h1>
  
            {
              roommate.verified && (
                <CheckCircle
                  className="
                    text-blue-500
                  "
                />
              )
            }
  
          </div>
  
          <p
            className="
              text-gray-500
              mt-2
            "
          >
            @{roommate.username}
          </p>
  
          <div
            className="
              mt-2
              text-gray-500
            "
          >
            <p>
              {roommate.gender}
            </p>
  
            <p>
              {roommate.age} ساله
            </p>
          </div>
  
        </div>
  
        {/* About */}
  
        <div className="px-5 pb-5">
  
          <h2
            className="
              font-bold
              text-lg
              mb-3
            "
          >
            درباره من
          </h2>
  
          <div
            className="
              bg-indigo-50
              rounded-3xl
              p-4
            "
          >
            <p
              className="
                leading-8
              "
            >
              {roommate.about}
            </p>
          </div>
  
        </div>
  
        {/* Budget */}
  
        <div className="px-5 pb-5">
  
          <h2
            className="
              font-bold
              text-lg
              mb-3
            "
          >
            شرایط مالی
          </h2>
  
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-3
              gap-3
            "
          >
  
            <div
              className="
                bg-gray-50
                rounded-2xl
                p-4
              "
            >
              <p
                className="
                  text-gray-500
                  text-sm
                "
              >
                بودجه اجاره
              </p>
  
              <p className="font-bold">
                {roommate.rentBudget}
              </p>
            </div>
  
            <div
              className="
                bg-gray-50
                rounded-2xl
                p-4
              "
            >
              <p
                className="
                  text-gray-500
                  text-sm
                "
              >
                بودجه رهن
              </p>
  
              <p className="font-bold">
                {roommate.depositBudget}
              </p>
            </div>
  
            <div
              className="
                bg-gray-50
                rounded-2xl
                p-4
              "
            >
              <p
                className="
                  text-gray-500
                  text-sm
                "
              >
                مهلت
              </p>
  
              <p className="font-bold">
                {roommate.deadline}
              </p>
            </div>
  
          </div>
  
        </div>
  
        {/* Tags */}
  
        <div className="px-5 pb-6">
  
          <h2
            className="
              font-bold
              text-lg
              mb-3
            "
          >
            هشتگ‌ها
          </h2>
  
          <div
            className="
              flex
              flex-wrap
              gap-2
            "
          >
  
            {roommate.tags.map(
              tag => (
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
              )
            )}
  
          </div>
  
        </div>
  
        {/* Contact */}
  
        <div className="px-5 pb-6">
  
          <h2
            className="
              font-bold
              text-lg
              mb-3
            "
          >
            اطلاعات تماس
          </h2>
  
          <div
            className="
              bg-gray-50
              rounded-3xl
              p-4
              space-y-2
            "
          >
  
            <p>
              {roommate.phone}
            </p>
  
            <p>
              {roommate.email}
            </p>
  
          </div>
  
        </div>
  
        {/* Request */}
  
        <div className="p-5">
  
          <button
            className="
              w-full
              bg-indigo-600
              text-white
              py-4
              rounded-2xl
              font-bold
            "
          >
            درخواست هم‌اتاقی
          </button>
  
        </div>
  
      </div>
    );
  }