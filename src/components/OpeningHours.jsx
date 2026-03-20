import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useBooking } from '../context/BookingContext';

export default function OpeningHours() {
  const { openModal } = useBooking();

  return (
    <section className="bg-white py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#EFF6FF] rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 relative z-10">
        <div className="lg:w-2/5 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center lg:justify-start gap-4 mb-6"
          >
            <div className="bg-[#3B82F6] p-3 rounded-2xl text-white shadow-xl shadow-blue-100/50">
              <Clock size={24} />
            </div>
            <h2 className="text-3xl font-black text-[#1E008A] font-nunito tracking-tighter">Availability & Hours</h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#64748B] text-lg font-inter leading-relaxed font-medium mb-0"
          >
            We are dedicated to providing you with flexible scheduling and timely care. Visit us at our state-of-the-art Andheri West clinic.
          </motion.p>
        </div>

        <div className="lg:w-1/2 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-[#EFF6FF] p-6 rounded-[2rem] flex flex-col gap-4 border-l-[6px] border-[#3B82F6] group hover:bg-white transition-all shadow-md hover:shadow-xl active:scale-[0.98]"
            >
              <div className="flex items-center gap-3">
                <Calendar size={18} className="text-[#3B82F6] group-hover:scale-110 transition-transform" />
                <span className="font-black text-[#1E3A8A] tracking-widest font-inter uppercase text-[10px]">Mon – Sat</span>
              </div>
              <span className="text-xl font-black text-[#1E3A8A] font-nunito group-hover:text-[#3B82F6] transition-colors leading-none">10:00 AM – 8:30 PM</span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-[#EFF6FF] p-6 rounded-[2rem] flex flex-col gap-4 border-l-[6px] border-[#3B82F6] group hover:bg-white transition-all shadow-md hover:shadow-xl active:scale-[0.98]"
            >
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-[#3B82F6] group-hover:scale-110 transition-transform" />
                <span className="font-black text-[#1E3A8A] tracking-widest font-inter uppercase text-[10px]">Sunday</span>
              </div>
              <span className="text-xl font-black text-[#1E3A8A] font-nunito group-hover:text-[#3B82F6] transition-colors leading-none">10:00 AM – 2:00 PM</span>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex justify-center sm:justify-end"
          >
            <button 
               onClick={openModal}
               className="bg-[#1E3A8A] text-white px-8 py-5 rounded-2xl font-black shadow-2xl hover:bg-[#3B82F6] transition-all transform active:scale-95 uppercase tracking-[0.2em] text-[10px] flex items-center gap-3"
            >
               Plan Your Visit <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
