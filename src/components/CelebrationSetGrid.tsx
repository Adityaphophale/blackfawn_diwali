import React, { useState } from 'react';
import { CELEBRATION_SETS, CelebrationSet } from '../data/celebrationSets';

interface CelebrationSetGridProps {
  onEnquire: (productCode: string, category: string) => void;
}

export const CelebrationSetGrid: React.FC<CelebrationSetGridProps> = ({ onEnquire }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredSets = activeFilter === 'all'
    ? CELEBRATION_SETS
    : CELEBRATION_SETS.filter(s => s.category === activeFilter);

  return (
    <section className="section section-dark" id="celebration-sets" aria-labelledby="celebration-heading">
      <div className="container">
        <header className="section-header">
          <span className="section-eyebrow">Ready-To-Gift In An Eco Jute Tote</span>
          <h2 className="section-title" id="celebration-heading">Celebration Sets for Teams, Clients and Partners</h2>
          <p className="section-desc">
            Practical, festive and thoughtfully assembled gifting sets designed for corporate celebrations.
          </p>
          <div className="gold-divider" aria-hidden="true"></div>
        </header>

        {/* Filter buttons */}
        <div className="filter-tabs" role="tablist" aria-label="Celebration Set Categories">
          <button 
            type="button" 
            className={`filter-btn ${activeFilter === 'all' ? 'is-active' : ''}`}
            onClick={() => setActiveFilter('all')}
            role="tab"
            aria-selected={activeFilter === 'all'}
          >
            All Sets (Q251 – Q261)
          </button>
          <button 
            type="button" 
            className={`filter-btn ${activeFilter === 'drinkware' ? 'is-active' : ''}`}
            onClick={() => setActiveFilter('drinkware')}
            role="tab"
            aria-selected={activeFilter === 'drinkware'}
          >
            Drinkware &amp; Everyday Essentials
          </button>
          <button 
            type="button" 
            className={`filter-btn ${activeFilter === 'desk' ? 'is-active' : ''}`}
            onClick={() => setActiveFilter('desk')}
            role="tab"
            aria-selected={activeFilter === 'desk'}
          >
            Desk Accessories
          </button>
          <button 
            type="button" 
            className={`filter-btn ${activeFilter === 'festive' ? 'is-active' : ''}`}
            onClick={() => setActiveFilter('festive')}
            role="tab"
            aria-selected={activeFilter === 'festive'}
          >
            Festive &amp; Decorative Gifts
          </button>
          <button 
            type="button" 
            className={`filter-btn ${activeFilter === 'tech' ? 'is-active' : ''}`}
            onClick={() => setActiveFilter('tech')}
            role="tab"
            aria-selected={activeFilter === 'tech'}
          >
            Technology &amp; Utility Gifts
          </button>
        </div>

        {/* Sets Grid */}
        <div className="celebration-grid">
          {filteredSets.map(set => (
            <article className="celebration-card" key={set.code} id={`set-${set.code}`}>
              <div className="celebration-card-image">
                <img 
                  src={set.image} 
                  alt={`BLACKFAWN Celebration Set ${set.code} - ${set.title}`} 
                  loading="lazy"
                />
                <span className="jute-badge">Ships in Jute Tote</span>
              </div>
              <div className="celebration-card-body">
                <div className="celebration-card-header">
                  <h4 className="celebration-code">{set.code}</h4>
                  <span className="celebration-set-count">{set.setType}</span>
                </div>
                <p className="celebration-items-desc">{set.description}</p>
                <div className="celebration-card-footer">
                  <span className="badge badge-gold">{set.categoryLabel}</span>
                  <button 
                    type="button" 
                    className="btn btn-outline-gold btn-sm"
                    onClick={() => onEnquire(`Celebration Set ${set.code} (${set.setType})`, 'Corporate Celebration Sets')}
                  >
                    Enquire for Set
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mix and Match Banner */}
        <div className="mix-match-banner">
          <div className="mix-match-content">
            <span className="badge badge-festive" style={{ marginBottom: 'var(--space-2)' }}>Mix &amp; Match</span>
            <h3 className="mix-match-title">Your Set, Your Way</h3>
            <p className="mix-match-desc">
              Swap items across sets to suit your corporate gifting requirements. Share your required quantity, delivery cities, and customisation goals, and our corporate team will provide a tailored proposal.
            </p>
          </div>
          <button 
            type="button" 
            className="btn btn-outline-gold"
            onClick={() => onEnquire('Mix & Match Celebration Set (Custom Swap)', 'Corporate Celebration Sets')}
          >
            Customise Celebration Sets
          </button>
        </div>
      </div>
    </section>
  );
};
