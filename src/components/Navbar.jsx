import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';


const mainLinks = [
  { name: 'Home', href: '/' },
  {
    name: 'About',
    dropdown: [
      { name: 'About Clinic', href: '/about/clinic' },
      { name: 'About Dentist', href: '/about/dentist' },
    ]
  },
  {
    name: 'Treatments',
    dropdown: [
      { name: 'Invisible Braces', href: '/treatments/invisible-braces' },
      { name: 'Smile Makeover', href: '/treatments/smile-makeover' },
      { name: 'Veneers & Laminates', href: '/treatments/veneers' },
      { name: 'Braces Treatment', href: '/treatments/braces' },
      { name: 'Dental Implants', href: '/treatments/implants' },
    ]
  },
  {
    name: 'Help',
    dropdown: [
      { name: 'I Need Checkup & Cleaning', href: '/help/checkup' },
      { name: 'I Am In Pain & Need Help', href: '/help/emergency' },
      { name: "I Am Worried About My Child's Teeth", href: '/help/child' },
      { name: 'I Want To Improve My Smile', href: '/help/improve-smile' },
      { name: 'I Am Missing One Or More Teeth', href: '/help/missing-teeth' },
    ]
  },
  { name: 'Reviews', href: '/reviews' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { openModal } = useBooking();
  const location = useLocation();

  useEffect(() => {

    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on navigation
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`sticky top-0 left-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-2xl py-2' : 'bg-white border-b border-[#E5E7EB] py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-black text-[#1E3A8A] tracking-tighter font-nunito flex items-center group-hover:scale-105 transition-transform duration-300">
            <span className="text-[#3B82F6]">Smile</span>Craft
            <span className="hidden sm:inline text-xs font-black ml-2 uppercase tracking-[0.3em] opacity-40">Dental Studio</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 items-center">
          {mainLinks.map((link) => (
            <div
              key={link.name}
              className="relative group py-2"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={link.href || '#'}
                className={`flex items-center gap-1 text-[#1E3A8A] font-extrabold text-sm hover:text-[#3B82F6] transition-colors font-inter uppercase tracking-widest relative ${location.pathname === link.href ? 'text-[#3B82F6]' : ''}`}
              >
                {link.name}
                {link.dropdown && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#3B82F6] transition-all duration-300 ${location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>

              {/* Dropdown Menu */}
              {link.dropdown && (
                <div className={`absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white/95 backdrop-blur-xl shadow-[0_32px_64px_-16px_rgba(30,58,138,0.2)] border-t-4 border-[#3B82F6] transition-all duration-300 p-4 rounded-b-[2rem] flex flex-col gap-1 ${activeDropdown === link.name ? 'opacity-100 visible translate-y-0 scale-100' : 'opacity-0 invisible translate-y-4 scale-95'}`}>
                  {link.dropdown.map((sub) => (
                    <Link key={sub.name} to={sub.href} className="px-5 py-3 rounded-xl hover:bg-[#3B82F6] hover:text-white text-[#1E3A8A] font-bold text-sm transition-all active:scale-95">
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button onClick={openModal} className="bg-[#1E3A8A] text-white px-8 py-4 rounded-2xl font-black text-xs shadow-2xl hover:bg-[#3B82F6] transition-all active:scale-95 uppercase tracking-widest scale-90 md:scale-100 origin-right">
            Book An Appointment
          </button>
        </div>


        {/* Mobile Menu Button */}
        <button className="lg:hidden text-[#1E3A8A] p-2 hover:bg-[#EFF6FF] rounded-xl transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md absolute top-full left-0 w-full shadow-2xl border-t border-[#E5E7EB] py-8 flex flex-col gap-2 px-8 h-screen overflow-y-auto animate-in slide-in-from-top-4 duration-300">
          {mainLinks.map((link) => (
            <div key={link.name} className="flex flex-col">
              <div className="flex items-center justify-between py-4 border-b border-slate-50">
                <Link to={link.href || '#'} className={`text-[#1E3A8A] font-black text-2xl hover:text-[#3B82F6] transition-colors ${location.pathname === link.href ? 'text-[#3B82F6]' : ''}`}>
                  {link.name}
                </Link>
                {link.dropdown && (
                  <button
                    className="p-3 bg-[#EFF6FF] rounded-2xl text-[#3B82F6]"
                    onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                  >
                    <ChevronDown className={`${activeDropdown === link.name ? 'rotate-180' : ''} transition-transform`} />
                  </button>
                )}
              </div>
              {link.dropdown && activeDropdown === link.name && (
                <div className="flex flex-col gap-3 pl-8 mt-4 py-6 bg-[#EFF6FF] rounded-[3rem] shadow-inner">
                  {link.dropdown.map((sub) => (
                    <Link key={sub.name} to={sub.href} className="text-[#1E3A8A] font-extrabold text-lg py-2 hover:text-[#3B82F6] transition-colors flex items-center gap-3">
                      <span className="w-2 h-2 bg-[#3B82F6] rounded-full"></span>
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button onClick={openModal} className="mt-12 bg-[#3B82F6] text-white py-6 rounded-3xl font-black text-xl shadow-[0_24px_48px_-12px_rgba(59,130,246,0.3)] hover:bg-[#1E3A8A] transition-all text-center uppercase tracking-widest active:scale-95">
            Book An Appointment
          </button>


          <div className="h-40"></div> {/* Spacer for scrollability */}
        </div>
      )}
    </nav>
  );
}
