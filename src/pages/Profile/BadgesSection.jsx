import { useState } from "react";
import { Mail, Smartphone } from "lucide-react";

export default function BadgesSection({ user, setUser }) {
  const [editingField, setEditingField] = useState(null);
  const [editValue, setEditValue] = useState("");

  const startEditing = (field, currentValue) => {
    setEditingField(field);
    setEditValue(currentValue || "");
  };

  const cancelEditing = () => {
    setEditingField(null);
    setEditValue("");
  };

  const saveValue = () => {
    if (editingField === "phone") {
      setUser((prevUser) => ({
        ...prevUser,
        phoneNumber: editValue.trim(),
        phoneVerified: editValue.trim() !== "",
      }));
    } else if (editingField === "email") {
      setUser((prevUser) => ({
        ...prevUser,
        email: editValue.trim(),
        emailVerified: editValue.trim() !== "",
      }));
    }
    setEditingField(null);
    setEditValue("");
  };

  const handleBoxClick = (field, currentValue) => {
    startEditing(field, currentValue);
  };

  const phoneValue = user.phoneNumber || null;
  const emailValue = user.email ||  null;

  return (
    <div className="bg-white rounded-[35px] p-5">
      <h2 className="font-bold text-xl mb-5">نشان‌ها</h2>

      <div className="grid grid-cols-2 gap-4">
        {/* تلفن */}
        <div
          onClick={() => handleBoxClick("phone", phoneValue)}
          className={`
            rounded-3xl
            p-4
            text-center
            cursor-pointer
            transition-all
            duration-200
            ${
              editingField === "phone"
                ? "ring-2 ring-blue-300 bg-blue-50"
                : user.phoneVerified
                ? "bg-green-50 hover:bg-green-100"
                : "bg-red-50 hover:bg-red-100"
            }
          `}
        >
          <Smartphone
            className={`mx-auto ${
              user.phoneVerified
                ? "text-green-600"
                : "text-red-600"
            }`}
          />

          <p className="mt-2 text-sm">تلفن همراه</p>

          {editingField === "phone" ? (
            <div className="mt-3" onClick={(e) => e.stopPropagation()}>
              <input
                type="tel"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                placeholder="شماره تلفن را وارد کنید"
                className="w-full p-2 text-right border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                autoFocus
              />
              <div className="flex gap-2 mt-2">
                <button
                  onClick={saveValue}
                  className="save-button flex-1 px-3 py-1.5 bg-green-500 text-white rounded-lg text-sm hover:bg-green-600 transition"
                >
                  ثبت
                </button>
                <button
                  onClick={cancelEditing}
                  className="cancel-button flex-1 px-3 py-1.5 bg-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-400 transition"
                >
                  انصراف
                </button>
              </div>
            </div>
          ) : (
            user.phoneVerified && (
              <p className="text-xs text-gray-500 mt-1 truncate">
                {phoneValue}
              </p>
            )
          )}
        </div>

        {/* ایمیل */}
        <div
          onClick={() => handleBoxClick("email", emailValue)}
          className={`
            rounded-3xl
            p-4
            text-center
            cursor-pointer
            transition-all
            duration-200
            ${
              editingField === "email"
                ? "ring-2 ring-blue-300 bg-blue-50"
                : user.emailVerified
                ? "bg-green-50 hover:bg-green-100"
                : "bg-red-50 hover:bg-red-100"
            }
          `}
        >
          <Mail
            className={`mx-auto ${
              user.emailVerified
                ? "text-green-600"
                : "text-red-600"
            }`}
          />

          <p className="mt-2 text-sm">ایمیل</p>

          {editingField === "email" ? (
            <div className="mt-3" onClick={(e) => e.stopPropagation()}>
              <input
                type="email"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                placeholder="ایمیل را وارد کنید"
                className="w-full p-2 text-right border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                autoFocus
              />
              <div className="flex gap-2 mt-2">
                <button
                  onClick={saveValue}
                  className="save-button flex-1 px-3 py-1.5 bg-green-500 text-white rounded-lg text-sm hover:bg-green-600 transition"
                >
                  ثبت
                </button>
                <button
                  onClick={cancelEditing}
                  className="cancel-button flex-1 px-3 py-1.5 bg-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-400 transition"
                >
                  انصراف
                </button>
              </div>
            </div>
          ) : (
            user.emailVerified && (
              <p className="text-xs text-gray-500 mt-1 truncate">
                {emailValue}
              </p>
            )
          )}
        </div>
      </div>
    </div>
  );
}