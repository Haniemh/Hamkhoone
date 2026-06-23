import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../lib/api";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    setMessage("");

    if (!username.trim() || !password) {
      setMessage("نام کاربری و رمز عبور را وارد کنید");
      return;
    }

    try {
      setIsLoading(true);
      await login(username.trim(), password);
      navigate("/profile");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "ورود ناموفق بود");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form onSubmit={handleLogin} className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8">

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
            onChange={(event) => setUsername(event.target.value)}
            className="w-full p-4 rounded-xl border outline-none"
          />

          <input
            type="password"
            placeholder="رمز عبور"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full p-4 rounded-xl border outline-none"
          />
        </div>

        <div className="text-right mt-3">
          <button className="text-indigo-600">
            فراموشی رمز؟
          </button>
        </div>

        {message && <p className="mt-4 text-center text-sm text-red-500">{message}</p>}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full mt-8 bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-full text-xl transition"
        >
          {isLoading ? "در حال ورود..." : "ورود به حساب"}
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

      </form>
    </div>
  );
}
