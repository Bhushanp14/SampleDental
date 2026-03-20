import Breadcrumb from '../../components/Breadcrumb';
import { motion } from 'framer-motion';
import { useBooking } from '../../context/BookingContext';
import { ArrowRight, MessageCircle } from 'lucide-react';

const helpData = {
  'checkup-cleaning': {
    title: 'I Need Checkup & Cleaning',
    content: 'Routine dental check-ups and professional cleanings are the foundation of good oral health. Our experts in Mumbai provide a thorough examination and painless cleaning to keep your smile bright.',
    image: '/dental-checkup.jpg',
  },
  'emergency-pain': {
    title: 'I Am In Pain & Need Help',
    content: 'Dental emergencies can be stressful. We provide immediate care to relieve your pain and address the root cause, whether it\'s a toothache, infection, or a broken tooth.',
    image: '/pain.jpg',
  },
  'child-dentistry': {
    title: 'I Am Worried About My Child\'s Teeth',
    content: 'A positive first experience at the dentist sets the path for a lifetime of healthy smiles. Dr. Aisha Mehra specializes in pediatric dental care with a gentle, patient-first approach.',
    image: '/child-teeth.jpg',
  },
  'smile-improvement': {
    title: 'I Want To Improve My Smile',
    content: 'A confident smile can change your life. We offer custom cosmetic solutions, from professional whitening to complete smile makeovers, right here in Andheri West.',
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1974&auto=format&fit=crop',
  },
  'missing-teeth': {
    title: 'I Am Missing One Or More Teeth',
    content: 'Missing teeth shouldn\'t hold you back. We specialize in restorations like bridges and dental implants that look, feel, and function like your original teeth.',
    image: '/teethmiss.jpeg',
  },
};

export default function HelpPage({ type }) {
  const { openModal } = useBooking();
  const data = helpData[type];
  if (!data) return <div className="pt-40 text-center font-black text-2xl text-[#1E3A8A]">404 | Help Topic Not Found</div>;

  return (
    <div className="pt-20 min-h-screen bg-white">
      <Breadcrumb title={data.title} />
      <section className="bg-white py-24 px-4 md:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 md:gap-24 relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-[#3B82F6] rounded-[2rem] translate-x-4 translate-y-4 opacity-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-all duration-500"></div>
            <img src={data.image} alt={data.title} className="rounded-[2rem] shadow-2xl relative w-full aspect-square md:aspect-auto md:h-[550px] object-cover border-none transition-all duration-500 group-hover:scale-105" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-8 group cursor-default">
              <div className="bg-[#EFF6FF] p-2 rounded-lg text-[#3B82F6]">
                <MessageCircle size={20} />
              </div>
              <span className="text-[#3B82F6] font-bold text-sm uppercase tracking-[0.3em]">Patient Support Center</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-[#1E3A8A] font-nunito leading-tight mb-10 tracking-tighter">{data.title}</h2>
            <p className="text-[#475569] text-xl font-medium mb-12 font-inter leading-relaxed max-w-xl">{data.content}</p>
            <p className="text-[#64748B] text-lg mb-14 font-inter leading-relaxed max-w-xl">
              Don't wait for your worries to increase. Book a consultation today and take the first step towards better oral health. Our team is available to assist you in Andheri West.
            </p>
            <button
              onClick={openModal}
              className="bg-[#1E3A8A] group hover:bg-[#3B82F6] text-white px-10 py-5 rounded-[2rem] font-black flex items-center gap-4 transition-all shadow-2xl hover:shadow-[#3B82F6]/40 active:scale-95 text-xs uppercase tracking-widest h-20"
            >
              Get Professional Help Now <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
