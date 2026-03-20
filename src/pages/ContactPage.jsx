import Contact from '../components/Contact';
import Breadcrumb from '../components/Breadcrumb';

export default function ContactPage() {
  return (
    <div className="pt-20">
      <Breadcrumb title="Contact Us" />
      <Contact />
    </div>
  );
}
