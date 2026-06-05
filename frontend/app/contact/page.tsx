import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="bg-black text-white pt-32">
      {/* HERO BANNER */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ 
            backgroundImage: "url('/stadium_raw.png')",
            filter: "grayscale(100%) sepia(100%) hue-rotate(5deg) saturate(200%) brightness(0.4)"
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0C6B3F]/10 border border-[#0C6B3F]/30 rounded-full mb-6">
            <span className="w-2 h-2 bg-[#0C6B3F] rounded-full animate-pulse"></span>
            <span className="text-[#0C6B3F] font-bold text-sm uppercase tracking-wider">Get In Touch</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-tight mb-6">
            <span className="text-white">CONTACT </span>
            <span className="text-[#D6A23A]">US</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">Ready to start your journey? Reach out to ALPHA Sports Academy today.</p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="py-16 sm:py-20 bg-[#111]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16">
            {/* CONTACT INFO */}
            <div className="space-y-8">
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#D6A23A]">Reach Out To Us</h2>
              <div className="space-y-6">
                <a href="tel:1234567890" className="flex items-start gap-4 p-5 bg-[#1A1A1A] rounded-xl border border-white/5 hover:border-[#D6A23A]/30 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-[#D6A23A]/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#D6A23A]/20 transition-colors">
                    <Phone className="w-5 h-5 text-[#D6A23A]" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-1">Phone</h3>
                    <p className="text-white/70">1234567890</p>
                  </div>
                </a>
                <Link href="/join" className="flex items-start gap-4 p-5 bg-[#1A1A1A] rounded-xl border border-white/5 hover:border-[#0C6B3F]/30 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-[#0C6B3F]/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#0C6B3F]/20 transition-colors">
                    <MessageCircle className="w-5 h-5 text-[#0C6B3F]" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-1">Join Academy</h3>
                    <p className="text-white/70">Register to join ALPHA Sports Academy</p>
                  </div>
                </Link>
                <div className="flex items-start gap-4 p-5 bg-[#1A1A1A] rounded-xl border border-white/5">
                  <div className="w-12 h-12 bg-[#D6A23A]/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#D6A23A]" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-1">Locations</h3>
                    <p className="text-white/70">Tamil Nadu, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 bg-[#1A1A1A] rounded-xl border border-white/5">
                  <div className="w-12 h-12 bg-[#0C6B3F]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#0C6B3F]" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-1">Training Hours</h3>
                    <p className="text-white/70">Mon - Sat: 6:00 AM - 9:00 PM</p>
                    <p className="text-white/70">Sunday: 7:00 AM - 12:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CONTACT FORM */}
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#222] p-8 sm:p-10 rounded-2xl border border-[#D6A23A]/20">
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-white mb-8">Send A Message</h2>
              <form className="space-y-5">
                <div>
                  <label className="block text-white/60 text-sm font-bold uppercase tracking-wider mb-2">Full Name</label>
                  <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-[#D6A23A] focus:outline-none transition-colors" placeholder="Enter your name" />
                </div>
                <div>
                  <label className="block text-white/60 text-sm font-bold uppercase tracking-wider mb-2">Phone Number</label>
                  <input type="tel" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-[#D6A23A] focus:outline-none transition-colors" placeholder="+91 XXXXX XXXXX" />
                </div>
                <div>
                  <label className="block text-white/60 text-sm font-bold uppercase tracking-wider mb-2">Email</label>
                  <input type="email" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-[#D6A23A] focus:outline-none transition-colors" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-white/60 text-sm font-bold uppercase tracking-wider mb-2">Message</label>
                  <textarea rows={4} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-[#D6A23A] focus:outline-none transition-colors resize-none" placeholder="Tell us about your goals..."></textarea>
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-[#D6A23A] to-[#F5D06C] text-black font-black uppercase tracking-wider py-4 rounded-lg hover:from-[#F5D06C] hover:to-[#D6A23A] transition-all duration-300 hover:scale-[1.02] shadow-[0_0_25px_rgba(214,162,58,0.4)] hover:shadow-[0_0_40px_rgba(214,162,58,0.7)]">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
