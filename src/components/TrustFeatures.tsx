import React from 'react';

export const TrustFeatures: React.FC = () => {
  return (
    <section className="trust-strip" aria-label="Brand Value Propositions">
      <div className="container">
        <div className="trust-grid">
          <div className="trust-card">
            <div className="trust-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 12 20 22 4 22 4 12"></polyline>
                <rect x="2" y="7" width="20" height="5"></rect>
                <line x1="12" y1="22" x2="12" y2="7"></line>
                <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
              </svg>
            </div>
            <h3 className="trust-title">Curated Gift Collections</h3>
            <p className="trust-desc">Thoughtfully assembled festive gifts for employees, clients and business partners.</p>
          </div>

          <div className="trust-card">
            <div className="trust-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
            </div>
            <h3 className="trust-title">Personalised Branding</h3>
            <p className="trust-desc">Customise eligible packaging, logos and greeting cards.</p>
          </div>

          <div className="trust-card">
            <div className="trust-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </div>
            <h3 className="trust-title">Bulk Order Coordination</h3>
            <p className="trust-desc">Gifting solutions designed for corporate quantities.</p>
          </div>

          <div className="trust-card">
            <div className="trust-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13"></rect>
                <polygon points="16 8 20 8 23 11 23 16 16 16 8"></polygon>
                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                <circle cx="18.5" cy="18.5" r="2.5"></circle>
              </svg>
            </div>
            <h3 className="trust-title">Pan-India Delivery</h3>
            <p className="trust-desc">Delivery coordination across India, subject to serviceability and confirmation.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
