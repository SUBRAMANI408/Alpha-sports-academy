"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SportLoading({ sportName }: { sportName?: string } = {}) {
  const params = useParams();
  const sport = sportName || (params?.sport as string) || "generic";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const sportInfo: Record<string, { label: string; color: string }> = {
    football: { label: "Setting Up The Pitch & Drills", color: "text-[#0C6B3F]" },
    badminton: { label: "Preparing Courts & Rackets", color: "text-[#D6A23A]" },
    tennis: { label: "Prepping Clay & Hard Courts", color: "text-[#D6A23A]" },
    cricket: { label: "Prepping Wickets & Bowling Machines", color: "text-blue-500" },
    swimming: { label: "Heating Temperature-Controlled Lanes", color: "text-[#D6A23A]" },
  };

  const currentSport = sport.toLowerCase();
  const info = sportInfo[currentSport] || { label: "Loading Academy Details", color: "text-[#D6A23A]" };

  return (
    <div className="fixed inset-0 bg-black z-[200] flex flex-col items-center justify-center p-4">
      {/* Animated Graphic Container */}
      <div className="relative w-40 h-40 flex items-center justify-center mb-8">

        {/* FOOTBALL ANIMATION */}
        {currentSport === "football" && (
          <div className="relative w-24 h-24 flex items-center justify-center">
            {/* Field background ring */}
            <div className="absolute inset-0 rounded-full border-4 border-dashed border-[#0C6B3F]/20 animate-spin" style={{ animationDuration: "10s" }}></div>
            {/* Bouncing/Spinning Football */}
            <svg viewBox="0 0 100 100" className="w-16 h-16 text-white fill-current animate-bounce duration-500">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="4" />
              {/* Pentagons inside the football */}
              <polygon points="50,30 65,40 59,57 41,57 35,40" fill="currentColor" className="opacity-80" />
              <polygon points="50,30 35,40 20,30 25,12 45,12" fill="none" stroke="currentColor" strokeWidth="3" />
              <polygon points="65,40 80,30 75,12 55,12 50,30" fill="none" stroke="currentColor" strokeWidth="3" />
              <polygon points="59,57 70,75 88,70 80,30 65,40" fill="none" stroke="currentColor" strokeWidth="3" />
              <polygon points="41,57 30,75 12,70 20,30 35,40" fill="none" stroke="currentColor" strokeWidth="3" />
              <polygon points="41,57 59,57 50,80" fill="none" stroke="currentColor" strokeWidth="3" />
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="4" />
            </svg>
          </div>
        )}

        {/* BADMINTON ANIMATION */}
        {currentSport === "badminton" && (
          <div className="w-full h-full relative flex items-center justify-center">
            {/* Racket swing trace */}
            <div className="absolute w-24 h-24 rounded-full border-2 border-dashed border-[#D6A23A]/20 animate-spin"></div>
            {/* Shuttlecock flying in arc */}
            <svg viewBox="0 0 64 64" className="w-16 h-16 text-[#D6A23A] fill-current animate-shuttlecock-arc">
              {/* Shuttlecock cork base */}
              <path d="M20 32 C 20 28, 26 28, 26 32 C 26 36, 20 36, 20 32 Z" />
              {/* Feathers */}
              <path d="M25 32 L44 20 L42 32 L44 44 Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
              <line x1="25" y1="32" x2="35" y2="32" stroke="currentColor" strokeWidth="2" />
              <line x1="25" y1="32" x2="33" y2="26" stroke="currentColor" strokeWidth="2" />
              <line x1="25" y1="32" x2="33" y2="38" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        )}

        {/* TENNIS ANIMATION */}
        {currentSport === "tennis" && (
          <div className="w-32 h-20 relative flex items-center justify-center border-b border-white/20">
            {/* Net */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-zinc-600 border-l border-dashed border-white/40"></div>
            {/* Ball bouncing back and forth */}
            <div className="w-6 h-6 bg-[#CCFF00] rounded-full shadow-[0_0_10px_rgba(204,255,0,0.6)] absolute animate-tennis-bounce"></div>
          </div>
        )}

        {/* CRICKET ANIMATION */}
        {currentSport === "cricket" && (
          <div className="w-32 h-24 relative flex items-end justify-center">
            {/* Three Stumps */}
            <div className="flex gap-4 absolute bottom-0">
              <div className="w-1.5 h-16 bg-orange-850 rounded-t border-t border-[#D6A23A]/30 animate-stump-1"></div>
              <div className="w-1.5 h-16 bg-orange-850 rounded-t border-t border-[#D6A23A]/30 animate-stump-2"></div>
              <div className="w-1.5 h-16 bg-orange-850 rounded-t border-t border-[#D6A23A]/30 animate-stump-3"></div>
            </div>
            {/* Bails */}
            <div className="absolute bottom-[64px] flex gap-1 animate-bails">
              <div className="w-4 h-1 bg-orange-950 rounded"></div>
              <div className="w-4 h-1 bg-orange-950 rounded"></div>
            </div>
            {/* Red Cricket Ball */}
            <div className="absolute w-5 h-5 bg-red-700 border border-red-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.5)] animate-cricket-ball"></div>
          </div>
        )}

        {/* SWIMMING ANIMATION */}
        {currentSport === "swimming" && (
          <div className="w-full h-full relative overflow-hidden flex items-center justify-center">
            {/* Swimming lane lines */}
            <div className="absolute left-0 right-0 top-1/4 h-[1px] bg-white/10"></div>
            <div className="absolute left-0 right-0 bottom-1/4 h-[1px] bg-white/10"></div>
            {/* Small Swimmer silhouette moving across */}
            <div className="absolute left-0 animate-swim-across">
              <svg viewBox="0 0 64 64" className="w-12 h-12 text-[#D6A23A] fill-current">
                <circle cx="48" cy="32" r="4.5" className="text-[#F5D06C]" />
                <path d="M38 27 C34 18, 44 12, 48 12" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" className="animate-swim-arm-1" style={{ transformOrigin: "38px 27px" }} />
                <path d="M38 37 C34 46, 44 52, 48 52" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" className="animate-swim-arm-2" style={{ transformOrigin: "38px 37px" }} />
                <path d="M22 27 C22 27, 36 24, 44 27 C45 32, 45 32, 44 37 C36 40, 22 37, 22 37 Z" className="text-[#0C6B3F]" />
                <path d="M22 29 L12 27 L6 29" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" className="animate-swim-leg-1" style={{ transformOrigin: "22px 29px" }} />
                <path d="M22 35 L12 37 L6 35" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" className="animate-swim-leg-2" style={{ transformOrigin: "22px 35px" }} />
              </svg>
            </div>
          </div>
        )}

        {/* GENERIC LOADING (Fallback) */}
        {!sportInfo[currentSport] && (
          <div className="w-16 h-16 rounded-full border-4 border-[#D6A23A] border-t-transparent animate-spin"></div>
        )}

      </div>

      {/* Loading Text */}
      <div className="text-center space-y-3 max-w-sm">
        <h2 className="text-xl sm:text-2xl font-black uppercase tracking-widest text-white">
          LOADING <span className={info.color}>DETAILS</span>
        </h2>
        <p className="text-xs sm:text-sm text-white/50 uppercase tracking-widest font-semibold animate-pulse">
          {info.label}...
        </p>
      </div>
    </div>
  );
}
