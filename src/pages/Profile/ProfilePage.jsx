import ProfileInfoCard from "./ProfileInfoCard";
import HousingSection from "./HousingSection";
import BadgesSection from "./BadgesSection";
import PremiumCard from "./PremiumCard";
import PsychologySection from "./PsychologySection";
import BottomNav from "./BottomNav";


export default function ProfilePage() {
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

        <ProfileInfoCard />

        <HousingSection />

        <BadgesSection />

        <PremiumCard />

        <PsychologySection />

      </div>

      <BottomNav />
    </div>
  );
}