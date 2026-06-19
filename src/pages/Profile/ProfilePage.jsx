import { useState } from "react";

import ProfileInfoCard from "./ProfileInfoCard";
import HousingSection from "./HousingSection";
import BadgesSection from "./BadgesSection";
import PremiumCard from "./PremiumCard";
import PsychologySection from "./PsychologySection";
import BottomNav from "../BottomNav";

export default function ProfilePage() {
  const [user, setUser] = useState({
    fullName: "زهرا محمدی",
    username: "zahra_ad",
    gender: "female",
    age: 30,
    profileImage: null,
    haveHouse: false,
    about: "دانشجوی مهندسی نرم افزار و به دنبال هم‌خانه‌ای منظم و اجتماعی.",
    rentBudget: "۸ میلیون",
    depositBudget: "۳۰۰ میلیون",
    deadline: "۳۰ روز",
    city: "تهران",
    neighborhood: "ونک",
    tags: ["برونگرا", "کتابخوان", "ورزشکار", "اجتماعی"],
    psychology: {
      mbti: {
        result: "ENTJ",
        completed: true,
        vectors: {
          mbti: [0.68, 0.72, 0.65, 0.58, 0.62, 0.70, 0.55, 0.60]
        }
      },
      big5: {
        result: "EACNO",
        completed: true,
        vectors: {
          big5: [0.72, 0.45, 0.88, 0.30, 0.65]
        }
      },
      disc: {
        result: "DISC",
        completed: true,
        vectors: {
          disc: [0.90, 0.85, 0.50, 0.45]
        }
      }
    },
    phoneNumber: null,
    phoneVerified: false,
    email: "zahra@example.com",
    emailVerified: true,
  });

  const availableTags = [
    "برونگرا",
    "درونگرا",
    "کتابخوان",
    "ورزشکار",
    "اجتماعی",
    "هنری",
    "مهمانی",
    "ساکت",
    "مسئولیت‌پذیر",
    "خلاق",
    "سالمند",
    "مطالعه‌گر",
    "پر انرژی",
    "آرام",
    "شب‌زنده‌دار",
    "کم‌تحرک",
    "فعال",
    "منظم",
    "طبیعت‌دوست",
  ];

  const addTag = (tag) => {
    if (!user.tags.includes(tag)) {
      setUser({
        ...user,
        tags: [...user.tags, tag],
      });
    }
  };

  const removeTag = (tag) => {
    setUser({
      ...user,
      tags: user.tags.filter((t) => t !== tag),
    });
  };

  return (
    <div dir="rtl" className="min-h-screen bg-[#f5f6fa] md:pt-16">
      <div className="max-w-7xl mx-auto p-4 space-y-6 pb-32">
        <ProfileInfoCard user={user} setUser={setUser} />

        <HousingSection user={user} />

        <BadgesSection user={user} setUser={setUser} />

        <PsychologySection user={user} setUser={setUser} />
      </div>

      <BottomNav />
    </div>
  );
}