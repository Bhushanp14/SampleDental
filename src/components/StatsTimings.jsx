import { motion } from 'framer-motion';
import { Clock, Calendar, PhoneCall, ShieldCheck } from 'lucide-react';

const timingItems = [
  { id: 1, label: 'Mon – Fri', value: '10:00 AM – 8:30 PM', icon: <Clock size={36} /> },
  { id: 2, label: 'Saturday', value: '10:00 AM – 8:30 PM', icon: <Calendar size={36} /> },
  { id: 3, label: 'Sunday', value: '10:00 AM – 2:00 PM', icon: <ShieldCheck size={36} /> },
  { id: 4, label: 'Emergency', value: 'Available 24/7', icon: <PhoneCall size={36} /> },
];

export default function StatsTimings() {
  return (
    <div className="relative z-20 -mt-16 max-w-7xl mx-auto px-4 md:px-8 pointer-events-none">
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        className="bg-white/80 backdrop-blur-xl border border-white/50 shadow-[0_32px_64px_-16px_rgba(30,58,138,0.15)] rounded-[3rem] p-8 md:p-12 flex flex-wrap lg:flex-nowrap justify-around gap-8 md:gap-1 pointer-events-auto"
      >
        {timingItems.map((item, index) => (
          <div key={item.id} className="flex flex-col items-center text-center lg:px-6 w-full sm:w-1/2 lg:w-1/4 group transition-transform duration-300 hover:-translate-y-2 border-slate-100 last:border-0 md:border-r">
            <div className="mb-4 bg-[#EFF6FF] p-5 rounded-[1.5rem] text-[#3B82F6] group-hover:bg-[#3B82F6] group-hover:text-white transition-all duration-300 shadow-md">
              {item.icon}
            </div>
            <div className="text-xl md:text-2xl font-black text-[#1E3A8A] font-nunito mb-2 transition-colors group-hover:text-[#3B82F6] leading-tight tabular-nums">{item.value}</div>
            <div className="text-slate-500 font-bold text-xs uppercase tracking-[0.2em] font-inter">{item.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
