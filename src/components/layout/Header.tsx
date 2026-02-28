import { ShoppingCart, Menu, Search, User } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-0 left-0 right-0 z-50 w-full pt-4 md:pt-6 px-4 md:px-8"
      >
        
        {/* Floating Glassmorphism Header */}
        <div className="max-w-[1600px] mx-auto bg-black/40 backdrop-blur-2xl border border-white/10 rounded-full px-4 md:px-8 py-3 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          
          {/* Left Side: Logo (Transparent) & Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:gap-8 w-auto md:w-1/3">
            <button 
              className="md:hidden text-white/80 hover:text-[#FF5C00] transition-colors p-2"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="flex items-center justify-center">
              {/* Resetting logo filters so original colors show */}
              <img src="/masalee-logo.svg" alt="Masalee Logo" className="h-8 md:h-10 w-auto object-contain hover:scale-105 transition-transform" />
            </div>
          </div>
          
          {/* Center Nav (Desktop Only) */}
          <nav className="hidden lg:flex items-center justify-center gap-10 w-1/3">
            <a href="#" className="text-white/80 text-[11px] font-bold uppercase tracking-[0.2em] hover:text-[#FF5C00] transition-colors relative group">
              Shop All
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-[#FF5C00] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="text-white/80 text-[11px] font-bold uppercase tracking-[0.2em] hover:text-[#FF5C00] transition-colors relative group">
              Whole Spices
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-[#FF5C00] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="text-white/80 text-[11px] font-bold uppercase tracking-[0.2em] hover:text-[#FF5C00] transition-colors relative group">
              Blends
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-[#FF5C00] group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>

          {/* Right Area */}
          <div className="flex items-center justify-end gap-4 md:gap-6 w-auto md:w-1/3">
            <div className="hidden md:flex items-center bg-white/5 rounded-full overflow-hidden border border-white/10 w-[180px] focus-within:border-[#FF5C00]/50 focus-within:bg-white/10 transition-colors">
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-transparent border-none outline-none text-white text-xs px-5 py-2.5 w-full placeholder:text-white/40"
              />
            </div>
            
            {/* Mobile Search Icon */}
            <button className="md:hidden text-white hover:text-[#FF5C00] transition-colors bg-white/5 p-2 rounded-full border border-white/10">
              <Search className="w-4 h-4" />
            </button>
            
            <button className="text-white relative hover:text-[#FF5C00] transition-colors bg-white/5 p-2 md:p-2.5 rounded-full border border-white/10 hover:bg-white/10">
              <ShoppingCart className="w-4 h-4 md:w-4 md:h-4" />
              <span className="absolute -top-1.5 -right-1.5 bg-[#FF5C00] text-black w-3.5 h-3.5 md:w-4 md:h-4 rounded-full flex items-center justify-center text-[8px] md:text-[9px] font-black shadow-[0_0_10px_rgba(255,92,0,0.5)]">0</span>
            </button>
          </div>

        </div>
      </motion.header>

      {/* Mobile Menu Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] flex">
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="relative w-4/5 max-w-sm bg-[#0A0A0A] h-full shadow-2xl border-r border-white/10 p-6 flex flex-col transform transition-transform animate-in slide-in-from-left duration-300">
            <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-6">
              <img src="/masalee-logo.svg" alt="Masalee Logo" className="h-8 w-auto object-contain" />
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white/50 hover:text-white text-xs font-bold uppercase tracking-widest"
              >
                Close
              </button>
            </div>
            
            <nav className="flex flex-col gap-6 flex-grow">
              <a href="#" className="text-white text-xl font-bold tracking-tight hover:text-[#FF5C00] transition-colors">Shop All</a>
              <a href="#" className="text-white text-xl font-bold tracking-tight hover:text-[#FF5C00] transition-colors">Whole Spices</a>
              <a href="#" className="text-white text-xl font-bold tracking-tight hover:text-[#FF5C00] transition-colors">Blends</a>
              <a href="#" className="text-white text-xl font-bold tracking-tight hover:text-[#FF5C00] transition-colors">Herbs & Aroma</a>
            </nav>
            
            <div className="mt-auto border-t border-white/10 pt-6 flex flex-col gap-4">
              <a href="#" className="text-white/70 text-sm font-medium hover:text-white flex items-center gap-3">
                <User className="w-4 h-4" /> Account Login
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
