// src/pages/RoommateSearch/RoommateSearchPage.jsx
import { useState } from "react";
import { Search } from "lucide-react";
import BottomNav from "../BottomNav";
import SearchFilters from "./SearchFilters";

export default function RoommateSearchPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const [roommates] = useState([
    {
      id: 1,
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
        personality: { result: "برونگرا، مسئولیت‌پذیر و همدل" },
        conflictStyle: { result: null },
        values: { result: "احترام متقابل، نظم و حفظ حریم شخصی" },
        lifestyle: { result: "فعال، منظم و اجتماعی" },
      },
      phoneVerified: true,
      emailVerified: false,
      createdAt: "۱۴۰۳/۱۲/۲۰",
    },
    {
      id: 2,
      fullName: "مریم کریمی",
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
        personality: { result: "برونگرا، خلاق" },
        conflictStyle: { result: "مذاکره‌کننده" },
        values: { result: "احترام و حریم شخصی" },
        lifestyle: { result: "شب‌زنده‌دار" },
      },
      phoneVerified: true,
      emailVerified: true,
      createdAt: "۱۴۰۳/۱۲/۱۸",
    },
    {
      id: 3,
      fullName: "احمد رضایی",
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
        personality: { result: "درونگرا، منطقی" },
        conflictStyle: { result: "اجتناب" },
        values: { result: "نظم و آرامش" },
        lifestyle: { result: "کم‌تحرک" },
      },
      phoneVerified: false,
      emailVerified: true,
      createdAt: "۱۴۰۳/۱۲/۱۵",
    },
    {
      id: 4,
      fullName: "سارا حسینی",
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
        personality: { result: "درونگرا، منظم" },
        conflictStyle: { result: "همکاری" },
        values: { result: "سکوت و تمرکز" },
        lifestyle: { result: "کم‌فعالیت" },
      },
      phoneVerified: true,
      emailVerified: false,
      createdAt: "۱۴۰۳/۱۲/۱۰",
    },
    {
      id: 5,
      fullName: "علی نوری",
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
        personality: { result: "برونگرا، پرانرژی" },
        conflictStyle: { result: "رقابتی" },
        values: { result: "تفریح و نشاط" },
        lifestyle: { result: "فعال" },
      },
      phoneVerified: true,
      emailVerified: true,
      createdAt: "۱۴۰۳/۱۲/۰۵",
    },
    {
      id: 6,
      fullName: "فاطمه کریمی",
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
        personality: { result: "درونگرا، منظم" },
        conflictStyle: { result: "همکاری" },
        values: { result: "نظم و احترام" },
        lifestyle: { result: "آرام" },
      },
      phoneVerified: true,
      emailVerified: false,
      createdAt: "۱۴۰۳/۱۲/۰۱",
    },
  ]);

  const [filters, setFilters] = useState({
    gender: "",
    houseType: "",
    newest: false,
    sortByRent: "",
    sortByBudget: "",
    budgetMin: "",
    budgetMax: "",
    ageMin: "",
    ageMax: "",
  });

  const filteredRoommates = roommates.filter((roommate) => {
    const matchesSearch =
      searchTerm === "" ||
      roommate.fullName.includes(searchTerm) ||
      roommate.city.includes(searchTerm) ||
      roommate.neighborhood.includes(searchTerm) ||
      roommate.tags.some((tag) => tag.includes(searchTerm));

    const matchesGender = !filters.gender || roommate.gender === filters.gender;
    const matchesHouseType = !filters.houseType || roommate.haveHouse === true;
    const matchesAgeMin = !filters.ageMin || roommate.age >= parseInt(filters.ageMin);
    const matchesAgeMax = !filters.ageMax || roommate.age <= parseInt(filters.ageMax);
    
    const roommateTotalBudget = roommate.rentBudget + roommate.depositBudget;
    const matchesBudgetMin = !filters.budgetMin || roommateTotalBudget >= parseInt(filters.budgetMin);
    const matchesBudgetMax = !filters.budgetMax || roommateTotalBudget <= parseInt(filters.budgetMax);

    return matchesSearch && matchesGender && matchesHouseType && matchesAgeMin && matchesAgeMax && matchesBudgetMin && matchesBudgetMax;
  });

  let sortedRoommates = [...filteredRoommates];

  if (filters.newest) {
    const dateMap = {
      "۱۴۰۳/۱۲/۲۰": 1, "۱۴۰۳/۱۲/۱۸": 2, "۱۴۰۳/۱۲/۱۵": 3,
      "۱۴۰۳/۱۲/۱۰": 4, "۱۴۰۳/۱۲/۰۵": 5, "۱۴۰۳/۱۲/۰۱": 6,
    };
    sortedRoommates.sort((a, b) => (dateMap[a.createdAt] || 0) - (dateMap[b.createdAt] || 0));
  }

  if (filters.sortByRent === "asc") {
    sortedRoommates.sort((a, b) => a.rentBudget - b.rentBudget);
  } else if (filters.sortByRent === "desc") {
    sortedRoommates.sort((a, b) => b.rentBudget - a.rentBudget);
  }

  if (filters.sortByBudget === "asc") {
    sortedRoommates.sort((a, b) => (a.rentBudget + a.depositBudget) - (b.rentBudget + b.depositBudget));
  } else if (filters.sortByBudget === "desc") {
    sortedRoommates.sort((a, b) => (b.rentBudget + b.depositBudget) - (a.rentBudget + a.depositBudget));
  }

  const clearFilters = () => {
    setFilters({
      gender: "",
      houseType: "",
      newest: false,
      sortByRent: "",
      sortByBudget: "",
      budgetMin: "",
      budgetMax: "",
      ageMin: "",
      ageMax: "",
    });
    setSearchTerm("");
  };

  const formatPrice = (price) => {
    return price.toLocaleString("fa-IR");
  };

  return (
    <div dir="rtl" className="min-h-screen bg-[#f5f6fa]">
      <div className="max-w-7xl mx-auto p-4 pb-32">
        <h1 className="text-2xl font-bold mb-4">جستجوی هم‌اتاقی</h1>

        <div className="relative mb-3">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="جستجو بر اساس نام، شهر، محله یا هشتگ..."
            className="w-full p-4 pr-12 rounded-2xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        <SearchFilters
          filters={filters}
          setFilters={setFilters}
          onClear={clearFilters}
        />

        <p className="text-gray-500 mb-4 mt-4">{sortedRoommates.length} نفر پیدا شد</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedRoommates.map((roommate) => (
            <div key={roommate.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer h-full flex flex-col">
              <div className="p-4 flex flex-col h-full">
                <div className="flex flex-col items-center text-center mb-4">
                  <img
                    src={roommate.profileImage || (roommate.gender === "female" ? "/images/default-female.png" : "/images/default-male.png")}
                    alt={roommate.fullName}
                    className="w-32 h-32 rounded-full object-cover mb-3"
                  />
                  
                  <h3 className="font-bold text-lg">{roommate.fullName}</h3>
                  <p className="text-gray-500 text-sm">
                    {roommate.gender === "female" ? "زن" : "مرد"}، {roommate.age} ساله
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    {roommate.city}، {roommate.neighborhood}
                  </p>
                </div>

                <div className="text-center mb-3">
                  <p className="font-bold text-indigo-600 text-lg">{formatPrice(roommate.rentBudget)} تومان</p>
                  <p className="text-xs text-gray-500">اجاره ماهانه</p>
                </div>

                <div className="flex justify-center mt-2">
                  <span className={`text-xs px-3 py-1 rounded-full ${roommate.haveHouse ? "bg-green-50 text-green-600" : "bg-blue-50 text-blue-600"}`}>
                    {roommate.haveHouse ? "🏠 خانه دارم" : "🔍 دنبال همخونه"}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 justify-center mt-3">
                  {roommate.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="bg-indigo-50 text-indigo-600 px-2 py-1 rounded-full text-xs">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-center gap-4 mt-4 text-xs">
                  <div className="flex items-center gap-1">
                    <span className={Object.values(roommate.psychology).some((item) => item.result && item.result.trim() !== "") ? "text-green-500" : "text-red-500"}>
                      {Object.values(roommate.psychology).some((item) => item.result && item.result.trim() !== "") ? "✓" : "✕"}
                    </span>
                    <span>تست روانشناختی</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className={roommate.phoneVerified ? "text-green-500" : "text-red-500"}>
                      {roommate.phoneVerified ? "✓" : "✕"}
                    </span>
                    <span>احراز هویت</span>
                  </div>
                </div>

                <button className="mt-4 w-full bg-indigo-50 text-indigo-600 py-2 rounded-xl text-sm font-medium hover:bg-indigo-100 transition">
                  مشاهده پروفایل و ارسال درخواست
                </button>
              </div>
            </div>
          ))}
        </div>

        {sortedRoommates.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl">
            <p className="text-gray-500">هیچ هم‌اتاقی با این شرایط پیدا نشد</p>
            <button onClick={clearFilters} className="mt-4 text-indigo-600 font-medium">
              حذف همه فیلترها
            </button>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}