import { motion } from "framer-motion";
import { MainLayout } from "../components/layout/MainLayout";
import { Send, Building2 } from "lucide-react";

export default function B2bPage() {
  return (
    <MainLayout>
      <section className="bg-[#050505] text-white pt-52 pb-20 md:pt-64 md:pb-32 px-4 md:px-12 relative overflow-hidden min-h-screen border-b border-white/5">
        {/* Dynamic Grid Background overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}
        />
        {/* Intense radial glow */}
        <div className="absolute top-0 right-0 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-[#FF5C00]/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#FF5C00]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1000px] mx-auto relative z-10 flex flex-col items-center">
          
          {/* Header Title */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 md:mb-16 text-center w-full relative flex flex-col items-center"
          >
            <h1 
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[14vw] md:text-[10vw] font-black tracking-tighter uppercase whitespace-nowrap opacity-10 pointer-events-none"
              style={{ WebkitTextStroke: '2px white', color: 'transparent' }}
            >
              WHOLESALE
            </h1>
            
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-500 mb-6 relative z-10">
              <Building2 className="w-8 h-8" />
            </div>
            
            <h1 className="relative text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4 uppercase z-10 text-center">
              B2B <span className="text-[#FF5C00]">Ordering Form</span>
            </h1>
            
            <p className="text-white/60 text-lg md:text-xl font-medium max-w-2xl text-center relative z-10">
              Please fill up the form for B2B Ordering. We will get back to you on the details provided by you. <span className="text-white">All fields are mandatory.</span>
            </p>
          </motion.div>

          {/* Form Container */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-[2rem] p-6 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.5)] relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <form className="flex flex-col gap-6 md:gap-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <input 
                  type="text" 
                  placeholder="Enter Your Name" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-[#FF5C00] focus:ring-1 focus:ring-[#FF5C00] transition-all font-medium text-lg"
                  required
                />
                <input 
                  type="text" 
                  placeholder="Business Name" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-[#FF5C00] focus:ring-1 focus:ring-[#FF5C00] transition-all font-medium text-lg"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <input 
                  type="email" 
                  placeholder="Business Email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-[#FF5C00] focus:ring-1 focus:ring-[#FF5C00] transition-all font-medium text-lg"
                  required
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-[#FF5C00] focus:ring-1 focus:ring-[#FF5C00] transition-all font-medium text-lg"
                  required
                />
              </div>
              
              <textarea 
                placeholder="Shop Address" 
                rows={3}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-[#FF5C00] focus:ring-1 focus:ring-[#FF5C00] transition-all font-medium resize-none text-lg"
                required
              ></textarea>

              <div className="flex flex-col gap-2">
                <textarea 
                  placeholder="Order Details" 
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-[#FF5C00] focus:ring-1 focus:ring-[#FF5C00] transition-all font-medium resize-none text-lg"
                  required
                ></textarea>
                <span className="text-white/40 text-sm italic ml-2">Add each product with required quantity on separate line.</span>
              </div>

              <div className="pt-4 flex justify-center">
                <button 
                  type="submit" 
                  className="w-full md:w-auto min-w-[300px] bg-[#FF5C00] text-black py-5 px-12 rounded-xl font-black uppercase tracking-widest text-lg hover:bg-white hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(255,92,0,0.3)] transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <span>Request a Quote</span>
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </section>
    </MainLayout>
  );
}
