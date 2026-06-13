import { Camera } from "lucide-react";

export default function MainImageUpload({
  mainImage,
  setMainImage,
}) {
  return (
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
              <Camera size={44} />
            </div>
          </>
        )}
      </label>

      <input
        id="mainImage"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) =>
          setMainImage(e.target.files[0])
        }
      />
    </div>
  );
}