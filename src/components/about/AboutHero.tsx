import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="bg-[#050505] text-white pt-52 pb-20 md:pt-64 md:pb-32 px-4 md:px-12 relative overflow-hidden">
      {/* Dynamic Grid Background overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}
      />
      {/* Intense radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-[#FF5C00]/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center text-center gap-12">
          
          {/* Massive Outlined Title */}
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full flex items-center justify-center"
          >
            {/* Outline Text Layer */}
            <h1 
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-black tracking-tighter uppercase whitespace-nowrap opacity-20 pointer-events-none"
              style={{ WebkitTextStroke: '2px white', color: 'transparent' }}
            >
              ABOUT MASALEE
            </h1>
            {/* Solid Text Layer */}
            <h1 className="relative text-5xl md:text-7xl lg:text-[7rem] font-black tracking-tight text-white mb-6 uppercase z-10">
              About <span className="text-[#FF5C00]">Masalee</span>
            </h1>
          </motion.div>

          {/* Content Box */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl flex flex-col gap-8 bg-white/[0.02] backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-amber-500/90 leading-tight">
              Where Every Spice Tells a Story...
            </h2>
            
            <div className="space-y-6 text-white/70 text-lg md:text-xl font-medium leading-relaxed">
              <p>
                Every great journey begins with a spark. For Masalee, it began with friendship—and a shared <span className="text-white font-bold">love for real, uncompromised food.</span>
              </p>
              <p>
                What started as two college friends bonding over endless cups of chai and late-night conversations slowly grew into a deeper purpose: to create something honest, meaningful, and rooted in tradition. That purpose led us to spices—the heart and soul of every Indian kitchen.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
