import { ShoppingBag, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
}

interface CollectionProps {
  title: string;
  subtitle?: string;
  largeImage: string;
  imagePosition?: "left" | "right";
  products: Product[];
}

const Collection = ({ title, subtitle, largeImage, imagePosition = "left", products }: CollectionProps) => {
  return (
    <div className={`flex flex-col ${imagePosition === "right" ? "xl:flex-row-reverse" : "xl:flex-row"} gap-6 lg:gap-8 w-full mb-32 last:mb-0`}>
      
      {/* Large Featured Image */}
      <motion.div 
        initial={{ opacity: 0, x: imagePosition === "left" ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="w-full xl:w-[400px] shrink-0 h-[400px] xl:h-auto min-h-[500px] relative rounded-[2.5rem] overflow-hidden group shadow-2xl border border-white/10"
      >
        <img 
          src={largeImage} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/40 to-transparent" />
        
        {/* Content */}
        <div className="absolute inset-0 p-10 flex flex-col justify-end">
          {subtitle && (
            <span className="text-[#FF5C00] font-bold text-[10px] uppercase tracking-[0.3em] mb-3 block opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
              {subtitle}
            </span>
          )}
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
            {title.split(' ').map((word, i) => (
              <span key={i} className={i === 0 ? "font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500 pr-2" : ""}>
                {word}{' '}
              </span>
            ))}
          </h2>
          
          <button className="mt-8 flex items-center gap-3 text-white/50 hover:text-white transition-colors font-bold uppercase tracking-widest text-xs group/btn w-fit">
            <span className="border-b border-transparent group-hover/btn:border-white pb-0.5">Explore All</span>
            <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-2 transition-transform" />
          </button>
        </div>
      </motion.div>

      {/* Grid of Products */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-[2rem] overflow-hidden flex flex-col hover:-translate-y-2 hover:border-[#FF5C00]/30 transition-all duration-500 cursor-pointer shadow-xl"
          >
            {/* Image Section */}
            <div className="relative aspect-[4/3] w-full p-2.5 pb-0">
              <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative bg-black/40">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out brightness-90 group-hover:brightness-110"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm z-20">
                  <button className="bg-white text-black p-4 rounded-full hover:bg-[#FF5C00] hover:text-white transform scale-90 group-hover:scale-110 transition-all duration-300 hover:rotate-12 shadow-[0_0_30px_rgba(255,92,0,0.5)]">
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 pt-5 flex flex-col flex-grow">
              <div className="mb-auto">
                <h3 className="text-white/90 font-semibold text-sm leading-snug group-hover:text-amber-500 transition-colors line-clamp-2">
                  {product.name}
                </h3>
              </div>
              
              <div className="flex items-center gap-3 mt-4">
                {product.originalPrice && (
                  <span className="text-white/30 line-through text-xs font-mono">{product.originalPrice}</span>
                )}
                <p className="text-[#FF5C00] font-mono text-sm tracking-tight font-bold">
                  {product.price}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
    </div>
  );
};

export function ProductCollections() {
  const exoticSpices = [
    { id: 1, name: "Premium Mustard Seeds (Sarson)", price: "₹13.00 - ₹260.00", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 2, name: "Premium Star Anise (Chakra Phool)", price: "₹68.25 - ₹1,365.00", image: "https://images.unsplash.com/photo-1606913084603-3e7702b01627?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 3, name: "Premium Caraway Seeds (Shahi Jeera)", price: "₹91.65 - ₹1,833.00", image: "https://images.unsplash.com/photo-1596647182285-d857a268a7ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 4, name: "Premium Cardamom (Elaichi) Black", price: "₹240.50 - ₹4,810.00", image: "https://images.unsplash.com/photo-1615486511484-92e17ceea2cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 5, name: "Premium Cloves (Laung)", price: "₹108.55 - ₹2,171.00", image: "https://images.unsplash.com/photo-1615486171448-4af1a6136d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 6, name: "Premium Black Pepper (Kali Mirch)", price: "₹81.25 - ₹1,625.00", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  ];

  const everydaySpices = [
    { id: 7, name: "Premium Kasuri Methi (Dried Leaves)", price: "₹35.75 - ₹715.00", image: "https://images.unsplash.com/photo-1624806992066-5fffe7ca9272?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 8, name: "Premium Maypatri", price: "₹159.25 - ₹3,185.00", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 9, name: "Standard Mace (Javitri)", price: "₹260.00 - ₹5,200.00", image: "https://images.unsplash.com/photo-1606913084603-3e7702b01627?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 10, name: "Standard Fennel Seeds (Saunf)", price: "₹31.85 - ₹637.00", image: "https://images.unsplash.com/photo-1615486511484-92e17ceea2cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 11, name: "Standard Mustard Seeds (Sarson)", price: "₹9.75 - ₹195.00", image: "https://images.unsplash.com/photo-1596647182285-d857a268a7ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 12, name: "Standard Cumin Seeds (Jeera)", price: "₹27.30 - ₹546.00", image: "https://images.unsplash.com/photo-1615486171448-4af1a6136d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  ];

  const premiumBlends = [
    { id: 13, name: "Premium Fish Curry Masala", price: "₹42.50 - ₹850.00", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 14, name: "Premium Biryani Masala", price: "₹75.00 - ₹1,500.00", image: "https://images.unsplash.com/photo-1615486171448-4af1a6136d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 15, name: "Premium Goda Masala", price: "₹55.00 - ₹1,100.00", image: "https://images.unsplash.com/photo-1606913084603-3e7702b01627?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 16, name: "Premium Rasam Powder", price: "₹47.50 - ₹950.00", image: "https://images.unsplash.com/photo-1615486511484-92e17ceea2cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 17, name: "Premium Sambar Powder", price: "₹47.50 - ₹950.00", image: "https://images.unsplash.com/photo-1624806992066-5fffe7ca9272?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 18, name: "Premium Garam Masala", price: "₹55.00 - ₹1,100.00", image: "https://images.unsplash.com/photo-1596647182285-d857a268a7ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  ];

  return (
    <section className="bg-[#0A0A0A] py-32 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 md:px-12 relative z-10 w-full">
        
        {/* Collection 1 */}
        <Collection 
          title="Exotic Spices"
          subtitle="Rare finds"
          largeImage="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          imagePosition="left"
          products={exoticSpices}
        />

        {/* Collection 2 */}
        <Collection 
          title="Everyday Spices"
          subtitle="Kitchen essentials"
          largeImage="https://images.unsplash.com/photo-1596647182285-d857a268a7ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          imagePosition="right"
          products={everydaySpices}
        />

        {/* Collection 3 */}
        <Collection 
          title="Premium Blends"
          subtitle="Crafted formulas"
          largeImage="https://images.unsplash.com/photo-1606913084603-3e7702b01627?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          imagePosition="left"
          products={premiumBlends}
        />

      </div>
    </section>
  );
}
