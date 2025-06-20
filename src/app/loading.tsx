"use client";

import React from "react";

export default function Loading() {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center">
      <div className="relative flex items-center justify-center">
        {/* Animated Spinner */}
        <div className="w-16 h-16 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
        {/* Pulse Effect */}
        <div className="absolute w-20 h-20 bg-blue-500/20 rounded-full animate-pulse"></div>
        {/* Loading Text */}
        {/* <div className="absolute text-white text-lg font-semibold tracking-wide animate-pulse">
          Loading...
        </div> */}
      </div>
    </div>
  );
}