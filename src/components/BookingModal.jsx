import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Calendar, User, Phone, MessageSquare } from 'lucide-react';

export default function BookingModal({ isOpen, onClose }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      setSubmitted(false);
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(onClose, 3000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#1E3A8A]/40 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-white w-[95%] md:w-full md:max-w-xl rounded-[2.5rem] md:rounded-[3rem] shadow-2xl relative z-10 overflow-hidden border border-white"
          >
            {/* Header Decor */}
            <div className="bg-[#3B82F6] p-6 md:p-12 text-center relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-white/20 rounded-bl-full"></div>
               <button onClick={onClose} className="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:bg-white/20 p-2 rounded-full transition-all">
                  <X size={20} md:size={24} />
               </button>
               <h3 className="text-2xl md:text-3xl font-black text-white font-nunito mb-1 md:mb-2 tracking-tight">Book Appointment</h3>
               <p className="text-white/80 font-bold text-[10px] uppercase tracking-[0.3em]">SmileCraft Dental Studio</p>
            </div>

            <div className="p-6 md:p-12">
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-xl shadow-green-200">
                    <Send size={32} />
                  </div>
                  <h4 className="text-2xl font-black text-[#1E3A8A] font-nunito mb-2">Thank You!</h4>
                  <p className="text-[#64748B] font-inter font-bold">Our team will call you shortly to confirm your slot.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-2">
                      <label className="text-[#3B82F6] font-extrabold text-[10px] uppercase tracking-[0.2em] ml-1">Your Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]" size={18} />
                        <input required type="text" placeholder="Full Name" className="w-full pl-12 pr-4 py-3 md:py-4 bg-[#EFF6FF] rounded-2xl border-none focus:ring-4 focus:ring-[#3B82F6]/20 transition-all font-bold text-[#1E3A8A]" />
                      </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[#3B82F6] font-extrabold text-[10px] uppercase tracking-[0.2em] ml-1">Phone Number</label>
                       <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]" size={18} />
                        <input required type="tel" placeholder="+91 00000 00000" className="w-full pl-12 pr-4 py-3 md:py-4 bg-[#EFF6FF] rounded-2xl border-none focus:ring-4 focus:ring-[#3B82F6]/20 transition-all font-bold text-[#1E3A8A]" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[#3B82F6] font-extrabold text-[10px] uppercase tracking-[0.2em] ml-1">Date Desired</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]" size={18} />
                      <input required type="date" className="w-full pl-12 pr-4 py-3 md:py-4 bg-[#EFF6FF] rounded-2xl border-none focus:ring-4 focus:ring-[#3B82F6]/20 transition-all font-bold text-[#1E3A8A]" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[#3B82F6] font-extrabold text-[10px] uppercase tracking-[0.2em] ml-1">Any Specific Concern?</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 text-[#94A3B8]" size={18} />
                      <textarea placeholder="e.g. Invisible Braces Consultation" className="w-full pl-12 pr-4 py-4 bg-[#EFF6FF] rounded-2xl border-none focus:ring-4 focus:ring-[#3B82F6]/20 transition-all font-bold text-[#1E3A8A] h-24"></textarea>
                    </div>
                  </div>

                  <button 
                    disabled={isSubmitting}
                    className="w-full bg-[#1E3A8A] text-white py-5 rounded-2xl font-black shadow-2xl hover:bg-[#3B82F6] transition-all transform active:scale-95 uppercase tracking-widest text-sm flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? 'Scheduling...' : 'Confirm Appointment'}
                    <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
