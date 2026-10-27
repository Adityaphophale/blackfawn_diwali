import React from 'react';

interface HeroSectionProps {
  onExploreClick?: () => void;
  onRequestQuoteClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  onExploreClick, 
  onRequestQuoteClick 
}) => {
  return (
    <section className="section hero-section" id="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            BLACKFAWN FESTIVE COLLECTION · 2026
          </div>
          <h1 className="hero-title-main" id="hero-title">
            Make Every Gift <span className="text-gold-gradient">Mean More.</span>
          </h1>
          <h2 className="hero-title-sub">Diwali Corporate Gifting</h2>
          <p className="hero-desc">
            Thoughtfully curated hampers, premium celebration sets and personalised corporate gifts for the people who make your business special.
          </p>

          <div className="hero-highlights-strip" aria-label="Core Services">
            <div className="hero-highlight-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
              <span>Customised Gifting</span>
            </div>
            <div className="hero-highlight-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
              <span>Bulk Corporate Orders</span>
            </div>
            <div className="hero-highlight-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13"></rect>
                <polygon points="16 8 20 8 23 11 23 16 16 16 8"></polygon>
                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                <circle cx="18.5" cy="18.5" r="2.5"></circle>
              </svg>
              <span>Pan-India Delivery</span>
            </div>
          </div>

          <div className="hero-ctas">
            <a 
              href="#hampers" 
              className="btn btn-primary btn-lg" 
              onClick={onExploreClick}
            >
              Explore the Collection
            </a>
            <a 
              href="#enquiry" 
              className="btn btn-secondary btn-lg" 
              onClick={onRequestQuoteClick}
            >
              Request a Custom Quote
            </a>
          </div>
        </div>

        <div className="hero-visual-wrapper">
          <div className="hero-image-card">
            <img 
              src="/images/hero_hamper.jpg" 
              alt="BLACKFAWN Diwali 2026 Handcrafted Corporate Gift Hamper with Ganesh Ji Murti, Monks Set and Delicacies" 
              width="600" 
              height="600"
            />
            <div className="hero-badge-overlay">
              Festive Edit · 2026
            </div>
            <div className="hero-caption-overlay">
              <div>
                <p className="hero-caption-title">Handcrafted Corporate Hamper</p>
                <p className="hero-caption-sub">Curated with sacred keepsakes &amp; festive confectionery</p>
              </div>
              <a href="#enquiry" className="btn btn-outline-gold btn-sm">Enquire</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
