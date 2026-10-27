import React, { useState } from 'react';

const FAQS = [
  {
    question: 'What types of corporate Diwali gifts does BLACKFAWN offer?',
    answer: 'BLACKFAWN offers an extensive Diwali 2026 collection including Curated Diwali Hampers (01 to 07), Build Your Own Signature Boxes with custom packaging and keepsakes, Corporate Celebration Sets (Q251 to Q261) packed in jute totes, Premium 7-in-1 Executive Gift Boxes (Q262 & Q263) for leadership and key clients, as well as standalone Desk & Everyday corporate merchandise.'
  },
  {
    question: 'Can we customise gift packaging and greeting cards?',
    answer: 'Yes. Customisation is a core service at BLACKFAWN. Eligible hampers and celebration sets support custom-branded greeting cards with your corporate message, custom gift tag ribbons, and logo placement on outer rigid boxes and totes. Customisation requests should be shared during initial enquiry.'
  },
  {
    question: 'Can we add our company logo to selected gifts?',
    answer: 'Yes. We offer company logo placement across multiple gifting options, including outer magnetic gift boxes, jute tote bags, bamboo keychains (laser engraving), greeting cards, and selected drinkware or desk accessories, subject to feasibility and order specifications.'
  },
  {
    question: 'Do you accept bulk corporate gifting orders?',
    answer: 'Yes. BLACKFAWN specialises in corporate bulk-order gifting for startups, SMEs, multinational enterprises, HR celebrations, procurement teams, and event agencies. Bulk orders are coordinated directly with our corporate gifting team.'
  },
  {
    question: 'Can we choose different gift combinations?',
    answer: 'Yes. Through our "Build Your Own Signature Box" configurator and "Mix & Match" celebration sets programme, corporate clients can swap items or select bespoke packaging and keepsake pairings to suit their gifting requirements. Availability and final combinations are confirmed by our team during order review.'
  },
  {
    question: 'Do you deliver across India?',
    answer: 'Yes. We coordinate Pan-India delivery across major metro cities, business hubs, and regional centres, subject to serviceability and courier partner confirmation at the time of order booking.'
  },
  {
    question: 'How can we enquire about a particular hamper or product code?',
    answer: 'You can simply click the "Enquire" button on any product card (e.g., Hamper 01, Q251, Q262, B211). It will automatically pre-fill the product code in our enquiry form. You can also reach our corporate gifting desk directly at +91 92748 21162 or via email at info@blackfawn.in.'
  },
  {
    question: 'How are delivery timelines confirmed?',
    answer: 'Delivery timelines are shared and confirmed during the ordering process based on order volume, customisation requirements, packaging schedule, and recipient city locations.'
  },
  {
    question: 'Is there a minimum order quantity?',
    answer: 'Minimum order quantities (MOQ) apply across corporate gift collections and celebration sets. Specific MOQs depend on whether standard or customised branding is requested, and will be communicated in your proposal.'
  },
  {
    question: 'How do we receive a customised corporate gifting proposal?',
    answer: 'Complete our brief enquiry form with your contact details, company name, approximate quantity, and preferred collection. Our corporate gifting team will review your requirements and share a tailored proposal and consultation.'
  }
];

export const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="section section-dark" id="faqs" aria-labelledby="faqs-heading">
      <div className="container">
        <header className="section-header">
          <span className="section-eyebrow">Clear Answers</span>
          <h2 className="section-title" id="faqs-heading">Frequently Asked Questions</h2>
          <p className="section-desc">
            Everything you need to know about our corporate Diwali hampers, bulk ordering, and customisation.
          </p>
          <div className="gold-divider" aria-hidden="true"></div>
        </header>

        <div className="faq-accordion" id="faq-accordion-list">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`faq-item ${isOpen ? 'is-open' : ''}`} 
                id={`faq-item-${index}`}
              >
                <button 
                  type="button" 
                  className="faq-question-btn" 
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen} 
                  aria-controls={`faq-panel-${index}`}
                >
                  <span>{faq.question}</span>
                  <svg 
                    className="faq-chevron" 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                <div 
                  id={`faq-panel-${index}`} 
                  className="faq-answer-panel" 
                  role="region" 
                  aria-labelledby={`faq-item-${index}`}
                  style={{ display: isOpen ? 'block' : 'none' }}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
