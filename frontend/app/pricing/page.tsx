"use client";

import { Check, ChevronRight, Star, Dumbbell, Users, Flag, Key, Award, Shield, Sparkles, UserPlus, Zap } from "lucide-react";
import Link from "next/link";

// Custom checkmarks and crosses matching the image aesthetics
const CheckMark = () => (
  <svg className="w-5 h-5 text-green-500 stroke-[3px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const CrossMark = () => (
  <svg className="w-5 h-5 text-white/20 stroke-[2.5px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const TwoCheckMarks = () => (
  <div className="flex gap-[1px] text-green-500">
    <CheckMark />
    <CheckMark />
  </div>
);

const ThreeCheckMarks = () => (
  <div className="flex gap-[1px] text-green-500">
    <CheckMark />
    <CheckMark />
    <CheckMark />
  </div>
);

const FourCheckMarks = () => (
  <div className="flex gap-[1px] text-green-500">
    <CheckMark />
    <CheckMark />
    <CheckMark />
    <CheckMark />
  </div>
);

const InfinitySymbol = ({ color = "text-[#D6A23A]" }: { color?: string }) => (
  <div className="flex items-center gap-1">
    <span className={`text-[10px] sm:text-xs font-black uppercase ${color} tracking-wider`}>Unlimited</span>
    <svg className={`w-4 h-4 sm:w-5 sm:h-5 ${color}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 100 8c2 0 4-1.33 6-4zm0 0c2 2.67 4 4 6 4a4 4 0 100-8c-2 0-4 1.33-6 4z" />
    </svg>
  </div>
);

const KeyCheckmark = () => (
  <div className="flex items-center gap-1 bg-yellow-500/10 border border-yellow-500/20 px-2 py-0.5 rounded">
    <CheckMark />
    <svg className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 11-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
    </svg>
  </div>
);

const DnaCheckmark = () => (
  <div className="flex items-center gap-2">
    <CheckMark />
    <svg className="w-6 h-6 text-[#D6A23A] opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4.5 10.5C4.5 5.5 8 4.5 12 4.5s7.5 1 7.5 6M4.5 13.5c0 5 3.5 6 7.5 6s7.5-1 7.5-6" strokeDasharray="2 2" />
      <path d="M12 4.5v15M8 6v12M16 6v12" />
      <circle cx="12" cy="4.5" r="1.5" fill="#D6A23A" />
      <circle cx="12" cy="19.5" r="1.5" fill="#0C6B3F" />
    </svg>
  </div>
);

// Payment Group Logo Components
const GPayLogo = () => (
  <div className="w-[30px] h-[18px] bg-white rounded flex items-center justify-center p-[2px] shrink-0">
    <svg viewBox="0 0 40 16" className="w-full h-full">
      <path d="M6.5 11c0 .24-.02.46-.06.68H3.9v-1.3H5.4c-.06.35-.26.64-.55.83v.7h.9c.52-.48.83-1.19.83-2.14z" fill="#4285F4"/>
      <path d="M3.9 13.7c.72 0 1.33-.24 1.77-.65L4.77 12.3c-.25.17-.57.27-.87.27-.67 0-1.25-.45-1.45-1.07H1.53v.7c.45.9 1.37 1.5 2.37 1.5z" fill="#34A853"/>
      <path d="M2.45 11.5c-.05-.16-.08-.33-.08-.5s.03-.34.08-.5V9.8H1.53c-.19.38-.29.8-.29 1.2s.1 1 .29 1.38l.92-.72z" fill="#FBBC05"/>
      <path d="M3.9 9.3c.39 0 .74.13 1.02.4L5.7 8.9C4.9 8.2 3.9 7.8 2.3 7.8 1.3 7.8.4 8.4 0 9.3l.92.72c.2-.6.78-1 .98-1z" fill="#EA4335"/>
      <text x="9" y="11.5" fill="#5F6368" fontSize="6.5" fontWeight="900" fontFamily="sans-serif">Pay</text>
    </svg>
  </div>
);

const PhonePeLogo = () => (
  <div className="w-[30px] h-[18px] bg-[#5F259F] rounded flex items-center justify-center shrink-0 border border-[#7B3FBC]">
    <span className="text-white text-[9px] font-black leading-none font-sans">पे</span>
  </div>
);

const VisaLogo = () => (
  <div className="w-[30px] h-[18px] bg-[#1A1F71] rounded flex items-center justify-center shrink-0 border border-blue-900">
    <span className="text-white text-[7px] font-black italic tracking-wider">VISA</span>
  </div>
);

const MastercardLogo = () => (
  <div className="w-[30px] h-[18px] bg-black rounded flex items-center justify-center shrink-0 border border-neutral-800">
    <svg viewBox="0 0 24 16" className="w-5 h-3">
      <circle cx="8" cy="8" r="6" fill="#EB001B" />
      <circle cx="16" cy="8" r="6" fill="#FF5F00" fillOpacity="0.8" />
    </svg>
  </div>
);

const SimplLogo = () => (
  <div className="w-[30px] h-[18px] bg-[#00D2C4] rounded flex items-center justify-center shrink-0">
    <span className="text-white text-[6px] font-black tracking-tighter uppercase">Simpl</span>
  </div>
);

const BitcoinLogo = () => (
  <div className="w-[30px] h-[18px] bg-[#F7931A] rounded flex items-center justify-center shrink-0">
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-white fill-current">
      <path d="M22.5 10.3c.3-.8.1-1.4-.5-1.8-.4-.3-1.1-.5-1.9-.5h-2.9v4.5h2.8c.8 0 1.6-.2 2-.5.5-.3.7-.9.5-1.7zm.8 4.2c.2-.9-.1-1.6-.8-2-.5-.3-1.3-.4-2.1-.4h-3.2v4.8h3.2c.9 0 1.8-.1 2.3-.5.4-.3.8-.9.6-1.9zM18 6.5h1.5v1.2h-1.5V6.5zm0 10.7h1.5v1.3h-1.5v-1.3zm-3-9.5h5c1 0 2 .2 2.6.8.6.6.9 1.4.7 2.3-.1.9-.7 1.5-1.5 1.8.9.3 1.6 1 1.4 2.2-.2 1.3-1.1 2.1-2.5 2.1h-5.7V7.7z" />
    </svg>
  </div>
);

const EthereumLogo = () => (
  <div className="w-[30px] h-[18px] bg-[#141414] rounded border border-neutral-800 flex items-center justify-center shrink-0">
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2L6 11l6 3 6-3-6-9zm0 20l-6-8 6 3 6-3-6 8z" />
    </svg>
  </div>
);

const ExclusiveCardLogo = () => (
  <div className="w-[30px] h-[18px] bg-gradient-to-r from-black via-neutral-900 to-black rounded border border-[#D6A23A]/50 flex items-center justify-between p-[1.5px] shrink-0 relative overflow-hidden">
    <div className="w-1 h-1 bg-[#D6A23A]/80 rounded-sm absolute left-[2px] top-[2px]"></div>
    <div className="w-1.5 h-[1px] bg-[#D6A23A]/30 absolute left-[2px] top-[7px]"></div>
    <div className="w-1 h-1 rounded-full border border-[#D6A23A]/60 absolute right-[2px] bottom-[2px]"></div>
  </div>
);

const SbiLogo = () => (
  <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#00a2e8" />
    <circle cx="12" cy="12" r="3.5" fill="#12161A" />
    <rect x="11" y="12" width="2" height="8" fill="#12161A" />
  </svg>
);

const HdfcLogo = () => (
  <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="3" fill="#1C3F94" />
    <rect x="4" y="9" width="16" height="6" fill="white" />
    <rect x="8" y="4" width="8" height="16" fill="white" />
    <circle cx="12" cy="12" r="3" fill="#E31E24" />
  </svg>
);

const IciciLogo = () => (
  <div className="w-4.5 h-4.5 bg-[#f58220] rounded-sm flex items-center justify-center text-white text-[8px] font-black leading-none font-serif shrink-0">
    i
  </div>
);

const DebitCardLogo = () => (
  <div className="w-[30px] h-[18px] bg-blue-700 rounded border border-blue-500 flex items-center justify-between p-[1.5px] shrink-0 relative overflow-hidden">
    <div className="w-1.5 h-1 bg-yellow-400 rounded-sm absolute left-[2px] top-[2px]"></div>
    <div className="flex gap-[0.5px] absolute right-[2px] bottom-[2px]">
      <div className="w-2 h-2 rounded-full bg-[#EB001B]"></div>
      <div className="w-2 h-2 rounded-full bg-[#FF5F00] -ml-1 opacity-80"></div>
    </div>
  </div>
);

// Mini Bar Graph Component
interface MiniBarGraphProps {
  level: "low" | "medium" | "unlimited";
}

function MiniBarGraph({ level }: MiniBarGraphProps) {
  const barsCount = 5;
  let highlighted = 0;
  let colorClass = "";
  let leftLabel = "";
  let rightLabel = "";

  if (level === "low") {
    highlighted = 2;
    colorClass = "bg-white";
    leftLabel = "Low";
    rightLabel = "5 hrs/wk";
  } else if (level === "medium") {
    highlighted = 4;
    colorClass = "bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]";
    leftLabel = "Medium";
    rightLabel = "10 hrs/wk";
  } else {
    highlighted = 5;
    colorClass = "bg-gradient-to-r from-[#D6A23A] to-[#0C6B3F]";
    leftLabel = "Unlimited";
    rightLabel = "hrs/wk";
  }

  return (
    <div className="flex flex-col items-end shrink-0">
      <div className="flex items-end gap-[3px] h-6">
        {[...Array(barsCount)].map((_, i) => {
          const height = 8 + i * 4; // 8, 12, 16, 20, 24 px
          const isHighlighted = i < highlighted;
          return (
            <div
              key={i}
              className={`w-[6px] rounded-[1px] transition-all duration-300 ${
                isHighlighted ? colorClass : "bg-white/10"
              }`}
              style={{ height: `${height}px` }}
            />
          );
        })}
      </div>
      <div className="flex justify-between w-24 text-[8px] text-white/40 mt-1 uppercase font-black tracking-wider">
        <span>{leftLabel}</span>
        <span>{rightLabel}</span>
      </div>
    </div>
  );
}

// Table Row Component
interface FeatureRowProps {
  icon: React.ComponentType<any>;
  label: string;
  sublabel?: string;
  rightElement: React.ReactNode;
}

function FeatureRow({ icon: Icon, label, sublabel, rightElement }: FeatureRowProps) {
  return (
    <div className="flex items-center justify-between py-3.5 px-6 border-b border-white/5 last:border-0 hover:bg-white/[0.01] transition-colors">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
          <Icon className="w-4 h-4 text-white/70" />
        </div>
        <div>
          <span className="text-xs sm:text-sm font-bold text-white/90 tracking-wide uppercase">{label}</span>
          {sublabel && <span className="text-[9px] text-white/40 block font-semibold uppercase tracking-wider">{sublabel}</span>}
        </div>
      </div>
      <div className="flex items-center shrink-0">
        {rightElement}
      </div>
    </div>
  );
}

// Sports watermarks for headers
const TennisRacketWatermark = () => (
  <svg viewBox="0 0 100 100" className="absolute top-3 right-3 w-22 h-22 text-white/[0.03] pointer-events-none transform rotate-[45deg]" fill="none" stroke="currentColor" strokeWidth="1.2">
    <ellipse cx="50" cy="35" rx="20" ry="25" />
    <path d="M40 15v40M45 11v48M50 10v50M55 11v48M60 15v40M30 30h40M27 35h46M29 40h42M32 45h36M35 25h30" strokeWidth="0.6" />
    <path d="M50 60v25" strokeWidth="3" />
    <path d="M45 85h10v5H45z" fill="currentColor" />
  </svg>
);

const CricketBatWatermark = () => (
  <svg viewBox="0 0 100 100" className="absolute top-3 right-3 w-22 h-22 text-white/[0.03] pointer-events-none transform rotate-[-25deg]" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M65 15l-5 5L35 45" strokeWidth="4" strokeLinecap="round" />
    <path d="M35 45l-10 10-5 15v10c0 3 2 5 5 5h5c3 0 5-2 5-5V75L45 55z" fill="currentColor" fillOpacity="0.1" strokeWidth="1.5" />
    <circle cx="75" cy="75" r="8" fill="currentColor" fillOpacity="0.2" strokeWidth="1.5" />
    <path d="M68 71c3 1 5 4 5 7" strokeWidth="0.8" />
  </svg>
);

const SunWavesWatermark = () => (
  <svg viewBox="0 0 100 100" className="absolute top-3 left-3 w-16 h-16 text-white/[0.03] pointer-events-none" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M30 65c10-5 15 5 25 0s15 5 25 0" strokeWidth="1.5" />
    <path d="M35 72c8-4 12 4 20 0s12 4 20 0" strokeWidth="1.5" />
    <circle cx="50" cy="45" r="15" fill="currentColor" fillOpacity="0.1" strokeWidth="1.5" />
    <path d="M50 20v5M32 32l4 4M20 50h5M68 32l-4 4M80 50h-5" strokeWidth="1.5" />
  </svg>
);

const SwimmingGogglesWatermark = () => (
  <svg viewBox="0 0 100 100" className="absolute top-3 right-3 w-22 h-22 text-white/[0.03] pointer-events-none" fill="none" stroke="currentColor" strokeWidth="1.2">
    <circle cx="35" cy="50" r="12" fill="currentColor" fillOpacity="0.1" strokeWidth="1.5" />
    <path d="M28 50h14" strokeWidth="1" />
    <circle cx="65" cy="50" r="12" fill="currentColor" fillOpacity="0.1" strokeWidth="1.5" />
    <path d="M58 50h14" strokeWidth="1" />
    <path d="M47 48c3-2 3-2 6 0" strokeWidth="2" />
    <path d="M23 50H15c-3 0-5 3-5 6v5" strokeWidth="1.5" />
    <path d="M77 50h8c3 0 5 3 5 6v5" strokeWidth="1.5" />
  </svg>
);

export default function PricingPage() {
  return (
    <div className="bg-black text-white pt-32 min-h-screen">
      {/* HERO BANNER */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10" 
          style={{ 
            backgroundImage: "url('/stadium_raw.png')",
            filter: "grayscale(100%) sepia(100%) hue-rotate(5deg) saturate(200%) brightness(0.4)"
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D6A23A]/10 border border-[#D6A23A]/30 rounded-full mb-6">
            <span className="w-2 h-2 bg-[#D6A23A] rounded-full animate-pulse"></span>
            <span className="text-[#D6A23A] font-bold text-sm uppercase tracking-wider">Investment In Excellence</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-tight mb-6">
            <span className="text-white">OUR </span>
            <span className="text-[#D6A23A]">PRICING</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">Flexible plans designed to fit your training goals and budget.</p>
        </div>
      </section>

      {/* PRICING TABLE GRIDS */}
      <section className="py-16 sm:py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
            
            {/* MONTHLY - STARTER LEVEL */}
            <div className="bg-gradient-to-b from-[#12161A] to-[#0B0C0E] rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 flex flex-col justify-between overflow-hidden group">
              <div className="relative p-6 sm:p-8 border-b border-white/5 overflow-hidden">
                <TennisRacketWatermark />
                <h3 className="text-lg font-black uppercase tracking-wider text-white/50 mb-2">STARTER LEVEL</h3>
                <div className="flex items-baseline gap-1.5 mb-2">
                  <span className="text-3xl sm:text-4xl font-black text-white">₹3,500</span>
                  <span className="text-white/40 text-xs sm:text-sm font-bold"> / Month</span>
                </div>
                <p className="text-white/60 text-xs sm:text-sm font-semibold tracking-wide uppercase">Essential Access</p>
                <p className="text-white/40 text-xs mt-1">Perfect for trying out our programs</p>
              </div>

              {/* Grid Features */}
              <div className="flex-1 bg-black/40">
                <FeatureRow
                  icon={Award}
                  label="Core Sport Access"
                  sublabel="(Hours/Week)"
                  rightElement={<MiniBarGraph level="low" />}
                />
                <FeatureRow
                  icon={Flag}
                  label="Access to Courts"
                  rightElement={<CheckMark />}
                />
                <FeatureRow
                  icon={Users}
                  label="Group Coaching Sessions"
                  sublabel="(per month)"
                  rightElement={<CheckMark />}
                />
                <FeatureRow
                  icon={Dumbbell}
                  label="Gym Access"
                  rightElement={<CrossMark />}
                />
                <FeatureRow
                  icon={Key}
                  label="Priority Booking"
                  rightElement={<CrossMark />}
                />
                <FeatureRow
                  icon={Zap}
                  label="Specialty Training"
                  sublabel="(e.g., Nutrition)"
                  rightElement={<CrossMark />}
                />
                <FeatureRow
                  icon={UserPlus}
                  label="Guest Passes"
                  sublabel="(per quarter)"
                  rightElement={<span className="text-sm font-black text-white/40 mr-1">0</span>}
                />
              </div>

              {/* Payment Methods & CTA */}
              <div className="p-6 sm:p-8 bg-black/80 border-t border-white/5 space-y-6">
                {/* Payment Options Row */}
                <div className="grid grid-cols-3 gap-2 text-center pt-2">
                  <div className="space-y-2">
                    <span className="text-[8px] font-black uppercase text-white/40 tracking-widest block">UPI</span>
                    <div className="flex justify-center gap-1.5">
                      <GPayLogo />
                      <PhonePeLogo />
                    </div>
                    <span className="text-[7px] text-white/30 block tracking-tight leading-none mt-1">(Google Pay, PhonePe)</span>
                  </div>
                  <div className="space-y-2 border-x border-white/5 px-2">
                    <span className="text-[8px] font-black uppercase text-white/40 tracking-widest block">Netbanking</span>
                    <div className="flex justify-center gap-1">
                      <SbiLogo />
                      <HdfcLogo />
                      <IciciLogo />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <span className="text-[8px] font-black uppercase text-white/40 tracking-widest block">Debit Card</span>
                    <div className="flex justify-center">
                      <DebitCardLogo />
                    </div>
                  </div>
                </div>

                {/* Choose Button */}
                <Link
                  href="/join"
                  target="_blank"
                  className="w-full py-4 bg-white text-black font-black uppercase text-center rounded-xl tracking-wider hover:bg-neutral-200 hover:scale-[1.02] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                >
                  CHOOSE STARTER <ChevronRight className="w-4 h-4 stroke-[3px]" />
                </Link>
              </div>
            </div>

            {/* QUARTERLY - PRO LEVEL */}
            <div className="bg-gradient-to-b from-[#14202C] to-[#0A1016] rounded-3xl border border-blue-500/20 hover:border-blue-500/40 shadow-[0_0_40px_rgba(59,130,246,0.1)] transition-all duration-500 flex flex-col justify-between overflow-hidden relative group scale-[1.02] z-10">
              
              {/* Popular Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[9px] font-black uppercase px-4 py-1.5 rounded-full flex items-center gap-1 shadow-lg tracking-widest border border-blue-400/40">
                <Star className="w-3 h-3 fill-white" /> MOST POPULAR
              </div>

              <div className="relative p-6 sm:p-8 border-b border-white/5 overflow-hidden pt-8">
                <CricketBatWatermark />
                <h3 className="text-lg font-black uppercase tracking-wider text-blue-400 mb-2">PRO LEVEL</h3>
                <div className="flex items-baseline gap-1.5 mb-2">
                  <span className="text-3xl sm:text-4xl font-black text-white">₹9,000</span>
                  <span className="text-white/40 text-xs sm:text-sm font-bold"> / 3 Months</span>
                </div>
                <p className="text-blue-400/80 text-xs sm:text-sm font-semibold tracking-wide uppercase">Advanced Training</p>
                <p className="text-white/40 text-xs mt-1">Best value for committed athletes</p>
              </div>

              {/* Grid Features */}
              <div className="flex-1 bg-black/40">
                <FeatureRow
                  icon={Award}
                  label="Core Sport Access"
                  sublabel="(Hours/Week)"
                  rightElement={<MiniBarGraph level="medium" />}
                />
                <FeatureRow
                  icon={Flag}
                  label="Access to Courts"
                  rightElement={<CheckMark />}
                />
                <FeatureRow
                  icon={Users}
                  label="Group Coaching Sessions"
                  sublabel="(per month)"
                  rightElement={<ThreeCheckMarks />}
                />
                <FeatureRow
                  icon={Dumbbell}
                  label="Gym Access"
                  rightElement={<CheckMark />}
                />
                <FeatureRow
                  icon={Key}
                  label="Priority Booking"
                  rightElement={<CrossMark />}
                />
                <FeatureRow
                  icon={Zap}
                  label="Specialty Training"
                  sublabel="(e.g., Nutrition)"
                  rightElement={<CheckMark />}
                />
                <FeatureRow
                  icon={UserPlus}
                  label="Guest Passes"
                  sublabel="(per quarter)"
                  rightElement={<TwoCheckMarks />}
                />
              </div>

              {/* Payment Methods & CTA */}
              <div className="p-6 sm:p-8 bg-black/80 border-t border-white/5 space-y-6">
                {/* Payment Options Row */}
                <div className="grid grid-cols-3 gap-2 text-center pt-2">
                  <div className="space-y-2">
                    <span className="text-[8px] font-black uppercase text-white/40 tracking-widest block">UPI</span>
                    <div className="flex items-center justify-center gap-1">
                      <GPayLogo />
                      <span className="text-[10px] text-white/30 font-bold">+</span>
                      <PhonePeLogo />
                    </div>
                    <span className="text-[7px] text-white/30 block tracking-tight leading-none mt-1">(All Rookie Methods)</span>
                  </div>
                  <div className="space-y-2 border-x border-white/5 px-2">
                    <span className="text-[8px] font-black uppercase text-white/40 tracking-widest block">Credit Cards</span>
                    <div className="flex items-center justify-center gap-1">
                      <VisaLogo />
                      <span className="text-[10px] text-white/30 font-bold">+</span>
                      <MastercardLogo />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <span className="text-[8px] font-black uppercase text-white/40 tracking-widest block">Buy Now Pay Later</span>
                    <div className="flex justify-center">
                      <SimplLogo />
                    </div>
                    <span className="text-[7px] text-white/30 block tracking-tight leading-none mt-1">(Added modern options)</span>
                  </div>
                </div>

                {/* Choose Button */}
                <Link
                  href="/join"
                  target="_blank"
                  className="w-full py-4 bg-blue-600 text-white font-black uppercase text-center rounded-xl tracking-wider hover:bg-blue-500 hover:scale-[1.02] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 text-sm shadow-[0_0_25px_rgba(37,99,235,0.45)] hover:shadow-[0_0_35px_rgba(37,99,235,0.7)]"
                >
                  CHOOSE PRO <ChevronRight className="w-4 h-4 stroke-[3px]" />
                </Link>
              </div>
            </div>

            {/* ANNUAL - PRIME LEVEL */}
            <div className="bg-gradient-to-b from-[#1C132A] to-[#0A0710] rounded-3xl border-2 border-[#D6A23A] shadow-[0_0_40px_rgba(214,162,58,0.2)] transition-all duration-500 flex flex-col justify-between overflow-hidden group">
              <div className="relative p-6 sm:p-8 border-b border-white/5 overflow-hidden">
                <SunWavesWatermark />
                <SwimmingGogglesWatermark />
                <h3 className="text-lg font-black uppercase tracking-wider text-[#D6A23A] mb-2 flex items-center gap-1.5 drop-shadow-[0_0_10px_rgba(214,162,58,0.5)]">
                  PRIME LEVEL
                </h3>
                <div className="flex items-baseline gap-1.5 mb-2">
                  <span className="text-3xl sm:text-4xl font-black text-[#D6A23A]">₹30,000</span>
                  <span className="text-[#D6A23A]/60 text-xs sm:text-sm font-bold"> / Year</span>
                </div>
                <p className="text-[#D6A23A] text-xs sm:text-sm font-black tracking-widest uppercase animate-pulse">ULTIMATE ACADEMY EXPERIENCE</p>
                <p className="text-white/40 text-xs mt-1">For elite-level commitment</p>
              </div>

              {/* Grid Features */}
              <div className="flex-1 bg-black/40">
                <FeatureRow
                  icon={Award}
                  label="Core Sport Access"
                  sublabel="(Hours/Week)"
                  rightElement={<MiniBarGraph level="unlimited" />}
                />
                <FeatureRow
                  icon={Flag}
                  label="Access to Courts"
                  rightElement={<CheckMark />}
                />
                <FeatureRow
                  icon={Users}
                  label="Group Coaching Sessions"
                  sublabel="(per month)"
                  rightElement={<InfinitySymbol />}
                />
                <FeatureRow
                  icon={Dumbbell}
                  label="Gym Access"
                  rightElement={<CheckMark />}
                />
                <FeatureRow
                  icon={Key}
                  label="Priority Booking"
                  rightElement={<KeyCheckmark />}
                />
                <FeatureRow
                  icon={Zap}
                  label="Specialty Training"
                  sublabel="(e.g., Nutrition)"
                  rightElement={<DnaCheckmark />}
                />
                <FeatureRow
                  icon={UserPlus}
                  label="Guest Passes"
                  sublabel="(per quarter)"
                  rightElement={<FourCheckMarks />}
                />
              </div>

              {/* Payment Methods & CTA */}
              <div className="p-6 sm:p-8 bg-black/80 border-t border-white/5 space-y-6">
                {/* Payment Options Row */}
                <div className="grid grid-cols-3 gap-2 text-center pt-2">
                  <div className="space-y-2">
                    <span className="text-[8px] font-black uppercase text-white/40 tracking-widest block">All Pro</span>
                    <div className="flex items-center justify-center gap-1">
                      <GPayLogo />
                      <span className="text-[10px] text-white/30 font-bold">+</span>
                      <PhonePeLogo />
                    </div>
                    <span className="text-[7px] text-white/30 block tracking-tight leading-none mt-1">(All Pro Methods)</span>
                  </div>
                  <div className="space-y-2 border-x border-white/5 px-2">
                    <span className="text-[8px] font-black uppercase text-white/40 tracking-widest block">Cryptocurrency</span>
                    <div className="flex items-center justify-center gap-1">
                      <BitcoinLogo />
                      <span className="text-[10px] text-white/30 font-bold">+</span>
                      <EthereumLogo />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <span className="text-[8px] font-black uppercase text-white/40 tracking-widest block">Exclusive Partner Card</span>
                    <div className="flex justify-center">
                      <ExclusiveCardLogo />
                    </div>
                    <span className="text-[7px] text-white/30 block tracking-tight leading-none mt-1">(Added premium options)</span>
                  </div>
                </div>

                {/* Choose Button */}
                <Link
                  href="/join"
                  target="_blank"
                  className="w-full py-4 bg-transparent border-2 border-[#D6A23A] text-[#D6A23A] font-black uppercase text-center rounded-xl tracking-wider hover:bg-[#D6A23A] hover:text-black hover:scale-[1.02] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 text-sm shadow-[0_0_20px_rgba(214,162,58,0.2)] hover:shadow-[0_0_30px_rgba(214,162,58,0.5)]"
                >
                  EMBRACE PRIME <ChevronRight className="w-4 h-4 stroke-[3px]" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
