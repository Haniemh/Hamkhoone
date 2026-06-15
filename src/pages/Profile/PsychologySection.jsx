export default function PsychologySection({ user }) {
  const items = Object.values(user.psychology);

  return (
    <div className="bg-white rounded-3xl p-5">
      <h2 className="text-2xl font-bold mb-6">
        تحلیل روانشناختی
      </h2>

      <div className="space-y-4">
        {items.map((item) => {
          const hasResult =
            item.result &&
            item.result.trim() !== "";

          return (
            <div
              key={item.title}
              className="
                flex
                items-center
                justify-between
                p-4
                rounded-2xl
                bg-gray-50
              "
            >
              <div>
                <p className="font-medium">
                  {item.title}
                </p>

                {hasResult && (
                  <p className="text-sm text-gray-500 mt-1">
                    {item.result}
                  </p>
                )}
              </div>

              <span
                className={`text-xl font-bold ${
                  hasResult
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {hasResult ? "✓" : "✕"}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}