const items = [
    "ویژگی‌های شخصیتی",
    "سبک حل تعارض",
    "تست ارزش‌ها و مرزها",
    "سبک زندگی",
  ];
  
  export default function PsychologySection() {
    return (
      <div className="bg-white rounded-3xl p-5">
  
        <h2 className="text-2xl font-bold mb-6">
          تحلیل روانشناختی
        </h2>
  
        <div className="space-y-4">
  
          {items.map(item => (
            <div
              key={item}
              className="
                flex
                items-center
                justify-between
                p-4
                rounded-2xl
                bg-gray-50
              "
            >
              <span>{item}</span>
  
              <span className="text-green-500">
                ✓
              </span>
            </div>
          ))}
  
        </div>
      </div>
    );
  }