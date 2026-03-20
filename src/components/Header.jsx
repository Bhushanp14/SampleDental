import { Mail, Phone, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Header() {
  return (
    <div className="bg-[#1E3A8A] text-white py-3 px-4 md:px-8 flex flex-row justify-between items-center text-[10px] sm:text-xs font-inter relative z-50">
      <div className="flex gap-4 items-center">
        <a href="mailto:care@smilecraftdental.in" className="flex items-center gap-2 hover:text-[#93C5FD] transition-colors">
          <Mail size={14} className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> 
          <span className="hidden sm:inline">care@smilecraftdental.in</span>
        </a>
        <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-[#93C5FD] transition-colors">
          <Phone size={14} className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> 
          <span>+91 98765 43210</span>
        </a>
      </div>
      <div className="flex gap-6 items-center">
        <div className="flex gap-4">
          <a href="#" className="hover:text-[#93C5FD] transition-transform hover:scale-110"><Facebook size={16} className="w-3.5 h-3.5 sm:w-4 sm:h-4" /></a>
          <a href="#" className="hover:text-[#93C5FD] transition-transform hover:scale-110"><Instagram size={16} className="w-3.5 h-3.5 sm:w-4 sm:h-4" /></a>
          <a href="#" className="hover:text-[#93C5FD] transition-transform hover:scale-110"><Twitter size={16} className="w-3.5 h-3.5 sm:w-4 sm:h-4" /></a>
        </div>
      </div>

    </div>
  );
}
