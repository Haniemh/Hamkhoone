import { toast } from "react-hot-toast";

export default function RequestButton() {

  const handleRequest = () => {

    toast.success(
      "درخواست شما با موفقیت ارسال شد"
    );

  };

  return (
    <div
      className="
        fixed
        bottom-0
        left-0
        right-0
        bg-white
        border-t
        p-4
      "
    >
      <div
        className="
          max-w-5xl
          mx-auto
        "
      >
        <button
          onClick={handleRequest}
          className="
            w-full
            h-14
            rounded-2xl
            bg-indigo-600
            text-white
            font-bold
            text-lg
          "
        >
          درخواست هم‌اتاقی
        </button>
      </div>
    </div>
  );
}
