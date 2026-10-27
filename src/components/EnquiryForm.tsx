import React, { useState, useEffect } from 'react';

interface EnquiryFormProps {
  prefilledProduct?: string;
  prefilledCategory?: string;
  onClearPrefill?: () => void;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  prefilledProduct,
  prefilledCategory,
  onClearPrefill
}) => {
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [giftCategory, setGiftCategory] = useState(prefilledCategory || '');
  const [approximateQuantity, setApproximateQuantity] = useState('');
  const [deliveryCity, setDeliveryCity] = useState('');
  const [preferredProduct, setPreferredProduct] = useState(prefilledProduct || '');
  const [brandingRequirements, setBrandingRequirements] = useState('');
  const [greetingCardMessage, setGreetingCardMessage] = useState('');
  const [additionalRequirements, setAdditionalRequirements] = useState('');
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string; refId?: string } | null>(null);

  useEffect(() => {
    if (prefilledProduct) {
      setPreferredProduct(prefilledProduct);
    }
    if (prefilledCategory) {
      setGiftCategory(prefilledCategory);
    }
  }, [prefilledProduct, prefilledCategory]);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!fullName.trim() || fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name.';
    }
    if (!companyName.trim() || companyName.trim().length < 2) {
      newErrors.companyName = 'Please enter your company name.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(businessEmail.trim())) {
      newErrors.businessEmail = 'Please enter a valid work email address.';
    }
    if (!/^[0-9+ \-()]{8,16}$/.test(contactNumber.trim())) {
      newErrors.contactNumber = 'Please enter a valid contact phone number.';
    }
    if (!giftCategory) {
      newErrors.giftCategory = 'Please select a gifting category.';
    }
    if (!approximateQuantity) {
      newErrors.approximateQuantity = 'Please select an estimated order quantity.';
    }
    if (!deliveryCity.trim() || deliveryCity.trim().length < 2) {
      newErrors.deliveryCity = 'Please provide destination city or cities.';
    }
    if (!consent) {
      newErrors.consent = 'Please agree to be contacted regarding this enquiry.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!validate()) return;
    if (honeypot) {
      console.warn('Bot detected.');
      return;
    }

    setIsSubmitting(true);

    const payload = {
      fullName: fullName.trim(),
      companyName: companyName.trim(),
      businessEmail: businessEmail.trim(),
      contactNumber: contactNumber.trim(),
      giftCategory: giftCategory.trim(),
      approximateQuantity: approximateQuantity.trim(),
      deliveryCity: deliveryCity.trim(),
      preferredProduct: preferredProduct.trim(),
      brandingRequirements: brandingRequirements.trim(),
      greetingCardMessage: greetingCardMessage.trim(),
      additionalRequirements: additionalRequirements.trim()
    };

    // Format WhatsApp message with all filled details
    const lines = [
      '*BLACKFAWN — Diwali Corporate Gifting 2026 Enquiry*',
      '',
      `*Name:* ${payload.fullName}`,
      `*Company:* ${payload.companyName}`,
      `*Email:* ${payload.businessEmail}`,
      `*Contact Number:* ${payload.contactNumber}`,
      `*Gift Category:* ${payload.giftCategory}`,
      `*Quantity:* ${payload.approximateQuantity}`,
      `*Delivery Location:* ${payload.deliveryCity}`
    ];

    if (payload.preferredProduct) {
      lines.push(`*Product Code:* ${payload.preferredProduct}`);
    }
    if (payload.brandingRequirements) {
      lines.push(`*Branding Requirements:* ${payload.brandingRequirements}`);
    }
    if (payload.greetingCardMessage) {
      lines.push(`*Greeting Card Message:* ${payload.greetingCardMessage}`);
    }
    if (payload.additionalRequirements) {
      lines.push(`*Additional Requirements:* ${payload.additionalRequirements}`);
    }

    const waMessage = lines.join('\n');
    const waUrl = `https://wa.me/919274821162?text=${encodeURIComponent(waMessage)}`;

    setSubmitStatus({
      type: 'success',
      message: 'Opening WhatsApp with your enquiry details. Please press Send in WhatsApp to complete your enquiry.'
    });

    // Reset form
    setFullName('');
    setCompanyName('');
    setBusinessEmail('');
    setContactNumber('');
    setGiftCategory('');
    setApproximateQuantity('');
    setDeliveryCity('');
    setPreferredProduct('');
    setBrandingRequirements('');
    setGreetingCardMessage('');
    setAdditionalRequirements('');
    setConsent(false);
    if (onClearPrefill) onClearPrefill();

    // Open WhatsApp Web on desktop or WhatsApp app on mobile
    const isMobile = typeof navigator !== 'undefined' && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = waUrl;
    } else {
      const opened = window.open(waUrl, '_blank');
      if (!opened || opened.closed || typeof opened.closed === 'undefined') {
        window.location.href = waUrl;
      }
    }

    setTimeout(() => {
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section className="section enquiry-section" id="enquiry" aria-labelledby="enquiry-heading">
      <div className="container">
        <header className="section-header">
          <span className="section-eyebrow">Corporate Gifting Desk</span>
          <h2 className="section-title" id="enquiry-heading">Let's Plan Your Diwali Gifting.</h2>
          <p className="section-desc">
            Tell us what you're looking for. Our team will connect with you to discuss suitable gifting options and bulk-order requirements.
          </p>
          <div className="gold-divider" aria-hidden="true"></div>
        </header>

        <div className="enquiry-form-card">
          {preferredProduct && (
            <div className="form-prefilled-badge is-visible">
              <span className="form-prefilled-text">Selected Gift: {preferredProduct}</span>
              <button 
                type="button" 
                className="form-prefilled-clear" 
                onClick={() => {
                  setPreferredProduct('');
                  if (onClearPrefill) onClearPrefill();
                }}
              >
                Clear selection
              </button>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            {/* Anti-spam Honeypot */}
            <div style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}>
              <label htmlFor="website_hp">Leave empty</label>
              <input 
                type="text" 
                id="website_hp" 
                value={honeypot} 
                onChange={(e) => setHoneypot(e.target.value)} 
                tabIndex={-1} 
                autoComplete="off" 
              />
            </div>

            <div className="form-grid">
              {/* Full Name */}
              <div className="form-group">
                <label htmlFor="enquiry-fullname" className="form-label">
                  Full Name<span className="required-star">*</span>
                </label>
                <input 
                  type="text" 
                  id="enquiry-fullname" 
                  className={`form-input ${errors.fullName ? 'is-invalid' : ''}`}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Rahul Sharma" 
                  required 
                />
                {errors.fullName && <span className="form-error-msg is-visible">{errors.fullName}</span>}
              </div>

              {/* Company Name */}
              <div className="form-group">
                <label htmlFor="enquiry-company" className="form-label">
                  Company Name<span className="required-star">*</span>
                </label>
                <input 
                  type="text" 
                  id="enquiry-company" 
                  className={`form-input ${errors.companyName ? 'is-invalid' : ''}`}
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="e.g. Acme Corporation, Tata Motors, Infosys" 
                  required 
                />
                {errors.companyName && <span className="form-error-msg is-visible">{errors.companyName}</span>}
              </div>

              {/* Business Email */}
              <div className="form-group">
                <label htmlFor="enquiry-email" className="form-label">
                  Business Email<span className="required-star">*</span>
                </label>
                <input 
                  type="email" 
                  id="enquiry-email" 
                  className={`form-input ${errors.businessEmail ? 'is-invalid' : ''}`}
                  value={businessEmail}
                  onChange={(e) => setBusinessEmail(e.target.value)}
                  placeholder="e.g. rahul.sharma@company.com" 
                  required 
                />
                {errors.businessEmail && <span className="form-error-msg is-visible">{errors.businessEmail}</span>}
              </div>

              {/* Contact Number */}
              <div className="form-group">
                <label htmlFor="enquiry-phone" className="form-label">
                  Contact Number<span className="required-star">*</span>
                </label>
                <input 
                  type="tel" 
                  id="enquiry-phone" 
                  className={`form-input ${errors.contactNumber ? 'is-invalid' : ''}`}
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  placeholder="e.g. +91 98765 43210" 
                  required 
                />
                {errors.contactNumber && <span className="form-error-msg is-visible">{errors.contactNumber}</span>}
              </div>

              {/* Gift Category */}
              <div className="form-group">
                <label htmlFor="enquiry-category" className="form-label">
                  Gift Category<span className="required-star">*</span>
                </label>
                <select 
                  id="enquiry-category" 
                  className={`form-select ${errors.giftCategory ? 'is-invalid' : ''}`}
                  value={giftCategory}
                  onChange={(e) => setGiftCategory(e.target.value)}
                  required
                >
                  <option value="">Select a category...</option>
                  <option value="Curated Diwali Hampers">Curated Diwali Hampers</option>
                  <option value="Build Your Own Signature Box">Build Your Own Signature Box</option>
                  <option value="Corporate Celebration Sets">Corporate Celebration Sets</option>
                  <option value="Premium 7-in-1 Gift Boxes">Premium 7-in-1 Gift Boxes</option>
                  <option value="Desk & Everyday Gifts">Desk &amp; Everyday Gifts</option>
                  <option value="Customised Corporate Gifting">Customised Corporate Gifting</option>
                  <option value="Not Sure — Recommend Options">Not Sure — Recommend Options</option>
                </select>
                {errors.giftCategory && <span className="form-error-msg is-visible">{errors.giftCategory}</span>}
              </div>

              {/* Approximate Quantity (Tier counts only) */}
              <div className="form-group">
                <label htmlFor="enquiry-quantity" className="form-label">
                  Approximate Quantity (Units)<span className="required-star">*</span>
                </label>
                <select 
                  id="enquiry-quantity" 
                  className={`form-select ${errors.approximateQuantity ? 'is-invalid' : ''}`}
                  value={approximateQuantity}
                  onChange={(e) => setApproximateQuantity(e.target.value)}
                  required
                >
                  <option value="">Select quantity range...</option>
                  <option value="25 - 50 units">25 – 50 units</option>
                  <option value="50 - 100 units">50 – 100 units</option>
                  <option value="100 - 250 units">100 – 250 units</option>
                  <option value="250 - 500 units">250 – 500 units</option>
                  <option value="500+ units">500+ units</option>
                </select>
                {errors.approximateQuantity && <span className="form-error-msg is-visible">{errors.approximateQuantity}</span>}
              </div>

              {/* Delivery City */}
              <div className="form-group col-span-2">
                <label htmlFor="enquiry-city" className="form-label">
                  Delivery City or Cities<span className="required-star">*</span>
                </label>
                <input 
                  type="text" 
                  id="enquiry-city" 
                  className={`form-input ${errors.deliveryCity ? 'is-invalid' : ''}`}
                  value={deliveryCity}
                  onChange={(e) => setDeliveryCity(e.target.value)}
                  placeholder="e.g. Mumbai, Bengaluru, Delhi NCR, or Multi-city dispatch" 
                  required 
                />
                {errors.deliveryCity && <span className="form-error-msg is-visible">{errors.deliveryCity}</span>}
              </div>

              {/* Preferred Product */}
              <div className="form-group col-span-2">
                <label htmlFor="enquiry-preferred-product" className="form-label">
                  Preferred Gift or Product Code <span style={{ fontWeight: 400, color: 'var(--color-text-tertiary)' }}>(Optional)</span>
                </label>
                <input 
                  type="text" 
                  id="enquiry-preferred-product" 
                  className="form-input"
                  value={preferredProduct}
                  onChange={(e) => setPreferredProduct(e.target.value)}
                  placeholder="e.g. Hamper 01, Q253, Q262, or Signature Box combination" 
                />
              </div>

              {/* Branding Requirements */}
              <div className="form-group">
                <label htmlFor="enquiry-branding" className="form-label">
                  Packaging &amp; Branding Requirements <span style={{ fontWeight: 400, color: 'var(--color-text-tertiary)' }}>(Optional)</span>
                </label>
                <input 
                  type="text" 
                  id="enquiry-branding" 
                  className="form-input"
                  value={brandingRequirements}
                  onChange={(e) => setBrandingRequirements(e.target.value)}
                  placeholder="e.g. Gold foil logo on box lid, custom ribbons, engraved tags" 
                />
              </div>

              {/* Greeting Card Message */}
              <div className="form-group">
                <label htmlFor="enquiry-card-message" className="form-label">
                  Greeting Card Message <span style={{ fontWeight: 400, color: 'var(--color-text-tertiary)' }}>(Optional)</span>
                </label>
                <input 
                  type="text" 
                  id="enquiry-card-message" 
                  className="form-input"
                  value={greetingCardMessage}
                  onChange={(e) => setGreetingCardMessage(e.target.value)}
                  placeholder="e.g. Wishing your team a joyful & prosperous Diwali — Leadership Team" 
                />
              </div>

              {/* Additional Notes */}
              <div className="form-group col-span-2">
                <label htmlFor="enquiry-notes" className="form-label">
                  Additional Requirements <span style={{ fontWeight: 400, color: 'var(--color-text-tertiary)' }}>(Optional)</span>
                </label>
                <textarea 
                  id="enquiry-notes" 
                  rows={3} 
                  className="form-textarea"
                  value={additionalRequirements}
                  onChange={(e) => setAdditionalRequirements(e.target.value)}
                  placeholder="e.g. Target delivery by Oct 15, individual branch dispatch, custom inserts..."
                ></textarea>
              </div>

              {/* Consent Checkbox */}
              <div className="form-group col-span-2">
                <div className="form-consent">
                  <input 
                    type="checkbox" 
                    id="enquiry-consent" 
                    className="form-checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    required 
                  />
                  <label htmlFor="enquiry-consent" className="form-consent-label">
                    I agree to be contacted by the BLACKFAWN team regarding this corporate gifting enquiry.
                  </label>
                </div>
                {errors.consent && <span className="form-error-msg is-visible">{errors.consent}</span>}
              </div>
            </div>

            <div className="form-actions">
              <button 
                type="submit" 
                className="btn btn-primary btn-lg" 
                id="enquiry-submit-btn" 
                style={{ width: '100%' }}
                disabled={isSubmitting}
              >
                {isSubmitting && <span className="spinner" style={{ marginRight: '8px' }}></span>}
                {isSubmitting ? 'Submitting Enquiry...' : 'Submit Corporate Enquiry'}
              </button>
            </div>
          </form>

          {submitStatus && (
            <div 
              className={`form-feedback-state ${submitStatus.type}`} 
              style={{ display: 'block' }}
              role="status" 
              aria-live="polite"
            >
              <h4 className="feedback-title">
                {submitStatus.type === 'success' ? 'Enquiry Received!' : 'Submission Error'}
              </h4>
              <p className="feedback-text">{submitStatus.message}</p>
              {submitStatus.refId && (
                <p style={{ fontSize: '0.75rem', marginTop: '0.5rem', opacity: 0.8 }}>
                  Reference ID: {submitStatus.refId}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
