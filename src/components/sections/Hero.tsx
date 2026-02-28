import { ArrowRight, ShoppingBag, Sparkles } from "lucide-react";

export function Hero() {
  const heroProducts = [
    {
      id: 1,
      name: "Basic Black Pepper (Kali Mirch)",
      price: "₹74.75 - ₹1,495.00",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tag: "Trending"
    },
    {
      id: 2,
      name: "Standard Fennel Seeds (Saunf)",
      price: "₹31.85 - ₹637.00",
      image: "https://images.unsplash.com/photo-1615486171448-4af1a6136d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tag: "Fresh Drop"
    },
    {
      id: 3,
      name: "Premium Kashmiri Saffron",
      price: "₹399.00 - ₹3,500.00",
      image: "https://images.unsplash.com/photo-1615486511484-92e17ceea2cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      tag: "Limited"
    }
  ];

  return (
    <section className="relative w-full bg-[#0A0A0A] text-white min-h-[90vh] md:min-h-screen flex items-center pt-32 pb-16 overflow-hidden mx-auto">
      
      {/* Hyper-Aesthetic Dark Glow Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF5C00]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[400px] bg-[#FF5C00]/10 rounded-full blur-[200px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center px-4 md:px-12">
        
        {/* Left Side: Hyper-Trendy Typography */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-8 pr-0 lg:pr-8">
          
          <div className="inline-flex items-center gap-3 border border-white/10 px-4 py-1.5 rounded-full w-fit bg-white/5 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#FF5C00]" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/80">
              The Genesis Collection
            </span>
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-7xl lg:text-[5.5rem] font-sans font-black leading-[0.95] tracking-tighter">
            Where <br/>
            Freshness <br/>
            <span className="font-serif italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C00] to-amber-500 pr-4 drop-shadow-[0_0_20px_rgba(255,92,0,0.5)]">
              Meets Tradition.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 font-medium leading-relaxed max-w-sm">
            Farm-fresh, authentic, and intensely aromatic. Sourced directly from generational growers.
          </p>

          <button className="bg-white text-black px-8 py-5 rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-[#FF5C00] hover:text-white transition-all duration-300 w-fit flex items-center gap-4 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,92,0,0.4)] hover:scale-105 group">
            Explore Store <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right Side: Ultimate Sexy GenZ Card Container */}
        <div className="lg:col-span-7 relative w-full flex gap-6 overflow-x-auto pb-12 pt-8 snap-x snap-mandatory hide-scrollbars no-scrollbar select-none" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          
          {/* Edge Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-20 pointer-events-none"></div>

          {heroProducts.map((product) => (
            <div key={product.id} className="min-w-[280px] md:min-w-[340px] snap-center shrink-0 group relative cursor-pointer">
              
              {/* Backing Ambient Glow */}
              <div className="absolute inset-0 bg-[#FF5C00] rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700" />
              
              {/* Actual Card Body */}
              <div className="relative h-full bg-white/[0.03] backdrop-blur-3xl rounded-[2rem] border border-white/10 overflow-hidden flex flex-col transform transition-all duration-500 group-hover:-translate-y-3 group-hover:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                
                {/* Image Section */}
                <div className="relative aspect-square w-full p-3 pb-0">
                  {/* Neon Tag Pill */}
                  <span className="absolute top-6 left-6 z-20 bg-black/60 backdrop-blur-xl border border-white/10 text-white px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] shadow-xl">
                    {product.tag}
                  </span>

                  {/* Circular Quick Add */}
                  <div className="absolute top-6 right-6 z-20 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                     <button className="bg-white text-black p-3 rounded-full hover:bg-[#FF5C00] hover:text-white shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:scale-110 transition-all">
                       <ShoppingBag className="w-4 h-4" />
                     </button>
                  </div>

                  {/* Image Element */}
                  <div className="w-full h-full rounded-[1.5rem] overflow-hidden bg-black/50 relative">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out brightness-90 group-hover:brightness-110 contrast-125"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 pt-5 flex flex-col justify-end flex-grow">
                  <h3 className="text-white/90 font-semibold text-lg leading-tight mb-3 line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-[#FF5C00] font-mono text-[13px] tracking-tight font-bold">
                      {product.price}
                    </p>
                    <div className="w-6 h-[2px] bg-white/20 group-hover:bg-[#FF5C00] group-hover:w-10 transition-all duration-500 rounded-full" />
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
      
      {/* Global CSS to hide scrollbar explicitly for the carousel */}
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
