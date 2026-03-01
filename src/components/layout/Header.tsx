import { ShoppingCart, Menu, Search, User } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-0 left-0 right-0 z-50 w-full pt-4 md:pt-8 px-3 md:px-12"
      >
        <div className="max-w-[1600px] w-full mx-auto bg-[#0A0A0A] border border-white/10 rounded-full px-5 py-3 md:px-8 md:py-4 flex items-center justify-between shadow-[0_20px_40px_rgba(0,0,0,0.8)]">
          
          {/* Left Side: Logo & Mobile Toggle */}
          <div className="flex items-center gap-4 w-auto md:w-[250px]">
            <button 
              className="md:hidden text-white/60 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <img src="/masalee-logo.svg" alt="Masalee Logo" className="h-8 md:h-10 w-auto object-contain hover:scale-105 transition-transform" />
          </div>
          
          {/* Center Nav */}
          <nav className="hidden md:flex items-center justify-center gap-8 lg:gap-10 flex-1">
            <a href="#" className="text-white text-[10px] md:text-[11px] font-bold uppercase tracking-[0.15em] hover:text-[#FF5C00] transition-colors">
              Shop All
            </a>
            <a href="#" className="text-white text-[10px] md:text-[11px] font-bold uppercase tracking-[0.15em] hover:text-[#FF5C00] transition-colors">
              Whole Spices
            </a>
            <a href="#" className="text-white text-[10px] md:text-[11px] font-bold uppercase tracking-[0.15em] hover:text-[#FF5C00] transition-colors">
              Blends
            </a>
          </nav>

          {/* Right Side: Search & Cart */}
          <div className="flex items-center justify-end gap-5 w-auto md:w-[250px]">
            <div className="hidden lg:flex items-center bg-[#151515] rounded-full px-4 py-2 border border-white/5 focus-within:border-[#FF5C00]/50 transition-colors w-[180px]">
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-transparent border-none outline-none text-white text-xs w-full placeholder:text-white/40 font-medium"
              />
            </div>
            
            <button className="lg:hidden text-white/80 hover:text-white transition-colors">
              <Search className="w-[18px] h-[18px]" />
            </button>
            
            <button className="relative p-2.5 bg-[#151515] border border-white/5 rounded-full hover:bg-white/10 transition-colors group">
              <ShoppingCart className="w-5 h-5 text-white group-hover:text-[#FF5C00] transition-colors" />
              <span className="absolute -top-1 -right-1 bg-[#FF5C00] text-black w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-black shadow-[0_0_10px_rgba(255,92,0,0.6)]">
                0
              </span>
            </button>
          </div>

        </div>
      </motion.header>

      {/* Mobile Menu Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[60] flex md:hidden">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-md"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-[300px] max-w-[80vw] bg-[#0A0A0A] h-full shadow-2xl border-r border-white/10 p-6 flex flex-col pt-10"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
                <img src="/masalee-logo.svg" alt="Masalee Logo" className="h-8 w-auto object-contain" />
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white/50 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors"
                >
                  Close
                </button>
              </div>
              
              <nav className="flex flex-col gap-6 flex-grow">
                <a href="#" className="text-white text-2xl font-black tracking-tight hover:text-[#FF5C00] transition-colors">Shop All</a>
                <a href="#" className="text-white text-2xl font-black tracking-tight hover:text-[#FF5C00] transition-colors">Whole Spices</a>
                <a href="#" className="text-white text-2xl font-black tracking-tight hover:text-[#FF5C00] transition-colors">Blends</a>
                <a href="#" className="text-white text-2xl font-black tracking-tight hover:text-[#FF5C00] transition-colors">Herbs & Aroma</a>
              </nav>
              
              <div className="mt-auto border-t border-white/10 pt-6 flex flex-col gap-4">
                <a href="#" className="text-white/70 text-sm font-medium hover:text-white flex items-center gap-3 transition-colors">
                  <User className="w-4 h-4" /> Account Login
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
