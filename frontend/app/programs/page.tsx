import { ChevronRight, Users, Zap, Trophy, Target, Star, Shield } from "lucide-react";
import Link from "next/link";

export default function ProgramsPage() {
  return (
    <div className="bg-black text-white pt-32">
      {/* HERO BANNER */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25" 
          style={{ 
            backgroundImage: "url('/stadium_raw.png')",
            filter: "grayscale(100%) sepia(100%) hue-rotate(5deg) saturate(200%) brightness(0.4)"
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF5722]/10 border border-[#FF5722]/30 rounded-full mb-6">
            <span className="w-2 h-2 bg-[#FF5722] rounded-full animate-pulse"></span>
            <span className="text-[#FF5722] font-bold text-sm uppercase tracking-wider">Training Programs</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-tight mb-6">
            <span className="text-white">OUR </span>
            <span className="text-[#FF5722]">PROGRAMS</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">Structured training pathways designed for every age group and skill level.</p>
        </div>
      </section>

      {/* PROGRAMS DETAIL */}
      <section className="py-16 sm:py-20 bg-[#111]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="space-y-12">
            {/* REGULAR */}
            <div className="grid lg:grid-cols-2 gap-8 items-center bg-gradient-to-r from-[#1A1A1A] to-[#222] rounded-2xl p-8 sm:p-10 border border-white/5 hover:border-[#D6A23A]/20 transition-all duration-500">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-[#D6A23A]" />
                  <span className="text-[#FF5722] font-bold text-sm uppercase tracking-wider">Ages U8-U13</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black uppercase text-white mb-4">REGULAR PROGRAMS</h2>
                <p className="text-white/70 leading-relaxed mb-6">Professional football training programs in Tamil Nadu for youth players aged 8-13. Build foundational football skills, tactical awareness, and team coordination through structured coaching sessions at our premier sports academy.</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3 text-white/60 text-sm"><Star className="w-4 h-4 text-[#D6A23A] shrink-0" /> Fundamental skill development</li>
                  <li className="flex items-center gap-3 text-white/60 text-sm"><Star className="w-4 h-4 text-[#D6A23A] shrink-0" /> Team coordination &amp; tactical basics</li>
                  <li className="flex items-center gap-3 text-white/60 text-sm"><Star className="w-4 h-4 text-[#D6A23A] shrink-0" /> Physical fitness &amp; agility training</li>
                  <li className="flex items-center gap-3 text-white/60 text-sm"><Star className="w-4 h-4 text-[#D6A23A] shrink-0" /> Regular match practice</li>
                </ul>
                <Link href="/sportsdetail" className="inline-flex items-center gap-2 bg-[#D6A23A] text-black font-bold uppercase text-sm px-6 py-3 rounded-lg hover:bg-[#F5D06C] transition-all duration-300 hover:scale-105">
                  Enquire Now <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=2029&auto=format&fit=crop" alt="Regular Programs" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>

            {/* ADVANCED */}
            <div className="grid lg:grid-cols-2 gap-8 items-center bg-gradient-to-r from-[#222] to-[#1A1A1A] rounded-2xl p-8 sm:p-10 border border-white/5 hover:border-[#0C6B3F]/20 transition-all duration-500">
              <div className="order-2 lg:order-1 relative h-64 sm:h-80 rounded-xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1935&auto=format&fit=crop" alt="Advanced Programs" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-[#0C6B3F]" />
                  <span className="text-[#FF5722] font-bold text-sm uppercase tracking-wider">Ages U14-U18</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black uppercase text-white mb-4">ADVANCED PROGRAMS</h2>
                <p className="text-white/70 leading-relaxed mb-6">Intensive tactical training, physical conditioning, and match-scenario preparation for competitive young athletes. This program is designed for players who are serious about advancing their skills to the next level.</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3 text-white/60 text-sm"><Star className="w-4 h-4 text-[#0C6B3F] shrink-0" /> Advanced tactical positioning</li>
                  <li className="flex items-center gap-3 text-white/60 text-sm"><Star className="w-4 h-4 text-[#0C6B3F] shrink-0" /> Strength &amp; conditioning programs</li>
                  <li className="flex items-center gap-3 text-white/60 text-sm"><Star className="w-4 h-4 text-[#0C6B3F] shrink-0" /> Video analysis &amp; performance review</li>
                  <li className="flex items-center gap-3 text-white/60 text-sm"><Star className="w-4 h-4 text-[#0C6B3F] shrink-0" /> Tournament preparation</li>
                </ul>
                <Link href="/sportsdetail" className="inline-flex items-center gap-2 bg-[#0C6B3F] text-white font-bold uppercase text-sm px-6 py-3 rounded-lg hover:bg-[#0E804B] transition-all duration-300 hover:scale-105">
                  Enquire Now <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* ELITE */}
            <div className="grid lg:grid-cols-2 gap-8 items-center bg-gradient-to-r from-[#1A1A1A] to-[#222] rounded-2xl p-8 sm:p-10 border border-white/5 hover:border-[#D6A23A]/20 transition-all duration-500">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Trophy className="w-6 h-6 text-[#D6A23A]" />
                  <span className="text-[#FF5722] font-bold text-sm uppercase tracking-wider">Ages U19+</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black uppercase text-white mb-4">ELITE DEVELOPMENT</h2>
                <p className="text-white/70 leading-relaxed mb-6">Professional pathway program focused on peak physical performance, advanced tactics, and exposure to professional scouting networks. Designed for athletes who aspire to play at the highest levels.</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3 text-white/60 text-sm"><Star className="w-4 h-4 text-[#D6A23A] shrink-0" /> Professional scouting exposure</li>
                  <li className="flex items-center gap-3 text-white/60 text-sm"><Star className="w-4 h-4 text-[#D6A23A] shrink-0" /> Peak performance science</li>
                  <li className="flex items-center gap-3 text-white/60 text-sm"><Star className="w-4 h-4 text-[#D6A23A] shrink-0" /> Mental conditioning &amp; sports psychology</li>
                  <li className="flex items-center gap-3 text-white/60 text-sm"><Star className="w-4 h-4 text-[#D6A23A] shrink-0" /> National &amp; international tournament entry</li>
                </ul>
                <Link href="/sportsdetail" className="inline-flex items-center gap-2 bg-[#D6A23A] text-black font-bold uppercase text-sm px-6 py-3 rounded-lg hover:bg-[#F5D06C] transition-all duration-300 hover:scale-105">
                  Enquire Now <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=1974&auto=format&fit=crop" alt="Elite Development" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
