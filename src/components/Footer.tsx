import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer" id="contact" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Brand column */}
          <div className="footer-brand-col">
            <a href="https://www.blackfawn.in/" aria-label="BLACKFAWN Home">
              <img 
                src="/images/blackfawn_logo_white.png" 
                alt="BLACKFAWN Logo" 
                width="190" 
                height="80" 
                className="brand-logo-img"
              />
            </a>
            <p className="footer-brand-desc">
              BLACKFAWN is an Indian gifting and customised merchandise label creating refined festive experiences, corporate celebration sets and bespoke merchandise for forward-thinking brands.
            </p>
            <div style={{ marginTop: 'var(--space-2)' }}>
              <a 
                href="https://wa.me/919274821162?text=Hello%20BLACKFAWN%20Team%2C%20I%20would%20like%20to%20enquire%20about%20Diwali%20Corporate%20Gifting%202026." 
                className="btn btn-outline-gold btn-sm" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#hero" className="footer-link">Home</a></li>
              <li><a href="#hampers" className="footer-link">Curated Hampers</a></li>
              <li><a href="#signature-box" className="footer-link">Signature Box Builder</a></li>
              <li><a href="#celebration-sets" className="footer-link">Corporate Celebration Sets</a></li>
              <li><a href="#premium-gifts" className="footer-link">Premium 7-in-1 Boxes</a></li>
              <li><a href="#everyday-gifts" className="footer-link">Desk &amp; Everyday</a></li>
              <li><a href="#customisation" className="footer-link">Customisation &amp; Branding</a></li>
              <li><a href="#how-to-order" className="footer-link">How to Order</a></li>
              <li><a href="#faqs" className="footer-link">FAQs</a></li>
            </ul>
          </div>

          {/* Festive Collections */}
          <div>
            <h4 className="footer-heading">Collections</h4>
            <ul className="footer-links-list">
              <li><a href="#hampers" className="footer-link">Festive Tray &amp; Chevron</a></li>
              <li><a href="#hampers" className="footer-link">Royal Red &amp; Crystal Box</a></li>
              <li><a href="#hampers" className="footer-link">Scarlet Keepsake</a></li>
              <li><a href="#hampers" className="footer-link">Jewel Tones Hamper</a></li>
              <li><a href="#hampers" className="footer-link">Pinewood Wooden Crate</a></li>
              <li><a href="#celebration-sets" className="footer-link">5-in-1 &amp; 6-in-1 Sets</a></li>
              <li><a href="#premium-gifts" className="footer-link">Executive Q262 / Q263</a></li>
              <li><a href="#everyday-gifts" className="footer-link">SpinCal &amp; Omega Sets</a></li>
            </ul>
          </div>

          {/* Corporate Contact Info */}
          <div>
            <h4 className="footer-heading">Corporate Gifting Desk</h4>
            <div className="footer-contact-info">
              <div className="footer-contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href="tel:+919274821162" className="footer-link">+91 92748 21162</a>
              </div>

              <div className="footer-contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href="mailto:info@blackfawn.in" className="footer-link">info@blackfawn.in</a>
              </div>

              <div className="footer-contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
                <a href="https://www.blackfawn.in/" className="footer-link" target="_blank" rel="noopener noreferrer">www.blackfawn.in</a>
              </div>

              <div className="footer-contact-item" style={{ marginTop: 'var(--space-1)', alignItems: 'flex-start' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '3px' }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Vadodara, Gujarat, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 BLACKFAWN. All rights reserved. Diwali Corporate Gifting 2026 Collection.</p>
          <div className="footer-legal-links">
            <a href="https://www.blackfawn.in/" className="footer-link" target="_blank" rel="noopener noreferrer">Official Store</a>
            <span aria-hidden="true">•</span>
            <a href="#hero" className="footer-link">Terms &amp; Conditions</a>
            <span aria-hidden="true">•</span>
            <a href="#hero" className="footer-link">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
