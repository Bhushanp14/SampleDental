import { motion } from 'framer-motion';
import { AlignCenter, Sparkles, Smile, ShieldCheck, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';

const treatmentItems = [
  {
    id: 1,
    title: 'Invisible Braces',
    description: 'Straighten your teeth discreetly with clear aligners designed for comfort and precision.',
    icon: <AlignCenter size={40} />,
    image: '/invi-braces.png',
    href: '/treatments/invisible-braces',
  },
  {
    id: 2,
    title: 'Smile Makeover',
    description: 'Enhance your smile with a customized combination of treatments tailored to your goals.',
    icon: <Sparkles size={40} />,
    image: '/smilemakeover.webp',
    href: '/treatments/smile-makeover',
  },
  {
    id: 3,
    title: 'Veneers & Laminates',
    description: 'Get flawless, natural-looking teeth with high-quality veneers.',
    icon: <Smile size={40} />,
    image: '/dental-veneer.jpg',
    href: '/treatments/veneers',
  },
  {
    id: 4,
    title: 'Braces Treatment',
    description: 'Traditional and modern braces solutions for all age groups.',
    icon: <ShieldCheck size={40} />,
    image: '/braces-procedure-min.jpg',
    href: '/treatments/braces',
  },
  {
    id: 5,
    title: 'Dental Implants',
    description: 'Permanent replacement for missing teeth with strong and natural results.',
    icon: <Heart size={40} />,
    image: '/implants.png',
    href: '/treatments/implants',
  },
];

export default function Treatments() {
  const { openModal } = useBooking();

  return (
    <section id="treatments" className="bg-white py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-[#EFF6FF] rounded-bl-full opacity-50 transition-all duration-300"></div>

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-12 h-1 bg-[#3B82F6] rounded-full"></span>
            <span className="text-[#3B82F6] font-extrabold text-sm uppercase tracking-[0.2em]">What We Offer</span>
            <span className="w-12 h-1 bg-[#3B82F6] rounded-full"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E3A8A] font-nunito leading-tight tracking-tight">Our Professional Treatments</h2>
          <p className="text-[#64748B] text-lg font-inter mt-6 max-w-2xl mx-auto">Expert dental solutions tailored for your unique needs using the latest medical equipment and techniques.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {treatmentItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="bg-white group rounded-[2.5rem] overflow-hidden shadow-[0_12px_48px_-12px_rgba(0,0,0,0.08)] border border-slate-50 transition-all duration-300 flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/40 to-transparent group-hover:from-[#1E3A8A]/60 transition-colors"></div>
                <div className="absolute bottom-4 left-4 bg-white p-4 rounded-2xl shadow-xl group-hover:bg-[#3B82F6] transition-all duration-300">
                  <div className="text-[#3B82F6] group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    {item.icon}
                  </div>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-extrabold text-[#1E3A8A] font-nunito mb-4 group-hover:text-[#3B82F6] transition-colors">{item.title}</h3>
                <p className="text-[#64748B] font-inter text-base leading-relaxed mb-6 flex-grow">{item.description}</p>
                <div className="pt-4 border-t border-slate-50 flex justify-between items-center group-hover:border-[#EFF6FF] transition-colors">
                  <span className="text-xs font-bold text-[#94A3B8] uppercase tracking-widest">In-Clinic Procedure</span>
                  <Link to={item.href} className="text-[#3B82F6] font-black text-xs tracking-widest underline underline-offset-8 hover:no-underline transition-all uppercase active:scale-95">LEARN MORE</Link>
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] bg-[#1E3A8A] p-10 flex flex-col justify-center gap-6 group hover:translate-x-2 transition-all shadow-2xl overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full"></div>

            <h3 className="text-3xl font-extrabold text-[#93C5FD] font-nunito leading-tight relative z-10">We’re Here To Help You Smile With Confidence</h3>
            <p className="text-slate-300 font-inter font-medium text-lg relative z-10 leading-relaxed">Book your appointment today and take the first step toward better oral health.</p>
            <button
              onClick={openModal}
              className="bg-white text-[#1E3A8A] py-5 px-10 rounded-2xl font-black font-inter tracking-wider text-xs shadow-xl hover:bg-[#3B82F6] hover:text-white transition-all transform group-hover:scale-105 active:scale-95 uppercase w-fit relative z-10"
            >
              🦷 Book An Appointment
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
