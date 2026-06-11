import {
  Bell,
  Camera,
  Pencil
} from "lucide-react";
import { useState } from "react";

export default function ProfileInfoCard({user, userState}) {
  
  const [isEditing, setIsEditing] =
    useState(false);

  const saveProfile = async () => {

      try {
    
        await fetch(
          "http://localhost:8080/api/profile",
          {
            method: "PUT",
    
            headers: {
              "Content-Type":
                "application/json"
            },
    
            body: JSON.stringify(user)
          }
        );
    
        setIsEditing(false);
    
      } catch (error) {
    
        console.log(error);
    
      }
    };

  return (
    <div className="bg-white rounded-[35px] shadow-sm overflow-hidden">

      {/* Header */}

      <div className="flex justify-end items-center p-4">
        <Bell />
      </div>

      {/* Avatar */}

      <div className="text-center p-6">

        <div className="relative inline-block">

          <img
            src={user.profileImage}
            alt={user.fullName}
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

        {isEditing ? (
          <input
            value={user.fullName}
            onChange={(e) =>
              setUser({
                ...user,
                fullName: e.target.value
              })
            }
            className="
              mt-4
              text-center
              text-1xl
              font-bold
              border-2
              border-indigo-400
              bg-yellow-50
              rounded-xl
              p-2
            "
          />

          ) : (

          <h1 className="mt-4 text-3xl font-bold">
            {user.fullName}
          </h1>

          )}

          {isEditing ? (
              <input
                value={user.age}
                onChange={(e) =>
                  setUser({
                    ...user,
                    rentBudget: e.target.value
                  })
                }
                className="
                  w-full
                  border
                  rounded-lg
                  p-2
                  bg-yellow-50
                "
              />

              ) : (

            <p className="text-gray-500">
              {user.age} ساله
            </p>
            )}

      </div>

      {/* About */}

      <div className="px-5 pb-5">

        <div className="flex justify-between items-center mb-3">

          <h2 className="font-bold text-lg">
            درباره من
          </h2>

          <button
          onClick={() => setIsEditing((prev) => !prev)}
          className="
            flex
            items-center
            gap-1
            text-indigo-600
            text-sm
            whitespace-nowrap
            shrink-0
          "
        >
          <Pencil size={16} />
          <span>{isEditing ? "ثبت" : "ویرایش"}</span>
        </button>


        </div>

        <div className="bg-indigo-50 rounded-3xl p-4">

        {isEditing ? (
          <textarea
            value={user.about}
            onChange={(e) =>
              setUser({
                ...user,
                about: e.target.value
              })
            }
            className="
              w-full
              rounded-xl
              border-2
              border-indigo-400
              bg-yellow-50
              p-3
            "
          />
          ) : (

          <p className="leading-8">
            {user.about}
          </p>

          )}

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

            {isEditing ? (
              <input
                value={user.rentBudget}
                onChange={(e) =>
                  setUser({
                    ...user,
                    rentBudget: e.target.value
                  })
                }
                className="
                  w-full
                  border
                  rounded-lg
                  p-2
                  bg-yellow-50
                "
              />

              ) : (

              <p className="font-bold">
                {user.rentBudget}
              </p>

            )}
          </div>

          <div className="bg-gray-50 rounded-2xl p-4">
            <p className="text-gray-500 text-sm">
              بودجه رهن
            </p>


            {isEditing ? (
              <input
                value={user.depositBudget}
                onChange={(e) =>
                  setUser({
                    ...user,
                    depositBudget: e.target.value
                  })
                }
                className="
                  w-full
                  border
                  rounded-lg
                  p-2
                  bg-yellow-50
                "
              />
              ) : (
              <p className="font-bold">
                {user.depositBudget}
              </p>
              )}
          </div>

          <div className="bg-gray-50 rounded-2xl p-4">
            <p className="text-gray-500 text-sm">
              مهلت زمانی
            </p>

            {isEditing ? (
              <input
                value={user.deadline}
                onChange={(e) =>
                  setUser({
                    ...user,
                    deadline: e.target.value
                  })
                }
                className="
                  w-full
                  border
                  rounded-lg
                  p-2
                  bg-yellow-50
                "
              />

              ) : (

              <p className="font-bold">
                {user.deadline}
              </p>

            )}
          </div>

        </div>

      </div>

      {/* Tags */}

      <div className="px-5 pb-6">

        <h2 className="font-bold text-lg mb-3">
          هشتگ‌ها
        </h2>

        <div className="flex flex-wrap gap-2">

          {user.tags.map((tag) => (
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


      {/* {
        isEditing && (
          <button
            onClick={saveProfile}
            className="
              w-full
              mt-6
              bg-green-600
              text-white
              py-3
              rounded-2xl
            "
          >
            ذخیره تغییرات
          </button>
        )
      } */}

    </div>
  );
}