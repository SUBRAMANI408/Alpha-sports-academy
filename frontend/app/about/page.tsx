import { Target, Eye, Users, Trophy, Star, Zap } from "lucide-react";

export default function AboutPage() {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D6A23A]/10 border border-[#D6A23A]/30 rounded-full mb-6">
            <span className="w-2 h-2 bg-[#D6A23A] rounded-full animate-pulse"></span>
            <span className="text-[#D6A23A] font-bold text-sm uppercase tracking-wider">Our Story</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-tight mb-6">
            <span className="text-white">ABOUT </span>
            <span className="text-[#D6A23A]">ALPHA SPORTS</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">The premier multi-sport training destination for aspiring athletes. Professional football &amp; badminton coaching in Tamil Nadu.</p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-16 sm:py-20 bg-[#111]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#222] p-8 sm:p-10 rounded-2xl border border-[#D6A23A]/20 hover:border-[#D6A23A]/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(214,162,58,0.15)]">
              <div className="w-14 h-14 bg-[#D6A23A]/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-[#D6A23A]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#D6A23A] mb-4">Our Mission</h2>
              <p className="text-white/70 leading-relaxed">To develop the next generation of elite athletes through holistic training that builds skill, character, and a championship mentality. We aim to make world-class coaching accessible to every aspiring sportsperson in India.</p>
            </div>
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#222] p-8 sm:p-10 rounded-2xl border border-[#0C6B3F]/20 hover:border-[#0C6B3F]/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(12,107,63,0.15)]">
              <div className="w-14 h-14 bg-[#0C6B3F]/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-[#0C6B3F]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#0C6B3F] mb-4">Our Vision</h2>
              <p className="text-white/70 leading-relaxed">To become India&apos;s leading sports academy, producing athletes who compete at the highest domestic and international levels. We envision a future where every child has a clear pathway from grassroots to professional sport.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY ALPHA */}
      <section className="py-16 sm:py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-center mb-12 sm:mb-16">
            WHY <span className="text-[#D6A23A]">ALPHA?</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: Trophy, title: "AFC Licensed Coaches", desc: "Our coaches hold AFC certifications, ensuring world-class tactical and technical training for every athlete." },
              { icon: Users, title: "500+ Athletes Trained", desc: "A proven track record of developing hundreds of athletes across football and badminton programs." },
              { icon: Star, title: "Holistic Development", desc: "We develop not just athletic skill but also mental toughness, discipline, and leadership in every student." },
              { icon: Zap, title: "The ALPHA Methodology", desc: "A proprietary training system combining sports science, performance analytics, and personalized coaching plans." },
              { icon: Target, title: "Multi-Location Access", desc: "Train at our premier facilities across Tamil Nadu." },
              { icon: Eye, title: "Clear Pathway to Pro", desc: "From youth academy to elite development, we offer a structured progression pathway for every skill level." },
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-b from-[#1A1A1A] to-[#222] p-6 sm:p-8 rounded-xl border border-white/5 hover:border-[#D6A23A]/30 transition-all duration-300 group hover:translate-y-[-4px]">
                <div className="w-12 h-12 bg-[#D6A23A]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#D6A23A]/20 transition-colors">
                  <item.icon className="w-6 h-6 text-[#D6A23A]" />
                </div>
                <h3 className="text-lg font-bold uppercase text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
