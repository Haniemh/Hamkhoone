import { User } from "lucide-react";

export default function AdOwnerCard({ ad }) {

  return (
    <div className="bg-white rounded-[35px] p-6">

      <h2 className="font-bold text-xl mb-5">
        صاحب آگهی
      </h2>

      <div className="flex items-center gap-4">

        <div
          className="
            w-16
            h-16
            rounded-full
            bg-indigo-100
            flex
            items-center
            justify-center
          "
        >
          <User />
        </div>

        <div>
          <h3 className="font-bold">
            {ad.owner.name}
          </h3>

          <p className="text-gray-500">
            {ad.owner.age} ساله
          </p>
        </div>

      </div>

    </div>
  );
}