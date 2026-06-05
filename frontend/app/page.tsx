import { Play, ChevronRight, Award } from "lucide-react";
import Link from "next/link";
import RunningTrack from "@/components/RunningTrack";

export default function Home() {
  return (
    <div className="bg-black text-white xl:pl-[80px] xl:pr-[80px] relative">
      <RunningTrack />
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black pt-32">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 scale-105" 
            style={{ 
              backgroundImage: "url('/stadium_raw.png')",
              filter: "grayscale(100%) sepia(100%) hue-rotate(5deg) saturate(200%) brightness(0.4)"
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20 lg:py-32">
            <div className="space-y-8 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0C6B3F]/10 backdrop-blur-sm border border-[#0C6B3F]/20 rounded-full">
                <span className="w-2 h-2 bg-[#0C6B3F] rounded-full animate-pulse"></span>
                <span className="text-[#0C6B3F] font-bold text-sm uppercase tracking-wider">MATCH READY</span>
              </div>
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight">
                  <span className="block text-white drop-shadow-2xl">TRAIN</span>
                  <span className="block text-white drop-shadow-2xl">LIKE A PRO</span>
                  <span className="block text-[#D6A23A] drop-shadow-2xl">CHAMPIONS</span>
                </h1>
                <p className="text-xl sm:text-2xl text-white/90 font-light leading-relaxed max-w-xl">Elite Coaching That Transforms Athletes</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/join" className="inline-flex items-center justify-center gap-2 bg-[#0C6B3F] hover:bg-[#0C6B3F]/90 text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#0C6B3F]/50 group">
                  START FREE TRIAL
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="tel:1234567890" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white hover:border-white text-white hover:text-black font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 group">
                  <Play className="w-5 h-5" />
                  WATCH VIDEO
                </a>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-white">500+</div>
                  <div className="text-sm text-white/70 font-medium mt-1">Athletes Trained</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-white">7+</div>
                  <div className="text-sm text-white/70 font-medium mt-1">Expert Coaches</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-white">AFC</div>
                  <div className="text-sm text-white/70 font-medium mt-1">Licensed</div>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl backdrop-blur-sm bg-black/20">
                <img src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1935&auto=format&fit=crop" alt="TRAIN LIKE A PRO" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <div className="text-white">
                    <div className="text-sm font-bold uppercase tracking-wider text-[#D6A23A] mb-2">Premium Training</div>
                    <h3 className="text-2xl font-black">TRAIN LIKE A PRO</h3>
                  </div>
                </div>
                <div className="absolute top-8 right-8 w-16 h-16 border-4 border-[#D6A23A] rounded-full flex items-center justify-center backdrop-blur-sm bg-black/30">
                  <Play className="w-6 h-6 text-[#D6A23A]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSFEED SECTION */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#111]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-tight">
              <span className="text-white">NEWSFEED</span> <span className="text-[#FF5722]">INSIDE THE ACADEMY</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="rounded-xl relative overflow-hidden group cursor-pointer h-80 sm:h-96">
              <img src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=2029&auto=format&fit=crop" alt="FROM PASSION TO PROFESSION" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/50 to-transparent"></div>
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 flex items-center gap-1.5 sm:gap-2 bg-[#D6A23A]/90 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border-2 border-[#D6A23A]">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                <span className="text-black font-bold text-xs sm:text-sm uppercase tracking-wide">Founder</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                <div className="text-[#FF5722] uppercase text-[10px] sm:text-xs font-bold tracking-wide mb-2 sm:mb-3">Success Story</div>
                <h3 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight uppercase mb-1 sm:mb-2">FROM PASSION TO PROFESSION</h3>
                <p className="text-[#E0E0E0] text-xs sm:text-sm md:text-base font-medium leading-relaxed">Two Athletes Who Turned Their Dreams Into Reality</p>
              </div>
            </div>
            <div className="rounded-xl relative overflow-hidden group cursor-pointer h-80 sm:h-96">
              <img src="https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=1974&auto=format&fit=crop" alt="BUILDING THE FUTURE OF SPORTS" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/50 to-transparent"></div>
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 flex items-center gap-1.5 sm:gap-2 bg-[#D6A23A]/90 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border-2 border-[#D6A23A]">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                <span className="text-black font-bold text-xs sm:text-sm uppercase tracking-wide">Founder</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                <div className="text-[#FF5722] uppercase text-[10px] sm:text-xs font-bold tracking-wide mb-2 sm:mb-3">Success Story</div>
                <h3 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight uppercase mb-1 sm:mb-2">BUILDING THE FUTURE OF SPORTS</h3>
                <p className="text-[#E0E0E0] text-xs sm:text-sm md:text-base font-medium leading-relaxed">Dedication, Discipline, and Dreams Coming True</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FUTURE OF SPORTS TRAINING */}
      <section className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden text-black">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-2 h-2 bg-[#D6A23A] rounded-full animate-ping"></div>
          <div className="absolute top-40 right-20 w-2 h-2 bg-[#0C6B3F] rounded-full animate-ping" style={{ animationDelay: "1s" }}></div>
          <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-[#D6A23A] rounded-full animate-ping" style={{ animationDelay: "2s" }}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
            <div className="text-gray-900 space-y-4 sm:space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-6 sm:mb-8 leading-tight">
                WELCOME TO THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6A23A] to-[#FFA500]">FUTURE OF SPORTS TRAINING</span>
              </h2>
              <div className="space-y-4 sm:space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
                <p>At ALPHA Sports Academy, we are committed to developing the next generation of elite athletes through a proven, <strong className="text-[#D6A23A]">holistic development</strong> approach.</p>
                <p>Our <strong className="text-[#D6A23A]">world-class coaching staff</strong> combines cutting-edge sports science with the <strong className="text-[#D6A23A]">ALPHA Methodology</strong> — a comprehensive training system that develops not just skill, but mindset, character, and a championship mentality.</p>
                <p>From youth academy programs to elite performance training, we provide a clear pathway for athletes of all levels to reach their full potential.</p>
              </div>
            </div>
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] group">
              <div className="relative h-full rounded-2xl overflow-hidden border-2 sm:border-4 border-[#D6A23A] shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_60px_rgba(214,162,58,0.6)]">
                <img src="https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=2070&auto=format&fit=crop" alt="Coaching Team" className="w-full h-full object-cover brightness-110 contrast-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 px-4 sm:px-6 z-20">
                  <div className="bg-gradient-to-r from-[#0C6B3F]/90 to-[#064D2C]/90 border-2 border-[#D6A23A] rounded-lg px-4 sm:px-6 py-2 sm:py-3 shadow-[0_0_20px_rgba(214,162,58,0.6)] backdrop-blur-sm">
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white text-center uppercase tracking-wide">Champions Are Made, Not Born</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS SECTION */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#111]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-10 sm:mb-12 md:mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-tight">
              <span className="text-white">OUR</span> <span className="text-[#FF5722]">PROGRAMS</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="flex flex-col gap-6 rounded-xl p-6 sm:p-8 text-center bg-gradient-to-b from-[#1A1A1A] to-[#2A2A2A] text-white hover:from-[#2A2A2A] hover:to-[#1A1A1A] transition-all duration-300 group">
              <h3 className="text-2xl sm:text-3xl font-bold uppercase mb-2 sm:mb-3">REGULAR PROGRAMS</h3>
              <p className="text-[#FF5722] font-semibold text-sm sm:text-base mb-3 sm:mb-4">For ages U8-U13</p>
              <p className="text-white/80 text-sm sm:text-base mb-4 sm:mb-6">Professional football training programs in Tamil Nadu for youth players aged 8-13. Build foundational football skills, tactical awareness, and team coordination.</p>
              <Link href="/sportsdetail" className="inline-flex items-center justify-center gap-2 border border-white text-white hover:bg-white hover:text-black uppercase font-bold text-sm h-10 px-4 py-2 w-full transition-all duration-300 rounded-md">
                Enquire Now <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex flex-col gap-6 rounded-xl p-6 sm:p-8 text-center bg-gradient-to-b from-[#1A1A1A] to-[#2A2A2A] text-white hover:from-[#2A2A2A] hover:to-[#1A1A1A] transition-all duration-300 group">
              <h3 className="text-2xl sm:text-3xl font-bold uppercase mb-2 sm:mb-3">ADVANCED PROGRAMS</h3>
              <p className="text-[#FF5722] font-semibold text-sm sm:text-base mb-3 sm:mb-4">For ages U14-U18</p>
              <p className="text-white/80 text-sm sm:text-base mb-4 sm:mb-6">Intensive tactical training, physical conditioning, and match-scenario preparation for competitive young athletes aiming for excellence.</p>
              <Link href="/sportsdetail" className="inline-flex items-center justify-center gap-2 border border-white text-white hover:bg-white hover:text-black uppercase font-bold text-sm h-10 px-4 py-2 w-full transition-all duration-300 rounded-md">
                Enquire Now <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex flex-col gap-6 rounded-xl p-6 sm:p-8 text-center bg-gradient-to-b from-[#1A1A1A] to-[#2A2A2A] text-white hover:from-[#2A2A2A] hover:to-[#1A1A1A] transition-all duration-300 group">
              <h3 className="text-2xl sm:text-3xl font-bold uppercase mb-2 sm:mb-3">ELITE DEVELOPMENT</h3>
              <p className="text-[#FF5722] font-semibold text-sm sm:text-base mb-3 sm:mb-4">For ages U19+</p>
              <p className="text-white/80 text-sm sm:text-base mb-4 sm:mb-6">Professional pathway program focused on peak physical performance, advanced tactics, and exposure to professional scouting networks.</p>
              <Link href="/sportsdetail" className="inline-flex items-center justify-center gap-2 border border-white text-white hover:bg-white hover:text-black uppercase font-bold text-sm h-10 px-4 py-2 w-full transition-all duration-300 rounded-md">
                Enquire Now <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
