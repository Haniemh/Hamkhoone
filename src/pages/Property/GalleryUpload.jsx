import { Image as ImageIcon } from "lucide-react";

export default function GalleryUpload({
  galleryImages,
  setGalleryImages,
}) {
  return (
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
        onChange={(e) =>
          setGalleryImages([...e.target.files])
        }
      />
    </div>
  );
}