"use client";

import { Trophy, Clock, Target, Users, Zap, Shield, ChevronRight, Award, Star, Activity } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SportsDetailPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-black text-white pt-32 min-h-screen">
      {/* HERO BANNER */}
      <section className="relative py-20 sm:py-28 overflow-hidden border-b border-[#D6A23A]/10">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ 
            backgroundImage: "url('/stadium_raw.png')",
            filter: "grayscale(100%) sepia(100%) hue-rotate(5deg) saturate(200%) brightness(0.4)"
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-black"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D6A23A]/10 border border-[#D6A23A]/30 rounded-full mb-6">
            <span className="w-2 h-2 bg-[#D6A23A] rounded-full animate-pulse"></span>
            <span className="text-[#D6A23A] font-bold text-sm uppercase tracking-wider">Academy Disciplines</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-tight mb-6">
            <span className="text-white">OUR </span>
            <span className="text-[#D6A23A]">SPORTS</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">Discover in-depth information about all five of our specialized sports coaching programs.</p>
        </div>
      </section>

      {/* SPORTS DETAIL CONTENT */}
      <section className="py-16 sm:py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-6 space-y-24 max-w-6xl">

          {/* SPORT 1: FOOTBALL */}
          <div id="football" className="grid lg:grid-cols-2 gap-12 items-center bg-gradient-to-br from-[#12161A] to-[#0B0C0E] rounded-3xl p-8 sm:p-12 border border-white/5 hover:border-[#0C6B3F]/20 transition-all duration-500 shadow-[0_0_50px_rgba(12,107,63,0.05)]">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0C6B3F]/10 border border-[#0C6B3F]/30 rounded-full">
                <span className="w-2 h-2 bg-[#0C6B3F] rounded-full"></span>
                <span className="text-[#0C6B3F] font-bold text-sm uppercase tracking-wider">Most Popular</span>
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl font-black uppercase text-white tracking-tight">
                  FOOTBALL <span className="text-[#0C6B3F]">ACADEMY</span>
                </h2>
                <p className="text-[#FF5722] font-black uppercase tracking-widest text-sm sm:text-base">Master the Beautiful Game</p>
                <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                  Our football program develops technically proficient, tactically smart, and physically dominant players. Following the proprietary ALPHA Methodology, we train players from grassroots to elite competitive levels, creating a pathway to professional clubs.
                </p>
              </div>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 gap-4 border-t border-b border-white/5 py-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0C6B3F]/10 flex items-center justify-center shrink-0">
                    <Trophy className="w-5 h-5 text-[#0C6B3F]" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 block uppercase font-bold">Coaching</span>
                    <span className="text-sm text-white font-bold">AFC Licensed Coaches</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0C6B3F]/10 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 text-[#0C6B3F]" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 block uppercase font-bold">Ages</span>
                    <span className="text-sm text-white font-bold">U8 to U19+</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0C6B3F]/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#0C6B3F]" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 block uppercase font-bold">Schedules</span>
                    <span className="text-sm text-white font-bold">3 - 5 days / week</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0C6B3F]/10 flex items-center justify-center shrink-0">
                    <Activity className="w-5 h-5 text-[#0C6B3F]" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 block uppercase font-bold">Facility</span>
                    <span className="text-sm text-white font-bold">Premium Turf Fields</span>
                  </div>
                </div>
              </div>

              {/* Core Training Pillars */}
              <div className="space-y-4">
                <h3 className="text-sm font-black uppercase text-white/50 tracking-wider">Core Training Focus</h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  <li className="flex items-center gap-2.5 text-white/70 text-xs sm:text-sm">
                    <Check className="w-4 h-4 text-[#0C6B3F] shrink-0 stroke-[3px]" /> Dribbling & Ball Control
                  </li>
                  <li className="flex items-center gap-2.5 text-white/70 text-xs sm:text-sm">
                    <Check className="w-4 h-4 text-[#0C6B3F] shrink-0 stroke-[3px]" /> Tactical Spacing & Passing
                  </li>
                  <li className="flex items-center gap-2.5 text-white/70 text-xs sm:text-sm">
                    <Check className="w-4 h-4 text-[#0C6B3F] shrink-0 stroke-[3px]" /> Speed, Agility & Strength
                  </li>
                  <li className="flex items-center gap-2.5 text-white/70 text-xs sm:text-sm">
                    <Check className="w-4 h-4 text-[#0C6B3F] shrink-0 stroke-[3px]" /> Full Match Tactics & Play
                  </li>
                </ul>
              </div>

              {/* Register Button */}
              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/join?sport=football"
                  className="inline-flex items-center gap-2 bg-[#0C6B3F] text-white font-black uppercase text-xs sm:text-sm px-8 py-4 rounded-xl hover:bg-[#0E804B] transition-all duration-300 hover:scale-105 shadow-[0_0_25px_rgba(12,107,63,0.4)]"
                >
                  Register For Football <ChevronRight className="w-4 h-4 stroke-[3px]" />
                </Link>
                <Link
                  href="/sportsdetail/football"
                  className="inline-flex items-center gap-2 bg-transparent border-2 border-[#0C6B3F] text-[#0C6B3F] hover:bg-[#0C6B3F] hover:text-white font-black uppercase text-xs sm:text-sm px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  View Details <ChevronRight className="w-4 h-4 stroke-[3px]" />
                </Link>
              </div>
            </div>

            {/* Image Container */}
            <div className="relative h-[300px] sm:h-[400px] rounded-3xl overflow-hidden border-2 border-[#0C6B3F]/20 shadow-[0_0_40px_rgba(12,107,63,0.15)] group">
              <img
                src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=2029&auto=format&fit=crop"
                alt="Football Training at ALPHA"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/60 border border-white/5 backdrop-blur-sm">
                <p className="text-xs font-bold text-[#D6A23A] uppercase tracking-wider mb-1">Live Coaching</p>
                <h4 className="text-white font-black text-sm uppercase">Fostering Youth Talent Across Tamil Nadu</h4>
              </div>
            </div>
          </div>

          {/* SPORT 2: BADMINTON */}
          <div id="badminton" className="grid lg:grid-cols-2 gap-12 items-center bg-gradient-to-br from-[#1C1612] to-[#0F0B09] rounded-3xl p-8 sm:p-12 border border-white/5 hover:border-[#D6A23A]/20 transition-all duration-500 shadow-[0_0_50px_rgba(214,162,58,0.05)]">
            {/* Image Container */}
            <div className="order-2 lg:order-1 relative h-[300px] sm:h-[400px] rounded-3xl overflow-hidden border-2 border-[#D6A23A]/20 shadow-[0_0_40px_rgba(214,162,58,0.15)] group">
              <img
                src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=2070&auto=format&fit=crop"
                alt="Badminton Training at ALPHA"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/60 border border-white/5 backdrop-blur-sm">
                <p className="text-xs font-bold text-[#D6A23A] uppercase tracking-wider mb-1">State-of-the-art courts</p>
                <h4 className="text-white font-black text-sm uppercase">Train Under National Badminton Champions</h4>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D6A23A]/10 border border-[#D6A23A]/30 rounded-full">
                <span className="w-2 h-2 bg-[#D6A23A] rounded-full animate-pulse"></span>
                <span className="text-[#D6A23A] font-bold text-sm uppercase tracking-wider">Premium Sport</span>
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl font-black uppercase text-white tracking-tight">
                  BADMINTON <span className="text-[#D6A23A]">ACADEMY</span>
                </h2>
                <p className="text-[#FF5722] font-black uppercase tracking-widest text-sm sm:text-base">Speed, Power, Precision</p>
                <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                  Our badminton program focuses on court speed, agility, racket control, explosive power, and tactical placement. Led by professional state and national level coaches, we nurture competitive athlete profiles ready to conquer national tournaments.
                </p>
              </div>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 gap-4 border-t border-b border-white/5 py-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#D6A23A]/10 flex items-center justify-center shrink-0">
                    <Trophy className="w-5 h-5 text-[#D6A23A]" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 block uppercase font-bold">Coaching</span>
                    <span className="text-sm text-white font-bold">National Medalists</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#D6A23A]/10 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 text-[#D6A23A]" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 block uppercase font-bold">Ages</span>
                    <span className="text-sm text-white font-bold">U8 to U19+</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#D6A23A]/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#D6A23A]" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 block uppercase font-bold">Schedules</span>
                    <span className="text-sm text-white font-bold">3 - 6 days / week</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#D6A23A]/10 flex items-center justify-center shrink-0">
                    <Activity className="w-5 h-5 text-[#D6A23A]" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 block uppercase font-bold">Facility</span>
                    <span className="text-sm text-white font-bold">Professional Indoor Courts</span>
                  </div>
                </div>
              </div>

              {/* Core Training Pillars */}
              <div className="space-y-4">
                <h3 className="text-sm font-black uppercase text-white/50 tracking-wider">Core Training Focus</h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  <li className="flex items-center gap-2.5 text-white/70 text-xs sm:text-sm">
                    <Check className="w-4 h-4 text-[#D6A23A] shrink-0 stroke-[3px]" /> Footwork & Agility
                  </li>
                  <li className="flex items-center gap-2.5 text-white/70 text-xs sm:text-sm">
                    <Check className="w-4 h-4 text-[#D6A23A] shrink-0 stroke-[3px]" /> Racket Grip & Smash Techniques
                  </li>
                  <li className="flex items-center gap-2.5 text-white/70 text-xs sm:text-sm">
                    <Check className="w-4 h-4 text-[#D6A23A] shrink-0 stroke-[3px]" /> Shot Placement & Reflexes
                  </li>
                  <li className="flex items-center gap-2.5 text-white/70 text-xs sm:text-sm">
                    <Check className="w-4 h-4 text-[#D6A23A] shrink-0 stroke-[3px]" /> Single & Doubles Strategies
                  </li>
                </ul>
              </div>

              {/* Register Button */}
              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/join?sport=badminton"
                  className="inline-flex items-center gap-2 bg-[#D6A23A] text-black font-black uppercase text-xs sm:text-sm px-8 py-4 rounded-xl hover:bg-[#F5D06C] transition-all duration-300 hover:scale-105 shadow-[0_0_25px_rgba(214,162,58,0.4)]"
                >
                  Register For Badminton <ChevronRight className="w-4 h-4 stroke-[3px]" />
                </Link>
                <Link
                  href="/sportsdetail/badminton"
                  className="inline-flex items-center gap-2 bg-transparent border-2 border-[#D6A23A] text-[#D6A23A] hover:bg-[#D6A23A] hover:text-black font-black uppercase text-xs sm:text-sm px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  View Details <ChevronRight className="w-4 h-4 stroke-[3px]" />
                </Link>
              </div>
            </div>
          </div>

          {/* SPORT 3: TENNIS */}
          <div id="tennis" className="grid lg:grid-cols-2 gap-12 items-center bg-gradient-to-br from-[#12161A] to-[#0B0C0E] rounded-3xl p-8 sm:p-12 border border-white/5 hover:border-[#D6A23A]/20 transition-all duration-500 shadow-[0_0_50px_rgba(214,162,58,0.05)]">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D6A23A]/10 border border-[#D6A23A]/30 rounded-full">
                <span className="w-2 h-2 bg-[#D6A23A] rounded-full"></span>
                <span className="text-[#D6A23A] font-bold text-sm uppercase tracking-wider">ITF Standard</span>
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl font-black uppercase text-white tracking-tight">
                  TENNIS <span className="text-[#D6A23A]">ACADEMY</span>
                </h2>
                <p className="text-[#FF5722] font-black uppercase tracking-widest text-sm sm:text-base">Power, Precision, Endurance</p>
                <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                  Our tennis academy focuses on developing explosive baseline play, serve mechanics, court coverage speed, and tactical rally positioning. Our program is structured to prepare junior athletes for national tournament success.
                </p>
              </div>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 gap-4 border-t border-b border-white/5 py-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#D6A23A]/10 flex items-center justify-center shrink-0">
                    <Trophy className="w-5 h-5 text-[#D6A23A]" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 block uppercase font-bold">Coaching</span>
                    <span className="text-sm text-white font-bold">ITF Certified Coaches</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#D6A23A]/10 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 text-[#D6A23A]" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 block uppercase font-bold">Ages</span>
                    <span className="text-sm text-white font-bold">U8 to U18+</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#D6A23A]/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#D6A23A]" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 block uppercase font-bold">Schedules</span>
                    <span className="text-sm text-white font-bold">3 - 5 days / week</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#D6A23A]/10 flex items-center justify-center shrink-0">
                    <Activity className="w-5 h-5 text-[#D6A23A]" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 block uppercase font-bold">Facility</span>
                    <span className="text-sm text-white font-bold">Clay & Hard Courts</span>
                  </div>
                </div>
              </div>

              {/* Core Training Pillars */}
              <div className="space-y-4">
                <h3 className="text-sm font-black uppercase text-white/50 tracking-wider">Core Training Focus</h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  <li className="flex items-center gap-2.5 text-white/70 text-xs sm:text-sm">
                    <Check className="w-4 h-4 text-[#D6A23A] shrink-0 stroke-[3px]" /> Serve & Volley Mastery
                  </li>
                  <li className="flex items-center gap-2.5 text-white/70 text-xs sm:text-sm">
                    <Check className="w-4 h-4 text-[#D6A23A] shrink-0 stroke-[3px]" /> Agility & Footwork Drills
                  </li>
                  <li className="flex items-center gap-2.5 text-white/70 text-xs sm:text-sm">
                    <Check className="w-4 h-4 text-[#D6A23A] shrink-0 stroke-[3px]" /> Baseline Rally Consistency
                  </li>
                  <li className="flex items-center gap-2.5 text-white/70 text-xs sm:text-sm">
                    <Check className="w-4 h-4 text-[#D6A23A] shrink-0 stroke-[3px]" /> Tactical Match Simulations
                  </li>
                </ul>
              </div>

              {/* Register Button */}
              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/join?sport=tennis"
                  className="inline-flex items-center gap-2 bg-[#D6A23A] text-black font-black uppercase text-xs sm:text-sm px-8 py-4 rounded-xl hover:bg-[#F5D06C] transition-all duration-300 hover:scale-105 shadow-[0_0_25px_rgba(214,162,58,0.4)]"
                >
                  Register For Tennis <ChevronRight className="w-4 h-4 stroke-[3px]" />
                </Link>
                <Link
                  href="/sportsdetail/tennis"
                  className="inline-flex items-center gap-2 bg-transparent border-2 border-[#D6A23A] text-[#D6A23A] hover:bg-[#D6A23A] hover:text-black font-black uppercase text-xs sm:text-sm px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  View Details <ChevronRight className="w-4 h-4 stroke-[3px]" />
                </Link>
              </div>
            </div>

            {/* Image Container */}
            <div className="relative h-[300px] sm:h-[400px] rounded-3xl overflow-hidden border-2 border-[#D6A23A]/20 shadow-[0_0_40px_rgba(214,162,58,0.15)] group">
              <img
                src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=2070&auto=format&fit=crop"
                alt="Tennis Coaching at ALPHA"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/60 border border-white/5 backdrop-blur-sm">
                <p className="text-xs font-bold text-[#D6A23A] uppercase tracking-wider mb-1">Elite Infrastructure</p>
                <h4 className="text-white font-black text-sm uppercase">Train on ITF Standard Clay & Hard Courts</h4>
              </div>
            </div>
          </div>

          {/* SPORT 4: CRICKET */}
          <div id="cricket" className="grid lg:grid-cols-2 gap-12 items-center bg-gradient-to-br from-[#14202C] to-[#0A1016] rounded-3xl p-8 sm:p-12 border border-white/5 hover:border-blue-500/20 transition-all duration-500 shadow-[0_0_50px_rgba(59,130,246,0.05)]">
            {/* Image Container */}
            <div className="order-2 lg:order-1 relative h-[300px] sm:h-[400px] rounded-3xl overflow-hidden border-2 border-blue-500/20 shadow-[0_0_40px_rgba(59,130,246,0.15)] group">
              <img
                src="/cricket.png"
                alt="Cricket Nets at ALPHA"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/60 border border-white/5 backdrop-blur-sm">
                <p className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">State-of-the-art equipment</p>
                <h4 className="text-white font-black text-sm uppercase">Bowling Machines & Video Analytics Nets</h4>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                <span className="text-blue-400 font-bold text-sm uppercase tracking-wider">BCCI Standard</span>
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl font-black uppercase text-white tracking-tight">
                  CRICKET <span className="text-blue-500">ACADEMY</span>
                </h2>
                <p className="text-[#FF5722] font-black uppercase tracking-widest text-sm sm:text-base">Traditional Skill, Modern Power</p>
                <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                  From refined batting footwork and swing bowling controls to modern high-performance game-ready conditioning, our cricket training program utilizes bowling machines, Turf Wickets, and indoor practice nets.
                </p>
              </div>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 gap-4 border-t border-b border-white/5 py-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                    <Trophy className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 block uppercase font-bold">Coaching</span>
                    <span className="text-sm text-white font-bold">BCCI Certified Coaches</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 block uppercase font-bold">Ages</span>
                    <span className="text-sm text-white font-bold">U10 to U19+</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 block uppercase font-bold">Schedules</span>
                    <span className="text-sm text-white font-bold">3 - 6 days / week</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                    <Activity className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 block uppercase font-bold">Facility</span>
                    <span className="text-sm text-white font-bold">Turf & Cement Wickets</span>
                  </div>
                </div>
              </div>

              {/* Core Training Pillars */}
              <div className="space-y-4">
                <h3 className="text-sm font-black uppercase text-white/50 tracking-wider">Core Training Focus</h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  <li className="flex items-center gap-2.5 text-white/70 text-xs sm:text-sm">
                    <Check className="w-4 h-4 text-blue-500 shrink-0 stroke-[3px]" /> Batting strokeplay & Defence
                  </li>
                  <li className="flex items-center gap-2.5 text-white/70 text-xs sm:text-sm">
                    <Check className="w-4 h-4 text-blue-500 shrink-0 stroke-[3px]" /> Bowling swing & spin drills
                  </li>
                  <li className="flex items-center gap-2.5 text-white/70 text-xs sm:text-sm">
                    <Check className="w-4 h-4 text-blue-500 shrink-0 stroke-[3px]" /> Athletic fielding & catching
                  </li>
                  <li className="flex items-center gap-2.5 text-white/70 text-xs sm:text-sm">
                    <Check className="w-4 h-4 text-blue-500 shrink-0 stroke-[3px]" /> Match IQ & Game Simulations
                  </li>
                </ul>
              </div>

              {/* Register Button */}
              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/join?sport=cricket"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white font-black uppercase text-xs sm:text-sm px-8 py-4 rounded-xl hover:bg-blue-500 transition-all duration-300 hover:scale-105 shadow-[0_0_25px_rgba(59,130,246,0.4)]"
                >
                  Register For Cricket <ChevronRight className="w-4 h-4 stroke-[3px]" />
                </Link>
                <Link
                  href="/sportsdetail/cricket"
                  className="inline-flex items-center gap-2 bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-black uppercase text-xs sm:text-sm px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  View Details <ChevronRight className="w-4 h-4 stroke-[3px]" />
                </Link>
              </div>
            </div>
          </div>

          {/* SPORT 5: SWIMMING */}
          <div id="swimming" className="grid lg:grid-cols-2 gap-12 items-center bg-gradient-to-br from-[#1C132A] to-[#0A0710] rounded-3xl p-8 sm:p-12 border border-white/5 hover:border-[#D6A23A]/20 transition-all duration-500 shadow-[0_0_50px_rgba(214,162,58,0.05)]">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D6A23A]/10 border border-[#D6A23A]/30 rounded-full">
                <span className="w-2 h-2 bg-[#D6A23A] rounded-full"></span>
                <span className="text-[#D6A23A] font-bold text-sm uppercase tracking-wider">Olympic pool</span>
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl font-black uppercase text-white tracking-tight">
                  SWIMMING <span className="text-[#D6A23A]">ACADEMY</span>
                </h2>
                <p className="text-[#FF5722] font-black uppercase tracking-widest text-sm sm:text-base">Strength, Rhythm, Aerobic Power</p>
                <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                  From basic water survival skills and stroke refinement (freestyle, breaststroke, backstroke, and fly) to elite speed conditioning, our swimming program takes place in clean, temperature-controlled Olympic pools.
                </p>
              </div>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 gap-4 border-t border-b border-white/5 py-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#D6A23A]/10 flex items-center justify-center shrink-0">
                    <Trophy className="w-5 h-5 text-[#D6A23A]" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 block uppercase font-bold">Coaching</span>
                    <span className="text-sm text-white font-bold">ASCA Certified Coaches</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#D6A23A]/10 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 text-[#D6A23A]" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 block uppercase font-bold">Ages</span>
                    <span className="text-sm text-white font-bold">U6 to U18+</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#D6A23A]/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#D6A23A]" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 block uppercase font-bold">Schedules</span>
                    <span className="text-sm text-white font-bold">3 - 5 days / week</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#D6A23A]/10 flex items-center justify-center shrink-0">
                    <Activity className="w-5 h-5 text-[#D6A23A]" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 block uppercase font-bold">Facility</span>
                    <span className="text-sm text-white font-bold">50m Temperature Pool</span>
                  </div>
                </div>
              </div>

              {/* Core Training Pillars */}
              <div className="space-y-4">
                <h3 className="text-sm font-black uppercase text-white/50 tracking-wider">Core Training Focus</h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  <li className="flex items-center gap-2.5 text-white/70 text-xs sm:text-sm">
                    <Check className="w-4 h-4 text-[#D6A23A] shrink-0 stroke-[3px]" /> Stroke refinement (All styles)
                  </li>
                  <li className="flex items-center gap-2.5 text-white/70 text-xs sm:text-sm">
                    <Check className="w-4 h-4 text-[#D6A23A] shrink-0 stroke-[3px]" /> Cardiovascular lung capacity
                  </li>
                  <li className="flex items-center gap-2.5 text-white/70 text-xs sm:text-sm">
                    <Check className="w-4 h-4 text-[#D6A23A] shrink-0 stroke-[3px]" /> Start blocks & turn speeds
                  </li>
                  <li className="flex items-center gap-2.5 text-white/70 text-xs sm:text-sm">
                    <Check className="w-4 h-4 text-[#D6A23A] shrink-0 stroke-[3px]" /> Water safety & endurance
                  </li>
                </ul>
              </div>

              {/* Register Button */}
              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/join?sport=swimming"
                  className="inline-flex items-center gap-2 bg-transparent border-2 border-[#D6A23A] text-[#D6A23A] font-black uppercase text-xs sm:text-sm px-8 py-4 rounded-xl hover:bg-[#D6A23A] hover:text-black transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(214,162,58,0.2)] hover:shadow-[0_0_30px_rgba(214,162,58,0.5)]"
                >
                  Register For Swimming <ChevronRight className="w-4 h-4 stroke-[3px]" />
                </Link>
                <Link
                  href="/sportsdetail/swimming"
                  className="inline-flex items-center gap-2 bg-transparent border-2 border-white/20 text-white hover:bg-[#D6A23A] hover:border-[#D6A23A] hover:text-black font-black uppercase text-xs sm:text-sm px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  View Details <ChevronRight className="w-4 h-4 stroke-[3px]" />
                </Link>
              </div>
            </div>

            {/* Image Container */}
            <div className="relative h-[300px] sm:h-[400px] rounded-3xl overflow-hidden border-2 border-[#D6A23A]/20 shadow-[0_0_40px_rgba(214,162,58,0.15)] group">
              <img
                src="/swimming.png"
                alt="Swimming Coaching at ALPHA"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/60 border border-white/5 backdrop-blur-sm">
                <p className="text-xs font-bold text-[#D6A23A] uppercase tracking-wider mb-1">Professional pools</p>
                <h4 className="text-white font-black text-sm uppercase">Train in temperature-controlled 50m facilities</h4>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

// Simple internal helper for checkmarks
function Check({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
