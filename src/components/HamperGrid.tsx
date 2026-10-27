import React from 'react';
import { HAMPERS } from '../data/hampers';
import { HamperCard } from './HamperCard';

interface HamperGridProps {
  onEnquire: (productCode: string, category: string) => void;
}

export const HamperGrid: React.FC<HamperGridProps> = ({ onEnquire }) => {
  return (
    <section className="section section-dark" id="hampers" aria-labelledby="hampers-heading">
      <div className="container">
        <header className="section-header">
          <span className="section-eyebrow">Catalogue Highlights</span>
          <h2 className="section-title" id="hampers-heading">Thoughtfully Curated. Beautifully Presented.</h2>
          <p className="section-desc">
            Discover festive hampers that combine traditional Diwali elements, memorable keepsakes and elegant packaging.
          </p>
          <div className="gold-divider" aria-hidden="true"></div>
        </header>

        <div className="hampers-grid" id="hampers-grid">
          {HAMPERS.map(hamper => (
            <HamperCard 
              key={hamper.id} 
              hamper={hamper} 
              onEnquire={onEnquire} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};
