import React, { useState } from 'react';
import { AnnouncementBar } from '../components/AnnouncementBar';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { TrustFeatures } from '../components/TrustFeatures';
import { HamperGrid } from '../components/HamperGrid';
import { SignatureBoxBuilder } from '../components/SignatureBoxBuilder';
import { CelebrationSetGrid } from '../components/CelebrationSetGrid';
import { PremiumGiftSection } from '../components/PremiumGiftSection';
import { EverydayGiftGrid } from '../components/EverydayGiftGrid';
import { CustomisationSection } from '../components/CustomisationSection';
import { OrderingSteps } from '../components/OrderingSteps';
import { EnquiryForm } from '../components/EnquiryForm';
import { FAQAccordion } from '../components/FAQAccordion';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';

export const DiwaliGiftingPage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const handleProductEnquire = (productCode: string, category: string) => {
    setSelectedProduct(productCode);
    setSelectedCategory(category);
    const formEl = document.getElementById('enquiry');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClearPrefill = () => {
    setSelectedProduct('');
    setSelectedCategory('');
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="diwali-page-root">
      {/* SECTION 1 */}
      <AnnouncementBar />

      {/* SECTION 2 */}
      <Header onEnquireClick={() => scrollToSection('enquiry')} />

      <main id="main-content">
        {/* SECTION 3 */}
        <HeroSection 
          onExploreClick={() => scrollToSection('hampers')} 
          onRequestQuoteClick={() => scrollToSection('enquiry')} 
        />

        {/* SECTION 4 */}
        <TrustFeatures />

        {/* SECTION 5 */}
        <HamperGrid onEnquire={handleProductEnquire} />

        {/* SECTION 6 */}
        <SignatureBoxBuilder onEnquire={handleProductEnquire} />

        {/* SECTION 7 */}
        <CelebrationSetGrid onEnquire={handleProductEnquire} />

        {/* SECTION 8 */}
        <PremiumGiftSection onEnquire={handleProductEnquire} />

        {/* SECTION 9 */}
        <EverydayGiftGrid onEnquire={handleProductEnquire} />

        {/* SECTION 10 */}
        <CustomisationSection onPlanClick={() => scrollToSection('enquiry')} />

        {/* SECTION 11 */}
        <OrderingSteps />

        {/* SECTION 12 */}
        <EnquiryForm 
          prefilledProduct={selectedProduct} 
          prefilledCategory={selectedCategory} 
          onClearPrefill={handleClearPrefill} 
        />

        {/* SECTION 13 */}
        <FAQAccordion />

        {/* SECTION 14 */}
        <FinalCTA 
          onEnquireClick={() => scrollToSection('enquiry')} 
          onExploreClick={() => scrollToSection('hampers')} 
        />
      </main>

      {/* SECTION 15 */}
      <Footer />
    </div>
  );
};
