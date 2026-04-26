// userInfo.js - Fixed version
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// KHÔNG cần import nữa, dùng đường dẫn từ public
const myAvatar = "https://www.image2url.com/r2/default/images/1776533330193-7460aca5-3c63-4d76-b386-7a94f8ced359.jpeg"; // Ảnh ngẫu nhiên // Ảnh đặt trong public/images/

function UserInfo() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const personalInfo = {
    name: "Ethpr",
    fullName: "Hai Dang",
    avatar: myAvatar,
    bio: "I am hai dang (200x), I'm a student, designer, and software developer with a strong interest in data processing. I enjoy building digital products, designing clean and functional interfaces, and exploring how systems work behind the scenes. What motivates me the most is turning ideas into real, working solutions that are both practical and useful, while continuously learning new skills and improving my projects step by step.",
    location: "Viet Tri, Phu Tho, Vietnam",
    status: "Currently active 🟢",
  };

  return (
    <div className="relative w-full">
      <div className="w-full">
        <div className="md:flex gap-6 items-center">
          {/* Avatar */}
          <div
            className="relative md:m-0 mb-5 mx-auto min-w-32 size-32 cursor-pointer group"
            onClick={() => setIsPreviewOpen(true)}
            role="button"
            aria-label="Open avatar preview"
          >
            <img
              className="rounded-full w-full h-full object-cover border-4 border-slate-700 dark:border-slate-600 transition-transform duration-300 group-hover:scale-105"
              src={personalInfo.avatar}
              alt="Avatar"
              onError={(e) => {
                // Nếu ảnh lỗi, dùng ảnh mặc định
                e.target.src = "https://via.placeholder.com/128?text=Avatar";
              }}
            />
            <div className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-xs font-semibold">Click to view</span>
            </div>
          </div>

          {/* User info */}
          <div className="text-gray-900 dark:text-gray-100 text-center md:text-left">
            <h2 className="font-semibold text-2xl">
              Hey, I'm{" "}
              <span className="text-slate-700 dark:text-slate-200 font-bold">
                {personalInfo.name}
              </span>{" "}
              👋
            </h2>
            
            <div className="w-full h-1 bg-gradient-to-r from-slate-500 to-slate-700 dark:from-slate-400 dark:to-slate-600 rounded-sm my-2" />
            
            <div className="font-semibold text-justify leading-relaxed">
              {personalInfo.bio}{" "}
              <Link 
                className="text-slate-600 dark:text-slate-400 underline hover:text-slate-800 dark:hover:text-slate-200 transition-colors duration-200 inline-flex items-center gap-1" 
                to="/skills"
              >
                Wanna see more?
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>{" "}
              ✎
            </div>
          </div>
        </div>

        {/* Status */}
        <div className="font-semibold text-gray-900 dark:text-gray-100 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <p>{personalInfo.status}</p>
          </div>
        </div>

        {/* Location */}
        <div className="mt-1">
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 2a8 8 0 0 1 6.6 12.6l-.1.1-.6.7-5.1 6.2a1 1 0 0 1-1.6 0L6 15.3l-.3-.4-.2-.2v-.2A8 8 0 0 1 11.8 2Zm3 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-sm">{personalInfo.location}</p>
          </div>
        </div>
      </div>

      {/* Modal preview */}
      <AnimatePresence>
        {isPreviewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10001] flex items-end sm:items-center justify-center bg-black/90 backdrop-blur-md p-0 sm:p-4"
            onClick={() => setIsPreviewOpen(false)}
          >
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-sm w-full bg-white dark:bg-slate-900 rounded-t-[2.5rem] sm:rounded-[2.5rem] p-4 sm:p-5 shadow-[0_0_50px_rgba(0,0,0,0.3)] border-t sm:border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-12 h-1 bg-slate-200 dark:bg-slate-700 rounded-full mx-auto mb-6 sm:hidden opacity-50" />

              <div className="relative group aspect-square w-full overflow-hidden rounded-[2rem] bg-slate-100 dark:bg-slate-800 shadow-inner border border-slate-200 dark:border-slate-800">
                <img
                  src={personalInfo.avatar}
                  alt="Avatar Preview"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="mt-5 pb-2 text-center">
                <p className="text-xl font-black text-slate-800 dark:text-white pb-1 tracking-tight">
                  {personalInfo.fullName}
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-xs">
                  @{personalInfo.name}
                </p>
              </div>

              <button
                onClick={() => setIsPreviewOpen(false)}
                className="mt-6 w-full py-3 bg-slate-900 dark:bg-white text-white dark:text-black font-bold rounded-2xl hover:opacity-90 active:scale-95 transition-all text-sm uppercase tracking-widest shadow-xl sm:hidden"
              >
                Đóng
              </button>

              <button
                onClick={() => setIsPreviewOpen(false)}
                className="hidden sm:flex absolute -top-4 -right-4 w-10 h-10 bg-white dark:bg-slate-800 shadow-xl rounded-full items-center justify-center text-slate-800 dark:text-white font-bold z-50 border border-slate-100 dark:border-slate-800 hover:rotate-90 transition-all active:scale-90"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default UserInfo;