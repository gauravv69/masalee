import { ShoppingCart, User, Menu, Search } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 w-full"
      >
        {/* Top Info Bar */}
        <div className="hidden md:flex bg-black border-b border-white/5 px-8 xl:px-12 py-3.5 items-center justify-between text-xs xl:text-sm uppercase font-bold tracking-widest text-white/50">
          <div className="flex gap-10">
            <Link 
              to="/about" 
              className={`transition-colors ${isActive('/about') ? 'text-[#FF5C00]' : 'hover:text-white'}`}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors ${isActive('/contact') ? 'text-[#FF5C00]' : 'hover:text-white'}`}
            >
              Contact Us
            </Link>
            <Link 
              to="/b2b" 
              className={`transition-colors ${isActive('/b2b') ? 'text-[#FF5C00]' : 'hover:text-white'}`}
            >
              B2B/Bulk Order
            </Link>
          </div>
          <div className="text-white/80">
            Problem in placing order? Call <a href="tel:+917276674303" className="text-[#FF5C00] hover:text-white transition-colors ml-2 text-sm xl:text-base font-black">+91 72766 74303</a>
          </div>
        </div>

        {/* Main Pill Header Container */}
        <div className="w-full pt-4 md:pt-6 px-3 md:px-12">
          <div className="max-w-[1600px] w-full mx-auto bg-[#0A0A0A]/60 backdrop-blur-xl border border-white/10 rounded-full px-5 py-3 md:px-8 md:py-4 flex items-center justify-between shadow-[0_20px_40px_rgba(0,0,0,0.8)]">
            
            {/* Left Side: Logo & Mobile Toggle */}
            <div className="flex items-center gap-4 w-auto md:w-[200px]">
              <button 
                className="lg:hidden text-white/60 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="w-7 h-7" />
              </button>
              <Link to="/">
                <img src="/masalee-logo.svg" alt="Masalee Logo" className="h-10 md:h-12 w-auto object-contain hover:scale-105 transition-transform" />
              </Link>
            </div>
            
            {/* Center Nav */}
            <nav className="hidden lg:flex items-center justify-center gap-7 xl:gap-10 flex-1">
              <a href="#" className="text-white text-[11px] xl:text-[13px] font-bold uppercase tracking-[0.15em] hover:text-[#FF5C00] transition-colors whitespace-nowrap">
                All Products
              </a>
              <a href="#" className="text-white text-[11px] xl:text-[13px] font-bold uppercase tracking-[0.15em] hover:text-[#FF5C00] transition-colors whitespace-nowrap">
                Whole Spices
              </a>
              <a href="#" className="text-white text-[11px] xl:text-[13px] font-bold uppercase tracking-[0.15em] hover:text-[#FF5C00] transition-colors whitespace-nowrap">
                Ground Spices
              </a>
              <a href="#" className="text-white text-[11px] xl:text-[13px] font-bold uppercase tracking-[0.15em] hover:text-[#FF5C00] transition-colors whitespace-nowrap">
                Blended Masalas
              </a>
              <a href="#" className="text-white text-[11px] xl:text-[13px] font-bold uppercase tracking-[0.15em] hover:text-[#FF5C00] transition-colors whitespace-nowrap">
                Herbs & Aroma
              </a>
            </nav>

            {/* Right Side: Search & Cart */}
            <div className="flex items-center justify-end gap-6 w-auto lg:w-[350px]">
              <div className="hidden lg:flex items-center bg-[#151515] rounded-full px-5 py-2.5 border border-white/5 focus-within:border-[#FF5C00]/50 transition-colors w-full max-w-[220px]">
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  className="bg-transparent border-none outline-none text-white text-[13px] w-full placeholder:text-white/40 font-medium"
                />
              </div>
              
              <button className="lg:hidden text-white/80 hover:text-white transition-colors">
                <Search className="w-[18px] h-[18px]" />
              </button>
              
              <button className="hidden xl:flex text-white/70 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest whitespace-nowrap items-center gap-2">
                <User className="w-4 h-4" /> Log In
              </button>

              <button className="relative p-3 bg-[#151515] border border-white/5 rounded-full hover:bg-white/10 transition-colors group flex-shrink-0">
                <ShoppingCart className="w-[22px] h-[22px] text-white group-hover:text-[#FF5C00] transition-colors" />
                <span className="absolute -top-1 -right-1 bg-[#FF5C00] text-black w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-black shadow-[0_0_10px_rgba(255,92,0,0.6)]">
                  0
                </span>
              </button>
            </div>

          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[60] flex lg:hidden">
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
              <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8 mt-2">
                <img src="/masalee-logo.svg" alt="Masalee Logo" className="h-8 w-auto object-contain" />
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white/50 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors"
                >
                  Close
                </button>
              </div>
              
              <nav className="flex flex-col gap-6 flex-grow overflow-y-auto">
                <a href="#" className="text-white text-2xl font-black tracking-tight hover:text-[#FF5C00] transition-colors">All Products</a>
                <a href="#" className="text-white text-2xl font-black tracking-tight hover:text-[#FF5C00] transition-colors">Whole Spices</a>
                <a href="#" className="text-white text-2xl font-black tracking-tight hover:text-[#FF5C00] transition-colors">Ground Spices</a>
                <a href="#" className="text-white text-2xl font-black tracking-tight hover:text-[#FF5C00] transition-colors">Blended Masalas</a>
                <a href="#" className="text-white text-2xl font-black tracking-tight hover:text-[#FF5C00] transition-colors">Herbs & Aroma</a>
                
                <hr className="border-white/5 my-2" />
                
                <Link 
                  to="/about" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-bold tracking-[0.1em] uppercase transition-colors ${isActive('/about') ? 'text-[#FF5C00]' : 'text-white/70 hover:text-[#FF5C00]'}`}
                >
                  About Us
                </Link>
                <Link 
                  to="/contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-bold tracking-[0.1em] uppercase transition-colors ${isActive('/contact') ? 'text-[#FF5C00]' : 'text-white/70 hover:text-[#FF5C00]'}`}
                >
                  Contact Us
                </Link>
                <Link 
                  to="/b2b" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-bold tracking-[0.1em] uppercase transition-colors ${isActive('/b2b') ? 'text-[#FF5C00]' : 'text-white/70 hover:text-[#FF5C00]'}`}
                >
                  B2B/Bulk Order
                </Link>
              </nav>
              
              <div className="mt-auto border-t border-white/10 pt-6 flex flex-col gap-4">
                <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-2">Need Help?</p>
                <a href="tel:+917276674303" className="text-white hover:text-[#FF5C00] font-mono text-sm transition-colors mb-4">
                  +91 72766 74303
                </a>
                <a href="#" className="text-white bg-white/5 border border-white/10 py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-white/10 flex items-center justify-center gap-3 transition-colors">
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
