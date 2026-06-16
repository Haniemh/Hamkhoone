// src/pages/RoommateDetail/RoommateDetailPage.jsx
import { useParams, useNavigate } from "react-router-dom";
import { ArrowRight, MapPin, Calendar, DollarSign, Home, User, Check, X, Phone, Mail } from "lucide-react";
import BottomNav from "../BottomNav";

export default function RoommateDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // دیتای فیک (در حالت واقعی از API می‌آید)
  const [roommate] = useState({
    id: parseInt(id),
    fullName: "زهرا محمدی",
    age: 30,
    gender: "female",
    profileImage: null,
    haveHouse: false,
    about: "دانشجوی مهندسی نرم افزار و به دنبال هم‌خانه‌ای منظم و اجتماعی.",
    rentBudget: 8000000,
    depositBudget: 300000000,
    totalBudget: 308000000,
    deadline: "۱۴۰۴/۰۱/۱۵",
    city: "تهران",
    neighborhood: "ونک",
    tags: ["برونگرا", "کتابخوان", "ورزشکار", "اجتماعی"],
    psychology: {
      personality: { title: "ویژگی‌های شخصیتی", result: "برونگرا، مسئولیت‌پذیر و همدل" },
      conflictStyle: { title: "سبک حل تعارض", result: null },
      values: { title: "تست ارزش‌ها و مرزها", result: "احترام متقابل، نظم و حفظ حریم شخصی" },
      lifestyle: { title: "سبک زندگی", result: "فعال، منظم و اجتماعی" },
    },
    phoneNumber: "۰۹۱۲۳۴۵۶۷۸۹",
    phoneVerified: true,
    email: "zahra@example.com",
    emailVerified: false,
  });

  const formatPrice = (price) => {
    return price.toLocaleString("fa-IR");
  };

  const handleSendRequest = () => {
    alert(`درخواست هم‌اتاقی برای ${roommate.fullName} ارسال شد!`);
  };

  return (
    <div dir="rtl" className="min-h-screen bg-[#f5f6fa]">
      <div className="max-w-4xl mx-auto p-4 pb-32">
        {/* دکمه بازگشت */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 mb-4 hover:text-gray-800 transition"
        >
          <ArrowRight size={20} />
          <span>بازگشت</span>
        </button>

        <div className="bg-white rounded-[35px] overflow-hidden shadow-sm">
          {/* هدر با عکس */}
          <div className="relative">
            <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
            <div className="absolute -bottom-16 right-8">
              <img
                src={
                  roommate.profileImage ||
                  (roommate.gender === "female"
                    ? "/images/default-female.png"
                    : "/images/default-male.png")
                }
                alt={roommate.fullName}
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
          </div>

          {/* اطلاعات اصلی */}
          <div className="pt-20 px-6 pb-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
              <div>
                <h1 className="text-2xl font-bold">{roommate.fullName}</h1>
                <p className="text-gray-500">
                  {roommate.gender === "female" ? "زن" : "مرد"}، {roommate.age} ساله
                </p>
                <div className="flex items-center gap-2 mt-2 text-gray-500">
                  <MapPin size={16} />
                  <span>
                    {roommate.city}، {roommate.neighborhood}
                  </span>
                </div>
              </div>

              <div className="text-left">
                <p className="font-bold text-indigo-600 text-xl">
                  {formatPrice(roommate.rentBudget)} تومان
                </p>
                <p className="text-xs text-gray-500">اجاره ماهانه</p>
                <p className="font-bold text-gray-700 mt-1">
                  {formatPrice(roommate.depositBudget)} تومان
                </p>
                <p className="text-xs text-gray-500">ودیعه</p>
              </div>
            </div>

            {/* وضعیت خانه */}
            <div className="mt-4">
              <span
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm ${
                  roommate.haveHouse
                    ? "bg-green-50 text-green-600"
                    : "bg-blue-50 text-blue-600"
                }`}
              >
                <Home size={16} />
                {roommate.haveHouse ? "خانه دارم" : "دنبال همخونه"}
              </span>

              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-gray-50 text-gray-600 mr-2">
                <Calendar size={16} />
                خالی شدن: {roommate.deadline}
              </span>
            </div>
          </div>
        </div>

        {/* درباره من */}
        <div className="bg-white rounded-[35px] p-6 mt-6">
          <h2 className="font-bold text-lg mb-3">درباره من</h2>
          <p className="text-gray-700 leading-8">{roommate.about}</p>
        </div>

        {/* هشتگ‌ها */}
        <div className="bg-white rounded-[35px] p-6 mt-6">
          <h2 className="font-bold text-lg mb-3">هشتگ‌ها</h2>
          <div className="flex flex-wrap gap-2">
            {roommate.tags.map((tag) => (
              <span key={tag} className="bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* تحلیل روانشناختی */}
        <div className="bg-white rounded-[35px] p-6 mt-6">
          <h2 className="font-bold text-lg mb-4">تحلیل روانشناختی</h2>
          <div className="space-y-3">
            {Object.values(roommate.psychology).map((item) => (
              <div key={item.title} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <div>
                  <p className="font-medium">{item.title}</p>
                  {item.result && (
                    <p className="text-sm text-gray-500 mt-1">{item.result}</p>
                  )}
                </div>
                <span className={item.result ? "text-green-500" : "text-red-500"}>
                  {item.result ? <Check size={20} /> : <X size={20} />}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* اطلاعات تماس */}
        <div className="bg-white rounded-[35px] p-6 mt-6">
          <h2 className="font-bold text-lg mb-4">اطلاعات تماس</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-gray-500" />
                <span>{roommate.phoneNumber || "ثبت نشده"}</span>
              </div>
              <span className={roommate.phoneVerified ? "text-green-500" : "text-red-500"}>
                {roommate.phoneVerified ? "✓ تایید شده" : "✕ تایید نشده"}
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-gray-500" />
                <span>{roommate.email || "ثبت نشده"}</span>
              </div>
              <span className={roommate.emailVerified ? "text-green-500" : "text-red-500"}>
                {roommate.emailVerified ? "✓ تایید شده" : "✕ تایید نشده"}
              </span>
            </div>
          </div>
        </div>

        {/* دکمه ارسال درخواست */}
        <button
          onClick={handleSendRequest}
          className="w-full mt-6 bg-indigo-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition shadow-lg"
        >
          ارسال درخواست هم‌اتاقی
        </button>
      </div>

      <BottomNav />
    </div>
  );
}