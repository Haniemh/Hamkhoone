import {
    Brain,
    Heart,
    Shield,
    Users
  } from "lucide-react";
  
  export default function PersonalitySection({
    psychology
  }) {
  
    const items = [
      {
        title: "ویژگی شخصیتی",
        value: psychology.personality,
        icon: Brain
      },
  
      {
        title: "سبک زندگی",
        value: psychology.lifestyle,
        icon: Heart
      },
  
      {
        title: "ارزش‌ها",
        value: psychology.values,
        icon: Shield
      },
  
      {
        title: "حل تعارض",
        value: psychology.conflictStyle,
        icon: Users
      }
    ];
  
    return (
      <div
        className="
          bg-white
          rounded-[28px]
          p-5
        "
      >
        <h2
          className="
            font-bold
            text-lg
            mb-4
          "
        >
          ویژگی‌های شخصیتی
        </h2>
  
        <div className="space-y-3">
  
          {items.map((item) => {
  
            const Icon = item.icon;
  
            return (
              <div
                key={item.title}
                className="
                  bg-indigo-50
                  rounded-2xl
                  p-4
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-2
                    mb-2
                  "
                >
                  <Icon size={18} />
  
                  <span
                    className="
                      font-medium
                    "
                  >
                    {item.title}
                  </span>
                </div>
  
                <p
                  className="
                    text-gray-700
                  "
                >
                  {item.value}
                </p>
              </div>
            );
          })}
  
        </div>
      </div>
    );
  }