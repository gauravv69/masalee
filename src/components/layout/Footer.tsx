import { Flame, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#050505] text-white pt-24 pb-8 relative overflow-hidden border-t border-white/5 pb-8 relative overflow-hidden border-t border-white/5">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-[#FF5C00]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 md:px-12 relative z-10 text-sm md:text-base">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="md:col-span-5 pr-0 md:pr-12">
            <h3 className="text-4xl lg:text-5xl font-black mb-6 flex items-center gap-3 tracking-tighter">
              Masalee 
              <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500/20 to-[#FF5C00]/20 border border-[#FF5C00]/30 shadow-[0_0_20px_rgba(255,92,0,0.2)]">
                <Flame className="w-5 h-5 text-[#FF5C00]" strokeWidth={2.5} />
              </div>
            </h3>
            <p className="text-white/50 leading-relaxed max-w-sm text-sm">
              Authentic Indian spices delivered to your doorstep. Where freshness meets <span className="text-white/80 font-medium italic">tradition</span>.
            </p>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            
            {/* Shop */}
            <div>
              <h4 className="font-bold mb-6 tracking-widest uppercase text-xs text-white/90">Shop</h4>
              <ul className="space-y-4 text-white/50 text-sm">
                <li><a href="#" className="group flex items-center hover:text-white transition-colors"><span className="border-b border-transparent group-hover:border-[#FF5C00] pb-0.5 transition-colors">All Products</span> <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-[#FF5C00] transition-all duration-300" /></a></li>
                <li><a href="#" className="group flex items-center hover:text-white transition-colors"><span className="border-b border-transparent group-hover:border-[#FF5C00] pb-0.5 transition-colors">Whole Spices</span> <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-[#FF5C00] transition-all duration-300" /></a></li>
                <li><a href="#" className="group flex items-center hover:text-white transition-colors"><span className="border-b border-transparent group-hover:border-[#FF5C00] pb-0.5 transition-colors">Ground Spices</span> <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-[#FF5C00] transition-all duration-300" /></a></li>
                <li><a href="#" className="group flex items-center hover:text-white transition-colors"><span className="border-b border-transparent group-hover:border-[#FF5C00] pb-0.5 transition-colors">Blended Masalas</span> <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-[#FF5C00] transition-all duration-300" /></a></li>
              </ul>
            </div>

            {/* About */}
            <div>
              <h4 className="font-bold mb-6 tracking-widest uppercase text-xs text-white/90">About</h4>
              <ul className="space-y-4 text-white/50 text-sm">
                <li><a href="#" className="group flex items-center hover:text-white transition-colors"><span className="border-b border-transparent group-hover:border-amber-500 pb-0.5 transition-colors">Our Story</span> <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-amber-500 transition-all duration-300" /></a></li>
                <li><a href="#" className="group flex items-center hover:text-white transition-colors"><span className="border-b border-transparent group-hover:border-amber-500 pb-0.5 transition-colors">Sourcing</span> <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-amber-500 transition-all duration-300" /></a></li>
                <li><a href="#" className="group flex items-center hover:text-white transition-colors"><span className="border-b border-transparent group-hover:border-amber-500 pb-0.5 transition-colors">Sustainability</span> <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-amber-500 transition-all duration-300" /></a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-6 tracking-widest uppercase text-xs text-white/90">Contact</h4>
              <ul className="space-y-4 text-white/50 text-sm">
                <li><a href="#" className="group flex items-center hover:text-white transition-colors"><span className="border-b border-transparent group-hover:border-white pb-0.5 transition-colors">Support</span> <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-white transition-all duration-300" /></a></li>
                <li><a href="#" className="group flex items-center hover:text-white transition-colors"><span className="border-b border-transparent group-hover:border-white pb-0.5 transition-colors">Wholesale</span> <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-white transition-all duration-300" /></a></li>
                <li><a href="#" className="group flex items-center hover:text-white transition-colors"><span className="border-b border-transparent group-hover:border-white pb-0.5 transition-colors">FAQs</span> <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-white transition-all duration-300" /></a></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-[11px] font-medium tracking-wide">
          <p>&copy; {new Date().getFullYear()} Masalee. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
