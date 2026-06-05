"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PARTICLE_POSITIONS = [
  { left: 5, top: 12 }, { left: 15, top: 85 }, { left: 25, top: 35 },
  { left: 35, top: 60 }, { left: 45, top: 20 }, { left: 55, top: 75 },
  { left: 65, top: 45 }, { left: 75, top: 10 }, { left: 85, top: 55 },
  { left: 95, top: 30 }, { left: 10, top: 90 }, { left: 20, top: 50 },
  { left: 30, top: 15 }, { left: 40, top: 70 }, { left: 50, top: 40 },
  { left: 60, top: 95 }, { left: 70, top: 25 }, { left: 80, top: 65 },
  { left: 90, top: 8 }, { left: 48, top: 52 },
];

const PARTICLE_DELAYS = [
  0, 0.2, 0.4, 0.1, 0.6, 0.3, 0.8, 0.5, 0.7, 0.9,
  0.15, 0.35, 0.55, 0.75, 0.95, 0.05, 0.25, 0.45, 0.65, 0.85,
];

const PARTICLE_DURATIONS = [
  2.5, 3.1, 2.8, 3.4, 2.2, 3.0, 2.6, 3.3, 2.9, 2.4,
  3.2, 2.7, 3.5, 2.3, 2.1, 3.6, 2.0, 3.8, 2.9, 3.1,
];

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Animated Background Particles — fixed positions to avoid hydration mismatch */}
          <div className="absolute inset-0 overflow-hidden">
            {PARTICLE_POSITIONS.map((pos, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  backgroundColor: i % 2 === 0 ? "#D6A23A" : "#0C6B3F",
                  left: `${pos.left}%`,
                  top: `${pos.top}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                }}
                transition={{
                  duration: PARTICLE_DURATIONS[i],
                  repeat: Infinity,
                  delay: PARTICLE_DELAYS[i],
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Spinning Ring */}
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 mb-8">
            {/* Outer ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#D6A23A] border-r-[#D6A23A]"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
            />
            {/* Middle ring */}
            <motion.div
              className="absolute inset-3 rounded-full border-4 border-transparent border-b-[#0C6B3F] border-l-[#0C6B3F]"
              animate={{ rotate: -360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            {/* Inner ring */}
            <motion.div
              className="absolute inset-6 rounded-full border-4 border-transparent border-t-[#FF5722] border-r-[#FF5722]"
              animate={{ rotate: 360 }}
              transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
            />

            {/* Center sports icon — animated football */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotateY: [0, 360],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="drop-shadow-[0_0_15px_rgba(214,162,58,0.8)]"
                >
                  <circle cx="20" cy="20" r="18" fill="#D6A23A" stroke="#F5D06C" strokeWidth="2" />
                  <path d="M20 2 L20 8 M20 32 L20 38 M2 20 L8 20 M32 20 L38 20" stroke="#1A1A1A" strokeWidth="1.5" />
                  <path d="M14 8 L20 14 L26 8" stroke="#1A1A1A" strokeWidth="1.5" fill="none" />
                  <path d="M14 32 L20 26 L26 32" stroke="#1A1A1A" strokeWidth="1.5" fill="none" />
                  <path d="M8 14 L14 20 L8 26" stroke="#1A1A1A" strokeWidth="1.5" fill="none" />
                  <path d="M32 14 L26 20 L32 26" stroke="#1A1A1A" strokeWidth="1.5" fill="none" />
                  <polygon points="20,14 26,18 24,24 16,24 14,18" fill="#1A1A1A" opacity="0.3" />
                </svg>
              </motion.div>
            </div>
          </div>

          {/* Brand Text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-black text-[#D6A23A] uppercase tracking-[0.3em] mb-2 drop-shadow-[0_0_20px_rgba(214,162,58,0.6)]">
              ALPHA
            </h2>
            <p className="text-white/50 text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold">
              Sports Academy
            </p>
          </motion.div>

          {/* Loading bar */}
          <motion.div className="mt-8 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#D6A23A] via-[#0C6B3F] to-[#D6A23A] rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
