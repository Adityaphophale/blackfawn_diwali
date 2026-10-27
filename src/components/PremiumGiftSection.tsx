import React from 'react';
import { PREMIUM_GIFTS } from '../data/premiumGifts';

interface PremiumGiftSectionProps {
  onEnquire: (productCode: string, category: string) => void;
}

export const PremiumGiftSection: React.FC<PremiumGiftSectionProps> = ({ onEnquire }) => {
  return (
    <section className="section section-charcoal" id="premium-gifts" aria-labelledby="premium-heading">
      <div className="container">
        <header className="section-header">
          <span className="section-eyebrow">Executive Festive Collection</span>
          <h2 className="section-title" id="premium-heading">Make an Impression That Lasts.</h2>
          <p className="section-desc">
            Premium gifting experiences curated for leadership teams, key clients and valued business relationships.
          </p>
          <div className="gold-divider" aria-hidden="true"></div>
        </header>

        <div className="premium-boxes-grid">
          {PREMIUM_GIFTS.map(item => (
            <article className="premium-card" key={item.code} id={`premium-${item.code}`}>
              <div className="premium-card-image">
                <img 
                  src={item.image} 
                  alt={`BLACKFAWN Premium 7-in-1 Executive Box ${item.code}`} 
                  loading="lazy"
                />
                <div className="premium-pill-features">
                  <span className="badge badge-gold">For Leadership &amp; Key Clients</span>
                  <span className="badge badge-dark">Your Logo on Box</span>
                </div>
              </div>
              <div className="premium-card-body">
                <h3 className="premium-card-title">{item.code} · {item.title}</h3>
                <p className="premium-card-subtitle">{item.setType}</p>
                <ul className="premium-items-list" aria-label="Curated contents">
                  {item.features.map((f, i) => (
                    <li key={i}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="premium-spec-box">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                  {item.packagingDetails}
                </div>
                <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={() => onEnquire(`Premium 7-in-1 Box ${item.code}`, 'Premium 7-in-1 Gift Boxes')}
                >
                  Discuss Premium Corporate Gifting
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
