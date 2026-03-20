import Breadcrumb from '../../components/Breadcrumb';
import { motion } from 'framer-motion';
import { useBooking } from '../../context/BookingContext';
import { ArrowRight, CheckCircle } from 'lucide-react';

const treatmentData = {
  'invisible-braces': {
    title: 'Invisible Braces',
    description: 'Straighten your teeth discreetly with clear aligners designed for comfort and precision. Our state-of-the-art invisible braces are practically impossible for others to notice, giving you the confidence to smile while you transform.',
    image: '/invi-braces.png',
  },
  'smile-makeover': {
    title: 'Smile Makeover',
    description: 'Enhance your smile with a customized combination of treatments tailored to your goals. From whitening to contouring, we sculpt the perfect smile that fits your facial features and personality.',
    image: '/smilemakeover.webp',
  },
  'veneers-laminates': {
    title: 'Veneers & Laminates',
    description: 'Get flawless, natural-looking teeth with high-quality veneers. Our premium laminates restore the natural beauty of your teeth, fixing chips, gaps, and stains permanently.',
    image: '/dental-veneer.jpg',
  },
  'braces-treatment': {
    title: 'Braces Treatment',
    description: 'Traditional and modern braces solutions for all age groups. Whether it\'s ceramic or metal, we provide the best alignment techniques in Mumbai to ensure a healthy, straight bite.',
    image: '/braces-procedure-min.jpg',
  },
  'dental-implants': {
    title: 'Dental Implants',
    description: 'Permanent replacement for missing teeth with strong and natural results. Regain the function and aesthetics of your original teeth with our high-precision implant technology.',
    image: '/implants.png',
  },
};

export default function TreatmentPage({ type }) {
  const { openModal } = useBooking();
  const data = treatmentData[type];
  if (!data) return <div className="pt-40 text-center font-black text-2xl text-[#1E3A8A]">404 | Treatment Not Found</div>;

  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      <Breadcrumb title={data.title} />
      <section className="bg-white py-24 px-4 md:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 md:gap-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative group"
          >
            <div className="absolute inset-0 bg-[#3B82F6] rounded-[3.5rem] translate-x-4 translate-y-4 opacity-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-all duration-500 shadow-2xl"></div>
            <img src={data.image} alt={data.title} className="rounded-[3.5rem] shadow-2xl relative w-full aspect-square md:aspect-auto md:h-[600px] object-cover border-4 border-white transition-all duration-500 group-hover:scale-[1.02]" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-8 group cursor-default">
              <span className="w-12 h-1 bg-[#3B82F6] group-hover:w-20 transition-all duration-300 rounded-full"></span>
              <span className="text-[#3B82F6] font-extrabold text-sm uppercase tracking-[0.3em]">Signature Smile Procedure</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-[#1E3A8A] font-nunito leading-tight mb-8 tracking-tighter">{data.title}</h2>
            <p className="text-[#475569] text-xl font-medium mb-10 font-inter leading-relaxed max-w-xl italic">"{data.description}"</p>

            <div className="space-y-6 mb-12">
              {['Personalized Consultation', 'Advanced 3D Digital Scans', 'Pain-Free Technology', 'Post-Treatment Care'].map((feat, i) => (
                <div key={i} className="flex items-center gap-3 text-[#1E3A8A] font-extrabold font-nunito text-lg">
                  <CheckCircle className="text-[#3B82F6]" size={20} />
                  {feat}
                </div>
              ))}
            </div>

            <button
              onClick={openModal}
              className="bg-[#1E3A8A] group hover:bg-[#3B82F6] text-white px-10 py-5 rounded-[2rem] font-black flex items-center gap-4 transition-all shadow-2xl hover:shadow-[#3B82F6]/40 active:scale-95 text-xs uppercase tracking-widest tabular-nums h-20"
            >
              Book Your Free Consultation Today <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
