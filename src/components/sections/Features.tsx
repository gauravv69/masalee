import { ShieldCheck, Leaf, Truck, PackageCheck } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export function Features() {
  const features = [
    {
      id: 1,
      icon: <Leaf className="w-5 h-5 text-[#FF5C00]" />,
      title: "Fresh Stock",
      description: "Harvested and ground weekly for peak potency."
    },
    {
      id: 2,
      icon: <ShieldCheck className="w-5 h-5 text-[#FF5C00]" />,
      title: "Secure Payment",
      description: "100% encrypted & safe checkout process."
    },
    {
      id: 3,
      icon: <Truck className="w-5 h-5 text-[#FF5C00]" />,
      title: "Fast Delivery",
      description: "Express shipping nationwide in 2-4 days."
    },
    {
      id: 4,
      icon: <PackageCheck className="w-5 h-5 text-[#FF5C00]" />,
      title: "Carefully Packaged",
      description: "Sealed for maximum freshness and aroma."
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <section className="bg-[#050505] py-12 border-y border-white/5 relative z-20">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-white/10"
        >
          {features.map((feature) => (
            <motion.div 
              key={feature.id} 
              variants={itemVariants}
              className="flex flex-col items-center text-center px-4 group"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-[#FF5C00]/10 group-hover:scale-110 transition-all duration-300">
                {feature.icon}
              </div>
              <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-2">{feature.title}</h4>
              <p className="text-white/40 text-[11px] font-medium leading-relaxed max-w-[200px] hidden md:block">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
