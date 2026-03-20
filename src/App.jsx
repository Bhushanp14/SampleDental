import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import OpeningHours from './components/OpeningHours';
import About from './components/About';
import Treatments from './components/Treatments';
import Help from './components/Help';
import Dentist from './components/Dentist';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BookingProvider } from './context/BookingContext';

// Pages
import AboutClinic from './pages/about/AboutClinic';

import AboutDentist from './pages/about/AboutDentist';
import { InvisibleBraces, SmileMakeover, Veneers, Braces, DentalImplants } from './pages/treatments';
import { Checkup, Emergency, ChildDentistry, SmileImprove, MissingTeeth } from './pages/help';

import ReviewsPage from './pages/Reviews';
import ContactPage from './pages/ContactPage';
import Home2 from './pages/Home2';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <OpeningHours />
      <About />
      <Treatments />
      <Help />
      <Dentist />
      <Testimonials />
      <Contact />
    </main>
  );
}

function App() {
  return (
    <Router>
      <BookingProvider>
        <ScrollToTop />
        <div className="min-h-screen bg-white">
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home2" element={<Home2 />} />
            
            {/* About */}
            <Route path="/about/clinic" element={<AboutClinic />} />
            <Route path="/about/dentist" element={<AboutDentist />} />
            
            {/* Treatments */}
            <Route path="/treatments/invisible-braces" element={<InvisibleBraces />} />
            <Route path="/treatments/smile-makeover" element={<SmileMakeover />} />
            <Route path="/treatments/veneers" element={<Veneers />} />
            <Route path="/treatments/braces" element={<Braces />} />
            <Route path="/treatments/implants" element={<DentalImplants />} />
            
            {/* Help */}
            <Route path="/help/checkup" element={<Checkup />} />
            <Route path="/help/emergency" element={<Emergency />} />
            <Route path="/help/child" element={<ChildDentistry />} />
            <Route path="/help/improve-smile" element={<SmileImprove />} />
            <Route path="/help/missing-teeth" element={<MissingTeeth />} />
            
            {/* Other */}
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </div>
      </BookingProvider>
    </Router>
  );
}


export default App;
