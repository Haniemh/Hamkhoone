import { useParams } from "react-router-dom";

import { roommates } from "./fakeData";

import RoommateProfileCard from "./RoommateProfileCard";

export default function RoommateDetailsPage() {

  const { id } = useParams();

  const roommate =
    roommates.find(
      item => item.id === Number(id)
    );

  if (!roommate) {
    return (
      <div className="p-10">
        آگهی پیدا نشد
      </div>
    );
  }

  return (
    <div
      dir="rtl"
      className="
        min-h-screen
        bg-[#f5f6fa]
        p-4
      "
    >
      <div
        className="
          max-w-5xl
          mx-auto
        "
      >
        <RoommateProfileCard
          roommate={roommate}
        />
      </div>
    </div>
  );
}