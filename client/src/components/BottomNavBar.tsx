import React from "react";
import {
  Home as HomeIcon,
  Video,
  User,
  Users,
  Bot,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageProvider";

// Updated with beautiful peach colors - Cache bust 2024-07-18

const iconSize = 18; // Base size for mobile, will be responsive

export default function BottomNavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();

  const navItems = [
    { label: t("nav.home"), icon: HomeIcon, path: "/" },
    {
      label: t("nav.chat"),
      icon: Video,
      path: "/chat",
    },
    { label: "AI Chat", icon: Bot, path: "/ai-chatbot" },
    {
      label: t("nav.friends"),
      icon: Users,
      path: "/friends",
    },
    {
      label: t("nav.profile"),
      icon: User,
      path: "/profile",
    },
  ];

  return (
    <nav
      style={{
        background: "linear-gradient(to right, #ffe4c7, #fff0c4, #ffd1d1)",
        borderTop: "4px solid #ffb574",
        borderRadius: "24px 24px 0 0",
        boxShadow: "0 25px 50px -12px rgba(255, 180, 116, 0.5)",
      }}
      className="fixed bottom-0 left-0 right-0 z-50 backdrop-blur-md flex justify-around items-center h-16 sm:h-18 lg:h-20 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl mx-auto"
    >
      {navItems.map((item) => {
        const IconComponent = item.icon;
        const isActive = location.pathname === item.path;
        return (
          <button
            key={item.label}
            className={`relative flex flex-col items-center justify-center flex-1 py-2 sm:py-3 px-2 focus:outline-none transition-all duration-300 transform active:scale-95 ${
              isActive ? "scale-110 sm:scale-115" : "hover:scale-105"
            }`}
            onClick={() => navigate(item.path)}
          >
            {/* Active background glow */}
            {isActive && (
              <div className="absolute inset-0 bg-gradient-to-br from-peach-300/40 via-coral-200/30 to-blush-300/40 rounded-2xl blur-sm shadow-lg" />
            )}

            {/* Icon container with beautiful styling */}
            <div
              className={`relative p-2 sm:p-2.5 rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-br from-peach-400 via-coral-300 to-blush-400 shadow-lg shadow-peach-300/60"
                  : "bg-gradient-to-br from-gray-100/80 to-gray-200/60 hover:from-peach-200/80 hover:to-coral-200/60"
              }`}
            >
              <IconComponent
                size={18}
                style={{
                  color: isActive ? "#fffcf0" : "#C4C4C4",
                  filter: isActive 
                    ? "drop-shadow(0 1px 2px rgba(255, 122, 43, 0.3))" 
                    : "drop-shadow(0 1px 1px rgba(196, 196, 196, 0.2))",
                }}
                className="sm:w-5 sm:h-5 lg:w-6 lg:h-6 transition-colors duration-300"
              />
            </div>

            {/* Label with beautiful styling */}
            <span
              style={{
                color: isActive ? "#e55a1b" : "#C4C4C4",
                textShadow: isActive 
                  ? "0 1px 2px rgba(255, 154, 86, 0.3)" 
                  : "0 1px 1px rgba(196, 196, 196, 0.2)",
              }}
              className={`text-[10px] sm:text-xs lg:text-sm leading-none mt-1 transition-colors duration-300 ${
                isActive ? "font-extrabold" : "font-medium"
              }`}
            >
              {item.label}
            </span>

            {/* Active indicator dot */}
            {isActive && (
              <div className="absolute -top-1 right-1/2 transform translate-x-1/2 w-2 h-2 bg-gradient-to-r from-coral-400 to-blush-400 rounded-full shadow-md animate-pulse" />
            )}
          </button>
        );
      })}
    </nav>
  );
}
