
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BootcampPromoSection from '@/components/BootcampPromoSection';
import WhatIsSection from '@/components/WhatIsSection';
import WhyWorksSection from '@/components/WhyWorksSection';
import MethodologySection from '@/components/MethodologySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <BootcampPromoSection />
      <WhatIsSection />
      <WhyWorksSection />
      <MethodologySection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
