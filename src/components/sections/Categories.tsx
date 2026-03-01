import { ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

export function Categories() {
  const categories = [
    { name: "Blended Masalas", count: 17 },
    { name: "Ground Spices", count: 4 },
    { name: "Herbs & Aroma", count: 5 },
    { name: "Whole Spices", count: 51 }
  ];

  const products = [
    {
      id: 1,
      name: "Premium Himalayan Pink Salt",
      category: "Herbs & Aroma",
      price: "₹50.00",
      originalPrice: "₹70.00",
      image: "https://images.unsplash.com/photo-1624806992066-5fffe7ca9272?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      name: "Premium Tamarind (Imli)",
      category: "Herbs & Aroma",
      price: "₹12.00 - ₹240.00",
      originalPrice: "",
      image: "https://images.unsplash.com/photo-1606913084603-3e7702b01627?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      name: "Premium Tak (Buttermilk) Masala",
      category: "Blended Masalas",
      price: "₹50.00 - ₹1,000.00",
      originalPrice: "",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 4,
      name: "Premium Chaat Masala",
      category: "Blended Masalas",
      price: "₹40.00 - ₹800.00",
      originalPrice: "",
      image: "https://images.unsplash.com/photo-1615486511484-92e17ceea2cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 5,
      name: "Premium Tandoor Masala",
      category: "Blended Masalas",
      price: "₹55.00 - ₹1,100.00",
      originalPrice: "",
      image: "https://images.unsplash.com/photo-1615486171448-4af1a6136d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 6,
      name: "Premium Coriander Powder",
      category: "Ground Spices",
      price: "₹20.50 - ₹410.00",
      originalPrice: "",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    }
  ];

  return (
    <section className="bg-[#0A0A0A] py-32 relative overflow-hidden">
      
      <div className="max-w-[1600px] mx-auto px-4 md:px-12 relative z-10 w-full">
        
        {/* The Grid Layout */}
        <div className="flex flex-col xl:flex-row gap-6 lg:gap-8 w-full">
          
          {/* Left Hero Sidebar/Filter (Combined) */}
          <div className="w-full xl:w-[320px] shrink-0 flex flex-col gap-6">
            
            {/* Top Image Banner */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative w-full h-[280px] rounded-[2rem] overflow-hidden group shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-white/10"
            >
              <img 
                src="https://images.unsplash.com/photo-1596647182285-d857a268a7ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Premium Spices Banner" 
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 brightness-50 contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-[#0A0A0A]/30" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-black text-white leading-tight mb-1">
                    Discounts on <br />
                    <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Premium Spices</span>
                  </h2>
                </div>
                <button className="bg-white text-black px-6 py-3 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-[#FF5C00] hover:text-white transition-all w-fit shadow-[0_5px_15px_rgba(0,0,0,0.3)] hover:scale-105">
                  Shop Now
                </button>
              </div>
            </motion.div>

            {/* Bottom Category List */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full bg-white/[0.02] border border-white/5 backdrop-blur-3xl rounded-[2rem] p-8 flex-1"
            >
              <ul className="space-y-4 mb-10">
                {categories.map((cat, i) => (
                  <li key={i} className="group flex items-center gap-3 cursor-pointer">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#FF5C00] group-hover:w-3 transition-all duration-300" />
                    <span className="text-white/70 font-medium group-hover:text-white transition-colors">{cat.name}</span>
                    <span className="text-white/30 text-sm italic ml-1 group-hover:text-white/50">({cat.count})</span>
                  </li>
                ))}
              </ul>

              <button className="flex items-center gap-3 text-white/50 hover:text-[#FF5C00] transition-colors font-bold uppercase tracking-widest text-[10px] group">
                <ShoppingBag className="w-4 h-4" /> 
                <span className="border-b border-transparent group-hover:border-[#FF5C00] pb-0.5">Shop all Spices</span>
              </button>
            </motion.div>

          </div>

          {/* Right Product Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-[2rem] overflow-hidden flex flex-col hover:-translate-y-2 hover:border-white/10 transition-all duration-500 cursor-pointer shadow-xl"
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
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm z-20">
                      <button className="bg-white text-black p-4 rounded-full hover:bg-[#FF5C00] hover:text-white transform scale-90 group-hover:scale-110 transition-all duration-300 hover:rotate-12">
                        <ShoppingBag className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-auto">
                    <span className="text-white/40 font-bold text-[9px] uppercase tracking-[0.2em] mb-2 block group-hover:text-[#FF5C00] transition-colors">
                      {product.category}
                    </span>
                    <h3 className="text-white/90 font-semibold text-base leading-tight">
                      {product.name}
                    </h3>
                  </div>
                  
                  <div className="flex items-center gap-3 mt-6">
                    {product.originalPrice && (
                      <span className="text-white/30 line-through text-xs font-mono">{product.originalPrice}</span>
                    )}
                    <p className="text-[#FF5C00] font-mono text-sm tracking-tight font-bold">
                      {product.price}
                    </p>
                  </div>
                </div>
                
                {/* Accent glow on hover */}
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#FF5C00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
