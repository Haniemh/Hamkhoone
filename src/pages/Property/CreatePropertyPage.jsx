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

export default function CreatePropertyAd() {
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

  
  if (!mapType) return setErrorMessage("نوع نقشه را انتخاب کنید");

  if (!unitType) return setErrorMessage("نوع واحد را انتخاب کنید");

  if (!duration) return setErrorMessage("مدت اقامت را انتخاب کنید");

  if (!bedrooms) return setErrorMessage("تعداد خواب را انتخاب کنید");


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
 localStorage.removeItem("myRooms");
  const newRoom = {
  id: 1,

  title,
  roomDescription,
  neighborhoodDescription,

  city,
  district,

  bathrooms: bathroomsCount,
  roommates: roommatesCount,

  deposit,
  rent,

  mapType,
  bedrooms,
  unitType,

  duration,

  mainImage: "/images/room1.jpg",
  galleryImages: [
    "/images/room2.jpg",
    "/images/room3.jpg",
    "/images/room4.jpg",
  ],

  fullName: "زهرا محمدی",
  gender: "female",
  age: 25,

  ProfileImage: "/images/default-female.png",

  date: "1405/03/02",
};

const myRooms =
  JSON.parse(localStorage.getItem("myRooms")) || [];

myRooms.push(newRoom);

localStorage.setItem(
  "myRooms",
  JSON.stringify(myRooms)
);

  navigate("/my-rooms");
};

  const [errorMessage, setErrorMessage] = useState("");

  const [mainImage, setMainImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);

  const [activeModal, setActiveModal] = useState(null);

  const mapOptions = [
   { value: "", label: "نقشه" },
   { value: "full_unit", label: "کل واحد" },
   { value: "private_room", label: "اتاق اختصاصی" },
   { value: "shared_room", label: "اتاق اشتراکی" },
  ];

  const unitOptions = [
   { value: "", label: "نوع واحد" },
   { value: "apartment", label: "آپارتمان" },
   { value: "villa", label: "خانه ویلایی" },
   { value: "dormitory", label: "خوابگاه" },
   { value: "guesthouse", label: "مهانسرا" },
   { value: "shared_apartment", label: "آپارتمان اشتراکی" },
   { value: "garden_house", label: "خانه باغ" },
   { value: "basement", label: "زیرزمین" },
 ];

  const durationOptions = [
   { value: "", label: "مدت" },
   { value: "flexible", label: "قابل انعطاف" },
   { value: "fixed", label: "ثابت" },
   { value: "yearly", label: "سالانه" },
  ];

  const bedroomOptions = [
   { value: "", label: "تعداد خواب" },
   { value: "1", label: "یک خواب" },
   { value: "2", label: "دو خواب" },
   { value: "3", label: "سه خواب" },
   { value: "4", label: "چهار خواب" },
   { value: "5", label: "پنج خواب" },
   { value: "6", label: "شش خواب" },
   { value: "7", label: "هفت خواب" },
   { value: "studio", label: "استودیو" },
  ];

  const [mapType, setMapType] = useState("");
  const [unitType, setUnitType] = useState("");
  const [duration, setDuration] = useState("");
  const [bedrooms, setBedrooms] = useState("");

return (
  <div
    dir="rtl"
    className="min-h-screen bg-[#F6F7FB] py-6 px-4"
  >
    <div className="max-w-4xl mx-auto">

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