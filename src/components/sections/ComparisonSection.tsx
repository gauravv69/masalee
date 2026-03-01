import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

export function ComparisonSection() {
  const masaleeFeatures = [
    "Cold-ground to retain natural oils",
    "Direct farm sourcing for consistency",
    "Advanced multi-layer freshness lock packaging",
    "Rich aroma & bold taste",
    "100% pure & lab-tested",
    "Hygienically processed & sealed"
  ];

  const ordinaryFeatures = [
    "Heat grinding that reduces aroma",
    "Inconsistent sourcing",
    "Loose or low-grade packaging",
    "Faded flavor",
    "Risk of adulteration",
    "Manual, less controlled processing"
  ];

  return (
    <section className="bg-[#050505] py-32 relative overflow-hidden">
      
      {/* Background glow for contrast */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-[#FF5C00]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-6"
          >
            Don't Settle for Ordinary. <br className="hidden md:block" />
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C00] to-amber-500 pr-2">
              Choose Real Freshness.
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/50 text-sm md:text-base font-medium max-w-2xl mx-auto"
          >
            See the difference that purity, sourcing, and technology make in every spoonful.
          </motion.p>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
          
          {/* Masalee Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-b from-[#FF5C00]/10 to-transparent p-[1px] rounded-[2.5rem]"
          >
            <div className="bg-[#0A0A0A] h-full rounded-[2.5rem] p-8 md:p-12 border border-[#FF5C00]/20 shadow-[0_0_40px_rgba(255,92,0,0.1)]">
              <div className="mb-10 text-center md:text-left">
                <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF5C00]/20 text-[#FF5C00] text-xs font-black uppercase tracking-[0.2em] mb-4">The Standard</span>
                <h3 className="text-3xl font-black text-white">Spices by Masalee</h3>
              </div>
              
              <ul className="space-y-6">
                {masaleeFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#FF5C00]/20 flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_10px_rgba(255,92,0,0.3)]">
                      <Check className="w-3.5 h-3.5 text-[#FF5C00]" strokeWidth={3} />
                    </div>
                    <span className="text-white/90 font-medium leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Ordinary Spices Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative bg-white/5 p-[1px] rounded-[2.5rem]"
          >
            <div className="bg-[#070707] h-full rounded-[2.5rem] p-8 md:p-12 border border-white/5 opacity-80 backdrop-blur-3xl">
              <div className="mb-10 text-center md:text-left">
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 text-white/50 text-xs font-black uppercase tracking-[0.2em] mb-4">The Alternative</span>
                <h3 className="text-3xl font-black text-white/50">Ordinary Spices</h3>
              </div>
              
              <ul className="space-y-6">
                {ordinaryFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4 opacity-50">
                    <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5 text-red-500" strokeWidth={3} />
                    </div>
                    <span className="text-white/50 font-medium leading-relaxed line-through decoration-white/20">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
