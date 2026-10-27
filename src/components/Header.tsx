import React, { useState, useEffect } from 'react';
import { MobileMenu } from './MobileMenu';

interface HeaderProps {
  onEnquireClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onEnquireClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`} role="banner">
        <div className="container header-container">
          <a href="https://www.blackfawn.in/" className="brand-logo-link" aria-label="BLACKFAWN Home">
            <img 
              src="/images/blackfawn_logo_white.png" 
              alt="BLACKFAWN Luxury Gifting Logo" 
              className="brand-logo-img" 
              width="190" 
              height="80"
            />
          </a>

          <nav className="nav-desktop" aria-label="Main Navigation">
            <a href="#hero" className="nav-link">Home</a>
            <a href="#hero" className="nav-link">Diwali Gifting</a>
            <a href="#hampers" className="nav-link">Curated Hampers</a>
            <a href="#signature-box" className="nav-link">Signature Box</a>
            <a href="#celebration-sets" className="nav-link">Celebration Sets</a>
            <a href="#premium-gifts" className="nav-link">Premium Gifts</a>
            <a href="#customisation" className="nav-link">Customisation</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          <div className="header-actions">
            <a 
              href="#enquiry" 
              className="btn btn-primary btn-sm"
              onClick={onEnquireClick}
            >
              Enquire Now
            </a>
            <button 
              type="button" 
              className="mobile-menu-toggle" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-drawer"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
};
