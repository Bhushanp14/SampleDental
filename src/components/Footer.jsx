import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const treatments = [
    { name: 'Invisible Braces', href: '/treatments/invisible-braces' },
    { name: 'Smile Makeover', href: '/treatments/smile-makeover' },
    { name: 'Veneers', href: '/treatments/veneers' },
    { name: 'Braces', href: '/treatments/braces' },
    { name: 'Dental Implants', href: '/treatments/implants' },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Clinic', href: '/about-clinic' },
    { name: 'About Dentist', href: '/about-dentist' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <footer className="bg-[#1E3A8A] text-white py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#3B82F6] rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-24">
        <div className="col-span-1 md:col-span-1 lg:col-span-1">
          <Link to="/" className="flex flex-col mb-10 group">
            <span className="text-4xl font-black text-[#93C5FD] tracking-tighter font-nunito leading-none">
              SmileCraft
            </span>
            <span className="text-white text-base font-medium tracking-[0.4em] uppercase mt-2 opacity-80 group-hover:opacity-100 transition-opacity">
              Dental Studio
            </span>
          </Link>
          <p className="text-slate-300 font-inter text-lg font-medium leading-relaxed mb-10 max-w-sm">
            “Precision Dentistry. Confident Smiles.” <br /> Modern technology and compassionate care for your family's oral health in Andheri West.
          </p>
          <div className="flex gap-6">
            <a href="#" className="bg-white/10 p-4 rounded-2xl hover:bg-[#3B82F6] transition-all transform hover:-translate-y-2 shadow-2xl"><Facebook size={24} /></a>
            <a href="#" className="bg-white/10 p-4 rounded-2xl hover:bg-[#3B82F6] transition-all transform hover:-translate-y-2 shadow-2xl"><Instagram size={24} /></a>
            <a href="#" className="bg-white/10 p-4 rounded-2xl hover:bg-[#3B82F6] transition-all transform hover:-translate-y-2 shadow-2xl"><Twitter size={24} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-black text-xl font-nunito mb-10 tracking-tight uppercase tracking-[0.2em] relative inline-block">
            Explore
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#3B82F6] rounded-full"></span>
          </h4>
          <ul className="space-y-6">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.href} className="text-slate-300 font-bold text-lg hover:text-[#3B82F6] transition-all flex items-center gap-3 group active:scale-95 transform">
                  <span className="w-2 h-2 bg-[#3B82F6] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-black text-xl font-nunito mb-10 tracking-tight uppercase tracking-[0.2em] relative inline-block">
            Treatments
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#3B82F6] rounded-full"></span>
          </h4>
          <ul className="space-y-6">
            {treatments.map((item) => (
              <li key={item.name}>
                <Link to={item.href} className="text-slate-300 font-bold text-lg hover:text-[#3B82F6] transition-all flex items-center gap-3 group active:scale-95 transform">
                  <span className="w-2 h-2 bg-[#3B82F6] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-black text-xl font-nunito mb-10 tracking-tight uppercase tracking-[0.2em] relative inline-block">
            Clinic Info
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#3B82F6] rounded-full"></span>
          </h4>
          <div className="space-y-8">
            <div className="flex items-start gap-4 group">
              <MapPin size={24} className="text-[#3B82F6] shrink-0 mt-1" />
              <p className="text-slate-300 font-bold text-base leading-relaxed group-hover:text-white transition-colors">
                Shop No. 12, Sunshine Plaza, <br /> Andheri West, Mumbai – 400053
              </p>
            </div>
            <div className="flex items-center gap-4 group">
              <Phone size={24} className="text-[#3B82F6] shrink-0" />
              <p className="text-slate-300 font-black text-lg tabular-nums group-hover:text-[#3B82F6] transition-colors">
                +91 98765 43210
              </p>
            </div>
            <div className="flex items-center gap-4 group">
              <Mail size={24} className="text-[#3B82F6] shrink-0" />
              <p className="text-slate-300 font-bold text-lg group-hover:text-[#3B82F6] transition-colors">
                care@smilecraftdental.in
              </p>
            </div>
            <div className="flex items-start gap-4 pt-4 border-t border-white/10 group">
              <Clock size={24} className="text-[#3B82F6] shrink-0 mt-1" />
              <div className="text-slate-400 font-bold text-sm tracking-wide">
                <p className="text-slate-100 mb-1">Mon-Sat: 10AM - 8:30PM</p>
                <p className="text-slate-100">Sun: 10AM - 2:00PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-16 border-t border-white/5 relative z-10 overflow-hidden rounded-[3rem] shadow-2xl h-[500px]">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0!2d72.8220!3d19.1136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c99277d337a7%3A0xe13ca223405b6306!2sAndheri%20West%2C%20Mumbai%20City%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1615330000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
          title="SmileCraft Dental Studio Location"
        ></iframe>
      </div>

      <div className="max-w-7xl mx-auto mt-16 text-center text-slate-500 font-black text-xs uppercase tracking-[0.5em] relative z-10 pb-4">
        &copy; 2026 SmileCraft Dental Studio. All Rights Reserved. Crafted with ❤️ in Mumbai.
      </div>
    </footer>
  );
}
