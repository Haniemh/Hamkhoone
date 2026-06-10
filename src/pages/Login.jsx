import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

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
            className="w-full p-4 rounded-xl border outline-none"
          />

          <input
            type="password"
            placeholder="رمز عبور"
            className="w-full p-4 rounded-xl border outline-none"
          />
        </div>

        <div className="text-right mt-3">
          <button className="text-indigo-600">
            فراموشی رمز؟
          </button>
        </div>

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