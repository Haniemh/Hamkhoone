export default function AdDetailsSection({
  title,
  setTitle,
  readyDate,
  setReadyDate,
  roomDescription,
  setRoomDescription,
  neighborhoodDescription,
  setNeighborhoodDescription,
  rent,
  setRent,
  deposit,
  setDeposit,
}) 
{
  const inputClass =
    "w-full h-16 bg-[#F3F5F8] rounded-3xl pr-5 pl-3 text-right placeholder:text-right outline-none";
    
  const textareaClass =
    "w-full bg-[#F3F5F8] rounded-3xl p-5 text-right placeholder:text-right resize-none outline-none";
  return (
    <>
      {/* اطلاعات اصلی */}

      <div className="px-6 py-6">

        <div className="flex justify-center mb-6">
          <h2 className="text-blue-600 text-xl font-medium">
            اطلاعات اصلی آگهی
          </h2>
        </div>

        <div className="space-y-4">

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="عنوان آگهی (فارسی)"
            className={inputClass}
          />

          <input
            type="text"
            value={readyDate}
            onChange={(e) => setReadyDate(e.target.value)}
            placeholder="تاریخ تخلیه / آمادگی"
            className={inputClass}
          />

        </div>

      </div>

      {/* درباره اتاق */}

      <div className="px-6 py-6">

        <textarea
         value={roomDescription}
         onChange={(e) =>setRoomDescription(e.target.value)}
         className={textareaClass}
         placeholder="درباره اتاق"
        />

        <p className="text-red-400 text-sm text-center mt-4">
          درج شماره تماس یا آیدی شبکه‌های اجتماعی ممنوع است.
        </p>

      </div>

      {/* درباره محله */}

      <div className="px-6 py-6">

       <textarea
         value={neighborhoodDescription}
         onChange={(e) =>setNeighborhoodDescription(e.target.value)}
         className={textareaClass}
         placeholder="درباره محله"
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
            value={rent}
            onChange={(e) => setRent(e.target.value)}
            className={inputClass}
          />

          <input
            type="number"
            placeholder="مبلغ ودیعه / رهن (تومان)"
            value={deposit}
            onChange={(e) => setDeposit(e.target.value)}
            className={inputClass}
          />

        </div>

      </div>
    </>
  );
}