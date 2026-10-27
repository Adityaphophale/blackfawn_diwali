import React from 'react';

interface CustomisationSectionProps {
  onPlanClick?: () => void;
}

export const CustomisationSection: React.FC<CustomisationSectionProps> = ({ onPlanClick }) => {
  return (
    <section className="section section-charcoal" id="customisation" aria-labelledby="custom-heading">
      <div className="container">
        <header className="section-header">
          <span className="section-eyebrow">Personalisation &amp; Corporate Identity</span>
          <h2 className="section-title" id="custom-heading">Make It Unmistakably Yours.</h2>
          <p className="section-desc">
            Bring your brand into the celebration with thoughtful personalisation across selected gifts and packaging.
          </p>
          <div className="gold-divider" aria-hidden="true"></div>
        </header>

        <div className="customisation-grid">
          <div className="custom-card">
            <div className="custom-card-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </div>
            <h3 className="custom-card-title">Corporate Logo on Packaging</h3>
            <p className="custom-card-desc">
              Showcase your company logo prominently on rigid magnetic boxes, festive tags, and reusable eco-jute totes.
            </p>
          </div>

          <div className="custom-card">
            <div className="custom-card-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <h3 className="custom-card-title">Customised Greeting Cards</h3>
            <p className="custom-card-desc">
              Include bespoke festive greeting cards featuring your leadership's personalized message, festive wishes, and brand signature.
            </p>
          </div>

          <div className="custom-card">
            <div className="custom-card-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 12 20 22 4 22 4 12"></polyline>
                <rect x="2" y="7" width="20" height="5"></rect>
                <line x1="12" y1="22" x2="12" y2="7"></line>
              </svg>
            </div>
            <h3 className="custom-card-title">Gift Packaging &amp; Colour Schemes</h3>
            <p className="custom-card-desc">
              Select from clear-lid ribbon boxes, floral rigid bow boxes, festive printed trays, or natural pinewood crates.
            </p>
          </div>

          <div className="custom-card">
            <div className="custom-card-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
            </div>
            <h3 className="custom-card-title">Laser Engraving &amp; Print</h3>
            <p className="custom-card-desc">
              Precision laser engraving on natural double-sided bamboo keychains, desk pieces, and drinkware.
            </p>
          </div>

          <div className="custom-card">
            <div className="custom-card-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <h3 className="custom-card-title">Pan-India Bulk Dispatch</h3>
            <p className="custom-card-desc">
              Consolidated single-point corporate deliveries or distributed dispatch across multiple regional branches and offices.
            </p>
          </div>

          <div className="custom-card">
            <div className="custom-card-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <h3 className="custom-card-title">Mix-and-Match Flexibility</h3>
            <p className="custom-card-desc">
              Curate unique combinations tailored specifically to employee categories, client tiers, or special event themes.
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <a href="#enquiry" className="btn btn-primary btn-lg" onClick={onPlanClick}>
            Plan Your Custom Gift Collection
          </a>
        </div>
      </div>
    </section>
  );
};
