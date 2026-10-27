import React from 'react';
import { Hamper } from '../data/hampers';

interface HamperCardProps {
  hamper: Hamper;
  onEnquire: (productCode: string, category: string) => void;
}

export const HamperCard: React.FC<HamperCardProps> = ({ hamper, onEnquire }) => {
  return (
    <article className="hamper-card" id={hamper.id}>
      <div className="hamper-image-container">
        <img 
          src={hamper.image} 
          alt={`BLACKFAWN Diwali Hamper ${hamper.code} - ${hamper.name}`} 
          className="hamper-img"
          loading="lazy"
        />
        <span className="hamper-tag-badge">{hamper.tag}</span>
        <span className="hamper-code-badge">Hamper {hamper.code}</span>
      </div>
      <div className="hamper-body">
        <h3 className="hamper-name">{hamper.name}</h3>
        <p className="hamper-packaging-subtitle">{hamper.subtitle}</p>
        <ul className="hamper-contents-list" aria-label="Hamper inclusions">
          {hamper.contents.map((item, idx) => (
            <li 
              key={idx} 
              className={`hamper-content-item ${item.includes('murti') || item.includes('sipper') || item.includes('monks') ? 'highlight' : ''}`}
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="hamper-footer">
          <span className="hamper-custom-indicator" title="Packaging, card and branding can be customised">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20h9"></path>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            </svg>
            Customisable
          </span>
          <button 
            type="button" 
            className="btn btn-outline-gold btn-sm" 
            onClick={() => onEnquire(`Hamper ${hamper.code} (${hamper.name})`, 'Curated Diwali Hampers')}
          >
            Enquire About This Hamper
          </button>
        </div>
      </div>
    </article>
  );
};
