export default function SubmitButton({
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className="
        w-[85%]
        mx-auto
        block
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
  );
}