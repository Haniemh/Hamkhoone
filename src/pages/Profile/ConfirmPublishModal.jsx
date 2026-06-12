import {
    Megaphone
  } from "lucide-react";
  
  export default function ConfirmPublishModal({
    onClose,
    onConfirm,
    loading
  }) {
  
    return (
  
      <div
        className="
          fixed
          inset-0
          bg-black/40
          flex
          items-center
          justify-center
          z-50
          p-4
        "
      >
  
        <div
          className="
            bg-white
            rounded-[35px]
            w-full
            max-w-md
            overflow-hidden
            shadow-xl
          "
        >
  
          {/* Header */}
  
          <div className="p-8 text-center">
  
            <div
              className="
                w-20
                h-20
                mx-auto
                rounded-full
                bg-indigo-100
                flex
                items-center
                justify-center
              "
            >
              <Megaphone
                size={40}
                className="text-indigo-600"
              />
            </div>
  
            <h2
              className="
                mt-5
                text-2xl
                font-bold
              "
            >
              تایید انتشار آگهی
            </h2>
  
            <p
              className="
                mt-2
                text-gray-500
              "
            >
              بررسی نهایی اطلاعات و انتشار آگهی
            </p>
  
          </div>
  
          {/* مدت نمایش */}
  
          <div className="px-6">
  
            <div
              className="
                bg-indigo-50
                rounded-3xl
                p-4
                flex
                justify-between
                items-center
              "
            >
              <span>
                مدت نمایش
              </span>
  
              <span
                className="
                  font-bold
                  text-indigo-600
                "
              >
                ۶۰ روز
              </span>
  
            </div>
  
          </div>
  
          {/* پیام */}
  
          <div className="p-6">
  
            <div
              className="
                bg-purple-50
                border
                border-purple-200
                rounded-3xl
                p-5
                text-center
              "
            >
              <p
                className="
                  text-sm
                  leading-7
                  text-gray-700
                "
              >
                آگهی پس از ثبت وارد صف بررسی
                ادمین می‌شود و پس از تایید
                در بخش جستجوی هم‌اتاقی
                نمایش داده خواهد شد.
              </p>
  
            </div>
  
          </div>
  
          {/* Buttons */}
  
          <div
            className="
              p-6
              flex
              gap-3
            "
          >
  
            <button
              onClick={onClose}
              disabled={loading}
              className="
                flex-1
                py-3
                rounded-2xl
                bg-gray-100
                text-gray-700
                font-bold
              "
            >
              انصراف
            </button>
  
            <button
              onClick={onConfirm}
              disabled={loading}
              className="
                flex-1
                py-3
                rounded-2xl
                bg-indigo-600
                text-white
                font-bold
              "
            >
              {
                loading
                  ? "در حال ثبت..."
                  : "تایید"
              }
            </button>
  
          </div>
  
        </div>
  
      </div>
    );
  }