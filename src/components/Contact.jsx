import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Navigation, Calendar } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

export default function Contact() {
  const { openModal } = useBooking();

  const handleDirections = () => {
    window.open('https://www.google.com/maps/search/SmileCraft+Dental+Studio+Andheri+West+Mumbai', '_blank');
  };

  return (
    <section id="contact" className="bg-white py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#EFF6FF] rounded-br-full opacity-50"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-16 md:gap-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <div className="flex items-center gap-2 mb-6 group cursor-default">
            <span className="w-12 h-1 bg-[#3B82F6] group-hover:w-20 transition-all duration-300 rounded-full"></span>
            <span className="text-[#3B82F6] font-bold text-sm uppercase tracking-[0.3em]">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#1E3A8A] font-nunito leading-tight mb-8 tracking-tighter">Visit Our Mumbai Studio</h2>
          <p className="text-[#64748B] text-xl font-medium mb-12 font-inter max-w-lg leading-relaxed text-center lg:text-left">
            Ready for a confident smile? Reach out to us today to book your appointment or visit our state-of-the-art clinic in Andheri West.
          </p>

          <div className="space-y-10">
            <div className="flex items-center gap-6 group hover:translate-x-4 transition-all duration-300">
              <div 
                onClick={handleDirections} 
                className="cursor-pointer bg-[#EFF6FF] p-5 rounded-[2rem] text-[#3B82F6] flex items-center justify-center shadow-lg group-hover:bg-[#3B82F6] group-hover:text-white transition-all duration-500"
              >
                <MapPin size={32} />
              </div>
              <div>
                <h4 className="text-xs font-black text-[#3B82F6] uppercase tracking-[0.3em] mb-1">Our Location</h4>
                <p className="text-[#1E3A8A] font-black text-xl font-nunito leading-tight">
                  Shop No. 12, Sunshine Plaza, <br /> Andheri West, Mumbai – 400053
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 group hover:translate-x-4 transition-all duration-300">
              <div className="bg-[#EFF6FF] p-5 rounded-[2rem] text-[#3B82F6] flex items-center justify-center shadow-lg group-hover:bg-[#3B82F6] group-hover:text-white transition-all duration-500">
                <Phone size={32} />
              </div>
              <div>
                <h4 className="text-xs font-black text-[#3B82F6] uppercase tracking-[0.3em] mb-1">Call Us Anywhere</h4>
                <p className="text-[#1E3A8A] font-black text-2xl font-nunito leading-tight tabular-nums group-hover:text-[#3B82F6] transition-colors">
                  +91 98765 43210
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 group hover:translate-x-4 transition-all duration-300">
              <div className="bg-[#EFF6FF] p-5 rounded-[2rem] text-[#3B82F6] flex items-center justify-center shadow-lg group-hover:bg-[#3B82F6] group-hover:text-white transition-all duration-500">
                <Mail size={32} />
              </div>
              <div>
                <h4 className="text-xs font-black text-[#3B82F6] uppercase tracking-[0.3em] mb-1">Email Support</h4>
                <p className="text-[#1E3A8A] font-black text-xl font-nunito leading-tight group-hover:text-[#3B82F6] transition-colors">
                  care@smilecraftdental.in
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 mt-16 justify-center lg:justify-start">
            <button 
              onClick={openModal}
              className="bg-[#1E3A8A] text-white px-10 py-6 rounded-3xl font-black flex items-center gap-4 transition-all shadow-2xl hover:bg-[#3B82F6] hover:scale-105 active:scale-95 uppercase text-xs tracking-widest"
            >
              Book An Appointment <Calendar size={20} />
            </button>
            <button 
              onClick={handleDirections}
              className="bg-white border-[3px] border-[#1E3A8A] text-[#1E3A8A] px-10 py-6 rounded-3xl font-black flex items-center gap-4 transition-all shadow-xl hover:bg-[#EFF6FF] hover:scale-105 active:scale-95 uppercase text-xs tracking-widest group"
            >
              <Navigation size={20} className="group-hover:text-[#1E3A8A] transition-colors" /> Get Directions
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 relative group"
        >
          <div className="absolute inset-0 bg-[#3B82F6] rounded-[4.5rem] translate-x-4 translate-y-4 opacity-10 pointer-events-none group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500 shadow-2xl"></div>
          <div className="bg-white p-12 md:p-16 rounded-[4.5rem] border border-slate-100 shadow-2xl relative z-10 overflow-hidden">
            {/* Design patterns - reduced size on mobile to avoid title overlap */}
            <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-[#EFF6FF] rounded-bl-full pointer-events-none z-0"></div>
            
            <h3 className="text-3xl font-black text-[#1E3A8A] font-nunito leading-tight mb-12 tracking-tighter relative z-10">Send Us A Message</h3>
            <form className="space-y-8 relative z-10">
              <div className="flex flex-col gap-3">
                <label className="text-[#3B82F6] font-black text-[10px] uppercase tracking-[0.2em] ml-2">Full Name</label>
                <input type="text" placeholder="Your Name" className="w-full bg-[#EFF6FF]/50 p-5 rounded-2xl border-none focus:ring-4 focus:ring-[#3B82F6]/20 focus:outline-none transition-all placeholder:text-slate-400 font-bold" />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-[#3B82F6] font-black text-[10px] uppercase tracking-[0.2em] ml-2">Mobile No</label>
                <input type="text" placeholder="+91 00000 00000" className="w-full bg-[#EFF6FF]/50 p-5 rounded-2xl border-none focus:ring-4 focus:ring-[#3B82F6]/20 focus:outline-none transition-all placeholder:text-slate-400 font-bold" />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-[#3B82F6] font-black text-[10px] uppercase tracking-[0.2em] ml-2">Message</label>
                <textarea rows="4" placeholder="How can we help today?" className="w-full bg-[#EFF6FF]/50 p-5 rounded-2xl border-none focus:ring-4 focus:ring-[#3B82F6]/20 focus:outline-none transition-all placeholder:text-slate-400 font-bold h-32"></textarea>
              </div>
              <button className="w-full bg-[#1E3A8A] text-white py-6 rounded-[2rem] font-black flex items-center justify-center gap-4 transition-all shadow-2xl hover:bg-[#3B82F6] hover:scale-[1.02] active:scale-95 uppercase tracking-widest text-xs h-20 group">
                Send Message <Send size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
