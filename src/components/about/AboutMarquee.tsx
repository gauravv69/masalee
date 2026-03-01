import { motion } from "framer-motion";

export function AboutMarquee() {
  const words = [
    "PURE INGREDIENTS", "AUTHENTIC FLAVORS", "CRAFTED WITH CARE", 
    "NO ARTIFICIAL COLORS", "TRUE INDIAN HERITAGE"
  ];

  return (
    <div className="bg-[#FF5C00] text-black py-4 overflow-hidden flex whitespace-nowrap relative border-y border-white/20">
      <motion.div
        className="flex gap-8 items-center shrink-0 w-max"
        style={{ willChange: "transform" }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* We duplicate the array to make the infinite loop seamless */}
        {[...words, ...words, ...words, ...words].map((word, idx) => (
          <div key={idx} className="flex items-center gap-8">
            <span className="text-xl md:text-2xl font-black italic tracking-widest uppercase">
              {word}
            </span>
            <span className="text-black/30">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
