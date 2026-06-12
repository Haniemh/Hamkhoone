import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Home,
  Camera,
  Image as ImageIcon,
  ChevronDown,
} from "lucide-react";


export default function CreateRoommateAd() {
  const navigate = useNavigate();

  const [mainImage, setMainImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);

  const mapOptions = ["نقشه","کل واحد","اتاق اختصاصی","اتاق اشتراکی"];
  const unitOptions = ["نوع واحد","-----------","آپارتمان","خانه ویلایی","خوابگاه","مهانسرا","آپارتمان اشتراکی","خانه باغ","زیرزمین"];

  const durationOptions = [ "مدت","قابل انعطاف","ثابت","سالانه"];
  const bedroomOptions = ["تعداد خواب","یک خواب","دو خواب","سه خواب","چهار خواب","پنج خواب","شش خواب","هفت خواب","استودیو"];
  
  const [activeModal, setActiveModal] = useState(null);
  const [mapType, setMapType] = useState("نقشه");
  const [unitType, setUnitType] = useState("نوع واحد");
  const [duration, setDuration] = useState("مدت");
  const [bedrooms, setBedrooms] = useState("تعداد خواب");

  const inputClass =
    " w-full h-16 bg-[#F3F5F8] rounded-3xl pr-5 pl-3 text-right placeholder:text-right outline-none";

  const selectClass =
    "appearance-none w-full h-16 bg-[#F3F5F8] rounded-3xl pr-5 text-right text-gray-500 font-normal outline-none";

  const textareaClass =
    " w-full bg-[#F3F5F8] rounded-3xl p-5 text-right placeholder:text-right resize-none outline-none";

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#F6F7FB] py-6 px-4 text-right"
    >
      <div className="max-w-md mx-auto">

        {/* Banner */}

        <div className="bg-gradient-to-b from-blue-600 to-blue-500 rounded-[40px] p-8 text-white shadow-lg mb-6">

          <h1 className="text-3xl font-bold text-center mb-4">
            ثبت آگهی جدید هم‌اتاقی
          </h1>

          <p className="text-center text-blue-100 leading-8">
            جزئیات محل سکونت خود را وارد کنید تا بهترین
            هم‌اتاقی‌ها با شما ارتباط بگیرند.
          </p>
          <div className="mt-8 flex flex-col gap-3">
            <div className="bg-blue-500 rounded-full px-5 py-3 text-right">
               اعتبار آگهی: ۶۰ روز
            </div>
          </div>

        </div>

        <div className="bg-white rounded-[40px] shadow-sm overflow-hidden">

        {/* اطلاعات اصلی */}

        <div className="px-6 py-6">

        <div className="flex justify-center items-center gap-2 mb-6">
          <h2 className="text-blue-600 text-xl font-medium">
             اطلاعات اصلی آگهی
          </h2>
        </div>

          <div className="space-y-4">

            <input
              type="text"
              placeholder="عنوان آگهی (فارسی)"
              className={inputClass}
            />

            <input
              type="text"
              placeholder="تاریخ تخلیه / آمادگی"
              className={inputClass}
            />

          </div>

        </div>

        {/* درباره اتاق */}

        <div className="px-6 py-6">

          <textarea
            rows={5}
            placeholder="درباره اتاق"
            className={textareaClass}
          />

          <p className="text-red-400 text-sm text-center mt-4">
            درج شماره تماس یا آیدی شبکه‌های اجتماعی ممنوع است.
          </p>

        </div>

        {/* درباره محله */}

        <div className="px-6 py-6">

          <textarea
            rows={5}
            placeholder="درباره محله"
            className={textareaClass}
          />

          <p className="text-red-400 text-sm text-center mt-4">
            درج شماره تماس یا آیدی شبکه‌های اجتماعی ممنوع است.
          </p>

        </div>

        {/* قیمت */}

        <div className="px-6 py-6">

          <div className="space-y-4">

            <input
              type="number"
              placeholder="اجاره ماهیانه (تومان)"
              className={inputClass}
            />

            <input
              type="number"
              placeholder="مبلغ ودیعه / رهن (تومان)"
              className={inputClass}
            />

          </div>

        </div>

        {/* ویژگی ها */}

<div className="px-6 py-6">

  <div className="grid grid-cols-2 gap-4">

    {[
      { label: mapType, modal: "map" },
      { label: unitType, modal: "unit" },
      { label: duration, modal: "duration" },
      { label: bedrooms, modal: "bedrooms" },
    ].map((item) => (
      <button
        key={item.modal}
        type="button"
        onClick={() => setActiveModal(item.modal)}
        className="
          h-16
          bg-[#F3F5F8]
          rounded-3xl
          px-5
          flex
          flex-row-reverse
          items-center
          justify-between
          text-gray-500
          font-normal
        "
      >
        <ChevronDown
          size={18}
          className="text-gray-400"
        />

        <span>{item.label}</span>
      </button>
    ))}

  </div>

  <div className="grid grid-cols-2 gap-4 mt-4">

    <input
      type="number"
      placeholder="تعداد هم‌اتاقی‌ها"
      className={inputClass}
    />

    <input
      type="number"
      placeholder="تعداد سرویس"
      className={inputClass}
    />

  </div>

  <div className="space-y-4 mt-4">

    <input
      type="text"
      placeholder="جستجوی شهر..."
      className={inputClass}
    />

    <input
      type="text"
      placeholder="جستجوی محله..."
      className={inputClass}
    />

  </div>

</div>

        {/* تصویر اصلی */}

        <div className="px-6 py-6">
          <label 
            htmlFor="mainImage"
            className="
              border-2
              border-dashed
              border-gray-200
              rounded-[35px]
              h-72
              flex
              flex-col
              items-center
              justify-center
              cursor-pointer
              overflow-hidden
              "
          >
            {mainImage ? (
              <img
              src={URL.createObjectURL(mainImage)}
              alt=""
              className="w-full h-full object-cover"
              />
            ) : (
              <>
                <p className="text-red-400 text-lg mb-5">
                   تصویر اصلی واحد (اجباری)
                </p>

               <div className="w-28 h-28 rounded-3xl bg-[#F3F5F8] flex items-center justify-center">
                  <Camera
                  size={44}
                   className="text-gray-400"
                  />
               </div>
            </>
          )}
        </label>
        <input
          id="mainImage"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) =>setMainImage(e.target.files[0])}
        />
    </div>

        {/* تصاویر بیشتر */}

    <div className="px-6 py-6">
      <label 
        htmlFor="gallery"
        className="
        border-2
        border-dashed
        border-gray-200
        rounded-[35px]
        min-h-[250px]
        flex
        flex-col
        items-center
        justify-center
        cursor-pointer
        p-4
        "
      >

      <p className="text-yellow-500 text-lg mb-5">
         تصاویر بیشتر
      </p>

      {galleryImages.length === 0 ? (
        <div className="w-28 h-28 rounded-3xl bg-[#F3F5F8] flex items-center justify-center">
          <ImageIcon
          size={44}
          className="text-gray-400"
          />
        </div>
      ) : (
         <div className="grid grid-cols-3 gap-3 w-full">
           {galleryImages.map((image, index) => (
            <img
            key={index}
            src={URL.createObjectURL(image)}
            alt=""
            className="w-full h-24 object-cover rounded-xl"
            />
            ))}
         </div>
         )}
    </label>
      <input
        id="gallery"
        type="file"
        multiple
        accept="image/*"
        className="hidden"
        onChange={(e) =>setGalleryImages([...e.target.files])
        }
      />
   </div>

        {/* Submit */}

        <button
          onClick={() => navigate("/my-rooms")}
          className="
            w-full
            h-18
            rounded-full
            bg-gradient-to-r
            from-blue-700
            to-blue-500
            text-white
            text-2xl
            font-medium
            py-5
            shadow-xl
            mb-10
          "
        >
          ایجاد و انتشار آگهی
        </button>

      </div>
    </div>
    {activeModal && (
  <div
    className="fixed inset-0 z-50"
    onClick={() => setActiveModal(null)}
  >
    <div className="absolute inset-0 bg-black/40" />

    <div
      onClick={(e) => e.stopPropagation()}
      className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[92%]
        max-w-md
        bg-white
        rounded-[35px]
        overflow-hidden
        shadow-2xl
        max-h-[80vh]
        overflow-y-auto
      "
    >
      {(activeModal === "map"
        ? mapOptions
        : activeModal === "unit"
        ? unitOptions
        : activeModal === "duration"
        ? durationOptions
        : bedroomOptions
      ).map((item) => {
       const selected =
  (activeModal === "map" &&
    (
      mapType === item ||
      (mapType === "نقشه" && item === mapOptions[0])
    )) ||

  (activeModal === "unit" &&
    (
      unitType === item ||
      (unitType === "نوع واحد" && item === unitOptions[0])
    )) ||

  (activeModal === "duration" &&
    (
      duration === item ||
      (duration === "مدت" && item === durationOptions[0])
    )) ||

  (activeModal === "bedrooms" &&
    (
      bedrooms === item ||
      (bedrooms === "تعداد خواب" && item === bedroomOptions[0])
    ));

        return (
          <button
            key={item}
            className="
              w-full
              h-24
              border-b
              border-gray-200
              px-8
              flex
              flex-row-reverse
              items-center
              justify-between
              text-right
              text-2xl
            "
            onClick={() => {
              if (activeModal === "map")
                setMapType(item);

              if (activeModal === "unit")
                setUnitType(item);

              if (activeModal === "duration")
                setDuration(item);

              if (activeModal === "bedrooms")
                setBedrooms(item);

              setActiveModal(null);
            }}
          >
           <div
            className={`
              w-7 h-7
              rounded-full
              border-2
              flex
              items-center
              justify-center
              ${
                 selected
                 ? "border-blue-600"
                 : "border-gray-300"
                }
              `}
             >
              {selected && (
                 <div className="w-3 h-3 rounded-full bg-blue-600" />)}
            </div>

            <span className="flex-1 text-right">{item}</span>
          </button>
        );
      })}
    </div>
  </div>
)}
    </div>
  );
}