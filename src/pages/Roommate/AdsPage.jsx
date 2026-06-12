import AdCard from "./AdCard";
import { useEffect, useState } from "react";

export default function AdsPage() {

  // const ads = [
  //   {
  //     id: 1,
  //     title: "دنبال هم‌اتاقی خانم",
  //     location: "تهران - صادقیه",
  //     rentBudget: "۸ میلیون",
  //     gender: "خانم",
  //     image:
  //       "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  //   },
  //   {
  //     id: 2,
  //     title: "هم‌خانه منظم و شاغل",
  //     location: "تهران - سعادت آباد",
  //     rentBudget: "۱۰ میلیون",
  //     gender: "آقا",
  //     image:
  //       "https://images.unsplash.com/photo-1484154218962-a197022b5858"
  //   }
    
  // ];

  const [ads, setAds] = useState([]);

  useEffect(() => {
    const savedAd =
      localStorage.getItem("roommateAd");
    if (savedAd) {
      setAds([
        JSON.parse(savedAd)
      ]);
    }
  
  }, []);

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
          space-y-4
        "
      >
        {ads.map(ad => (
          <AdCard
            key={ad.id}
            ad={ad}
          />
        ))}
      </div>

      {
        ads.map(ad => (
          <AdCard
            key={ad.id}
            ad={ad}
          />
        ))
      }
    </div>
  );
}