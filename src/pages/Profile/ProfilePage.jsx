import { useEffect, useState } from "react";
import ProfileInfoCard from "./ProfileInfoCard";
import HousingSection from "./HousingSection";
import BadgesSection from "./BadgesSection";
import PremiumCard from "./PremiumCard";
import PsychologySection from "./PsychologySection";
import BottomNav from "../BottomNav";
import { getProfile } from "../../lib/api";

function calculateAge(birthDate) {
  if (!birthDate) return 30;
  const birth = new Date(birthDate);
  if (Number.isNaN(birth.getTime())) return 30;
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const monthDelta = today.getMonth() - birth.getMonth();
  if (monthDelta < 0 || (monthDelta === 0 && today.getDate() < birth.getDate())) {
    age -= 1;
  }
  return age;
}

function mapProfileToUser(profile) {
  return {
    fullName: profile.name || profile.username || "کاربر هم‌خونه",
    username: profile.username || "",
    gender: profile.gender || "female",
    age: calculateAge(profile.birth_date),
    profileImage: profile.picture || null,
    haveHouse: false,
    about: profile.bio || "هنوز توضیحی ثبت نشده است.",
    rentBudget: profile.budget_min ?? "",
    depositBudget: profile.budget_max ?? "",
    deadline: "۳۰ روز",
    city: "تهران",
    neighborhood: "",
    tags: [],
    psychology: {
      mbti: {
        result: "ENTJ",
        completed: true,
        vectors: {
          mbti: [0.68, 0.72, 0.65, 0.58, 0.62, 0.70, 0.55, 0.60],
        },
      },
      big5: {
        result: "EACNO",
        completed: true,
        vectors: {
          big5: [0.72, 0.45, 0.88, 0.30, 0.65],
        },
      },
      disc: {
        result: "DISC",
        completed: true,
        vectors: {
          disc: [0.90, 0.85, 0.50, 0.45],
        },
      },
    },
    phoneNumber: profile.phone || null,
    phoneVerified: Boolean(profile.phone),
    email: profile.username?.includes("@") ? profile.username : "",
    emailVerified: Boolean(profile.username?.includes("@")),
  };
}

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
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadProfile() {
      try {
        const profile = await getProfile();
        if (isMounted) {
          setUser((currentUser) => ({
            ...currentUser,
            ...mapProfileToUser(profile),
            tags: currentUser.tags,
            city: currentUser.city,
            neighborhood: currentUser.neighborhood,
            deadline: currentUser.deadline,
            psychology: currentUser.psychology,
          }));
          setLoadError("");
        }
      } catch (error) {
        if (isMounted) {
          setLoadError(error instanceof Error ? error.message : "خطا در دریافت پروفایل");
        }
      }
    }

    loadProfile();

    return () => {
      isMounted = false;
    };
  }, []);

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
        {loadError && (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-center text-sm text-red-700">
            {loadError}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="lg:mt-20 space-y-6">
            <ProfileInfoCard user={user} setUser={setUser} />
          </div>

          <div className="space-y-6">
            <HousingSection user={user} />
            <BadgesSection user={user} setUser={setUser} />
            <PsychologySection user={user} setUser={setUser} />
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}