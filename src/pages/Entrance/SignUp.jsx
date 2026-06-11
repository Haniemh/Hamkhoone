import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export default function SignUp() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleRegister = () => {
    setMessage("");

    if (!fullName.trim()) {
      setIsSuccess(false);
      setMessage("نام و نام خانوادگی را وارد کنید");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setIsSuccess(false);
      setMessage("ایمیل معتبر نیست");
      return;
    }

    if (password.length < 8) {
      setIsSuccess(false);
      setMessage("رمز عبور باید حداقل ۸ کاراکتر باشد");
      return;
    }

    if (!/[A-Za-z]/.test(password)) {
      setIsSuccess(false);
      setMessage("رمز عبور باید شامل حداقل یک حرف انگلیسی باشد");
      return;
    }

    if (!/\d/.test(password)) {
      setIsSuccess(false);
      setMessage("رمز عبور باید شامل حداقل یک عدد باشد");
      return;
    }

    if (!/^[A-Za-z0-9]+$/.test(password)) {
      setIsSuccess(false);
      setMessage( "رمز عبور فقط می‌تواند شامل حروف انگلیسی و اعداد باشد");
      return;
    }

    if (password !== confirmPassword) {
      setIsSuccess(false);
      setMessage("رمز عبور و تکرار آن یکسان نیستند");
      return;
    }

    setIsSuccess(true);
    setMessage("ثبت نام با موفقیت انجام شد");

    setTimeout(() => {
      navigate("/");
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8">
        <h1 className="text-4xl text-center font-bold mb-8">
          ثبت نام
        </h1>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="نام و نام خانوادگی"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full p-4 rounded-xl border"
          />

          <input
            type="email"
            placeholder="ایمیل"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 rounded-xl border"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="رمز عبور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 rounded-xl border pl-12"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? (
                <Eye size={20} />
              ) : (
                <EyeOff size={20} />
              )}
            </button>
          </div>

          <div className="relative">
            <input
              type={
                showConfirmPassword
                  ? "text"
                  : "password"
              }
              placeholder="تکرار رمز عبور"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
              className="w-full p-4 rounded-xl border pl-12"
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(
                  !showConfirmPassword
                )
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showConfirmPassword ? (
                <Eye size={20} />
              ) : (
                <EyeOff size={20} />
              )}
            </button>
          </div>
        </div>

        {message && (
          <p
            className={`text-sm mt-4 text-center ${
              isSuccess
                ? "text-green-600"
                : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}

        <button
          onClick={handleRegister}
          className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white py-4 rounded-full text-xl"
        >
          ثبت نام
        </button>

        <div className="text-center mt-6">
          <Link
            to="/"
            className="text-indigo-600 font-semibold"
          >
            بازگشت به ورود
          </Link>
        </div>
      </div>
    </div>
  );
}