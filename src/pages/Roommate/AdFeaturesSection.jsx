export default function AdFeaturesSection({ ad }) {

    return (
      <div className="bg-white rounded-[35px] p-6">
  
        <h2 className="font-bold text-xl mb-5">
          ویژگی‌ها
        </h2>
  
        <div className="flex flex-wrap gap-3">
  
          {ad.tags.map(tag => (
            <span
              key={tag}
              className="
                bg-indigo-50
                text-indigo-600
                px-4
                py-2
                rounded-full
              "
            >
              #{tag}
            </span>
          ))}
  
        </div>
  
      </div>
    );
  }
  