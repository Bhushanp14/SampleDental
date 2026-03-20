import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rahul Sharma',
    rating: 5,
    text: '“Best dental experience I’ve had!” The clinic is clean, the staff is friendly, and the treatment was completely painless.',
    location: 'Andheri East',
  },
  {
    id: 2,
    name: 'Neha Verma',
    rating: 4,
    text: '“Highly recommend SmileCraft!” Got my aligners done here and the results are amazing.',
    location: 'Versova',
  },
  {
    id: 3,
    name: 'Amit Patel',
    rating: 5,
    text: '“Very professional and caring team.” They explained everything clearly and made me feel comfortable.',
    location: 'Powai',
  },
];

const StarsRender = ({ rating, size = 20 }) => (
    <div className="flex gap-1 justify-center">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          size={size} 
          fill={i < Math.floor(rating) ? "#FBBC05" : (i === Math.floor(rating) && rating % 1 !== 0 ? "url(#grad-testimonials)" : "none")} 
          className={i < rating ? "text-[#FBBC05]" : "text-[#E5E7EB]"}
        />
      ))}
      <svg width="0" height="0">
        <defs>
          <linearGradient id="grad-testimonials">
            <stop offset="80%" stopColor="#FBBC05" />
            <stop offset="80%" stopColor="#E5E7EB" stopOpacity="1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-[#EFF6FF] py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-12 h-1 bg-[#3B82F6] rounded-full"></span>
            <span className="text-[#3B82F6] font-bold text-sm uppercase tracking-[0.2em]">Our Patients</span>
            <span className="w-12 h-1 bg-[#3B82F6] rounded-full"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E3A8A] font-nunito leading-tight tracking-tight">Trust From The Heart</h2>
          <div className="mt-6 mb-4">
            <StarsRender rating={4.8} size={28} />
          </div>
          <p className="text-[#64748B] text-lg font-inter font-black uppercase tracking-[0.3em] mt-6">4.8 Rated Across Mumbai</p>
          <p className="text-[#94A3B8] font-bold text-sm uppercase tracking-[0.2em] mt-2">Based on 800+ Verified Patient Stories</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl group flex flex-col items-center text-center relative overflow-hidden h-full"
            >
              {/* Giant Background Quote */}
              <Quote className="absolute -top-10 -right-10 w-48 h-48 text-[#EFF6FF] group-hover:text-[#3B82F6]/5 transition-colors duration-500" />
              
              <div className="mb-8 relative">
                <div className="absolute inset-0 bg-[#3B82F6] rounded-full blur-[15px] opacity-20 scale-150"></div>
                <div className="w-20 h-20 bg-[#EFF6FF] rounded-full flex items-center justify-center text-[#1E3A8A] font-black text-3xl font-nunito relative z-10 shadow-inner">
                  {item.name[0]}
                </div>
              </div>

              <div className="mb-8">
                <StarsRender rating={item.rating} size={20} />
              </div>

              <div className="flex-grow flex items-center justify-center">
                 <p className="text-[#1E3A8A] text-xl font-extrabold font-nunito leading-relaxed mb-10 relative z-10 italic">
                   {item.text}
                 </p>
              </div>

              <div className="mt-8 border-t border-slate-100 pt-8 w-full">
                <h4 className="text-lg font-black text-[#1E3A8A] font-nunito">{item.name}</h4>
                <p className="text-[#94A3B8] font-bold text-xs uppercase tracking-[0.2em] mt-1">{item.location}, Mumbai</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
