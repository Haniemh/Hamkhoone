import { NavLink } from "react-router-dom";
import {
  MessageCircle,
  User,
  DoorOpen,
  Users,
  Inbox,
} from "lucide-react";

export default function BottomNav() {
  const tabs = [
    {
      name: "پروفایل",
      icon: User,
      path: "/profile",
    },
    {
      name: "هم‌اتاقی‌ها",
      icon: Users,
      path: "/roommate-search",
    },
    {
      name: "درخواست‌ها",
      icon: Inbox,
      path: "/request",
      center: true,
    },
    {
      name: "اتاق‌ها",
      icon: DoorOpen,
      path: "/room-search",
    },
    {
      name: "چت‌ها",
      icon: MessageCircle,
      path: "/chats",
    },
  ];

  return (
    <div className="fixed bottom-4 left-4 right-4 max-w-md mx-auto bg-white rounded-[30px] shadow-xl p-4 z-50">
      <div className="flex justify-around items-center">

        {tabs.map((tab) => {
          const Icon = tab.icon;

          if (tab.center) {
            return (
              <NavLink key={tab.path} to={tab.path}>
                {({ isActive }) => (
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center -mt-10 shadow-lg transition ${
                      isActive ? "bg-indigo-700 text-white" : "bg-indigo-600 text-white"
                    }`}
                  >
                    <Icon size={26} />
                  </div>
                )}
              </NavLink>
            );
          }

          return (
            <NavLink key={tab.path} to={tab.path}>
              {({ isActive }) => (
                <div
                  className={`flex flex-col items-center text-xs transition ${
                    isActive ? "text-indigo-600 font-bold" : "text-gray-500"
                  }`}
                >
                  <Icon size={22} />
                  <span className="mt-1">{tab.name}</span>
                </div>
              )}
            </NavLink>
          );
        })}

      </div>
    </div>
  );
}