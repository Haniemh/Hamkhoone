import { useParams, useNavigate } from "react-router-dom";
import { ArrowRight, MapPin, Calendar, Home, Shield, Check, X, Phone, Mail } from "lucide-react";
import { useState } from "react";
import BottomNav from "../BottomNav";

export default function RoommateDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [roommates] = useState([
    {
      id: 1,
      fullName: "زهرا محمدی",
      username: "zahra_mohammadi",
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
        personality: { title: "ویژگی‌های شخصیتی", result: "برونگرا، مسئولیت‌پذیر و همدل", completed: true },
        conflictStyle: { title: "سبک حل تعارض", result: null, completed: true },
        values: { title: "تست ارزش‌ها و مرزها", result: "احترام متقابل، نظم و حفظ حریم شخصی", completed: true },
        lifestyle: { title: "سبک زندگی", result: "فعال، منظم و اجتماعی", completed: true },
      },
      phoneVerified: true,
      emailVerified: false,
      createdAt: "۱۴۰۳/۱۲/۲۰",
    },
    {
      id: 2,
      fullName: "مریم کریمی",
      username: "maryam_karimi",
      age: 25,
      gender: "female",
      profileImage: null,
      haveHouse: true,
      about: "برنامه نویس، علاقه‌مند به موسیقی و سینما.",
      rentBudget: 6000000,
      depositBudget: 200000000,
      totalBudget: 206000000,
      deadline: "۱۴۰۴/۰۱/۲۰",
      city: "تهران",
      neighborhood: "پاسداران",
      tags: ["اجتماعی", "هنری", "مهمانی"],
      psychology: {
        personality: { title: "ویژگی‌های شخصیتی", result: "برونگرا، خلاق", completed: true },
        conflictStyle: { title: "سبک حل تعارض", result: "مذاکره‌کننده", completed: true },
        values: { title: "تست ارزش‌ها و مرزها", result: "احترام و حریم شخصی", completed: true },
        lifestyle: { title: "سبک زندگی", result: "شب‌زنده‌دار", completed: true },
      },
      phoneVerified: true,
      emailVerified: true,
      createdAt: "۱۴۰۳/۱۲/۱۸",
    },
    {
      id: 3,
      fullName: "احمد رضایی",
      username: "ahmad_rezaei",
      age: 28,
      gender: "male",
      profileImage: null,
      haveHouse: false,
      about: "مهندس عمران، دنبال هم‌خانه‌ای ساکت و منظم.",
      rentBudget: 7000000,
      depositBudget: 250000000,
      totalBudget: 257000000,
      deadline: "۱۴۰۴/۰۲/۰۵",
      city: "اصفهان",
      neighborhood: "چهارباغ",
      tags: ["ساکت", "کتابخوان", "مسئولیت‌پذیر"],
      psychology: {
        personality: { title: "ویژگی‌های شخصیتی", result: "درونگرا، منطقی", completed: true },
        conflictStyle: { title: "سبک حل تعارض", result: "اجتناب", completed: true },
        values: { title: "تست ارزش‌ها و مرزها", result: "نظم و آرامش", completed: true },
        lifestyle: { title: "سبک زندگی", result: "کم‌تحرک", completed: true },
      },
      phoneVerified: false,
      emailVerified: true,
      createdAt: "۱۴۰۳/۱۲/۱۵",
    },
    {
      id: 4,
      fullName: "سارا حسینی",
      username: "sara_hosseini",
      age: 22,
      gender: "female",
      profileImage: null,
      haveHouse: false,
      about: "دانشجوی پزشکی، نیاز به محیط آرام برای مطالعه.",
      rentBudget: 5000000,
      depositBudget: 150000000,
      totalBudget: 155000000,
      deadline: "۱۴۰۴/۰۱/۲۵",
      city: "شیراز",
      neighborhood: "قصردشت",
      tags: ["مطالعه‌گر", "ساکت", "سالمند"],
      psychology: {
        personality: { title: "ویژگی‌های شخصیتی", result: "درونگرا، منظم", completed: true },
        conflictStyle: { title: "سبک حل تعارض", result: "همکاری", completed: true },
        values: { title: "تست ارزش‌ها و مرزها", result: "سکوت و تمرکز", completed: true },
        lifestyle: { title: "سبک زندگی", result: "کم‌فعالیت", completed: true },
      },
      phoneVerified: true,
      emailVerified: false,
      createdAt: "۱۴۰۳/۱۲/۱۰",
    },
    {
      id: 5,
      fullName: "علی نوری",
      username: "ali_nouri",
      age: 35,
      gender: "male",
      profileImage: null,
      haveHouse: true,
      about: "فریلنسر، بیشتر وقت‌ها خونه هستم.",
      rentBudget: 10000000,
      depositBudget: 400000000,
      totalBudget: 410000000,
      deadline: "۱۴۰۴/۰۱/۱۰",
      city: "تهران",
      neighborhood: "جردن",
      tags: ["اجتماعی", "مهمانی", "ورزشکار"],
      psychology: {
        personality: { title: "ویژگی‌های شخصیتی", result: "برونگرا، پرانرژی", completed: true },
        conflictStyle: { title: "سبک حل تعارض", result: "رقابتی", completed: true },
        values: { title: "تست ارزش‌ها و مرزها", result: "تفریح و نشاط", completed: true },
        lifestyle: { title: "سبک زندگی", result: "فعال", completed: true },
      },
      phoneVerified: true,
      emailVerified: true,
      createdAt: "۱۴۰۳/۱۲/۰۵",
    },
    {
      id: 6,
      fullName: "فاطمه کریمی",
      username: "fatemeh_karimi",
      age: 27,
      gender: "female",
      profileImage: null,
      haveHouse: true,
      about: "معلم ریاضی، خونه دارم دنبال هم‌خانه‌ای مسئولیت‌پذیر.",
      rentBudget: 4000000,
      depositBudget: 100000000,
      totalBudget: 104000000,
      deadline: "۱۴۰۴/۰۱/۰۵",
      city: "مشهد",
      neighborhood: "سجاد",
      tags: ["مسئولیت‌پذیر", "ساکت", "کتابخوان"],
      psychology: {
        personality: { title: "ویژگی‌های شخصیتی", result: "درونگرا، منظم", completed: true },
        conflictStyle: { title: "سبک حل تعارض", result: "همکاری", completed: true },
        values: { title: "تست ارزش‌ها و مرزها", result: "نظم و احترام", completed: true },
        lifestyle: { title: "سبک زندگی", result: "آرام", completed: true },
      },
      phoneVerified: true,
      emailVerified: false,
      createdAt: "۱۴۰۳/۱۲/۰۱",
    },
  ]);

  const roommate = roommates.find((r) => r.id === parseInt(id));

  if (!roommate) {
    return (
      <div dir="rtl" className="min-h-screen bg-[#f5f6fa] flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 text-lg">کاربری با این شناسه پیدا نشد</p>
          <button
            onClick={() => navigate("/roommate-search")}
            className="mt-4 text-indigo-600 font-medium"
          >
            بازگشت به صفحه جستجو
          </button>
        </div>
      </div>
    );
  }

  const formatPrice = (price) => {
    return price.toLocaleString("fa-IR");
  };

  const defaultImage =
    roommate.gender === "female"
      ? "/images/default-female.png"
      : "/images/default-male.png";

  const isVerified = roommate.phoneVerified && roommate.emailVerified;

  const handleSendRequest = () => {
    const request = {
      id: Date.now(),
      roommateId: roommate.id,
      roommateName: roommate.fullName,
      roommateUsername: roommate.username,
      status: "pending",
      createdAt: new Date().toLocaleDateString("fa-IR"),
    };

    const existingRequests = JSON.parse(localStorage.getItem("requests") || "[]");
    existingRequests.push(request);
    localStorage.setItem("requests", JSON.stringify(existingRequests));

    navigate("/request");
  };

  return (
    <div dir="rtl" className="min-h-screen bg-[#f5f6fa]">
      <div className="max-w-7xl mx-auto p-4 space-y-6 pb-32">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition"
        >
          <ArrowRight size={20} />
          <span>بازگشت</span>
        </button>

        <div className="bg-white rounded-[35px] shadow-sm overflow-hidden">
          {/* Header */}
          <div className="flex justify-end items-center p-4">
            <Shield className={isVerified ? "text-green-500" : "text-red-500"} />
          </div>

          {/* Avatar */}
          <div className="text-center p-6">
            <div className="relative inline-block">
              <img
                src={roommate.profileImage || defaultImage}
                alt={roommate.fullName}
                className="w-40 h-40 rounded-full object-cover shadow-lg"
              />
            </div>

            <h1 className="mt-4 text-3xl font-bold">{roommate.fullName}</h1>
            <p className="text-sm text-gray-400 mt-1">@{roommate.username}</p>

            <div className="mt-2 text-gray-500 space-y-1">
              <p>{roommate.gender === "female" ? "زن" : "مرد"}</p>
              <p>{roommate.age} ساله</p>
            </div>
          </div>

          {/* About */}
          <div className="px-5 pb-5">
            <h2 className="font-bold text-lg mb-3">درباره من</h2>
            <div className="bg-indigo-50 rounded-3xl p-4">
              <p className="leading-8">{roommate.about}</p>
            </div>
          </div>

          <div className="px-5 pb-5">
            <h2 className="font-bold text-lg mb-3">موقعیت مکانی</h2>
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1">
                <label className="block text-sm text-gray-500 mb-1">شهر</label>
                <div className="bg-gray-50 rounded-xl p-3 border-2 border-indigo-200">
                  <p className="text-gray-600">{roommate.city || "تعیین نشده"}</p>
                </div>
              </div>
              <div className="flex-1">
                <label className="block text-sm text-gray-500 mb-1">محله</label>
                <div className="bg-gray-50 rounded-xl p-3 border-2 border-indigo-200">
                  <p className="text-gray-600">{roommate.neighborhood || "تعیین نشده"}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Budget */}
          <div className="px-5 pb-5">
            <h2 className="font-bold text-lg mb-3">شرایط مالی</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-gray-50 rounded-2xl p-4">
                <p className="text-gray-500 text-sm">بودجه اجاره</p>
                <p className="font-bold">{formatPrice(roommate.rentBudget)} تومان</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-4">
                <p className="text-gray-500 text-sm">بودجه رهن</p>
                <p className="font-bold">{formatPrice(roommate.depositBudget)} تومان</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-4">
                <p className="text-gray-500 text-sm">مهلت زمانی</p>
                <p className="font-bold">{roommate.deadline}</p>
              </div>
            </div>
          </div>

          <div className="px-5 pb-6">
            <h2 className="font-bold text-lg mb-3">هشتگ‌ها</h2>
            <div className="flex flex-wrap gap-2">
              {roommate.tags.map((tag) => (
                <span key={tag} className="bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[35px] p-5">
          <h2 className="font-bold text-xl mb-5">نشان‌ها</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              className={`rounded-3xl p-4 text-center ${
                roommate.phoneVerified ? "bg-green-50" : "bg-red-50"
              }`}
            >
              <Phone
                className={`mx-auto ${
                  roommate.phoneVerified ? "text-green-600" : "text-red-600"
                }`}
              />
              <p className="mt-2 text-sm">تلفن همراه</p>
              {roommate.phoneVerified && (
                <p className="text-xs text-green-600 mt-1">✓ تایید شده</p>
              )}
            </div>
            <div
              className={`rounded-3xl p-4 text-center ${
                roommate.emailVerified ? "bg-green-50" : "bg-red-50"
              }`}
            >
              <Mail
                className={`mx-auto ${
                  roommate.emailVerified ? "text-green-600" : "text-red-600"
                }`}
              />
              <p className="mt-2 text-sm">ایمیل</p>
              {roommate.emailVerified && (
                <p className="text-xs text-green-600 mt-1">✓ تایید شده</p>
              )}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-5">
          <h2 className="text-2xl font-bold mb-6">تحلیل روانشناختی</h2>
          <div className="space-y-4">
            {Object.values(roommate.psychology).map((item) => {
              const hasResult = item.result && item.result.trim() !== "";
              return (
                <div
                  key={item.title}
                  className="flex items-center justify-between p-4 rounded-2xl bg-gray-50"
                >
                  <div>
                    <p className="font-medium">{item.title}</p>
                    {hasResult && (
                      <p className="text-sm text-gray-500 mt-1">{item.result}</p>
                    )}
                  </div>
                  <span className={`text-xl font-bold ${hasResult ? "text-green-500" : "text-red-500"}`}>
                    {hasResult ? "✓" : "✕"}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <button
          onClick={handleSendRequest}
          className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition shadow-lg"
        >
          ارسال درخواست هم‌اتاقی
        </button>
      </div>

      <BottomNav />
    </div>
  );
}