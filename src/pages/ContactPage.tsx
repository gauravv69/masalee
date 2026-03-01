import { motion } from "framer-motion";
import { MainLayout } from "../components/layout/MainLayout";
import { InstagramSection } from "../components/sections/InstagramSection";
import { Instagram, Facebook, MapPin, Phone, Mail, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <MainLayout>
      <section className="bg-[#050505] text-white pt-52 pb-20 md:pt-64 md:pb-32 px-4 md:px-12 relative overflow-hidden min-h-screen">
        {/* Dynamic Grid Background overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}
        />
        {/* Intense radial glow */}
        <div className="absolute top-1/3 left-0 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-[#FF5C00]/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#FF5C00]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          
          {/* Header Title */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16 md:mb-24 text-center relative"
          >
            <h1 
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-black tracking-tighter uppercase whitespace-nowrap opacity-10 pointer-events-none"
              style={{ WebkitTextStroke: '2px white', color: 'transparent' }}
            >
              CONTACT US
            </h1>
            <h1 className="relative text-5xl md:text-6xl lg:text-[5.5rem] font-black tracking-tight text-white mb-4 uppercase z-10">
              Get In <span className="text-[#FF5C00]">Touch</span>
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Left Column: Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-12"
            >
              {/* Address */}
              <div className="flex flex-col gap-4 group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-amber-500 group-hover:bg-[#FF5C00] group-hover:text-white group-hover:border-[#FF5C00] transition-all duration-500">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-widest text-white">Address</h3>
                </div>
                <p className="text-white/60 text-lg leading-relaxed pl-16">
                  1031, Jivaba Nana Jadhav Park,<br /> 
                  New Vashi Naka, Karveer,<br />
                  Kolhapur - 416011, Maharashtra, India
                </p>
              </div>

              {/* Phone Numbers */}
              <div className="flex flex-col gap-4 group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-amber-500 group-hover:bg-[#FF5C00] group-hover:text-white group-hover:border-[#FF5C00] transition-all duration-500">
                    <Phone className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-widest text-white">Phone</h3>
                </div>
                <div className="text-white/60 text-lg flex flex-col gap-2 pl-16 font-medium">
                  <a href="tel:+917276674303" className="hover:text-[#FF5C00] transition-colors w-fit">+91 72766 74303</a>
                  <a href="tel:+918983289201" className="hover:text-[#FF5C00] transition-colors w-fit">+91 89832 89201</a>
                </div>
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-4 group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-amber-500 group-hover:bg-[#FF5C00] group-hover:text-white group-hover:border-[#FF5C00] transition-all duration-500">
                    <Mail className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-widest text-white">Email</h3>
                </div>
                <a href="mailto:masaleemasalee658@gmail.com" className="text-white/60 text-lg pl-16 hover:text-[#FF5C00] transition-colors w-fit font-medium">
                  masaleemasalee658@gmail.com
                </a>
              </div>

              {/* Socials */}
              <div className="pt-8 border-t border-white/10 flex items-center gap-8">
                <h3 className="text-xl font-black uppercase tracking-widest text-white/40">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center hover:bg-[#FF5C00] hover:text-black hover:scale-110 transition-all duration-300">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center hover:bg-[#FF5C00] hover:text-black hover:scale-110 transition-all duration-300">
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.5)] relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <h2 className="text-3xl md:text-4xl font-serif italic text-amber-500/90 leading-tight mb-8">
                Have a message?
              </h2>

              <form className="flex flex-col gap-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input 
                    type="text" 
                    placeholder="Name" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-white/30 focus:outline-none focus:border-[#FF5C00] focus:ring-1 focus:ring-[#FF5C00] transition-all font-medium"
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-white/30 focus:outline-none focus:border-[#FF5C00] focus:ring-1 focus:ring-[#FF5C00] transition-all font-medium"
                  />
                </div>
                
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-white/30 focus:outline-none focus:border-[#FF5C00] focus:ring-1 focus:ring-[#FF5C00] transition-all font-medium"
                />
                
                <input 
                  type="text" 
                  placeholder="Subject" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-white/30 focus:outline-none focus:border-[#FF5C00] focus:ring-1 focus:ring-[#FF5C00] transition-all font-medium"
                />
                
                <textarea 
                  placeholder="Your Message..." 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-white/30 focus:outline-none focus:border-[#FF5C00] focus:ring-1 focus:ring-[#FF5C00] transition-all font-medium resize-none"
                ></textarea>

                <button 
                  type="submit" 
                  className="w-full mt-4 bg-white text-black py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-[#FF5C00] hover:text-white hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(255,92,0,0.3)] transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
      <InstagramSection />
    </MainLayout>
  );
}
