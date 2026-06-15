import { SearchX } from "lucide-react";

export default function EmptyState() {
  return (
    <div
      className="
        bg-white
        rounded-3xl
        p-10
        text-center
      "
    >
      <SearchX
        size={48}
        className="
          mx-auto
          text-gray-400
        "
      />

      <h3
        className="
          mt-4
          text-lg
          font-bold
        "
      >
        نتیجه‌ای پیدا نشد
      </h3>

      <p
        className="
          text-gray-500
          mt-2
        "
      >
        فیلترها را تغییر دهید
      </p>
    </div>
  );
}