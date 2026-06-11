import {
  Mail,
  Smartphone,
  ShieldCheck
} from "lucide-react";

export default function BadgesSection() {
  return (
    <div className="bg-white rounded-[35px] p-5">

      <h2 className="font-bold text-xl mb-5">
        نشان‌ها
      </h2>

      <div className="grid grid-cols-3 gap-4">

        <div className="bg-green-50 rounded-3xl p-4 text-center">
          <Smartphone
            className="mx-auto text-green-600"
          />
          <p className="mt-2 text-sm">
            تلفن همراه
          </p>
        </div>

        <div className="bg-green-50 rounded-3xl p-4 text-center">
          <Mail
            className="mx-auto text-green-600"
          />
          <p className="mt-2 text-sm">
            ایمیل
          </p>
        </div>

        <div className="bg-blue-50 rounded-3xl p-4 text-center">
          <ShieldCheck
            className="mx-auto text-blue-600"
          />
          <p className="mt-2 text-sm">
            احراز هویت
          </p>
        </div>

      </div>

    </div>
  );
}