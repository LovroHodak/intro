import React from "react";
import './logo.css'

export default function Logo() {
  return (
    <div className="relative md:w-24 md:h-24">
      <div className="w-12 h-12 md:w-24 md:h-24 bg-amber-200 absolute top-2 left-2"></div>
      <div className="w-12 h-12  border-2 border-black md:w-24 md:h-24 shrink-0 absolute top-0 left-0"></div>
        <span  className="text-tinny logoFirst absolute top-4 left-4 md:text-2xl font-extrabold">L</span>
        <span  className="text-tinny logoLast absolute top-4 left-8 md:left-16 md:text-2xl font-extrabold">H</span>
    </div>
  );
}


