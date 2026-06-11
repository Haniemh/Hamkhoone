import {
  Mail,
  Smartphone
} from "lucide-react";

export default function BadgesSection({
  user
}) {

  return (
    <div className="bg-white rounded-[35px] p-5">

      <h2 className="font-bold text-xl mb-5">
        نشان‌ها
      </h2>

      <div className="grid grid-cols-2 gap-4">

        {/* تلفن */}

        <div
          className={`
            rounded-3xl
            p-4
            text-center

            ${
              user.phoneVerified
                ? "bg-green-50"
                : "bg-red-50"
            }
          `}
        >
          <Smartphone
            className={`mx-auto ${
              user.phoneVerified
                ? "text-green-600"
                : "text-red-600"
            }`}
          />

          <p className="mt-2 text-sm">
            تلفن همراه
          </p>

        </div>

        {/* ایمیل */}

        <div
          className={`
            rounded-3xl
            p-4
            text-center

            ${
              user.emailVerified
                ? "bg-green-50"
                : "bg-red-50"
            }
          `}
        >
          <Mail
            className={`mx-auto ${
              user.emailVerified
                ? "text-green-600"
                : "text-red-600"
            }`}
          />

          <p className="mt-2 text-sm">
            ایمیل
          </p>

        </div>

      </div>

    </div>
  );
}