import React from 'react';

export const OrderingSteps: React.FC = () => {
  return (
    <section className="section section-dark" id="how-to-order" aria-labelledby="order-heading">
      <div className="container">
        <header className="section-header">
          <span className="section-eyebrow">Streamlined Coordination</span>
          <h2 className="section-title" id="order-heading">Corporate Gifting, Made Simple.</h2>
          <p className="section-desc">
            A seamless three-step journey from selection to festive delivery across your locations.
          </p>
          <div className="gold-divider" aria-hidden="true"></div>
        </header>

        <div className="steps-grid">
          <div className="step-card">
            <span className="step-number">01</span>
            <h3 className="step-title">Choose</h3>
            <p className="step-desc">
              Select a hamper, celebration set, premium gift box or everyday gift using its name or product code from our festive catalogue.
            </p>
          </div>

          <div className="step-card">
            <span className="step-number">02</span>
            <h3 className="step-title">Tell Us</h3>
            <p className="step-desc">
              Share your required quantity, delivery city or multi-city locations, branding requirements and greeting-card message.
            </p>
          </div>

          <div className="step-card">
            <span className="step-number">03</span>
            <h3 className="step-title">Confirm</h3>
            <p className="step-desc">
              Our corporate team will coordinate the order specifications, confirm applicable payment requirements and establish delivery timelines.
            </p>
          </div>
        </div>

        <div className="terms-summary-strip">
          <div className="terms-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>Minimum order quantity applies</span>
          </div>
          <div className="terms-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>Bulk-order enquiries are welcome</span>
          </div>
          <div className="terms-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>Customisation requests shared during ordering</span>
          </div>
          <div className="terms-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>Delivery timelines confirmed upon review</span>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
          <a href="#enquiry" className="btn btn-primary">Start Your Corporate Gifting Enquiry</a>
        </div>
      </div>
    </section>
  );
};
