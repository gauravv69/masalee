import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const images = [
  "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", // using same as placeholder, normally different
  "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
];

export function AboutStory() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(timer);
  }, []);
  return (
    <section className="bg-[#050505] text-white py-24 md:py-32 px-4 md:px-12 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8 max-w-xl"
          >
            <h4 className="text-white/50 text-sm uppercase tracking-widest font-bold">Our Story</h4>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
              From Friendship <span className="font-serif italic text-amber-500/90 font-light">to Flavor</span>
            </h2>
            
            <p className="text-xl md:text-2xl font-bold text-white/90 leading-snug">
              Masalee is not just our business—it's our story of friendship, culture, and an unwavering love for good food.
            </p>

            <div className="space-y-6 text-white/60 text-base md:text-lg leading-relaxed">
              <p>
                Spices are more than ingredients. They are memories of home, the warmth of family meals, the aroma of festivals, and the quiet magic behind recipes passed down through generations. 
              </p>
              <p>
                We saw how modern food had begun to lose its authenticity—flavors diluted, purity compromised, and stories forgotten. Masalee was born from a simple belief: real spices deserve respect.
              </p>
              <p>
                Every blend we create is inspired by tradition, crafted with care, and made to reconnect you with the true taste of India.
              </p>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative group perspective-[1000px] z-10"
          >
            {/* Giant Background Outline Text */}
            <div className="absolute -inset-20 z-0 flex items-center justify-center opacity-5 pointer-events-none overflow-visible">
              <h2 
                className="text-[180px] font-black tracking-tighter uppercase whitespace-nowrap -rotate-12 select-none"
                style={{ WebkitTextStroke: '2px white', color: 'transparent' }}
              >
                ORIGINS
              </h2>
            </div>

            {/* Ambient image glow */}
            <div className="absolute inset-0 bg-amber-600/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl z-0" />
            
            <div className="relative h-[500px] md:h-[650px] w-full rounded-[2.5rem] overflow-hidden transform transition-transform duration-700 ease-out group-hover:rotate-y-[-2deg] group-hover:scale-[1.02] shadow-[0_30px_60px_rgba(0,0,0,0.5)] z-10 border border-white/5 group-hover:border-amber-500/20">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  src={images[currentImageIndex]}
                  alt="Premium Ground Spices" 
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
              </AnimatePresence>
              {/* Subtle overlay for richness */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-[#FF5C00]/10 mix-blend-overlay pointer-events-none" />
            </div>

            {/* Floating GenZ Badge */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 w-28 h-28 md:w-40 md:h-40 bg-[#FF5C00] rounded-full flex items-center justify-center text-black font-black uppercase text-center p-4 shadow-[0_10px_30px_rgba(255,92,0,0.4)] z-20 border-[4px] md:border-[8px] border-[#050505]"
            >
              <span className="text-sm md:text-xl leading-tight">100%<br/>Pure</span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
