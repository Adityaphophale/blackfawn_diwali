/**
 * BLACKFAWN Diwali Corporate Gifting 2026 - Analytics & Event Tracking
 * Tracks key conversion touchpoints safely without exposing sensitive PII.
 */

class AnalyticsTracker {
  constructor() {
    this.events = [];
    this.hasStartedForm = false;
  }

  track(eventName, properties = {}) {
    const payload = {
      event: eventName,
      timestamp: new Date().toISOString(),
      properties: {
        path: window.location.pathname,
        referrer: document.referrer || 'direct',
        ...properties
      }
    };

    this.events.push(payload);
    console.debug(`[BLACKFAWN Analytics] ${eventName}`, payload.properties);

    // If Google Tag Manager or DataLayer is present, push to dataLayer
    if (window.dataLayer && Array.isArray(window.dataLayer)) {
      window.dataLayer.push(payload);
    }
  }

  trackPageView() {
    this.track('diwali_page_view', {
      campaign: 'diwali_corporate_gifting_2026'
    });
  }

  trackHeroCta(ctaType) {
    this.track('hero_cta_click', { cta: ctaType });
  }

  trackSectionView(sectionId) {
    this.track('section_view', { section: sectionId });
  }

  trackProductEnquiryClick(productCode, productName, category) {
    this.track('product_enquiry_click', {
      product_code: productCode,
      product_name: productName,
      category: category
    });
  }

  trackSignatureBoxSelection(step, optionId, optionName) {
    this.track('signature_box_step_select', {
      step,
      option_id: optionId,
      option_name: optionName
    });
  }

  trackSignatureBoxComplete(packaging, keepsake) {
    this.track('signature_box_complete_enquiry', {
      packaging_chosen: packaging,
      keepsake_chosen: keepsake
    });
  }

  trackFormStart() {
    if (!this.hasStartedForm) {
      this.hasStartedForm = true;
      this.track('enquiry_form_start');
    }
  }

  trackFormSuccess(leadId, category, quantity) {
    this.track('enquiry_form_submit_success', {
      lead_id: leadId,
      category,
      quantity_tier: quantity
    });
  }

  trackContactClick(channel) {
    this.track('contact_link_click', { channel });
  }
}

export const analytics = new AnalyticsTracker();
