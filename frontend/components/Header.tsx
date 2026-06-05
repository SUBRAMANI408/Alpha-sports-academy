"use client";

import { usePathname } from "next/navigation";
import { MessageCircle, Phone, Menu } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className={`fixed top-0 left-0 right-0 ${isHome ? "xl:left-[80px] xl:right-[80px]" : ""} z-[100] transition-all duration-500 backdrop-blur-lg bg-gradient-to-r from-black/90 via-[#0C6B3F]/5 to-black/90`}>
      <div className="border-b border-[#D6A23A]/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link className="flex items-center space-x-2 sm:space-x-3 hover:scale-105 transition-transform duration-300 group" href="/">
              <div className="relative">
                <div className="absolute inset-0 bg-[#D6A23A]/30 blur-2xl rounded-full animate-pulse"></div>
                <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] bg-[#D6A23A] rounded-full flex items-center justify-center font-bold text-black relative z-10 text-xs">ALPHA</div>
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-black text-[#D6A23A] uppercase tracking-widest drop-shadow-[0_0_15px_rgba(214,162,58,0.9)] animate-pulse">ALPHA</h1>
                <p className="text-[8px] sm:text-[10px] text-white/90 uppercase tracking-wider font-semibold">Excellence, Defined</p>
              </div>
            </Link>
            <div className="flex items-center gap-2 sm:gap-3">
              <Link href="/join" className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-[#D6A23A] to-[#F5D06C] text-black hover:from-[#F5D06C] hover:to-[#D6A23A] font-black uppercase text-xs lg:text-sm tracking-wider shadow-[0_0_25px_rgba(214,162,58,0.7)] hover:shadow-[0_0_40px_rgba(214,162,58,1)] transition-all duration-300 hover:scale-105 h-10 rounded-md px-6 animate-pulse">
                <MessageCircle className="w-4 h-4 lg:w-5 lg:h-5" />
                Join Now
              </Link>
              <a href="tel:1234567890" className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-[#0C6B3F] to-[#0E804B] text-white hover:from-[#0E804B] hover:to-[#0C6B3F] font-black uppercase text-xs lg:text-sm tracking-wider shadow-[0_0_25px_rgba(12,107,63,0.7)] hover:shadow-[0_0_40px_rgba(12,107,63,1)] transition-all duration-300 hover:scale-105 h-10 rounded-md px-6">
                <Phone className="w-4 h-4 lg:w-5 lg:h-5" />
                Call Now
              </a>
              <button className="lg:hidden text-[#D6A23A] p-2 hover:bg-[#D6A23A]/20 rounded-lg transition-all duration-300 hover:scale-110 focus:outline-none">
                <Menu className="w-6 h-6 sm:w-7 sm:h-7" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block border-b border-[#D6A23A]/10 bg-black/50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-center gap-6 lg:gap-8 h-14 lg:h-16">
            <Link className="group relative text-white hover:text-[#D6A23A] transition-all duration-300 font-bold uppercase text-xs lg:text-sm tracking-wider" href="/">Home</Link>
            <Link className="group relative text-white hover:text-[#D6A23A] transition-all duration-300 font-bold uppercase text-xs lg:text-sm tracking-wider" href="/about">About Us</Link>
            <Link className="group relative text-white hover:text-[#D6A23A] transition-all duration-300 font-bold uppercase text-xs lg:text-sm tracking-wider" href="/contact">Contact</Link>
            <Link className="group relative text-white hover:text-[#D6A23A] transition-all duration-300 font-bold uppercase text-xs lg:text-sm tracking-wider" href="/programs">Programs</Link>
            <Link className="group relative text-white hover:text-[#D6A23A] transition-all duration-300 font-bold uppercase text-xs lg:text-sm tracking-wider" href="/tournaments">Tournaments</Link>
            <Link className="group relative text-white hover:text-[#D6A23A] transition-all duration-300 font-bold uppercase text-xs lg:text-sm tracking-wider" href="/pricing">Pricing</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
