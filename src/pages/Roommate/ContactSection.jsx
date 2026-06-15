import {
    Mail,
    Phone,
    CheckCircle,
    XCircle
  } from "lucide-react";
  
  export default function ContactSection({
    roommate
  }) {
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
          اطلاعات تماس
        </h2>
  
        <div className="space-y-3">
  
          <div
            className="
              bg-gray-50
              rounded-2xl
              p-4
              flex
              justify-between
              items-center
            "
          >
            <div className="flex gap-2 items-center">
              <Mail size={18} />
  
              <span>
                {roommate.email}
              </span>
            </div>
  
            {
              roommate.emailVerified
                ? (
                  <CheckCircle
                    className="
                      text-green-500
                    "
                  />
                )
                : (
                  <XCircle
                    className="
                      text-red-500
                    "
                  />
                )
            }
  
          </div>
  
          <div
            className="
              bg-gray-50
              rounded-2xl
              p-4
              flex
              justify-between
              items-center
            "
          >
            <div className="flex gap-2 items-center">
              <Phone size={18} />
  
              <span>
                {roommate.phone}
              </span>
            </div>
  
            {
              roommate.phoneVerified
                ? (
                  <CheckCircle
                    className="
                      text-green-500
                    "
                  />
                )
                : (
                  <XCircle
                    className="
                      text-red-500
                    "
                  />
                )
            }
  
          </div>
  
        </div>
      </div>
    );
  }