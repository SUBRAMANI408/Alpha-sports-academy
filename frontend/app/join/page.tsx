"use client";

import { Trophy, Star, ChevronRight, Users, Shield, Zap } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import SportLoading from "../sportsdetail/[sport]/loading";

// Mapping of sports to their background images and descriptions
const SPORT_ASSETS: Record<string, { bg: string; title: string }> = {
  football: {
    bg: "/stadium_raw.png",
    title: "Football Academy",
  },
  badminton: {
    bg: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=2070&auto=format&fit=crop",
    title: "Badminton Academy",
  },
  tennis: {
    bg: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=2070&auto=format&fit=crop",
    title: "Tennis Academy",
  },
  cricket: {
    bg: "/cricket.png",
    title: "Cricket Academy",
  },
  swimming: {
    bg: "/swimming.png",
    title: "Swimming Academy",
  },
};

function JoinForm() {
  const searchParams = useSearchParams();
  const [selectedSport, setSelectedSport] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);

  const sportParam = searchParams.get("sport")?.toLowerCase() || "";

  useEffect(() => {
    if (sportParam && sportParam in SPORT_ASSETS) {
      setSelectedSport(sportParam);
    }
  }, [sportParam]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800); // 1.8 seconds loading screen animation
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !phone || !age || !selectedSport || !selectedProgram) {
      alert("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
  };

  // Determine current background and title
  const currentAsset = SPORT_ASSETS[selectedSport] || {
    bg: "/stadium_raw.png",
    title: "ALPHA Sports Academy",
  };

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <SportLoading sportName={sportParam} />
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="bg-black text-white pt-32 min-h-screen"
        >
          {/* HERO BANNER */}
          <section className="relative py-20 sm:py-28 overflow-hidden transition-all duration-700">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-25 transition-all duration-700 ease-in-out"
              style={{ 
                backgroundImage: `url('${currentAsset.bg}')`,
                filter: "grayscale(100%) sepia(100%) hue-rotate(5deg) saturate(200%) brightness(0.4)"
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
            <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D6A23A]/10 border border-[#D6A23A]/30 rounded-full mb-6">
                <span className="w-2 h-2 bg-[#D6A23A] rounded-full animate-pulse"></span>
                <span className="text-[#D6A23A] font-bold text-sm uppercase tracking-wider">Start Your Journey</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-tight mb-6">
                <span className="text-white">JOIN </span>
                <span className="text-[#D6A23A]">{currentAsset.title.split(" ")[0]}</span>
                {currentAsset.title.split(" ").slice(1).length > 0 && (
                  <span className="text-white"> {currentAsset.title.split(" ").slice(1).join(" ")}</span>
                )}
              </h1>
              <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                Take the first step towards becoming a champion. Fill in your details below and our team will get in touch.
              </p>
            </div>
          </section>

          {/* JOIN FORM + BENEFITS */}
          <section className="py-16 sm:py-20 bg-[#111]">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="grid lg:grid-cols-2 gap-10 sm:gap-16">
                {/* FORM */}
                <div className="bg-gradient-to-br from-[#1A1A1A] to-[#222] p-8 sm:p-10 rounded-2xl border border-[#D6A23A]/20 shadow-[0_0_40px_rgba(214,162,58,0.1)]">
                  {submitted ? (
                    <div className="text-center py-12 space-y-6">
                      <div className="w-20 h-20 bg-[#0C6B3F]/10 border border-[#0C6B3F]/30 rounded-full flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(12,107,63,0.3)]">
                        <Trophy className="w-10 h-10 text-[#0C6B3F] animate-bounce" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#D6A23A]">Registration Received!</h3>
                        <p className="text-white/70 text-sm max-w-md mx-auto">
                          Thank you for registering for the <strong>{SPORT_ASSETS[selectedSport]?.title || selectedSport}</strong> {selectedProgram} program. Our coaching coordinator will contact you at <strong>{phone}</strong> within 24 hours to schedule your free trial session.
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFirstName("");
                          setLastName("");
                          setEmail("");
                          setPhone("");
                          setAge("");
                          setMessage("");
                        }}
                        className="inline-flex items-center gap-2 bg-[#D6A23A] text-black font-black uppercase text-xs sm:text-sm px-6 py-3 rounded-lg hover:bg-[#F5D06C] transition-all duration-300"
                      >
                        Register Another Athlete
                      </button>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#D6A23A] mb-2">Register Now</h2>
                      <p className="text-white/50 text-sm mb-8">Fill in the form and we&apos;ll get back to you within 24 hours.</p>
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-white/60 text-sm font-bold uppercase tracking-wider mb-2">First Name *</label>
                            <input
                              type="text"
                              required
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
                              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-[#D6A23A] focus:outline-none transition-colors"
                              placeholder="First name"
                            />
                          </div>
                          <div>
                            <label className="block text-white/60 text-sm font-bold uppercase tracking-wider mb-2">Last Name *</label>
                            <input
                              type="text"
                              required
                              value={lastName}
                              onChange={(e) => setLastName(e.target.value)}
                              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-[#D6A23A] focus:outline-none transition-colors"
                              placeholder="Last name"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-white/60 text-sm font-bold uppercase tracking-wider mb-2">Email Address *</label>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-[#D6A23A] focus:outline-none transition-colors"
                            placeholder="your@email.com"
                          />
                        </div>
                        <div>
                          <label className="block text-white/60 text-sm font-bold uppercase tracking-wider mb-2">Phone Number *</label>
                          <input
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-[#D6A23A] focus:outline-none transition-colors"
                            placeholder="+91 XXXXX XXXXX"
                          />
                        </div>
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-white/60 text-sm font-bold uppercase tracking-wider mb-2">Age *</label>
                            <input
                              type="number"
                              required
                              value={age}
                              onChange={(e) => setAge(e.target.value)}
                              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-[#D6A23A] focus:outline-none transition-colors"
                              placeholder="Enter age"
                            />
                          </div>
                          <div>
                            <label className="block text-white/60 text-sm font-bold uppercase tracking-wider mb-2">Select Sport *</label>
                            <select
                              required
                              value={selectedSport}
                              onChange={(e) => setSelectedSport(e.target.value)}
                              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#D6A23A] focus:outline-none transition-colors appearance-none"
                            >
                              <option value="">Choose a sport...</option>
                              <option value="football">Football</option>
                              <option value="badminton">Badminton</option>
                              <option value="tennis">Tennis</option>
                              <option value="cricket">Cricket</option>
                              <option value="swimming">Swimming</option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <label className="block text-white/60 text-sm font-bold uppercase tracking-wider mb-2">Select Program *</label>
                          <select
                            required
                            value={selectedProgram}
                            onChange={(e) => setSelectedProgram(e.target.value)}
                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#D6A23A] focus:outline-none transition-colors appearance-none"
                          >
                            <option value="">Choose a program...</option>
                            <option value="Regular Programs (U8-U13)">Regular Programs (U8-U13)</option>
                            <option value="Advanced Programs (U14-U18)">Advanced Programs (U14-U18)</option>
                            <option value="Elite Development (U19+)">Elite Development (U19+)</option>
                            <option value="Corporate Training">Corporate Training</option>
                            <option value="1-to-1 Coaching">1-to-1 Coaching</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-white/60 text-sm font-bold uppercase tracking-wider mb-2">Message (Optional)</label>
                          <textarea
                            rows={3}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-[#D6A23A] focus:outline-none transition-colors resize-none"
                            placeholder="Tell us about your goals or any questions..."
                          ></textarea>
                        </div>
                        <button type="submit" className="w-full bg-gradient-to-r from-[#D6A23A] to-[#F5D06C] text-black font-black uppercase tracking-wider py-4 rounded-lg hover:from-[#F5D06C] hover:to-[#D6A23A] transition-all duration-300 hover:scale-[1.02] shadow-[0_0_25px_rgba(214,162,58,0.4)] hover:shadow-[0_0_40px_rgba(214,162,58,0.7)] flex items-center justify-center gap-2">
                          Submit Application <ChevronRight className="w-5 h-5" />
                        </button>
                      </form>
                    </>
                  )}
                </div>

                {/* BENEFITS */}
                <div className="space-y-6">
                  <h2 className="text-2xl sm:text-3xl font-black uppercase text-white mb-6">Why Join <span className="text-[#D6A23A]">ALPHA?</span></h2>
                  {[
                    { icon: Trophy, title: "AFC Licensed Coaches", desc: "Train under internationally certified coaches who have played and coached at the highest levels." },
                    { icon: Users, title: "Community of 500+ Athletes", desc: "Join a thriving community of dedicated athletes who push each other to be the best." },
                    { icon: Star, title: "Free Trial Session", desc: "Experience our training methodology firsthand with a complimentary trial session before committing." },
                    { icon: Shield, title: "Safe & Professional Environment", desc: "World-class facilities with proper safety measures, insurance coverage, and medical support." },
                    { icon: Zap, title: "Proven ALPHA Methodology", desc: "Our proprietary training system has produced athletes who compete at national and international levels." },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-5 bg-[#1A1A1A] rounded-xl border border-white/5 hover:border-[#D6A23A]/20 transition-all duration-300 group">
                      <div className="w-12 h-12 bg-[#D6A23A]/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#D6A23A]/20 transition-colors">
                        <item.icon className="w-5 h-5 text-[#D6A23A]" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-1">{item.title}</h3>
                        <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function JoinPage() {
  return (
    <Suspense fallback={<div className="bg-black min-h-screen text-white pt-32 text-center">Loading Registration Form...</div>}>
      <JoinForm />
    </Suspense>
  );
}
