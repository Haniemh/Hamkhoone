import { Home } from "lucide-react";

export default function AdBanner() {
  return (
    <div className="bg-linear-to-b from-blue-600 to-blue-500 rounded-[40px] p-8 text-white shadow-lg mb-6">
      <div className="flex justify-center mb-4">
        <div className="w-20 h-20 rounded-3xl bg-white/20 flex items-center justify-center">
          <Home size={42} />
        </div>
      </div>

      <h1 className="text-3xl font-bold text-center mb-4">
        ثبت آگهی جدید هم‌اتاقی
      </h1>

      <p className="text-center text-blue-100 leading-8">
        جزئیات محل سکونت خود را وارد کنید تا بهترین
        هم‌اتاقی‌ها با شما ارتباط بگیرند.
      </p>

      <div className="mt-8">
        <div className="bg-blue-500 rounded-full px-5 py-3">
          اعتبار آگهی: ۶۰ روز
        </div>
      </div>
    </div>
  );
}