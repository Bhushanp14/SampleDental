import Breadcrumb from '../components/Breadcrumb';
import { Star, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const reviewsData = [
  { id: 1, name: 'Rahul Sharma', rating: 5, date: '2 months ago', text: 'Best dental experience I’ve had! The clinic is clean, the staff is friendly, and the treatment was completely painless.' },
  { id: 2, name: 'Neha Verma', rating: 5, date: '1 month ago', text: 'Highly recommend SmileCraft! Got my aligners done here and the results are amazing.' },
  { id: 3, name: 'Amit Patel', rating: 5, date: '3 weeks ago', text: 'Very professional and caring team. They explained everything clearly and made me feel comfortable.' },
  { id: 4, name: 'Siddharth Iyer', rating: 4, date: '5 days ago', text: 'Excellent service and great attention to detail. Dr. Aisha is brilliant, though appointment scheduling was slightly tight.' },
  { id: 5, name: 'Priya Mehta', rating: 5, date: '2 weeks ago', text: 'Cleanest dental clinic in Mumbai! Highly satisfy with my smile makeover.' },
];

const GoogleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const StarsRender = ({ rating, size = 24 }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={size}
        fill={i < Math.floor(rating) ? "#FBBC05" : (i === Math.floor(rating) && rating % 1 !== 0 ? "url(#grad)" : "none")}
        className={i < rating ? "text-[#FBBC05]" : "text-[#E5E7EB]"}
      />
    ))}
    <svg width="0" height="0">
      <defs>
        <linearGradient id="grad">
          <stop offset="80%" stopColor="#FBBC05" />
          <stop offset="80%" stopColor="#E5E7EB" stopOpacity="1" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

export default function ReviewsPage() {
  return (
    <div className="pt-20 min-h-screen bg-[#EFF6FF]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-12">
        <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl flex flex-col md:flex-row items-center justify-between mb-20 relative overflow-hidden">
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#EFF6FF] rounded-bl-full"></div>

          <div className="mb-8 md:mb-0 relative z-10 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <GoogleIcon />
              <h3 className="text-xl font-bold text-[#1E3A8A] font-inter">Google Reviews</h3>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <span className="text-7xl font-black text-[#1E3A8A] font-nunito tracking-tighter">4.8</span>
              <div>
                <StarsRender rating={4.8} />
                <p className="text-[#64748B] font-bold text-sm uppercase tracking-[0.2em] mt-2">Based on 800+ Patient Reviews</p>
              </div>
            </div>
          </div>
          <button className="bg-[#3B82F6] text-white px-10 py-5 rounded-3xl font-extrabold hover:bg-[#1E3A8A] transition-all shadow-xl active:scale-95 uppercase tracking-wider text-sm relative z-10">
            Leave A Review
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-24">
          {reviewsData.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-[3rem] shadow-lg border border-white hover:shadow-2xl transition-all duration-300 relative group"
            >
              <div className="absolute top-8 right-8 opacity-20 group-hover:opacity-100 transition-opacity">
                <GoogleIcon />
              </div>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-[#EFF6FF] rounded-full flex items-center justify-center text-[#1E3A8A] font-black text-2xl shadow-inner">{review.name[0]}</div>
                <div>
                  <h4 className="font-extrabold text-[#1E3A8A] text-lg font-nunito">{review.name}</h4>
                  <p className="text-xs text-[#94A3B8] font-bold uppercase tracking-widest">{review.date}</p>
                </div>
              </div>

              <div className="mb-6">
                <StarsRender rating={review.rating} size={18} />
              </div>

              <p className="text-[#475569] font-inter italic leading-relaxed text-lg mb-8">"{review.text}"</p>

              <div className="pt-6 border-t border-slate-50 flex items-center gap-2 text-[#3B82F6]">
                <MapPin size={14} />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Verified Patient at Andheri Clinic</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
