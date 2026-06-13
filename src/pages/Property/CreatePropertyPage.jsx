import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AdBanner from "./AdBanner";
import FeaturesSection from "./FeaturesSection";
import MainImageUpload from "./MainImageUpload";
import SelectionModal from "./SelectionModal";
import AdDetailsSection from "./AdDetailsSection";
import GalleryUpload from "./GalleryUpload"
import SubmitButton from "./SubmitButton";
import BottomNav from "../BottomNav";

export default function CreatePropertAd() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [readyDate, setReadyDate] = useState("");

  const [roomDescription, setRoomDescription] = useState("");
  const [neighborhoodDescription, setNeighborhoodDescription] = useState("");

  const [rent, setRent] = useState("");
  const [deposit, setDeposit] = useState("");

  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");

  const [roommatesCount, setRoommatesCount] = useState("");
  const [bathroomsCount, setBathroomsCount] = useState("");

  const isPersian = (text) => { return /^[\u0600-\u06FF\s0-9]+$/.test(text);};

  const handleSubmit = () => {

  setErrorMessage("");

  if (!title.trim())
    return setErrorMessage("عنوان آگهی الزامی است");

  if (!isPersian(title))
    return setErrorMessage("عنوان آگهی باید فارسی باشد");

  if (!readyDate.trim())
    return setErrorMessage("تاریخ تخلیه الزامی است");

  if (!roomDescription.trim())
    return setErrorMessage("توضیحات اتاق الزامی است");

  if (!neighborhoodDescription.trim())
    return setErrorMessage("توضیحات محله الزامی است");

  if (!rent)
    return setErrorMessage("اجاره ماهیانه را وارد کنید");


  if (!deposit)
    return setErrorMessage("مبلغ ودیعه را وارد کنید");

  

  if (mapType === "نقشه")
    return setErrorMessage("نوع نقشه را انتخاب کنید");
  
  if (unitType === "نوع واحد")
    return setErrorMessage("نوع واحد را انتخاب کنید");

  if (duration === "مدت")
    return setErrorMessage("مدت اقامت را انتخاب کنید");

  if (bedrooms === "تعداد خواب")
     return setErrorMessage("تعداد خواب را انتخاب کنید");

  if (!roommatesCount)
    return setErrorMessage("تعداد هم‌اتاقی الزامی است");


  if (!bathroomsCount)
    return setErrorMessage("تعداد سرویس الزامی است");


  if (!city.trim())
    return setErrorMessage("شهر را انتخاب کنید");
  
  if (!district.trim())
     return setErrorMessage("محله را انتخاب کنید");

  if (!mainImage)
    return setErrorMessage("تصویر اصلی الزامی است");

  localStorage.setItem(
   "propertyPublished",
   "true"
);

  navigate("/Profile");
};

  const [errorMessage, setErrorMessage] = useState("");

  const [mainImage, setMainImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);

  const [activeModal, setActiveModal] = useState(null);

  const mapOptions = ["نقشه","کل واحد","اتاق اختصاصی","اتاق اشتراکی"];

  const unitOptions = ["نوع واحد","-----------","آپارتمان","خانه ویلایی","خوابگاه","مهانسرا","آپارتمان اشتراکی","خانه باغ",
    "زیرزمین"];

  const durationOptions = ["مدت","قابل انعطاف","ثابت","سالانه",];

  const bedroomOptions = ["تعداد خواب","یک خواب","دو خواب","سه خواب","چهار خواب","پنج خواب","شش خواب","هفت خواب","استودیو"];

  const [mapType, setMapType] = useState("نقشه");
  const [unitType, setUnitType] = useState("نوع واحد");
  const [duration, setDuration] = useState("مدت");
  const [bedrooms, setBedrooms] = useState("تعداد خواب");

return (
  <div
    dir="rtl"
    className="min-h-screen bg-[#F6F7FB] py-6 px-4"
  >
    <div className="max-w-md mx-auto">

      <AdBanner />

      <div className="bg-white rounded-[40px] shadow-sm overflow-hidden">

        <AdDetailsSection
          title={title}
          setTitle={setTitle}
          readyDate={readyDate}
          setReadyDate={setReadyDate}
          roomDescription={roomDescription}
          setRoomDescription={setRoomDescription}
          neighborhoodDescription={neighborhoodDescription}
          setNeighborhoodDescription={setNeighborhoodDescription}
          rent={rent}
          setRent={setRent}
          deposit={deposit}
          setDeposit={setDeposit}
        />

        <FeaturesSection
          mapType={mapType}
          unitType={unitType}
          duration={duration}
          bedrooms={bedrooms}
          setActiveModal={setActiveModal}
          city={city}
          setCity={setCity}
          district={district}
          setDistrict={setDistrict}
          roommatesCount={roommatesCount}
          setRoommatesCount={setRoommatesCount}
          bathroomsCount={bathroomsCount}
          setBathroomsCount={setBathroomsCount}
        />

        <MainImageUpload
          mainImage={mainImage}
          setMainImage={setMainImage}
        />

        <GalleryUpload
          galleryImages={galleryImages}
          setGalleryImages={setGalleryImages}
        />
      
      {errorMessage && (
        <p className="text-red-400 text-sm text-center mb-4">
          {errorMessage}
        </p>
      )}

      <SubmitButton
        onClick={handleSubmit}
      />

     <SelectionModal
      activeModal={activeModal}
      setActiveModal={setActiveModal}
      options={
          activeModal === "map"
          ? mapOptions
          : activeModal === "unit"
          ? unitOptions
          : activeModal === "duration"
          ? durationOptions
          : bedroomOptions
        }
        value={
           activeModal === "map"
            ? mapType
            : activeModal === "unit"
            ? unitType
            : activeModal === "duration"
            ? duration
            : bedrooms
          }
        onSelect={(item) => {
          if (activeModal === "map") setMapType(item);
          if (activeModal === "unit") setUnitType(item);
          if (activeModal === "duration") setDuration(item);
          if (activeModal === "bedrooms") setBedrooms(item);
          }
      }
    />
  
   </div>

    </div>

    <div className="
      bg-white
      rounded-[40px]
      shadow-sm
      overflow-hidden
      mb-24"
    >
    </div>

    <BottomNav />
  </div>
);
}