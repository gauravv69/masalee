import { Map, Heart, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export function BrandStory() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 15 } }
  };

  return (
    <section className="bg-[#050505] py-32 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF5C00]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 md:px-12 relative z-10">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          
          {/* Left Column: Typography & Story */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col justify-center pr-0 lg:pr-8">
            <h4 className="text-white/60 font-medium text-sm md:text-base leading-relaxed mb-4">
              Why Home Chefs & Culinary <br /> Experts Choose Us
            </h4>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-8">
              We Are Spice Specialists Who Understand <br />
              <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C00] to-amber-500 pr-2">
                Flavor at Its Source.
              </span>
            </h2>

            <div className="space-y-6 text-white/50 text-sm md:text-base leading-relaxed max-w-lg mb-12">
              <p>
                With decades of sourcing expertise and trusted farm partnerships across India, we craft pure, high-quality spices for those who value authentic taste. Using advanced grinding technology and freshness-lock packaging, we preserve natural oils, rich aroma, and bold flavor in every spoonful.
              </p>
              <p className="font-medium text-white/80">
                Because great meals don't start with ordinary spices — they start with the right ones.
              </p>
            </div>

            <button className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-white hover:text-black transition-all duration-300 w-fit backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105">
              Know More
            </button>
          </motion.div>

          {/* Center Column: Aesthetic Image */}
          <motion.div variants={itemVariants} className="lg:col-span-4 relative group perspective-[1000px]">
            {/* Ambient image glow */}
            <div className="absolute inset-0 bg-amber-600/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
            
            <div className="relative h-[500px] lg:h-[700px] w-full rounded-[2.5rem] overflow-hidden border border-white/10 transform transition-transform duration-700 ease-out group-hover:rotate-y-[-5deg] group-hover:scale-[1.02] shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Premium Spices in Sack" 
                className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out"
              />
              
              {/* Glassmorphism gradient overlay to make it look moody */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              
              {/* Gold Text Overlay */}
              <div className="absolute bottom-10 left-0 w-full text-center z-20">
                <h3 className="font-serif italic text-3xl text-amber-500/90 font-light drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]">Shahi Jeera</h3>
                <p className="text-white/60 text-[10px] uppercase tracking-[0.3em] font-bold mt-2">Premium Caraway Seeds</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Floating Benefit Cards */}
          <motion.div variants={itemVariants} className="lg:col-span-3 flex flex-col justify-center gap-6">
            
            {/* Card 1 */}
            <div className="group bg-white/[0.03] backdrop-blur-2xl border border-white/5 hover:border-[#FF5C00]/30 rounded-[1.5rem] p-6 md:p-8 flex items-center gap-6 transform transition-all duration-300 hover:-translate-x-2 shadow-[0_4px_24px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(255,92,0,0.15)] cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-[#FF5C00]/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#FF5C00] transition-all duration-300">
                <Leaf className="w-5 h-5 text-[#FF5C00] group-hover:text-black transition-colors" />
              </div>
              <h4 className="text-white font-bold text-lg md:text-xl tracking-tight">Purest Spices</h4>
            </div>

            {/* Card 2 */}
            <div className="group bg-white/[0.03] backdrop-blur-2xl border border-white/5 hover:border-[#FF5C00]/30 rounded-[1.5rem] p-6 md:p-8 flex items-center gap-6 transform transition-all duration-300 hover:-translate-x-2 shadow-[0_4px_24px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(255,92,0,0.15)] cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-[#FF5C00]/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#FF5C00] transition-all duration-300">
                <Heart className="w-5 h-5 text-[#FF5C00] group-hover:text-black transition-colors" />
              </div>
              <h4 className="text-white font-bold text-lg md:text-xl tracking-tight">Trusted Sourcing</h4>
            </div>

            {/* Card 3 */}
            <div className="group bg-white/[0.03] backdrop-blur-2xl border border-white/5 hover:border-[#FF5C00]/30 rounded-[1.5rem] p-6 md:p-8 flex items-center gap-6 transform transition-all duration-300 hover:-translate-x-2 shadow-[0_4px_24px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(255,92,0,0.15)] cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-[#FF5C00]/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#FF5C00] transition-all duration-300">
                <Map className="w-5 h-5 text-[#FF5C00] group-hover:text-black transition-colors" />
              </div>
              <h4 className="text-white font-bold text-lg md:text-xl tracking-tight">Nationwide Delivery</h4>
            </div>

          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
