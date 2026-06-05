import { Trophy, Calendar, MapPin, Users } from "lucide-react";

export default function TournamentsPage() {
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
            <span className="text-[#D6A23A] font-bold text-sm uppercase tracking-wider">Compete &amp; Conquer</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-tight mb-6">
            <span className="text-white">TOURNAMENTS</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">Where champions are tested. Compete in ALPHA-organized and partner tournaments.</p>
        </div>
      </section>

      {/* UPCOMING TOURNAMENTS */}
      <section className="py-16 sm:py-20 bg-[#111]">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black uppercase mb-10 sm:mb-12">
            <span className="text-white">UPCOMING </span>
            <span className="text-[#D6A23A]">EVENTS</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: "ALPHA Inter-Academy Cup 2025", date: "July 15-20, 2025", location: "Chennai", teams: "16 Teams", image: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?q=80&w=2071&auto=format&fit=crop" },
              { title: "Tamil Nadu Youth Football Championship", date: "August 5-10, 2025", location: "Tamil Nadu", teams: "24 Teams", image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=2029&auto=format&fit=crop" },
              { title: "National Junior Badminton Open", date: "September 1-5, 2025", location: "Coimbatore", teams: "32 Players", image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=2070&auto=format&fit=crop" },
            ].map((tourney, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden group cursor-pointer h-96 border border-white/5 hover:border-[#D6A23A]/30 transition-all duration-500">
                <img src={tourney.image} alt={tourney.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-[#FF5722] text-white text-xs font-bold uppercase px-3 py-1.5 rounded-full">Upcoming</div>
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-black uppercase text-white mb-3">{tourney.title}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-white/70 text-sm">
                      <Calendar className="w-4 h-4 text-[#D6A23A]" />
                      {tourney.date}
                    </div>
                    <div className="flex items-center gap-2 text-white/70 text-sm">
                      <MapPin className="w-4 h-4 text-[#D6A23A]" />
                      {tourney.location}
                    </div>
                    <div className="flex items-center gap-2 text-white/70 text-sm">
                      <Users className="w-4 h-4 text-[#D6A23A]" />
                      {tourney.teams}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAST HIGHLIGHTS */}
      <section className="py-16 sm:py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black uppercase mb-10 sm:mb-12">
            <span className="text-white">PAST </span>
            <span className="text-[#FF5722]">HIGHLIGHTS</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#222] p-6 sm:p-8 rounded-2xl border border-white/5">
              <Trophy className="w-10 h-10 text-[#D6A23A] mb-4" />
              <h3 className="text-xl font-bold text-white uppercase mb-2">2025 National Championships</h3>
              <p className="text-white/60 text-sm leading-relaxed">Our athletes dominated the 2025 National Championships, securing 3 gold medals and 2 silvers across football and badminton categories.</p>
            </div>
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#222] p-6 sm:p-8 rounded-2xl border border-white/5">
              <Trophy className="w-10 h-10 text-[#0C6B3F] mb-4" />
              <h3 className="text-xl font-bold text-white uppercase mb-2">Tamil Nadu State League</h3>
              <p className="text-white/60 text-sm leading-relaxed">ALPHA Sports Academy U-16 team won the Tamil Nadu State Football League, going unbeaten through 12 matches with a goal difference of +34.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
