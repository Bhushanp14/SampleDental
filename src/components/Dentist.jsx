import { motion } from 'framer-motion';
import { Award, GraduationCap, Star, ShieldCheck } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

export default function Dentist() {
  const { openModal } = useBooking();

  return (
    <section className="bg-white py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-[#EFF6FF] rounded-full blur-[120px] opacity-50 transform -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col items-center lg:flex-row gap-16 md:gap-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 group"
        >
          <div className="relative overflow-hidden rounded-[3rem] shadow-2xl bg-[#EFF6FF] aspect-square group-hover:shadow-[0_48px_80px_-16px_rgba(59,130,246,0.3)] transition-all duration-700">
            <img 
              src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop" 
              alt="Dr. Aisha Mehra" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0" 
            />
            {/* Design patterns */}
            <div className="absolute bottom-10 left-10 p-6 bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl group-hover:bg-white transition-colors duration-500">
              <h4 className="text-[#1E3A8A] font-extrabold text-2xl font-nunito mb-1">Meet the Expert</h4>
              <p className="text-[#3B82F6] font-bold text-sm uppercase tracking-widest">Mumbai, India</p>
            </div>
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
            <span className="text-[#3B82F6] font-bold text-sm uppercase tracking-[0.3em]">Senior Specialist</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#1E3A8A] font-nunito leading-tight mb-4 tracking-tighter">
            Dr. Aisha Mehra <br /> <span className="text-[#3B82F6] text-3xl font-bold tracking-normal italic">BDS, MDS – Cosmetic & Implant Dentist</span>
          </h2>
          <p className="text-[#64748B] text-xl font-medium mb-12 font-inter leading-relaxed max-w-xl">
            With over 12 years of experience, Dr. Aisha Mehra specializes in smile makeovers, dental implants, and preventive dentistry. 
          </p>
          <p className="text-[#475569] text-lg mb-12 font-inter leading-relaxed max-w-xl">
            She is known for her patient-first approach and attention to detail, ensuring every treatment is comfortable and result-driven. Dr. Mehra's expertise has transformed thousands of smiles in the Andheri West community.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="bg-[#EFF6FF] p-3 rounded-2xl text-[#3B82F6]">
                <GraduationCap size={28} />
              </div>
              <div>
                <h4 className="text-[#1E3A8A] font-extrabold font-nunito text-lg">MDS Qualified</h4>
                <p className="text-[#94A3B8] font-bold text-sm tracking-wide">University of Mumbai</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#EFF6FF] p-3 rounded-2xl text-[#3B82F6]">
                <ShieldCheck size={28} />
              </div>
              <div>
                <h4 className="text-[#1E3A8A] font-extrabold font-nunito text-lg">ISO Certified</h4>
                <p className="text-[#94A3B8] font-bold text-sm tracking-wide">Global Safety Standards</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#EFF6FF] p-3 rounded-2xl text-[#3B82F6]">
                <Star size={28} />
              </div>
              <div>
                <h4 className="text-[#1E3A8A] font-extrabold font-nunito text-lg">4.8 Star Rating</h4>
                <p className="text-[#94A3B8] font-bold text-sm tracking-wide">800+ Reviews</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#EFF6FF] p-3 rounded-2xl text-[#3B82F6]">
                <Award size={28} />
              </div>
              <div>
                <h4 className="text-[#1E3A8A] font-extrabold font-nunito text-lg">Best Smile Award</h4>
                <p className="text-[#94A3B8] font-bold text-sm tracking-wide">2024 Recognition</p>
              </div>
            </div>
          </div>

          <button 
            onClick={openModal}
            className="bg-[#1E3A8A] group hover:bg-[#3B82F6] text-white px-10 py-5 rounded-3xl font-extrabold flex items-center gap-4 transition-all shadow-2xl hover:shadow-[#3B82F6]/30 active:scale-95 text-lg uppercase tracking-wider"
          >
            🦷 Book Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
}
