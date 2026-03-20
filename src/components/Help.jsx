import { motion } from 'framer-motion';
import { HelpCircle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';

const needItems = [
  { text: 'I Need Checkup & Cleaning', href: '/help/checkup' },
  { text: 'I Am In Pain & Need Help!', href: '/help/emergency' },
  { text: 'I Am Worried About My Child\'s Teeth', href: '/help/child' },
  { text: 'I Want To Improve My Smile', href: '/help/improve-smile' },
  { text: 'I Am Missing One Or More Teeth', href: '/help/missing-teeth' },
  { text: 'I Want A Straighter Smile', href: '/treatments/invisible-braces' },
  { text: 'I Have A Cavity Or Broken Tooth', modal: true },
  { text: 'I Am Worried About Gums', modal: true },
];

export default function Help() {
  const { openModal } = useBooking();

  return (
    <section id="help" className="bg-[#EFF6FF] py-24 px-4 md:px-8 relative overflow-visible">
      {/* Background patterns wrapped in overflow-hidden div */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#3B82F6] rounded-full blur-[100px] opacity-10"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#1E3A8A] rounded-full blur-[100px] opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-[#3B82F6] p-2 rounded-xl text-white">
              <HelpCircle size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E3A8A] font-nunito tracking-tight">How Can We Help?</h2>
          </div>
          <p className="text-[#64748B] text-lg font-inter mt-6 max-w-2xl mx-auto italic font-medium">We understand your concerns. Tell us what's on your mind, and our experts in Mumbai will guide you.</p>
        </motion.div>

        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-4 md:px-0 relative mb-20 md:mb-0">
          {needItems.map((item, idx) => {
            const Content = () => (
              <>
                <span className="text-[#1E3A8A] font-black font-nunito text-lg leading-tight group-hover:text-white transition-colors">{item.text}</span>
                <div className="bg-[#EFF6FF] p-3 rounded-full group-hover:bg-white/20 transition-all duration-300 text-[#3B82F6] group-hover:text-white">
                  <ChevronRight size={20} />
                </div>
              </>
            );

            const mobileStickyStyle = {
              top: `${80 + (idx * 20)}px`,
              zIndex: idx + 10,
            };

            const classNameStr = "bg-white p-10 rounded-[3rem] border border-slate-100 flex items-center justify-between text-left group hover:bg-[#3B82F6] transition-all duration-300 shadow-xl transform sticky md:static md:top-auto mb-4 md:mb-0 w-full";

            return item.href ? (
              <Link 
                key={idx}
                to={item.href}
                className={classNameStr}
                style={mobileStickyStyle}
              >
                <Content />
              </Link>
            ) : (
              <button 
                key={idx}
                onClick={openModal}
                className={classNameStr}
                style={mobileStickyStyle}
              >
                <Content />
              </button>
            )
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 max-w-4xl"
        >
          <p className="text-[#64748B] text-lg font-inter mt-6 max-w-3xl mx-auto italic font-medium">
             At SmileCraft Dental Studio, we strive to provide the best dental care to you and your loved ones. 
             <button 
                onClick={openModal}
                className="ml-2 inline-block text-[#3B82F6] hover:text-[#1E3A8A] underline underline-offset-4 decoration-2 font-black transition-colors uppercase cursor-pointer"
             >
                Contact Us For More Information
             </button>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
