"use client";
import React, { useState, useEffect, useRef } from "react";

const Counter = () => {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const startCounter = () => {
    if (intervalRef.current !== null) return;
    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const stopCounter = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resetCounter = () => {
    stopCounter();
    setTime(0);
  };

  useEffect(() => {
    return () => stopCounter();
  }, []);

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-700 via-black to-blue-900">
      <div className="relative border border-white/20 rounded-3xl shadow-2xl p-10 w-[420px] text-center backdrop-blur-lg bg-white/10">
        
        {/* Title */}
        <p className="font-extrabold text-4xl mb-10 text-white tracking-widest drop-shadow-lg animate-pulse">
          ⏱ Counter App
        </p>

        {/* Counter Display */}
        <div className="text-6xl font-bold rounded-xl p-8 bg-gradient-to-r from-pink-500/30 to-blue-500/30 text-white shadow-inner mb-10 border border-white/20">
          <span className="animate-pulse">
            {hours.toString().padStart(2, "0")} :
            {minutes.toString().padStart(2, "0")} :
            {seconds.toString().padStart(2, "0")}
          </span>
        </div>

        {/* Buttons */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={startCounter}
            className="px-6 py-3 rounded-xl font-semibold text-lg bg-gradient-to-r from-green-400 to-emerald-600 text-white shadow-lg hover:scale-105 transition transform duration-300"
          >
            Start
          </button>
          <button
            onClick={stopCounter}
            className="px-6 py-3 rounded-xl font-semibold text-lg bg-gradient-to-r from-red-400 to-rose-600 text-white shadow-lg hover:scale-105 transition transform duration-300"
          >
            Stop
          </button>
          <button
            onClick={resetCounter}
            className="px-6 py-3 rounded-xl font-semibold text-lg bg-gradient-to-r from-yellow-400 to-amber-600 text-white shadow-lg hover:scale-105 transition transform duration-300"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
