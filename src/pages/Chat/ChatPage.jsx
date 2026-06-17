import BottomNav from "../BottomNav";

export default function Dashboard() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100 md:pt-16">
        <div className="bg-white p-10 rounded-3xl shadow-lg">
          <h1 className="text-4xl font-bold text-center">
            Dashboard
          </h1>
  
          <p className="text-center mt-4 text-gray-500">
            صفحه chat
          </p>
        </div>
        <BottomNav></BottomNav>
      </div>
    );
  }