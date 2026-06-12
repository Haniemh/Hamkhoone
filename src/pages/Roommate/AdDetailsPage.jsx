import AdHeader from "./AdHeader";
import AdInfoSection from "./AdInfoSection";
import AdFeaturesSection from "./AdFeaturesSection";
import AdOwnerCard from "./AdOwnerCard";
import BottomNav from "../Profile/BottomNav";

export default function AdDetailsPage() {

  const ad = {
    title: "دنبال هم‌اتاقی خانم",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",

    location: "تهران - صادقیه",

    about:
      "به دنبال فردی منظم و اجتماعی برای اجاره مشترک آپارتمان هستم.",

    rentBudget: "۸ میلیون",

    depositBudget:
      "۳۰۰ میلیون",

    deadline:
      "تا پایان ماه",

    tags: [
      "منظم",
      "دانشجو",
      "غیرسیگاری",
      "اجتماعی"
    ],

    owner: {
      name: "زهرا محمدی",
      age: 30
    }
  };

  return (
    <div
      dir="rtl"
      className="
        min-h-screen
        bg-[#f5f6fa]
      "
    >
      <div
        className="
          max-w-5xl
          mx-auto
          p-4
          pb-32
          space-y-6
        "
      >

        <AdHeader ad={ad}/>

        <AdInfoSection ad={ad}/>

        <AdFeaturesSection ad={ad}/>

        <AdOwnerCard ad={ad}/>

      </div>

      <BottomNav />
    </div>
  );
}