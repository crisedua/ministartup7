
import Header from '@/components/Header';
import ResourcesSection from '@/components/ResourcesSection';
import Footer from '@/components/Footer';

const Recursos = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <ResourcesSection />
      </div>
      <Footer />
    </div>
  );
};

export default Recursos;
