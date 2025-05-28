
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BootcampPromoSection from '@/components/BootcampPromoSection';
import WhatIsSection from '@/components/WhatIsSection';
import WhyWorksSection from '@/components/WhyWorksSection';

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


      <Footer />
    </div>
  );
};

export default Index;
