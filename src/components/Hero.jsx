import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useBooking } from '../context/BookingContext';


const slides = [

  {
    id: 1,
    headline: 'Transform Your Smile With Advanced Dental Care',
    subtext: 'Modern technology, experienced dentists, and personalized treatment plans.',
    cta: 'Book Appointment',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop', // Modern clinic interior
  },
  {
    id: 2,
    headline: 'Pain-Free Dental Treatments You Can Trust',
    subtext: 'We ensure comfort, safety, and long-lasting results.',
    cta: 'Get Consultation',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop', // Patient-centric tech
  },
  {
    id: 3,
    headline: 'Your Family’s Trusted Dental Clinic',
    subtext: 'From kids to seniors, we care for every smile.',
    cta: 'Visit Us Today',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1760&auto=format&fit=crop', // Family care dental
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { openModal } = useBooking();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section id="home" className="relative h-[85vh] overflow-hidden bg-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        >
          {/* Overlay - Adjusted for better mobile fit */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/60 to-transparent md:bg-gradient-to-r md:from-white md:via-white/70 md:to-transparent flex items-center md:px-16 px-6">
            <div className="max-w-[85%] md:max-w-xl">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="flex items-center gap-2 mb-4">
                   <span className="w-12 h-1 bg-[#3B82F6] rounded-full"></span>
                   <span className="text-[#3B82F6] font-bold text-xs uppercase tracking-[0.2em]">Pristine Dental Care</span>
                </div>
                <h1 className="text-3xl md:text-6xl font-black text-[#1E3A8A] leading-tight mb-4 font-nunito tracking-tighter">
                  {slides[currentSlide].headline}
                </h1>
                <p className="text-lg font-inter text-slate-700/80 mb-10 leading-relaxed font-medium">
                   {slides[currentSlide].subtext}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button onClick={openModal} className="w-full sm:w-auto bg-[#1E3A8A] hover:bg-[#3B82F6] text-white px-8 py-4 md:px-10 md:py-5 rounded-3xl font-black flex items-center justify-center gap-3 transition-all group shadow-2xl active:scale-95 uppercase tracking-widest text-xs md:text-sm">
                    <span>{slides[currentSlide].cta}</span>
                  </button>
                  <a href="#about" className="w-full sm:w-auto bg-white/90 backdrop-blur-md border-[3px] border-[#3B82F6] text-[#3B82F6] px-8 py-4 md:px-10 md:py-5 rounded-3xl font-black hover:bg-[#3B82F6] hover:text-white transition-all shadow-xl active:scale-95 uppercase tracking-widest text-xs md:text-sm text-center flex items-center justify-center">
                    Learn More
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>


      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex gap-3 items-center">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`transition-all duration-300 rounded-full h-2 ${currentSlide === i ? 'bg-[#3B82F6] w-8' : 'bg-slate-300 w-2 hover:bg-[#93C5FD]'}`}
          ></button>
        ))}
      </div>

      {/* Navigation Arrows - Hidden on mobile, visible on tablet/desktop */}
      <div className="hidden md:flex absolute bottom-24 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:inset-y-0 md:right-10 items-center gap-4 z-10 pointer-events-none transition-all duration-300">
        <button onClick={prevSlide} className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 rounded-full border border-black/10 md:border-white/30 bg-white/50 backdrop-blur-md md:bg-transparent flex items-center justify-center text-[#1E3A8A] hover:bg-white transition-all hover:scale-110 active:scale-95 shadow-lg md:shadow-none">
          <ChevronLeft size={20} />
        </button>
        <button onClick={nextSlide} className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#3B82F6] bg-[#3B82F6]/10 backdrop-blur-sm flex items-center justify-center text-[#1E008A] hover:bg-[#3B82F6] hover:text-white transition-all hover:scale-110 active:scale-95 shadow-lg md:shadow-none">
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
