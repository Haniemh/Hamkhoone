export default function AdvancedSelectModal({
  open,
  onClose,
  options,
  value,
  onSelect,
}) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200]"
      onClick={onClose}
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
        {options.map((item) => {
          const selected =
            value === item.value;

          return (
            <button
              key={item.value}
              type="button"
              className="
                w-full
                h-16
                px-8
                border-b
                border-gray-200
                flex
                flex-row-reverse
                items-center
                justify-between
                text-right
              "
              onClick={() => {
                onSelect(item.value);
                onClose();
              }}
            >
              <div
                className={`
                  w-5
                  h-5
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
                  <div
                    className="
                      w-3
                      h-3
                      rounded-full
                      bg-blue-600
                    "
                  />
                )}
              </div>

              <span className="flex-1 text-right mr-4">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}