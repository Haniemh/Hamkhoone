import { useState } from "react";

export default function PsychologySection({ user, setUser }) {
  const [editingKey, setEditingKey] = useState(null);
  const [editValues, setEditValues] = useState({});

  const psychologyEntries = [
    {
      key: "mbti",
      title: "MBTI",
      link: "https://esanj.ir/myers-briggs-type-indicator-mbti",
      fields: [
        { label: "برون‌گرا (E)", key: "E" },
        { label: "درون‌گرا (I)", key: "I" },
        { label: "شهودی (N)", key: "N" },
        { label: "حسی (S)", key: "S" },
        { label: "احساسی (F)", key: "F" },
        { label: "منطقی (T)", key: "T" },
        { label: "انعطاف‌پذیر (P)", key: "P" },
        { label: "ساختارگرا (J)", key: "J" },
      ],
      pairs: [
        { key1: "E", key2: "I" },
        { key1: "N", key2: "S" },
        { key1: "F", key2: "T" },
        { key1: "P", key2: "J" },
      ],
      vectorKey: "mbti",
    },
    {
      key: "big5",
      title: "Big Five",
      link: "https://esanj.ir/neo-ffi-personality-test",
      fields: [
        { label: "برون‌گرایی (E)", key: "E" },
        { label: "دلپذیری (A)", key: "A" },
        { label: "وظیفه‌شناسی (C)", key: "C" },
        { label: "روان‌رنجوری (N)", key: "N" },
        { label: "گشودگی (O)", key: "O" },
      ],
      vectorKey: "big5",
    },
    {
      key: "disc",
      title: "DISC",
      link: "https://esanj.ir/disc-test",
      fields: [
        { label: "سلطه‌گری (D)", key: "D" },
        { label: "تأثیرگذاری (I)", key: "I" },
        { label: "ثبات‌گرایی (S)", key: "S" },
        { label: "وظیفه‌گرایی (C)", key: "C" },
      ],
      vectorKey: "disc",
    },
  ];

  const startEditing = (itemKey) => {
    const existingData = user.psychology?.[itemKey] || {};
    const existingVectors = existingData.vectors || {};

    const initialValues = {};
    const testConfig = psychologyEntries.find((t) => t.key === itemKey);
    if (testConfig) {
      testConfig.fields.forEach((field) => {
        const vector = existingVectors[testConfig.vectorKey] || [];
        const fieldIndex = testConfig.fields.findIndex((f) => f.key === field.key);
        if (vector[fieldIndex] !== undefined) {
          initialValues[field.key] = Math.round(vector[fieldIndex] * 100);
        }
      });
    }

    setEditingKey(itemKey);
    setEditValues(initialValues);
  };

  const cancelEditing = () => {
    setEditingKey(null);
    setEditValues({});
  };

  const saveResult = () => {
    if (!editingKey) return;

    const testConfig = psychologyEntries.find((t) => t.key === editingKey);
    if (!testConfig) return;

    if (testConfig.key === "mbti") {
      const allFilled = testConfig.fields.every((field) => {
        const value = parseFloat(editValues[field.key]);
        return !isNaN(value) && value >= 0 && value <= 100;
      });

      if (!allFilled) {
        alert("لطفاً تمام فیلدها را با مقادیر بین 0 تا 100 پر کنید.");
        return;
      }

      const pairValid = testConfig.pairs.every((pair) => {
        const val1 = parseFloat(editValues[pair.key1]) || 0;
        const val2 = parseFloat(editValues[pair.key2]) || 0;
        return val1 + val2 === 100;
      });

      if (!pairValid) {
        alert("مجموع هر دو باید برابر 100 باشد.");
        return;
      }

      const vectors = testConfig.fields.map((field) => {
        const value = parseFloat(editValues[field.key]);
        return isNaN(value) ? 0 : value / 100;
      });

      const resultLetters = testConfig.pairs.map((pair) => {
        const val1 = parseFloat(editValues[pair.key1]) || 0;
        const val2 = parseFloat(editValues[pair.key2]) || 0;
        return val1 >= 50 ? pair.key1 : pair.key2;
      });
      const result = resultLetters.join("");

      setUser((prevUser) => ({
        ...prevUser,
        psychology: {
          ...prevUser.psychology,
          [editingKey]: {
            result: result,
            completed: true,
            vectors: {
              ...prevUser.psychology?.[editingKey]?.vectors,
              [testConfig.vectorKey]: vectors,
            },
          },
        },
      }));

      setEditingKey(null);
      setEditValues({});
    } else {
      const allFilled = testConfig.fields.every((field) => {
        const value = parseFloat(editValues[field.key]);
        return !isNaN(value) && value >= 0 && value <= 100;
      });

      if (!allFilled) {
        alert("لطفاً تمام فیلدها را با مقادیر بین 0 تا 100 پر کنید.");
        return;
      }

      const vectors = testConfig.fields.map((field) => {
        const value = parseFloat(editValues[field.key]);
        return isNaN(value) ? 0 : value / 100;
      });

      const resultLetters = testConfig.fields.map((field) => {
        const value = parseFloat(editValues[field.key]) || 0;
        return value >= 50 ? field.key : field.key.toLowerCase();
      });
      const result = resultLetters.join("");

      setUser((prevUser) => ({
        ...prevUser,
        psychology: {
          ...prevUser.psychology,
          [editingKey]: {
            result: result,
            completed: true,
            vectors: {
              ...prevUser.psychology?.[editingKey]?.vectors,
              [testConfig.vectorKey]: vectors,
            },
          },
        },
      }));

      setEditingKey(null);
      setEditValues({});
    }
  };

  const handleFieldChange = (fieldKey, value) => {
    setEditValues((prev) => ({
      ...prev,
      [fieldKey]: value,
    }));
  };

  const handleTestClick = (link) => {
    window.open(link, "_blank");
  };

  const handleItemClick = (e, itemKey) => {
    if (
      e.target.closest(".test-button") ||
      e.target.closest(".cancel-button") ||
      e.target.closest(".save-button") ||
      e.target.closest(".field-input")
    ) {
      return;
    }
    startEditing(itemKey);
  };

  const getTestData = (testKey) => {
    return user.psychology?.[testKey] || {};
  };

  return (
    <div className="bg-white rounded-3xl p-5">
      <h2 className="text-2xl font-bold mb-6">تحلیل روانشناختی</h2>

      <div className="space-y-4">
        {psychologyEntries.map((test) => {
          const testData = getTestData(test.key);
          const hasResult = testData.result && testData.result.trim() !== "";
          const isEditing = editingKey === test.key;

          return (
            <div
              key={test.key}
              onClick={(e) => handleItemClick(e, test.key)}
              className={`
                flex items-center justify-between p-4 rounded-2xl
                transition-all duration-200 cursor-pointer
                ${isEditing ? "bg-blue-50 ring-2 ring-blue-300" : "bg-gray-50 hover:bg-gray-100"}
              `}
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-medium">{test.title}</p>
                </div>

                {isEditing ? (
                  <div className="mt-3 space-y-3">
                    {test.key === "mbti" ? (
                      test.pairs.map((pair, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <label className="text-sm font-medium text-gray-700 min-w-35">
                            {test.fields.find(f => f.key === pair.key1)?.label} :
                          </label>
                          <input
                            type="number"
                            value={editValues[pair.key1] || ""}
                            onChange={(e) => {
                              const val1 = parseFloat(e.target.value) || 0;
                              const val2 = parseFloat(editValues[pair.key2]) || 0;
                              if (val1 + val2 <= 100) {
                                handleFieldChange(pair.key1, e.target.value);
                              }
                            }}
                            placeholder="0-100"
                            className="field-input w-24 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                            min="0"
                            max="100"
                          />
                          <label className="text-sm font-medium text-gray-700 min-w-35">
                            {test.fields.find(f => f.key === pair.key2)?.label} :
                          </label>
                          <input
                            type="number"
                            value={editValues[pair.key2] || ""}
                            onChange={(e) => {
                              const val1 = parseFloat(editValues[pair.key1]) || 0;
                              const val2 = parseFloat(e.target.value) || 0;
                              if (val1 + val2 <= 100) {
                                handleFieldChange(pair.key2, e.target.value);
                              }
                            }}
                            placeholder="0-100"
                            className="field-input w-24 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                            min="0"
                            max="100"
                          />
                        </div>
                      ))
                    ) : (
                      test.fields.map((field) => (
                        <div key={field.key} className="flex items-center gap-2">
                          <label className="text-sm font-medium text-gray-700 min-w-35">
                            {field.label}:
                          </label>
                          <input
                            type="number"
                            value={editValues[field.key] || ""}
                            onChange={(e) =>
                              handleFieldChange(field.key, e.target.value)
                            }
                            placeholder="0-100"
                            className="field-input w-32 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                            min="0"
                            max="100"
                          />
                        </div>
                      ))
                    )}
                    <div className="flex gap-2 mt-4">
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
                    <p className="text-sm text-gray-500 mt-1">
                      نتیجه: {testData.result}
                    </p>
                  )
                )}
              </div>

              <div className="flex items-center gap-3 mr-4">
                {hasResult ? (
                  <span className="text-xl font-bold text-green-500">✓</span>
                ) : (
                  <>
                    <button
                      className="test-button px-3 py-1.5 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTestClick(test.link);
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