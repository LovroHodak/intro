import React from "react";
import './logo.css'

export default function Logo() {
  return (
    <div className="relative w-24 h-24">
      <div className="w-24 h-24 bg-amber-200 absolute top-2 left-2"></div>
      <div className="border-2 border-black w-24 h-24 shrink-0 absolute top-0 left-0"></div>
        <span id='logoFirst' className="absolute top-4 left-4 text-2xl font-extrabold">L</span>
        <span id='logoLast' className="absolute top-4 left-16 text-2xl font-extrabold">H</span>
    </div>
  );
}


