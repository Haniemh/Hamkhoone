import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function RoommateCard({ roommate }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() =>
        navigate(`/roommates/${roommate.id}`)
      }
      className="
        bg-white
        rounded-3xl
        p-4
        shadow-sm
        cursor-pointer
        transition
        hover:shadow-md
      "
    >
      <div className="flex gap-4">

        <img
          src={roommate.avatar}
          alt=""
          className="
            w-24
            h-24
            rounded-2xl
            object-cover
          "
        />

        <div className="flex-1">

          <div className="flex items-center gap-2">

            <h3 className="font-bold text-lg">
              {roommate.fullName}
            </h3>

            {roommate.verified && (
              <CheckCircle
                size={18}
                className="text-blue-500"
              />
            )}
          </div>

          <p className="text-gray-500 text-sm">
            @{roommate.username}
          </p>

          <p className="text-sm mt-1">
            {roommate.age} ساله
            {" - "}
            {roommate.gender}
          </p>

          <p
            className="
              mt-2
              text-gray-600
              text-sm
              line-clamp-2
            "
          >
            {roommate.about}
          </p>

        </div>

      </div>

      <div className="grid grid-cols-2 gap-3 mt-4">

        <div className="bg-gray-50 p-3 rounded-2xl">
          <p className="text-xs text-gray-500">
            بودجه رهن
          </p>

          <p className="font-bold">
            {roommate.depositBudget.toLocaleString()}
          </p>
        </div>

        <div className="bg-gray-50 p-3 rounded-2xl">
          <p className="text-xs text-gray-500">
            اجاره ماهانه
          </p>

          <p className="font-bold">
            {roommate.rentBudget.toLocaleString()}
          </p>
        </div>

      </div>

      <div className="mt-4 flex flex-wrap gap-2">

        {roommate.tags.map((tag) => (
          <span
            key={tag}
            className="
              bg-indigo-50
              text-indigo-600
              px-3
              py-1
              rounded-full
              text-xs
            "
          >
            #{tag}
          </span>
        ))}

      </div>
    </div>
  );
}