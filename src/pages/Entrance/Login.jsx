import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  
  const handleLogin = () => {
    setErrorMessage("");
    if (!username.trim()) {
      return setErrorMessage("نام کاربری یا ایمیل را وارد کنید");
    }
    if (!password.trim()) {
      return setErrorMessage("رمز عبور را وارد کنید");
    }
    navigate("/profile");
  };
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8">

        <h1 className="text-4xl text-center font-bold mb-2">
          ورود به پنل کاربری
        </h1>

        <p className="text-center text-gray-400 mb-10 tracking-widest">
          WELCOME BACK
        </p>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="نام کاربری / ایمیل"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-4 rounded-xl border outline-none text-right placeholder:text-right"
          />

          <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="رمز عبور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 rounded-xl border outline-none text-right placeholder:text-right"
          />

          <button
            type="button"
            onClick={() =>setShowPassword(!showPassword)}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                {showPassword ? (
                  <Eye size={20} />) : (<EyeOff size={20} />)}
          </button>

        </div>
      </div>
        <div className="text-right mt-3">
          <button className="text-indigo-600">
            فراموشی رمز؟
          </button>
        </div>

        {errorMessage && (
          <p className="text-red-500 text-sm text-center mt-4">{errorMessage}</p>
        )}

        <button
          onClick={handleLogin}
          className="w-full mt-8 bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-full text-xl transition"
        >
          ورود به حساب
        </button>

        <div className="text-center mt-8">
          <span className="text-gray-500">
            هنوز عضو نشده‌اید؟
          </span>

          <Link
            to="/signup"
            className="text-indigo-600 font-bold mr-2"
          >
            ایجاد حساب جدید
          </Link>
        </div>

      </div>
    </div>
  );
}