import { ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function FeaturedProducts() {
  const [activeIndex, setActiveIndex] = useState(1);

  const products = [
    {
      id: 1,
      name: "Premium Meat Masala",
      price: "₹55.00 - ₹1,100.00",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tag: "Best Seller"
    },
    {
      id: 2,
      name: "Standard Fennel Seeds (Saunf)",
      price: "₹31.85 - ₹637.00",
      image: "https://images.unsplash.com/photo-1615486171448-4af1a6136d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tag: "On Sale"
    },
    {
      id: 3,
      name: "Premium Chole Masala",
      price: "₹50.00 - ₹1,000.00",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tag: "On Sale"
    },
    {
      id: 4,
      name: "Basic Cloves (Laung)",
      price: "₹74.75 - ₹1,495.00",
      image: "https://images.unsplash.com/photo-1615486511484-92e17ceea2cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tag: "Trending"
    },
    {
      id: 5,
      name: "Premium Turmeric Powder",
      price: "₹45.00 - ₹800.00",
      image: "https://images.unsplash.com/photo-1615486171448-4af1a6136d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tag: "New"
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  // Auto-play the carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, [products.length]);

  return (
    <section className="bg-[#0A0A0A] py-32 relative overflow-hidden">
      
      {/* Background Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20 flex flex-col items-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#FF5C00] font-bold text-xs uppercase tracking-[0.3em] mb-4 block"
          >
            The Drop
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter"
          >
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-[#FF5C00] pr-3">Featured</span>
            Spices.
          </motion.h2>
        </div>

        {/* 3D Coverflow Carousel Container */}
        <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center perspective-[1000px]">
          
          {/* Controls Desktop */}
          <button onClick={prevSlide} className="hidden md:flex absolute left-4 md:left-12 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-[#FF5C00] backdrop-blur-md border border-white/20 items-center justify-center text-white transition-all hover:scale-110">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={nextSlide} className="hidden md:flex absolute right-4 md:right-12 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-[#FF5C00] backdrop-blur-md border border-white/20 items-center justify-center text-white transition-all hover:scale-110">
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Cards */}
          <div className="relative w-[280px] sm:w-[320px] md:w-[380px] h-[400px] md:h-[480px]">
            {products.map((product, index) => {
              // Calculate relative position to active index
              let offset = index - activeIndex;
              // Handle wrap-around math
              if (offset < -2) offset += products.length;
              if (offset > 2) offset -= products.length;

              // Determine styles based on offset
              const isActive = offset === 0;
              const zIndex = 50 - Math.abs(offset);
              const scale = 1 - Math.abs(offset) * 0.15;
              const xTranslate = offset * 65; // Percentage
              const opacity = Math.abs(offset) > 2 ? 0 : 1;

              return (
                <motion.div
                  key={product.id}
                  className="absolute top-0 left-0 w-full h-full cursor-pointer group"
                  animate={{
                    x: `${xTranslate}%`,
                    scale: scale,
                    zIndex: zIndex,
                    opacity: opacity,
                  }}
                  transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  onClick={() => setActiveIndex(index)}
                  style={{ pointerEvents: Math.abs(offset) > 1 ? 'none' : 'auto' }}
                >
                  <div className={`w-full h-full rounded-[2rem] overflow-hidden backdrop-blur-3xl ${isActive ? 'bg-white/10 border-white/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)]' : 'bg-black/40 border-white/5'} border flex flex-col transition-all duration-500`}>
                    
                    {/* Image Area */}
                    <div className="relative h-[65%] w-full ovreflow-hidden p-3 pb-0">
                      {(isActive) && (
                        <span className="absolute top-6 left-6 z-20 bg-[#FF5C00] text-black px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] shadow-xl">
                          {product.tag}
                        </span>
                      )}
                      
                      <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative">
                         <div className={`absolute inset-0 bg-black/${isActive ? '0' : '40'} transition-colors duration-500 z-10 pointer-events-none`} />
                         <img 
                           src={product.image} 
                           alt={product.name} 
                           className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000"
                         />
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 p-6 flex flex-col justify-end items-center text-center">
                      <h3 className={`${isActive ? 'text-white' : 'text-white/50'} font-bold text-lg md:text-xl leading-tight mb-2 transition-colors`}>
                        {product.name}
                      </h3>
                      <p className="text-[#FF5C00] font-mono text-sm tracking-tight font-bold">
                        {product.price}
                      </p>
                    </div>

                    {/* Quick Add overlay */}
                    {isActive && (
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-opacity duration-300 z-30 flex items-center justify-center">
                        <button className="bg-white text-black px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-[#FF5C00] hover:text-white hover:scale-110 transition-all flex items-center gap-3">
                          <ShoppingBag className="w-4 h-4" /> Quick Add
                        </button>
                      </div>
                    )}

                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Mobile Controls & Pagination Dots */}
        <div className="flex flex-col items-center gap-8 mt-12 md:mt-16">
          <div className="flex md:hidden justify-center gap-6">
            <button onClick={prevSlide} className="w-12 h-12 rounded-full bg-[#151515] hover:bg-[#FF5C00] backdrop-blur-md border border-white/5 flex items-center justify-center text-white transition-all active:scale-95">
              <ChevronLeft className="w-5 h-5 -ml-0.5" />
            </button>
            <button onClick={nextSlide} className="w-12 h-12 rounded-full bg-[#151515] hover:bg-[#FF5C00] backdrop-blur-md border border-white/5 flex items-center justify-center text-white transition-all active:scale-95">
              <ChevronRight className="w-5 h-5 -mr-0.5" />
            </button>
          </div>

          <div className="flex justify-center gap-3">
            {products.map((_, idx) => (
               <button
                 key={idx}
                 onClick={() => setActiveIndex(idx)}
                 className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === idx ? 'w-12 bg-[#FF5C00]' : 'w-4 bg-white/20 hover:bg-white/40'}`}
               />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
