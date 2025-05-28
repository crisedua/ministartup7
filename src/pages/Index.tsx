
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BootcampPromoSection from '@/components/BootcampPromoSection';
import WhatIsSection from '@/components/WhatIsSection';
import WhyWorksSection from '@/components/WhyWorksSection';

import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <BootcampPromoSection />
      <WhatIsSection />
      <WhyWorksSection />


      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
