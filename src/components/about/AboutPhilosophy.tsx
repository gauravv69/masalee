import { motion } from "framer-motion";

const cards = [
  {
    title: "Finest spices",
    description: "Great cooking starts long before the pan is heated. It begins with spices that are pure, aromatic, and carefully sourced."
  },
  {
    title: "No compromise",
    description: "True taste comes from staying honest—to the source, the process, and tradition. We never cut corners or dilute flavors."
  },
  {
    title: "Pure nourishment",
    description: "Food is meant to do more than satisfy hunger. Our spices are crafted to nourish the body with purity, and the soul with warmth."
  }
];

export function AboutPhilosophy() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="bg-[#050505] text-white py-24 md:py-32 px-4 md:px-12 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col items-center text-center gap-6 mb-20 max-w-4xl mx-auto">
          <h4 className="text-white/50 text-sm uppercase tracking-widest font-bold">Our Philosophy</h4>
          
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-black tracking-tight leading-[1.2] text-white">
            Our Passion for <span className="font-serif italic text-amber-500/90 font-light">Heavenly Flavors</span> and Exceptional Customer Service
          </h2>
          
          <p className="text-white/70 text-base md:text-lg font-bold">
            At Masalee, luxury isn't about excess—it's about purity, intention, and craft. <span className="text-white">We believe:</span>
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto"
        >
          {cards.map((card, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className={`bg-white/[0.03] backdrop-blur-xl rounded-[2.5rem] p-10 md:p-12 hover:-translate-y-2 transition-transform duration-500 shadow-[0_4px_24px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(255,92,0,0.1)] border border-white/5 hover:border-[#FF5C00]/30 group ${
                index === 0 ? "md:col-span-2" : 
                index === 1 ? "md:col-span-2" : 
                "md:col-span-4 md:col-start-1"
              }`}
            >
              <h3 className="text-3xl md:text-4xl font-black italic text-white/90 mb-6 group-hover:text-[#FF5C00] transition-colors">{card.title}</h3>
              <p className="text-white/60 text-lg md:text-xl leading-relaxed font-medium">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
