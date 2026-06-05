"use client";

import { useEffect, useState } from "react";

interface RunnerProps {
  lane: 1 | 2;
  direction: "up" | "down";
  speed: number;
  delay?: number;
}

function Runner({ lane, direction, speed, delay = 0 }: RunnerProps) {
  const laneOffsets = {
    1: "left-[8px]",  // Center of lane 1 (0-40px)
    2: "left-[48px]", // Center of lane 2 (40-80px)
  };

  const animationClass = direction === "down" ? "animate-run-down-slow" : "animate-run-up-slow";

  return (
    <div
      className={`absolute ${laneOffsets[lane]} ${animationClass} z-40 pointer-events-none`}
      style={{
        animationDuration: `${speed}s`,
        animationDelay: `${delay}s`,
      }}
    >
      <svg
        viewBox="0 0 64 64"
        className="w-6 h-6 sm:w-7 sm:h-7 text-[#D6A23A] drop-shadow-[0_0_8px_rgba(214,162,58,0.6)] fill-current"
      >
        {/* Head */}
        <circle cx="36" cy="14" r="4.5" className="runner-body" />

        {/* Left Arm (Back Arm) */}
        <g className="runner-arm-left" style={{ transformOrigin: "28px 20px" }}>
          <path d="M28 20 L20 28 L14 26" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none" className="opacity-50" />
        </g>

        {/* Left Leg (Back Leg) */}
        <g className="runner-leg-left" style={{ transformOrigin: "28px 32px" }}>
          <path d="M28 32 L20 44 L28 52" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" className="opacity-50" />
        </g>

        {/* Torso (leaning forward) */}
        <path d="M26 20 C26 20 32 18 36 22 C40 26 34 34 30 34 C26 34 24 28 26 20 Z" className="runner-body" />

        {/* Right Leg (Front Leg) */}
        <g className="runner-leg-right" style={{ transformOrigin: "32px 32px" }}>
          <path d="M32 32 L40 42 L32 54" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>

        {/* Right Arm (Front Arm) */}
        <g className="runner-arm-right" style={{ transformOrigin: "32px 20px" }}>
          <path d="M32 20 L38 28 L46 26" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>
      </svg>
    </div>
  );
}

export default function RunningTrack() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* LEFT RUNNING TRACK */}
      <div className="fixed left-0 top-0 bottom-0 w-[80px] bg-[#140b09] border-r-4 border-[#D6A23A]/30 z-[90] hidden xl:block select-none overflow-hidden shadow-[10px_0_20px_rgba(0,0,0,0.8)]">
        {/* Lane dividers */}
        <div className="absolute top-0 bottom-0 left-[40px] w-0.5 border-l border-dashed border-[#D6A23A]/15"></div>

        {/* Track Markings: Lane Numbers */}
        <div className="absolute top-24 left-0 right-0 flex justify-around text-[10px] font-black text-[#D6A23A]/20 uppercase tracking-widest">
          <span>1</span>
          <span>2</span>
        </div>
        <div className="absolute top-1/2 left-0 right-0 flex justify-around text-[10px] font-black text-[#D6A23A]/20 uppercase tracking-widest -translate-y-1/2">
          <span>1</span>
          <span>2</span>
        </div>
        <div className="absolute bottom-24 left-0 right-0 flex justify-around text-[10px] font-black text-[#D6A23A]/20 uppercase tracking-widest">
          <span>1</span>
          <span>2</span>
        </div>

        {/* Runners */}
        <Runner lane={1} direction="up" speed={40} delay={0} />
        <Runner lane={2} direction="up" speed={45} delay={-15} />
      </div>

      {/* RIGHT RUNNING TRACK */}
      <div className="fixed right-0 top-0 bottom-0 w-[80px] bg-[#140b09] border-l-4 border-[#D6A23A]/30 z-[90] hidden xl:block select-none overflow-hidden shadow-[-10px_0_20px_rgba(0,0,0,0.8)]">
        {/* Lane dividers */}
        <div className="absolute top-0 bottom-0 left-[40px] w-0.5 border-l border-dashed border-[#D6A23A]/15"></div>

        {/* Track Markings: Lane Numbers */}
        <div className="absolute top-24 left-0 right-0 flex justify-around text-[10px] font-black text-[#D6A23A]/20 uppercase tracking-widest">
          <span>2</span>
          <span>1</span>
        </div>
        <div className="absolute top-1/2 left-0 right-0 flex justify-around text-[10px] font-black text-[#D6A23A]/20 uppercase tracking-widest -translate-y-1/2">
          <span>2</span>
          <span>1</span>
        </div>
        <div className="absolute bottom-24 left-0 right-0 flex justify-around text-[10px] font-black text-[#D6A23A]/20 uppercase tracking-widest">
          <span>2</span>
          <span>1</span>
        </div>

        {/* Runners */}
        <Runner lane={1} direction="down" speed={38} delay={-10} />
        <Runner lane={2} direction="down" speed={50} delay={-5} />
      </div>
    </>
  );
}
