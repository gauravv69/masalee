import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function AboutCraft() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="bg-[#050505] text-white py-24 md:py-32 px-4 md:px-12 relative overflow-hidden border-y border-white/5">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          
          {/* Left: Title & Heading */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col gap-6 pr-0 lg:pr-12"
          >
            <h4 className="text-white/50 text-sm uppercase tracking-widest font-bold">What We Craft</h4>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.2] text-white">
              <span className="font-serif italic font-light text-amber-500/90">Masalee - by Upseasoning</span> is a premium online spice store offering a thoughtfully curated spice range
            </h2>
          </motion.div>

          {/* Right: Features */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-6 flex flex-col gap-10 lg:pl-12"
          >
            <motion.p variants={itemVariants} className="text-white/60 text-lg md:text-xl font-medium leading-relaxed">
              Each product is sourced responsibly, processed in small batches, and sealed for freshness—so the aroma, flavor, and natural oils stay exactly where they belong.
            </motion.p>
            
            {/* Grid of checks */}
            <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {[
                "Pure Ingredients",
                "Freshness-sealed packaging",
                "Bold, authentic flavors",
                "No artificial colors or additives"
              ].map((text, index) => (
                <motion.div key={index} variants={itemVariants} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FF5C00]/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5C00]" />
                  </div>
                  <span className="text-white/90 font-semibold text-base md:text-lg">{text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4">
              <button className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#FF5C00] transition-colors duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_10px_30px_rgba(255,92,0,0.3)] hover:-translate-y-1 transform w-fit backdrop-blur-md">
                Explore Spice Range
              </button>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
