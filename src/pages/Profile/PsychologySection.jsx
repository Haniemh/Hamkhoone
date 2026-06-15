import { useState } from "react";

export default function PsychologySection({ user, setUser }) {
  const [editingKey, setEditingKey] = useState(null);
  const [editValue, setEditValue] = useState("");

  const psychologyEntries = Object.entries(user.psychology).map(([key, value]) => ({
    key,
    ...value,
  }));

  const startEditing = (itemKey, currentResult) => {
    setEditingKey(itemKey);
    setEditValue(currentResult || "");
  };

  const cancelEditing = () => {
    setEditingKey(null); // فقط ویرایش بسته می‌شود، هیچ تغییری در دیتا اعمال نمی‌شود
    setEditValue("");
  };

  const saveResult = () => {
    if (editingKey) {
      setUser((prevUser) => ({
        ...prevUser,
        psychology: {
          ...prevUser.psychology,
          [editingKey]: {
            ...prevUser.psychology[editingKey],
            result: editValue.trim(),
            completed: editValue.trim() !== "",
          },
        },
      }));
      setEditingKey(null); // بستن ویرایش بعد از ذخیره
      setEditValue("");
    }
  };

  const handleTestClick = (itemKey, itemTitle) => {
    const testLinks = {
      personality: "https://example.com/test/personality",
      conflictStyle: "https://example.com/test/conflict-style",
      values: "https://example.com/test/values",
      lifestyle: "https://example.com/test/lifestyle",
    };

    const link = testLinks[itemKey] || "https://example.com/test/general";
    alert(`لینک تست ${itemTitle}:\n${link}\n(در نسخه نهایی باز می‌شود)`);
  };

  const handleItemClick = (e, itemKey, currentResult) => {
    if (e.target.closest(".test-button") || e.target.closest(".cancel-button") || e.target.closest(".save-button")) {
      return;
    }
    startEditing(itemKey, currentResult);
  };

  return (
    <div className="bg-white rounded-3xl p-5">
      <h2 className="text-2xl font-bold mb-6">تحلیل روانشناختی</h2>

      <div className="space-y-4">
        {psychologyEntries.map((item) => {
          const hasResult = item.result && item.result.trim() !== "";
          const isEditing = editingKey === item.key;

          return (
            <div
              key={item.key}
              onClick={(e) => handleItemClick(e, item.key, item.result)}
              className={`
                flex items-center justify-between p-4 rounded-2xl
                transition-all duration-200 cursor-pointer
                ${isEditing ? "bg-blue-50 ring-2 ring-blue-300" : "bg-gray-50 hover:bg-gray-100"}
              `}
            >
              {/* بخش محتوای اصلی */}
              <div className="flex-1">
                <p className="font-medium">{item.title}</p>

                {isEditing ? (
                  <div className="mt-2">
                    <textarea
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      placeholder="نتیجه تست را وارد کنید..."
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      rows={2}
                      autoFocus
                    />
                    <div className="flex gap-2 mt-2">
                      <button
                        onClick={saveResult}
                        className="save-button px-4 py-1.5 bg-green-500 text-white rounded-lg text-sm hover:bg-green-600 transition"
                      >
                        ثبت
                      </button>
                      <button
                        onClick={cancelEditing}
                        className="cancel-button px-4 py-1.5 bg-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-400 transition"
                      >
                        انصراف
                      </button>
                    </div>
                  </div>
                ) : (
                  hasResult && (
                    <p className="text-sm text-gray-500 mt-1">{item.result}</p>
                  )
                )}
              </div>

              {/* بخش وضعیت - ترتیب جدید: اول تست، بعد ضربدر */}
              <div className="flex items-center gap-3 mr-4">
                {hasResult ? (
                  <span className="text-xl font-bold text-green-500">✓</span>
                ) : (
                  <>
                    <button
                      className="test-button px-3 py-1.5 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTestClick(item.key, item.title);
                      }}
                    >
                      تست
                    </button>
                    <span className="text-xl font-bold text-red-500">✕</span>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}