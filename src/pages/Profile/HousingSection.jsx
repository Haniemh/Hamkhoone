// src/pages/Profile/HousingSection.jsx
import ConfirmPublishModal from "./ConfirmPublishModal";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  Home,
  DoorOpen,
  Heart,
  Archive,
  Users
} from "lucide-react";

export default function HousingSection({ user }) {
  const navigate = useNavigate();

  const [showPublishModal, setShowPublishModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [propertySuccessMessage, setPropertySuccessMessage] = useState(false);
  const [validationError, setValidationError] = useState("");

  useEffect(() => {
    const published = localStorage.getItem("propertyPublished");
    if (published === "true") {
      setPropertySuccessMessage(true);
      localStorage.removeItem("propertyPublished");
      setTimeout(() => {
        setPropertySuccessMessage(false);
      }, 5000);
    }
  }, []);

  const validateUserData = () => {
    const requiredFields = [
      { key: "fullName", label: "نام کامل" },
      { key: "username", label: "نام کاربری" },
      { key: "gender", label: "جنسیت" },
      { key: "age", label: "سن" },
      { key: "about", label: "درباره من" },
      { key: "city", label: "شهر" },
      { key: "neighborhood", label: "محله" },
      { key: "rentBudget", label: "بودجه اجاره" },
      { key: "depositBudget", label: "بودجه رهن" },
      { key: "deadline", label: "مهلت زمانی" },
    ];

    for (const field of requiredFields) {
      if (!user[field.key] || user[field.key].toString().trim() === "") {
        return `لطفاً فیلد "${field.label}" را تکمیل کنید.`;
      }
    }

    if (!user.tags || user.tags.length === 0) {
      return "لطفاً حداقل یک هشتگ انتخاب کنید.";
    }

    return null;
  };

  const publishAd = () => {
    const error = validateUserData();
    if (error) {
      setValidationError(error);
      setTimeout(() => {
        setValidationError("");
      }, 5000);
      return;
    }

    setShowPublishModal(false);
    setSuccessMessage(true);
    const newAd = {
      id: Date.now(),
      title: `${user.fullName} دنبال هم‌اتاقی است`,
      fullName: user.fullName,
      username: user.username,
      gender: user.gender,
      age: user.age,
      about: user.about,
      rentBudget: user.rentBudget,
      depositBudget: user.depositBudget,
      deadline: user.deadline,
      city: user.city,
      neighborhood: user.neighborhood,
      tags: user.tags,
      image: user.profileImage,
      psychology: user.psychology,
      phoneVerified: user.phoneVerified,
      emailVerified: user.emailVerified,
      createdAt: new Date().toLocaleDateString("fa-IR"),
    };

    localStorage.setItem("roommateAd", JSON.stringify(newAd));

    setTimeout(() => {
      setSuccessMessage(false);
    }, 5000);
  };

  return (
    <div className="bg-white rounded-[35px] p-6 shadow-sm">
      <h2 className="text-2xl font-bold mb-6">مدیریت آگهی و هم‌خونه</h2>

      {validationError && (
        <div className="mb-4 bg-red-50 border border-red-200 text-red-700 p-4 rounded-2xl text-center">
          {validationError}
        </div>
      )}

      <div className="space-y-4">
        <div className="border border-dashed rounded-3xl p-8 text-center">
          <Users size={45} className="mx-auto text-indigo-500" />

          <h3 className="mt-4 text-xl">
            خانه ندارم، دنبال هم‌خونه می‌گردم
          </h3>

          <button
            onClick={() => {
              const error = validateUserData();
              if (error) {
                setValidationError(error);
                setTimeout(() => {
                  setValidationError("");
                }, 5000);
                return;
              }
              setShowPublishModal(true);
            }}
            className="mt-4 text-indigo-500 font-bold px-4 py-2 rounded-xl transition hover:bg-indigo-50"
          >
            ثبت آگهی جدید
          </button>

          {successMessage && (
            <div className="mb-4 bg-green-50 border border-green-200 text-green-700 p-4 rounded-2xl text-center">
              آگهی با موفقیت ثبت شد
            </div>
          )}
        </div>

        <div className="border border-dashed rounded-3xl p-8 text-center">
          <Home size={45} className="mx-auto text-sky-500" />

          <h3 className="mt-4 text-xl">
            خانه دارم، می‌خواهم اجاره بدهم
          </h3>

          <button
            onClick={() => {
              const error = validateUserData();
              if (error) {
                setValidationError(error);
                setTimeout(() => {
                  setValidationError("");
                }, 5000);
                return;
              }
              navigate("/create-property");
            }}
            className="mt-4 text-sky-500 font-bold px-4 py-2 rounded-xl transition hover:bg-sky-50"
          >
            ثبت ملک جدید
          </button>

          {propertySuccessMessage && (
            <div className="mt-4 bg-green-50 border border-green-200 text-green-700 p-4 rounded-2xl text-center">
              آگهی ملک با موفقیت ثبت شد
            </div>
          )}
        </div>
      </div>

      <div className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => navigate("/my-rooms")}
            className="bg-gray-50 rounded-3xl p-5 flex items-center gap-4 hover:bg-indigo-50"
          >
            <DoorOpen className="text-indigo-500" />
            <span>اتاق‌های من</span>
          </button>

          <button
            onClick={() => navigate("/favorite-rooms")}
            className="bg-gray-50 rounded-3xl p-5 flex items-center gap-4 hover:bg-pink-50"
          >
            <Heart className="text-pink-500" />
            <span>اتاق‌های مورد علاقه</span>
          </button>

        </div>
      </div>

      {showPublishModal && (
        <ConfirmPublishModal
          loading={loading}
          onClose={() => setShowPublishModal(false)}
          onConfirm={publishAd}
        />
      )}
    </div>
  );
}