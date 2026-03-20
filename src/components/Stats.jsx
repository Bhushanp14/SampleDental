import { motion } from 'framer-motion';
import { Award, Users, ShieldCheck, HeartPulse } from 'lucide-react';

const stats = [
  { id: 1, label: 'Years Experience', value: '12+', icon: <Award size={36} /> },
  { id: 2, label: 'Happy Patients', value: '800+', icon: <Users size={36} /> },

  { id: 3, label: 'Implants Placed', value: '3,500+', icon: <ShieldCheck size={36} /> },
  { id: 4, label: 'Smiles Transformed', value: '15,000+', icon: <HeartPulse size={36} /> },
];

export default function Stats() {
  return (
    <div className="relative z-20 -mt-16 max-w-7xl mx-auto px-4 md:px-8 pointer-events-none">
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        className="bg-white/80 backdrop-blur-xl border border-white/50 shadow-[0_32px_64px_-16px_rgba(30,58,138,0.15)] rounded-3xl p-8 md:p-12 flex flex-wrap lg:flex-nowrap justify-around gap-8 md:gap-1 pointer-events-auto"
      >
        {stats.map((stat, index) => (
          <div key={stat.id} className="flex flex-col items-center text-center lg:px-12 w-full sm:w-1/2 lg:w-1/4 group transition-transform duration-300 hover:-translate-y-2 border-slate-100 last:border-0 md:border-r">
            <div className="mb-4 bg-[#EFF6FF] p-5 rounded-[1.5rem] text-[#3B82F6] group-hover:bg-[#3B82F6] group-hover:text-white transition-all duration-300 shadow-md">
              {stat.icon}
            </div>
            <div className="text-4xl font-extrabold text-[#1E3A8A] font-nunito mb-1 tabular-nums group-hover:text-[#3B82F6] transition-colors">{stat.value}</div>
            <div className="text-slate-500 font-bold text-sm uppercase tracking-wider font-inter">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
