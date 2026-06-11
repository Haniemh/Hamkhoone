import { useState } from "react";

import ProfileInfoCard from "./ProfileInfoCard";
import HousingSection from "./HousingSection";
import BadgesSection from "./BadgesSection";
import PremiumCard from "./PremiumCard";
import PsychologySection from "./PsychologySection";
import BottomNav from "./BottomNav";

export default function ProfilePage() {

  const [user, setUser] = useState({
    fullName: "زهرا محمدی",
    gender: "female",
    age: 30,
    profileImage: null,
    about:
      "دانشجوی مهندسی نرم افزار و به دنبال هم‌خانه‌ای منظم و اجتماعی.",
    rentBudget: "۸ میلیون",
    depositBudget: "۳۰۰ میلیون",
    deadline: "۳۰ روز",
    tags: [
      "برونگرا",
      "کتابخوان",
      "ورزشکار",
      "اجتماعی"
    ],
    phoneVerified: true,
    emailVerified: false,
  });

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#f5f6fa]"
    >
      <div
        className="
          max-w-5xl
          mx-auto
          p-4
          space-y-6
          pb-32
        "
      >

        <ProfileInfoCard
          user={user}
          setUser={setUser}
        />

        <HousingSection />

        <BadgesSection 
          user={user}
        />

        {/* <PremiumCard /> */}

        <PsychologySection />

      </div>

      <BottomNav />
    </div>
  );
}