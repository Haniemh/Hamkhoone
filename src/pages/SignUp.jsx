import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/");
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
            className="w-full p-4 rounded-xl border"
          />

          <input
            type="email"
            placeholder="ایمیل"
            className="w-full p-4 rounded-xl border"
          />

          <input
            type="password"
            placeholder="رمز عبور"
            className="w-full p-4 rounded-xl border"
          />
        </div>

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