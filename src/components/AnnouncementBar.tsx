import React from 'react';

export const AnnouncementBar: React.FC = () => {
  return (
    <aside className="announcement-bar" role="region" aria-label="Announcement">
      <div className="container bar-inner">
        <span>DIWALI 2026</span>
        <span className="bullet" aria-hidden="true">•</span>
        <span>Corporate Gifting Across India</span>
        <span className="bullet" aria-hidden="true">•</span>
        <span>Customisation &amp; Bulk Orders</span>
      </div>
    </aside>
  );
};
