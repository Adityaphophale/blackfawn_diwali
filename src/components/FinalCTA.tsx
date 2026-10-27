import React from 'react';

interface FinalCTAProps {
  onEnquireClick?: () => void;
  onExploreClick?: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onEnquireClick, onExploreClick }) => {
  return (
    <section className="final-cta-section" aria-labelledby="final-cta-title">
      <div className="container final-cta-container">
        <span className="section-eyebrow">Celebrate In Elegance</span>
        <h2 className="final-cta-title" id="final-cta-title">
          Make This Diwali a Thoughtful One.
        </h2>
        <p className="final-cta-desc">
          Celebrate your people, strengthen business relationships and make every gift feel personal.
        </p>
        <div className="final-cta-buttons">
          <a href="#enquiry" className="btn btn-primary btn-lg" onClick={onEnquireClick}>
            Enquire for Corporate Gifting
          </a>
          <a href="#hampers" className="btn btn-secondary btn-lg" onClick={onExploreClick}>
            Explore the Collection
          </a>
        </div>
      </div>
    </section>
  );
};
