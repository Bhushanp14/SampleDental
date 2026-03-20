import About from '../../components/About';
import Breadcrumb from '../../components/Breadcrumb';

export default function AboutClinic() {
  return (
    <div className="pt-20">
      <Breadcrumb title="About Our Clinic" />
      <About />
    </div>
  );
}
