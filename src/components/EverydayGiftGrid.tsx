import React from 'react';
import { EVERYDAY_GIFTS } from '../data/everydayGifts';

interface EverydayGiftGridProps {
  onEnquire: (productCode: string, category: string) => void;
}

export const EverydayGiftGrid: React.FC<EverydayGiftGridProps> = ({ onEnquire }) => {
  return (
    <section className="section section-dark" id="everyday-gifts" aria-labelledby="everyday-heading">
      <div className="container">
        <header className="section-header">
          <span className="section-eyebrow">Gifts They’ll Use All Year</span>
          <h2 className="section-title" id="everyday-heading">Useful Gifts. Everyday Appreciation.</h2>
          <p className="section-desc">
            Extend the festive gesture beyond Diwali with practical gifts designed for daily use.
          </p>
          <div className="gold-divider" aria-hidden="true"></div>
        </header>

        <div className="everyday-grid">
          {EVERYDAY_GIFTS.map(item => (
            <article className="everyday-card" key={item.code} id={`item-${item.code}`}>
              <img 
                src={item.image} 
                alt={`${item.name} (${item.code})`} 
                className="everyday-card-img" 
                loading="lazy"
              />
              <div className="everyday-card-body">
                <span className="everyday-code">{item.code}</span>
                <h4 className="everyday-title">{item.name}</h4>
                <p className="everyday-desc">{item.description}</p>
                <button 
                  type="button" 
                  className="btn btn-outline-gold btn-sm"
                  onClick={() => onEnquire(`${item.code} — ${item.name}`, 'Desk & Everyday Gifts')}
                >
                  Enquire
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Pair With Any Hamper Feature */}
        <div className="pair-banner">
          <div className="pair-banner-text">
            <h4>Pair with Any Hamper</h4>
            <p>Drop a branded desk piece or drinkware into an eligible hamper or celebration set for a lasting gesture that stays on the desk all year round.</p>
          </div>
          <button 
            type="button" 
            className="btn btn-primary btn-sm"
            onClick={() => onEnquire('Add Branded Desk Piece to Hamper', 'Desk & Everyday Gifts')}
          >
            Add Desk Piece to Enquiry
          </button>
        </div>
      </div>
    </section>
  );
};
