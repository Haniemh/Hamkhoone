// src/pages/Profile/ProfileInfoCard.jsx
import {
  Camera,
  Pencil,
  X,
} from "lucide-react";
import { useState } from "react";
import { updateProfile } from "../../lib/api";

function normalizeNumber(value) {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  const arabicDigits = "٠١٢٣٤٥٦٧٨٩";
  const normalized = String(value ?? "")
    .replace(/[۰-۹]/g, (digit) => persianDigits.indexOf(digit))
    .replace(/[٠-٩]/g, (digit) => arabicDigits.indexOf(digit))
    .replace(/,/g, ".")
    .replace(/[^\d.]/g, "");

  return normalized || null;
}

function mapUserToProfilePayload(user) {
  return {
    name: user.fullName || "",
    picture: user.profileImage || "",
    gender: user.gender || "female",
    bio: user.about || "",
    budget_min: normalizeNumber(user.rentBudget),
    budget_max: normalizeNumber(user.depositBudget),
  };
}

export default function ProfileInfoCard({ user, setUser }) {
  const [isEditing, setIsEditing] = useState(false);
  const [usernameError, setUsernameError] = useState("");
  const [saveError, setSaveError] = useState("");

  const saveProfile = async () => {
    try {
      setSaveError("");
      const profile = await updateProfile(mapUserToProfilePayload(user));

      setUser({
        ...user,
        fullName: profile.name || user.fullName,
        gender: profile.gender || user.gender,
        about: profile.bio ?? user.about,
        rentBudget: profile.budget_min ?? user.rentBudget,
        depositBudget: profile.budget_max ?? user.depositBudget,
        profileImage: profile.picture || user.profileImage,
      });
      setIsEditing(false);
      setUsernameError("");
      setSaveError("");
    } catch (error) {
      console.log(error);
      setSaveError("خطا در ارتباط با سرور");
    }
  };

  const defaultMaleImage = "/images/default-male.png";
  const defaultFemaleImage = "/images/default-female.png";

  const profileImage =
    user.profileImage ||
    (user.gender === "male" ? defaultMaleImage : defaultFemaleImage);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const imageUrl = URL.createObjectURL(file);
    setUser({
      ...user,
      profileImage: imageUrl,
    });
  };

  const availableTags = [
    "برونگرا",
    "درونگرا",
    "کتابخوان",
    "ورزشکار",
    "اجتماعی",
    "هنری",
    "مهمانی",
    "ساکت",
    "مسئولیت‌پذیر",
    "خلاق",
    "سالمند",
    "مطالعه‌گر",
    "پر انرژی",
    "آرام",
    "شب‌زنده‌دار",
    "کم‌تحرک",
    "فعال",
    "منظم",
    "طبیعت‌دوست",
  ];

  const addTag = (tag) => {
    if (!user.tags.includes(tag)) {
      setUser({
        ...user,
        tags: [...user.tags, tag],
      });
    }
  };

  const removeTag = (tag) => {
    setUser({
      ...user,
      tags: user.tags.filter((t) => t !== tag),
    });
  };

  return (
    <div className="bg-white rounded-[35px] shadow-sm overflow-hidden">
      <div className="text-center p-6">
        <div className="relative inline-block">
          <img
            src={profileImage}
            alt={user.fullName}
            className="w-40 h-40 rounded-full object-cover shadow-lg"
          />

          <label className="absolute bottom-0 left-0 p-3 rounded-2xl bg-white shadow cursor-pointer">
            <Camera />
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>
        </div>

        {isEditing ? (
          <input
            value={user.fullName}
            onChange={(e) =>
              setUser({
                ...user,
                fullName: e.target.value,
              })
            }
            className="mt-4 mx-auto block w-72 max-w-full text-center text-xl font-bold border-2 border-indigo-400 bg-yellow-50 rounded-xl p-2"
          />
        ) : (
          <h1 className="mt-4 text-3xl font-bold">{user.fullName}</h1>
        )}

        {isEditing ? (
          <div className="mt-1 flex flex-col items-center gap-1">
            <div className="flex items-center justify-center gap-2">
              <span className="text-gray-400 text-sm">@</span>
              <input
                value={user.username || ""}
                onChange={(e) => {
                  setUser({
                    ...user,
                    username: e.target.value,
                  });
                  setUsernameError("");
                }}
                placeholder="نام کاربری"
                className="text-center text-sm text-gray-500 border-2 border-indigo-400 bg-yellow-50 rounded-lg p-1 px-3"
              />
            </div>
            {usernameError && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-lg text-sm max-w-md">
                {usernameError}
              </div>
            )}
          </div>
        ) : (
          <p className="text-sm text-gray-400 mt-1">
            @{user.username || user.fullName.replace(/\s/g, "").toLowerCase()}
          </p>
        )}

        <div className="mt-2 text-gray-500 space-y-1">
          {isEditing ? (
            <>
              <select
                value={user.gender}
                onChange={(e) =>
                  setUser({
                    ...user,
                    gender: e.target.value,
                  })
                }
                className="border-2 border-indigo-400 rounded-lg p-2 bg-yellow-50 text-gray-700"
              >
                <option value="male">مرد</option>
                <option value="female">زن</option>
              </select>

              <input
                type="number"
                value={user.age}
                onChange={(e) =>
                  setUser({
                    ...user,
                    age: e.target.value,
                  })
                }
                className="border-2 border-indigo-400 rounded-lg p-2 bg-yellow-50 w-24 text-center block mx-auto mt-2 text-gray-700"
              />
            </>
          ) : (
            <>
              <p>{user.gender === "male" ? "مرد" : "زن"}</p>
              <p>{user.age} ساله</p>
            </>
          )}
        </div>
      </div>

      <div className="px-5 pb-5">
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-bold text-lg">درباره من</h2>
          <button
            onClick={() => {
              if (isEditing) {
                saveProfile();
              } else {
                setIsEditing(true);
              }
            }}
            className="flex items-center gap-1 text-indigo-600 text-sm whitespace-nowrap shrink-0"
          >
            <Pencil size={16} />
            <span>{isEditing ? "ثبت" : "ویرایش"}</span>
          </button>
        </div>

        {saveError && (
          <div className="mb-3 bg-red-50 border border-red-200 text-red-700 p-3 rounded-xl text-center text-sm">
            {saveError}
          </div>
        )}

        <div className="bg-indigo-50 rounded-3xl p-4">
          {isEditing ? (
            <textarea
              value={user.about}
              onChange={(e) =>
                setUser({
                  ...user,
                  about: e.target.value,
                })
              }
              className="w-full rounded-xl border-2 border-indigo-400 bg-yellow-50 p-3 text-gray-700"
            />
          ) : (
            <p className="leading-8">{user.about}</p>
          )}
        </div>
      </div>

      <div className="px-5 pb-5">
        <h2 className="font-bold text-lg mb-3">موقعیت مکانی</h2>

        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-1">
            <label className="block text-sm text-gray-500 mb-1">شهر</label>
            {isEditing ? (
              <input
                type="text"
                value={user.city || ""}
                onChange={(e) =>
                  setUser({
                    ...user,
                    city: e.target.value,
                  })
                }
                placeholder="شهر مورد نظر را وارد کنید"
                className="w-full p-3 border-2 border-indigo-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-yellow-50 text-gray-700"
              />
            ) : (
              <div className="bg-gray-50 rounded-xl p-3 border-2 border-indigo-200">
                <p className="text-gray-600">{user.city || "تعیین نشده"}</p>
              </div>
            )}
          </div>

          <div className="flex-1">
            <label className="block text-sm text-gray-500 mb-1">محله</label>
            {isEditing ? (
              <input
                type="text"
                value={user.neighborhood || ""}
                onChange={(e) =>
                  setUser({
                    ...user,
                    neighborhood: e.target.value,
                  })
                }
                placeholder="محله مورد نظر را وارد کنید"
                className="w-full p-3 border-2 border-indigo-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-yellow-50 text-gray-700"
              />
            ) : (
              <div className="bg-gray-50 rounded-xl p-3 border-2 border-indigo-200">
                <p className="text-gray-600">{user.neighborhood || "تعیین نشده"}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="px-5 pb-5">
        <h2 className="font-bold text-lg mb-3">شرایط مالی</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-gray-50 rounded-2xl p-4">
            <p className="text-gray-500 text-sm">بودجه اجاره</p>
            {isEditing ? (
              <input
                value={user.rentBudget}
                onChange={(e) =>
                  setUser({
                    ...user,
                    rentBudget: e.target.value,
                  })
                }
                className="w-full border-2 border-indigo-400 rounded-lg p-2 bg-yellow-50 text-gray-700"
              />
            ) : (
              <p className="font-bold">{user.rentBudget}</p>
            )}
          </div>

          <div className="bg-gray-50 rounded-2xl p-4">
            <p className="text-gray-500 text-sm">بودجه رهن</p>
            {isEditing ? (
              <input
                value={user.depositBudget}
                onChange={(e) =>
                  setUser({
                    ...user,
                    depositBudget: e.target.value,
                  })
                }
                className="w-full border-2 border-indigo-400 rounded-lg p-2 bg-yellow-50 text-gray-700"
              />
            ) : (
              <p className="font-bold">{user.depositBudget}</p>
            )}
          </div>

          <div className="bg-gray-50 rounded-2xl p-4">
            <p className="text-gray-500 text-sm">مهلت زمانی</p>
            {isEditing ? (
              <input
                value={user.deadline}
                onChange={(e) =>
                  setUser({
                    ...user,
                    deadline: e.target.value,
                  })
                }
                className="w-full border-2 border-indigo-400 rounded-lg p-2 bg-yellow-50 text-gray-700"
              />
            ) : (
              <p className="font-bold">{user.deadline}</p>
            )}
          </div>
        </div>
      </div>

      <div className="px-5 pb-6">
        <h2 className="font-bold text-lg mb-3">هشتگ‌ها</h2>

        {isEditing ? (
          <>
            <div className="mb-4">
              <p className="text-sm text-gray-500 mb-2">هشتگ‌های من</p>
              <div className="flex flex-wrap gap-2">
                {user.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-indigo-50 text-indigo-600 px-3 py-1.5 rounded-full text-sm flex items-center gap-2"
                  >
                    #{tag}
                    <button
                      onClick={() => removeTag(tag)}
                      className="text-indigo-400 hover:text-red-500 transition"
                    >
                      <X size={14} />
                    </button>
                  </span>
                ))}
                {user.tags.length === 0 && (
                  <p className="text-gray-400 text-sm">هیچ هشتگی انتخاب نشده است</p>
                )}
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-2">هشتگ‌های موجود</p>
              <div className="flex flex-wrap gap-2">
                {availableTags
                  .filter((tag) => !user.tags.includes(tag))
                  .map((tag) => (
                    <button
                      key={tag}
                      onClick={() => addTag(tag)}
                      className="bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full text-sm hover:bg-gray-200 transition"
                    >
                      #{tag}
                    </button>
                  ))}
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-wrap gap-2">
            {user.tags.map((tag) => (
              <span
                key={tag}
                className="bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
