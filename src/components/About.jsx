import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

export default function About() {
  const { openModal } = useBooking();


  return (

    <section id="about" className="bg-[#EFF6FF] py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 -left-32 w-96 h-96 bg-[#3B82F6] rounded-full blur-[120px] opacity-20 transform -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 md:gap-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 relative group"
        >
          <div className="absolute inset-0 bg-[#3B82F6] rounded-[3rem] translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500 opacity-20"></div>
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop" 
            alt="SmileCraft Dental Studio" 
            className="rounded-[3rem] shadow-2xl relative w-full h-[600px] object-cover border-4 border-white transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-10 right-10 bg-white/40 backdrop-blur-xl border border-white/50 p-6 md:p-10 rounded-3xl shadow-xl max-w-xs transform group-hover:translate-x-6 transition-transform duration-500">
            <h4 className="text-[#1E3A8A] font-extrabold text-3xl font-nunito mb-2">12+</h4>
            <p className="text-[#1E3A8A] font-inter text-sm font-bold uppercase tracking-wider">Years of Precision Excellence</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2"
        >
          <div className="flex items-center gap-2 mb-6 group cursor-default">
            <span className="w-12 h-1 bg-[#3B82F6] group-hover:w-20 transition-all duration-300 rounded-full"></span>
            <span className="text-[#3B82F6] font-bold text-sm uppercase tracking-[0.3em]">Our Story</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E3A8A] font-nunito leading-tight mb-8 tracking-tight">
            Welcome to <span className="text-[#3B82F6]">SmileCraft</span> <br /> Dental Studio
          </h2>
          <p className="text-[#475569] text-xl font-medium mb-12 font-inter leading-relaxed max-w-xl">
            At SmileCraft Dental Studio, we combine advanced dental technology with compassionate care to deliver exceptional results. Our clinic is designed to provide a comfortable and hygienic environment for patients of all ages. 
          </p>
          <p className="text-[#64748B] text-lg mb-12 font-inter leading-relaxed max-w-xl">
            Whether it’s a routine check-up or a complete smile makeover, we ensure every visit is smooth and stress-free. Every smile is a unique craft at our studio in Andheri West.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-[#3B82F6]" size={24} />
              <span className="text-[#1E3A8A] font-bold text-lg font-nunito">Advanced Tech</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-[#3B82F6]" size={24} />
              <span className="text-[#1E3A8A] font-bold text-lg font-nunito">Hygienic Care</span>
            </div>
          </div>

          <button 
            onClick={openModal}
            className="bg-[#1E3A8A] group hover:bg-[#3B82F6] text-white px-10 py-5 rounded-full font-extrabold flex items-center gap-4 transition-all shadow-xl hover:shadow-[#3B82F6]/30 active:scale-95 text-lg uppercase tracking-wider tabular-nums"
          >
            🦷 Book An Appointment <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>

        </motion.div>
      </div>
    </section>
  );
}
