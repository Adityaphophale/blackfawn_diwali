import React from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div 
      className={`mobile-nav-drawer ${isOpen ? 'is-open' : ''}`} 
      id="mobile-nav-drawer" 
      aria-label="Mobile Navigation"
    >
      <a href="#hero" className="mobile-nav-link" onClick={onClose}>Home</a>
      <a href="#hampers" className="mobile-nav-link" onClick={onClose}>Curated Hampers</a>
      <a href="#signature-box" className="mobile-nav-link" onClick={onClose}>Signature Box Builder</a>
      <a href="#celebration-sets" className="mobile-nav-link" onClick={onClose}>Celebration Sets</a>
      <a href="#premium-gifts" className="mobile-nav-link" onClick={onClose}>Premium 7-in-1 Boxes</a>
      <a href="#everyday-gifts" className="mobile-nav-link" onClick={onClose}>Desk &amp; Everyday</a>
      <a href="#customisation" className="mobile-nav-link" onClick={onClose}>Customisation &amp; Branding</a>
      <a href="#how-to-order" className="mobile-nav-link" onClick={onClose}>How to Order</a>
      <a href="#faqs" className="mobile-nav-link" onClick={onClose}>FAQs</a>
      <a 
        href="#enquiry" 
        className="btn btn-primary" 
        style={{ marginTop: 'var(--space-4)' }}
        onClick={onClose}
      >
        Request a Custom Quote
      </a>
    </div>
  );
};
