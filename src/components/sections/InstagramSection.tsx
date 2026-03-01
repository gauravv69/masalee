import { Instagram, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const INSTAGRAM_POSTS = [
  "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1615486511484-92e17ceea2cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1599909673523-2895240ec8cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1615486171448-4af1a6136d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1606913084603-3e7702b01627?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1596647182285-d857a268a7ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
];

export function InstagramSection() {
  return (
    <section className="bg-[#050505] py-24 relative overflow-hidden flex flex-col items-center justify-center min-h-[80vh]">
      
      {/* Background Deep Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF5C00]/10 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="w-full relative z-10">
        
        {/* Floating Center CTA */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-full max-w-lg px-4 flex flex-col items-center text-center pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex flex-col items-center pointer-events-auto group"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-500 to-[#FF5C00] p-[2px] mb-6 transform group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(255,92,0,0.4)]">
              <div className="w-full h-full bg-[#0A0A0A] rounded-full flex items-center justify-center">
                <Instagram className="w-7 h-7 text-white" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 tracking-tight">
              Follow Us <br />
              <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
                on Instagram
              </span>
            </h2>
            
            <p className="text-[#FF5C00] font-bold tracking-widest uppercase text-[10px] md:text-xs mb-8 group-hover:text-amber-400 transition-colors">
              Share your love with #masalee
            </p>

            <a 
              href="https://www.instagram.com/_masaalee/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-[#FF5C00] hover:text-white transition-all duration-300 shadow-[0_5px_20px_rgba(255,255,255,0.1)] hover:shadow-[0_5px_30px_rgba(255,92,0,0.4)]"
            >
              @_masaalee
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </a>
          </motion.div>
        </div>

        {/* Marquee Grids */}
        <div className="relative w-full overflow-hidden flex flex-col gap-4 opacity-40 md:opacity-60 saturate-50 hover:saturate-100 transition-all duration-1000">
          
          {/* Top Row Marquee (Right to Left) */}
          <motion.div 
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-4 w-max"
          >
            {[...INSTAGRAM_POSTS, ...INSTAGRAM_POSTS].map((post, idx) => (
              <div key={`top-${idx}`} className="w-[200px] h-[200px] md:w-[280px] md:h-[280px] lg:w-[350px] lg:h-[350px] rounded-3xl overflow-hidden shrink-0">
                <img src={post} alt={`Instagram visual ${idx}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </motion.div>

          {/* Bottom Row Marquee (Left to Right) */}
          <motion.div 
            initial={{ x: "-50%" }}
            animate={{ x: 0 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="flex gap-4 w-max"
          >
            {[...INSTAGRAM_POSTS, ...INSTAGRAM_POSTS].reverse().map((post, idx) => (
              <div key={`bottom-${idx}`} className="w-[200px] h-[200px] md:w-[280px] md:h-[280px] lg:w-[350px] lg:h-[350px] rounded-3xl overflow-hidden shrink-0">
                <img src={post} alt={`Instagram visual ${idx}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </motion.div>

        </div>

      </div>
      
      {/* Vignette Overlays to blend with the rest of the dark site */}
      <div className="absolute inset-y-0 left-0 w-[10%] lg:w-[20%] bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-[10%] lg:w-[20%] bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A] z-20 pointer-events-none" />

    </section>
  );
}
