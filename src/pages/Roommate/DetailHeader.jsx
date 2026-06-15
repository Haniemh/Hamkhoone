import { CheckCircle } from "lucide-react";

export default function DetailHeader({
  roommate
}) {
  return (
    <div
      className="
        bg-white
        rounded-4xl
        p-6
        text-center
      "
    >
      <img
        src={roommate.avatar}
        alt=""
        className="
          w-40
          h-40
          rounded-full
          object-cover
          mx-auto
        "
      />

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
            text-2xl
            font-bold
          "
        >
          {roommate.fullName}
        </h1>

        {roommate.verified && (
          <CheckCircle
            className="text-blue-500"
          />
        )}
      </div>

      <p className="text-gray-500 mt-2">
        @{roommate.username}
      </p>

      <p className="mt-2">
        {roommate.age} ساله
        {" - "}
        {roommate.gender}
      </p>
    </div>
  );
}