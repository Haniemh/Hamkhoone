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
    <>
      {/* SmartPhone */}صفحه 
      <div className="md:hidden fixed bottom-4 left-4 right-4 max-w-md mx-auto bg-white rounded-[30px] shadow-xl p-4 z-50">
        <div className="flex justify-around items-end">
          {tabs.map((tab) => {
            const Icon = tab.icon;

            if (tab.center) {
              return (
                <NavLink key={tab.path} to={tab.path}>
                  {({ isActive }) => (
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center -mt-10 shadow-lg transition ${
                          isActive ? "bg-indigo-700 text-white" : "bg-indigo-600 text-white"
                        }`}
                      >
                        <Icon size={26} />
                      </div>
                      <span
                        className={`text-xs mt-1 transition ${
                          isActive ? "text-indigo-600 font-bold" : "text-gray-500"
                        }`}
                      >
                        {tab.name}
                      </span>
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

      {/* Desktop */}
      <div className="hidden md:block fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center gap-8 h-16">
            {tabs.map((tab) => {
              const Icon = tab.icon;

              if (tab.center) {
                return (
                  <NavLink key={tab.path} to={tab.path}>
                    {({ isActive }) => (
                      <div className="flex flex-col items-center">
                        <div
                          className={`flex items-center gap-2 px-4 py-1.5 rounded-full transition ${
                            isActive
                              ? "bg-indigo-600 text-white"
                              : "text-gray-500 hover:text-indigo-600"
                          }`}
                        >
                          <Icon size={20} />
                          <span className="text-sm font-medium">{tab.name}</span>
                        </div>
                      </div>
                    )}
                  </NavLink>
                );
              }

              return (
                <NavLink key={tab.path} to={tab.path}>
                  {({ isActive }) => (
                    <div
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition ${
                        isActive
                          ? "text-indigo-600 font-bold"
                          : "text-gray-500 hover:text-indigo-600"
                      }`}
                    >
                      <Icon size={20} />
                      <span className="text-sm font-medium">{tab.name}</span>
                    </div>
                  )}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}