"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <footer className={`bg-black pt-16 pb-8 border-t border-[#D6A23A]/20 ${isHome ? "xl:pl-[80px] xl:pr-[80px]" : ""}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-2xl font-black text-[#D6A23A] uppercase tracking-widest mb-4">ALPHA</h3>
            <p className="text-white/60 text-sm leading-relaxed">The premier multi-sport training destination for aspiring athletes. Professional football &amp; badminton coaching in Tamil Nadu.</p>
          </div>
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-white/60 hover:text-[#D6A23A] transition-colors text-sm">About Us</Link></li>
              <li><Link href="/programs" className="text-white/60 hover:text-[#D6A23A] transition-colors text-sm">Programs</Link></li>
              <li><Link href="/tournaments" className="text-white/60 hover:text-[#D6A23A] transition-colors text-sm">Tournaments</Link></li>
              <li><Link href="/pricing" className="text-white/60 hover:text-[#D6A23A] transition-colors text-sm">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><Link href="/programs" className="text-white/60 hover:text-[#D6A23A] transition-colors text-sm">Regular U8-U13</Link></li>
              <li><Link href="/programs" className="text-white/60 hover:text-[#D6A23A] transition-colors text-sm">Advanced U14-U18</Link></li>
              <li><Link href="/programs" className="text-white/60 hover:text-[#D6A23A] transition-colors text-sm">Elite Development U19+</Link></li>
              <li><Link href="/programs" className="text-white/60 hover:text-[#D6A23A] transition-colors text-sm">Corporate Training</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><a href="tel:1234567890" className="text-white/60 hover:text-[#D6A23A] transition-colors text-sm">1234567890</a></li>
              <li><Link href="/join" className="text-white/60 hover:text-[#D6A23A] transition-colors text-sm">Join Academy</Link></li>
              <li><span className="text-white/60 text-sm">Tamil Nadu, India</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/40 text-sm">&copy; {new Date().getFullYear()} ALPHA Sports Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
