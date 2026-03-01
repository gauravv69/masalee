import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function WhatsAppButton() {
  const phoneNumber = "917276674303";
  const message = "Hi Masalee! I would like to place an order.";
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a 
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] group flex items-center gap-3 bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_10px_40px_rgba(37,211,102,0.6)] transition-all hover:-translate-y-2 hover:scale-105"
      aria-label="Order on WhatsApp"
    >
      <span className="hidden md:block max-w-0 overflow-hidden group-hover:max-w-[200px] whitespace-nowrap transition-all duration-500 ease-in-out font-black text-xs uppercase tracking-widest pl-2">
        Order on WhatsApp
      </span>
      <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
    </motion.a>
  );
}
