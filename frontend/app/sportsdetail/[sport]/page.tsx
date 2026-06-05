"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Trophy, User, ClipboardList } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SportLoading from "./loading";

interface SportDetail {
  name: string;
  themeColor: string; // Tailwind color classes for text
  borderColor: string; // Tailwind border color class
  bgGradient: string; // Gradient background
  ctaBg: string; // Background for CTA button
  ctaHoverBg: string; // Hover background for CTA button
  ctaShadow: string; // Shadow for CTA button
  tagline: string;
  description: string;
  bannerImage: string;
  worldCupTitle: string;
  worldCupWinner: string;
  bestPlayerTitle: string;
  bestPlayer: string;
  rules: string[];
}

const sportsData: Record<string, SportDetail> = {
  football: {
    name: "Football",
    themeColor: "text-[#0C6B3F]",
    borderColor: "border-[#0C6B3F]",
    bgGradient: "from-[#0C6B3F]/20 to-black",
    ctaBg: "bg-[#0C6B3F] text-white",
    ctaHoverBg: "hover:bg-[#0E804B]",
    ctaShadow: "shadow-[0_0_25px_rgba(12,107,63,0.4)]",
    tagline: "Master the Beautiful Game",
    description: "Our football program develops technically proficient, tactically smart, and physically dominant players. Following the proprietary ALPHA Methodology, we train players from grassroots to elite competitive levels, creating a pathway to professional clubs.",
    bannerImage: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=2029&auto=format&fit=crop",
    worldCupTitle: "Last FIFA World Cup Champion",
    worldCupWinner: "Argentina (2022)",
    bestPlayerTitle: "Featured Legend / Best Player",
    bestPlayer: "Lionel Messi & Cristiano Ronaldo",
    rules: [
      "Match Duration: Played in two 45-minute halves (total 90 minutes) with a 15-minute half-time interval.",
      "Teams: 11 players on each side on the pitch, including one designated goalkeeper.",
      "No Handballs: Players are not allowed to touch the ball with their hands or arms, except for the goalkeeper within their penalty box.",
      "Offside Rule: A player is caught offside if they are closer to the opponent's goal line than both the ball and the second-last opponent when the ball is played to them.",
      "Fouls & Cards: Violations result in free kicks or penalties. A yellow card is a caution; two yellow cards or a direct red card results in ejection.",
      "Scoring: A goal is scored when the entire ball crosses the goal line between the goalposts and under the crossbar."
    ]
  },
  badminton: {
    name: "Badminton",
    themeColor: "text-[#D6A23A]",
    borderColor: "border-[#D6A23A]",
    bgGradient: "from-[#D6A23A]/20 to-black",
    ctaBg: "bg-[#D6A23A] text-black",
    ctaHoverBg: "hover:bg-[#F5D06C]",
    ctaShadow: "shadow-[0_0_25px_rgba(214,162,58,0.4)]",
    tagline: "Speed, Power, Precision",
    description: "Our badminton program focuses on court speed, agility, racket control, explosive power, and tactical placement. Led by professional state and national level coaches, we nurture competitive athlete profiles ready to conquer national tournaments.",
    bannerImage: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=2070&auto=format&fit=crop",
    worldCupTitle: "Last BWF World Champion (Singles)",
    worldCupWinner: "Kunlavut Vitidsarn (Men's) / An Se-young (Women's) (2023)",
    bestPlayerTitle: "Featured Legend / Best Player",
    bestPlayer: "Viktor Axelsen & Lin Dan",
    rules: [
      "Scoring System: Played as best-of-three games to 21 points. A point is scored on every rally (rally scoring).",
      "Deuce Rule: If the score reaches 20-all, the side that gains a 2-point lead first (e.g. 22-20) wins the game. Maximum cap is 30 points.",
      "Underhand Serve: Serves must be hit diagonally underhand, with the shuttlecock contacted below the server's waist.",
      "In-Bounds: Rulings are based on where the shuttlecock lands. If any part of it touches the line, it is considered in-bounds.",
      "Faults: Touching the net, hitting the shuttlecock twice in a row, or carrying the shuttlecock on the racket is considered a fault.",
      "Singles vs Doubles Boundaries: Doubles uses a wider court area but a shorter service court length compared to singles play."
    ]
  },
  tennis: {
    name: "Tennis",
    themeColor: "text-[#D6A23A]",
    borderColor: "border-[#D6A23A]",
    bgGradient: "from-[#D6A23A]/20 to-black",
    ctaBg: "bg-[#D6A23A] text-black",
    ctaHoverBg: "hover:bg-[#F5D06C]",
    ctaShadow: "shadow-[0_0_25px_rgba(214,162,58,0.4)]",
    tagline: "Power, Precision, Endurance",
    description: "Our tennis academy focuses on developing explosive baseline play, serve mechanics, court coverage speed, and tactical rally positioning. Our program is structured to prepare junior athletes for national tournament success.",
    bannerImage: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=2070&auto=format&fit=crop",
    worldCupTitle: "Last Davis Cup Champion (Team)",
    worldCupWinner: "Italy (2023)",
    bestPlayerTitle: "Featured Legend / Best Player",
    bestPlayer: "Novak Djokovic (All-Time Record Grand Slam Champion)",
    rules: [
      "Scoring System: Game points increment as Love (0) -> 15 -> 30 -> 40 -> Game. Tied at 40-40 is called Deuce, requiring 2 consecutive points to win.",
      "Sets and Matches: A set is won by the first player to win 6 games with a margin of 2. Matches are usually best-of-3 sets (or best-of-5 in Men's Grand Slams).",
      "Serve Guidelines: The server must serve diagonally into the opposite service box. They get two service attempts (first serve and second serve).",
      "Double Fault: Failing to land either serve in the correct box results in a double fault, awarding the point to the receiver.",
      "Let Call: If a serve hits the net cord but lands in the correct service box, it is called a 'let' and is replayed.",
      "One Bounce Limit: The ball can bounce only once on a player's side before it must be returned over the net."
    ]
  },
  cricket: {
    name: "Cricket",
    themeColor: "text-blue-500",
    borderColor: "border-blue-500",
    bgGradient: "from-blue-500/20 to-black",
    ctaBg: "bg-blue-600 text-white",
    ctaHoverBg: "hover:bg-blue-500",
    ctaShadow: "shadow-[0_0_25px_rgba(59,130,246,0.4)]",
    tagline: "Traditional Skill, Modern Power",
    description: "From refined batting footwork and swing bowling controls to modern high-performance game-ready conditioning, our cricket training program utilizes bowling machines, Turf Wickets, and indoor practice nets.",
    bannerImage: "/cricket.png",
    worldCupTitle: "Last Men's ICC World Cup Champion",
    worldCupWinner: "Australia (2023)",
    bestPlayerTitle: "Featured Legend / Best Player",
    bestPlayer: "Virat Kohli & Sachin Tendulkar",
    rules: [
      "Innings Structure: Two teams of 11 players. One team bats to set a target score, and the other team bowls and fields to get the batters out.",
      "Overs: The game is divided into overs. Each over consists of 6 legal deliveries bowled from one end of the pitch.",
      "Scoring Runs: Batters score by running between the wickets, or hitting boundaries: 4 runs if the ball bounces before crossing the line, 6 runs if it clears it in the air.",
      "Ways to Get Out: Batters can be dismissed by Bowled (stumps hit), Caught (fielder catches in the air), LBW (ball hits pad in line), Run Out, or Stumped.",
      "Extras: Penalty runs are awarded for illegal deliveries like Wides (too far from batter) or No-Balls (stepping over the crease line).",
      "Formats: Formats include Test matches (5 days), One Day Internationals (50 overs per side), and T20 matches (20 overs per side)."
    ]
  },
  swimming: {
    name: "Swimming",
    themeColor: "text-[#D6A23A]",
    borderColor: "border-[#D6A23A]",
    bgGradient: "from-[#D6A23A]/20 to-black",
    ctaBg: "bg-transparent border-2 border-[#D6A23A] text-[#D6A23A]",
    ctaHoverBg: "hover:bg-[#D6A23A] hover:text-black",
    ctaShadow: "shadow-[0_0_20px_rgba(214,162,58,0.2)] hover:shadow-[0_0_30px_rgba(214,162,58,0.5)]",
    tagline: "Strength, Rhythm, Aerobic Power",
    description: "From basic water survival skills and stroke refinement (freestyle, breaststroke, backstroke, and fly) to elite speed conditioning, our swimming program takes place in clean, temperature-controlled Olympic pools.",
    bannerImage: "/swimming.png",
    worldCupTitle: "Last World Aquatics Championships Winner",
    worldCupWinner: "United States (2024 Team Champion)",
    bestPlayerTitle: "Featured Legend / Best Player",
    bestPlayer: "Michael Phelps & Katie Ledecky",
    rules: [
      "Stroke Compliance: Swimmers must adhere to rules for their specific stroke (Freestyle, Backstroke, Breaststroke, Butterfly) or Individual Medley.",
      "Starting Signal: Swimmers must remain completely stationary on the starting block until the starter's horn. False starts result in disqualification.",
      "Wall Touches: In turns and finishes, swimmers must touch the wall. Breaststroke and butterfly require simultaneous touch with both hands.",
      "Underwater Limit: Swimmers are allowed to swim submerged for a maximum of 15 meters after the start and each turn before breaking the surface.",
      "Lane Discipline: Swimmers must stay within their designated lane line for the entire duration of the race.",
      "Obstruction: Interfering with another swimmer by swimming across lanes or touching another athlete results in immediate disqualification."
    ]
  }
};

export default function SportDetailPage() {
  const params = useParams();
  const sport = (params?.sport as string) || "";
  const data = sportsData[sport.toLowerCase()];

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800); // 1.8 seconds loading screen animation
    return () => clearTimeout(timer);
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-black mb-4">SPORT NOT FOUND</h1>
        <Link
          href="/sportsdetail"
          className="text-[#D6A23A] underline uppercase text-sm font-bold tracking-wider"
        >
          Back to Sports
        </Link>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <SportLoading />
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="bg-black text-white min-h-screen pt-32 pb-20 relative overflow-hidden"
        >
          {/* Dynamic Background Gradient */}
          <div className={`absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b ${data.bgGradient} opacity-20 pointer-events-none z-0`}></div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-4xl">
            {/* Back Link */}
            <Link
              href="/sportsdetail"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors group font-bold uppercase text-xs tracking-wider"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Sports
            </Link>

            {/* Hero Section */}
            <div className="space-y-6 mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight">
                {data.name} <span className={data.themeColor}>DETAILS</span>
              </h1>
              <p className="text-xl sm:text-2xl text-[#FF5722] font-black uppercase tracking-widest">{data.tagline}</p>
              <p className="text-white/70 leading-relaxed text-base sm:text-lg">{data.description}</p>
            </div>

            {/* Banner Image */}
            <div className={`relative h-[300px] sm:h-[400px] rounded-3xl overflow-hidden border-2 ${data.borderColor}/30 shadow-2xl mb-12 group`}>
              <img src={data.bannerImage} alt={data.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            </div>

            {/* World Cup & Best Player Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gradient-to-br from-[#12161A] to-[#0B0C0E] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Trophy className={`w-6 h-6 ${data.themeColor}`} />
                  <h3 className="font-bold text-xs uppercase text-white/40 tracking-wider">{data.worldCupTitle}</h3>
                </div>
                <p className="text-lg sm:text-xl font-black text-white">{data.worldCupWinner}</p>
              </div>
              <div className="bg-gradient-to-br from-[#12161A] to-[#0B0C0E] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <User className={`w-6 h-6 ${data.themeColor}`} />
                  <h3 className="font-bold text-xs uppercase text-white/40 tracking-wider">{data.bestPlayerTitle}</h3>
                </div>
                <p className="text-lg sm:text-xl font-black text-white">{data.bestPlayer}</p>
              </div>
            </div>

            {/* Rules of the Sport */}
            <div className="bg-gradient-to-br from-[#12161A] to-[#0B0C0E] border border-white/5 rounded-3xl p-8 sm:p-10 mb-12">
              <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-4">
                <ClipboardList className={`w-7 h-7 ${data.themeColor}`} />
                <h2 className="text-2xl font-black uppercase text-white">RULES OF {data.name}</h2>
              </div>
              <div className="space-y-6">
                {data.rules.map((rule, idx) => {
                  const [title, description] = rule.split(": ");
                  return (
                    <div key={idx} className="flex gap-4 items-start">
                      <span className={`w-6 h-6 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-xs font-bold ${data.themeColor}`}>
                        {idx + 1}
                      </span>
                      <div className="space-y-1">
                        <h4 className="font-bold text-white uppercase text-sm sm:text-base">{title}</h4>
                        <p className="text-white/50 text-xs sm:text-sm leading-relaxed">{description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-[#0C6B3F]/10 via-[#0C6B3F]/5 to-black border border-[#0C6B3F]/20 rounded-3xl p-8 sm:p-12">
              <h3 className="text-2xl font-black uppercase text-white mb-4">READY TO START YOUR TRAINING?</h3>
              <p className="text-white/60 max-w-lg mx-auto mb-8 text-sm sm:text-base">
                Enroll today at ALPHA Sports Academy to train with expert coaches and access premium facilities across Tamil Nadu.
              </p>
              <Link
                href={`/join?sport=${sport}`}
                className={`inline-flex items-center gap-2 font-black uppercase text-xs sm:text-sm px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 ${data.ctaBg} ${data.ctaHoverBg} ${data.ctaShadow}`}
              >
                Register For {data.name}
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
