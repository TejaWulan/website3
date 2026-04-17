import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[40vh]">
      <h1 className="text-[65px] font-extrabold font-1">404</h1>
      <p className="text-2xl font-extrabold font-1">Page Not Found</p>
      <a
        href="/"
        className="mt-10 text-2xl bg-slate-700 px-5 text-white py-2 rounded-xl f-1 no-underline transition"
      >
        Back to Home
      </a>
    </div>
  );
}
