/**
 * BLACKFAWN Diwali Corporate Gifting 2026 - Interactive Application Controller
 * Handles UI interactions, Signature Box configurator, filters, accessible accordion,
 * pre-filling, validation, and real submission handling.
 */

import {
  HAMPERS_DATA,
  SIGNATURE_BOX_CONFIG,
  CELEBRATION_SETS_DATA,
  PREMIUM_GIFTS_DATA,
  EVERYDAY_GIFTS_DATA,
  FAQS_DATA
} from './data.js';

import { analytics } from './analytics.js';

class DiwaliApp {
  constructor() {
    this.selectedPackaging = null;
    this.selectedKeepsake = null;
    this.activeCelebrationFilter = 'all';
    this.prefilledProduct = null;
    this.isSubmitting = false;

    this.init();
  }

  init() {
    // Analytics
    analytics.trackPageView();

    // Render components
    this.renderHampers();
    this.renderSignatureBuilder();
    this.renderCelebrationSets();
    this.renderPremiumGifts();
    this.renderEverydayGifts();
    this.renderFaqs();

    // Event listeners
    this.setupNavigation();
    this.setupCelebrationFilters();
    this.setupEnquiryForm();
    this.setupAnalyticsListeners();

    // Pre-fill from URL query param if present
    this.checkUrlParams();
  }

  /* ==========================================================================
     1. RENDER HAMPERS (01 to 07)
     ========================================================================== */
  renderHampers() {
    const grid = document.getElementById('hampers-grid');
    if (!grid) return;

    grid.innerHTML = HAMPERS_DATA.map(hamper => `
      <article class="hamper-card" id="${hamper.id}">
        <div class="hamper-image-container">
          <img 
            src="${hamper.image}" 
            alt="BLACKFAWN Diwali Hamper ${hamper.code} - ${hamper.name}" 
            class="hamper-img"
            loading="lazy"
          />
          <span class="hamper-tag-badge">${hamper.tag}</span>
          <span class="hamper-code-badge">Hamper ${hamper.code}</span>
        </div>
        <div class="hamper-body">
          <h3 class="hamper-name">${hamper.name}</h3>
          <p class="hamper-packaging-subtitle">${hamper.subtitle}</p>
          <ul class="hamper-contents-list" aria-label="Hamper inclusions">
            ${hamper.contents.map(item => `
              <li class="hamper-content-item ${item.includes('murti') || item.includes('sipper') || item.includes('monks') ? 'highlight' : ''}">
                ${item}
              </li>
            `).join('')}
          </ul>
          <div class="hamper-footer">
            <span class="hamper-custom-indicator" title="Packaging, card and branding can be customised">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
              Customisable
            </span>
            <button 
              type="button" 
              class="btn btn-outline-gold btn-sm js-enquire-hamper" 
              data-code="Hamper ${hamper.code} (${hamper.name})"
              data-category="Curated Diwali Hampers"
            >
              Enquire About This Hamper
            </button>
          </div>
        </div>
      </article>
    `).join('');

    // Attach click handlers
    grid.querySelectorAll('.js-enquire-hamper').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const code = btn.getAttribute('data-code');
        const cat = btn.getAttribute('data-category');
        analytics.trackProductEnquiryClick(code, code, cat);
        this.selectProductForEnquiry(code, cat);
      });
    });
  }

  /* ==========================================================================
     2. SIGNATURE BOX BUILDER (Page 2)
     ========================================================================== */
  renderSignatureBuilder() {
    const pkgContainer = document.getElementById('builder-packaging-options');
    const ksContainer = document.getElementById('builder-keepsake-options');
    if (!pkgContainer || !ksContainer) return;

    // Render Packaging options
    pkgContainer.innerHTML = SIGNATURE_BOX_CONFIG.packagingOptions.map(pkg => `
      <div 
        class="builder-option-card js-select-pkg" 
        data-id="${pkg.id}" 
        data-letter="${pkg.letter}"
        data-name="${pkg.name}"
        tabindex="0"
        role="radio"
        aria-checked="false"
      >
        <span class="builder-check-icon" aria-hidden="true">✓</span>
        <img src="${pkg.image}" alt="${pkg.letter} — ${pkg.name}" class="builder-option-img" loading="lazy" />
        <div class="builder-option-info">
          <span class="builder-option-name">${pkg.letter} · ${pkg.name}</span>
          <span class="builder-option-desc">${pkg.description}</span>
        </div>
      </div>
    `).join('');

    // Render Keepsake options
    ksContainer.innerHTML = SIGNATURE_BOX_CONFIG.keepsakeOptions.map(ks => `
      <div 
        class="builder-option-card js-select-ks" 
        data-id="${ks.id}" 
        data-num="${ks.number}"
        data-name="${ks.name}"
        tabindex="0"
        role="radio"
        aria-checked="false"
      >
        <span class="builder-check-icon" aria-hidden="true">✓</span>
        <img src="${ks.image}" alt="${ks.number} — ${ks.name}" class="builder-option-img" loading="lazy" />
        <div class="builder-option-info">
          <span class="builder-option-name">${ks.number} · ${ks.name}</span>
          <span class="builder-option-desc">${ks.description}</span>
        </div>
      </div>
    `).join('');

    // Render Inclusions list in summary
    const inclusionsEl = document.getElementById('builder-inclusions-list');
    if (inclusionsEl) {
      inclusionsEl.innerHTML = SIGNATURE_BOX_CONFIG.inclusions.map(inc => `
        <li>${inc}</li>
      `).join('');
    }

    // Attach listeners for Step 1
    pkgContainer.querySelectorAll('.js-select-pkg').forEach(card => {
      const selectHandler = () => {
        pkgContainer.querySelectorAll('.js-select-pkg').forEach(c => {
          c.classList.remove('is-selected');
          c.setAttribute('aria-checked', 'false');
        });
        card.classList.add('is-selected');
        card.setAttribute('aria-checked', 'true');
        this.selectedPackaging = {
          id: card.getAttribute('data-id'),
          letter: card.getAttribute('data-letter'),
          name: card.getAttribute('data-name')
        };
        analytics.trackSignatureBoxSelection('packaging', this.selectedPackaging.id, this.selectedPackaging.name);
        this.updateBuilderSummary();
      };

      card.addEventListener('click', selectHandler);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectHandler();
        }
      });
    });

    // Attach listeners for Step 2
    ksContainer.querySelectorAll('.js-select-ks').forEach(card => {
      const selectHandler = () => {
        ksContainer.querySelectorAll('.js-select-ks').forEach(c => {
          c.classList.remove('is-selected');
          c.setAttribute('aria-checked', 'false');
        });
        card.classList.add('is-selected');
        card.setAttribute('aria-checked', 'true');
        this.selectedKeepsake = {
          id: card.getAttribute('data-id'),
          num: card.getAttribute('data-num'),
          name: card.getAttribute('data-name')
        };
        analytics.trackSignatureBoxSelection('keepsake', this.selectedKeepsake.id, this.selectedKeepsake.name);
        this.updateBuilderSummary();
      };

      card.addEventListener('click', selectHandler);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectHandler();
        }
      });
    });

    // Reset button
    const resetBtn = document.getElementById('builder-reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        this.resetSignatureBuilder();
      });
    }

    // Submit / Enquire About Signature Box button
    const submitBtn = document.getElementById('builder-enquire-btn');
    if (submitBtn) {
      submitBtn.addEventListener('click', () => {
        const pkgText = this.selectedPackaging 
          ? `${this.selectedPackaging.letter} (${this.selectedPackaging.name})` 
          : 'Any Packaging';
        const ksText = this.selectedKeepsake 
          ? `${this.selectedKeepsake.num} (${this.selectedKeepsake.name})` 
          : 'Any Keepsake';
        const fullDesc = `Custom Signature Box [Packaging: ${pkgText} | Keepsake: ${ksText}]`;
        
        analytics.trackSignatureBoxComplete(pkgText, ksText);
        this.selectProductForEnquiry(fullDesc, 'Build Your Own Signature Box');
      });
    }
  }

  updateBuilderSummary() {
    const pkgSlot = document.getElementById('summary-pkg-value');
    const ksSlot = document.getElementById('summary-ks-value');
    const enquireBtn = document.getElementById('builder-enquire-btn');

    if (pkgSlot) {
      pkgSlot.textContent = this.selectedPackaging 
        ? `${this.selectedPackaging.letter} · ${this.selectedPackaging.name}` 
        : 'Please select packaging above';
      pkgSlot.style.color = this.selectedPackaging ? 'var(--color-champagne-gold)' : 'var(--color-text-secondary)';
    }

    if (ksSlot) {
      ksSlot.textContent = this.selectedKeepsake 
        ? `${this.selectedKeepsake.num} · ${this.selectedKeepsake.name}` 
        : 'Please select keepsake above';
      ksSlot.style.color = this.selectedKeepsake ? 'var(--color-champagne-gold)' : 'var(--color-text-secondary)';
    }

    if (enquireBtn) {
      if (this.selectedPackaging && this.selectedKeepsake) {
        enquireBtn.textContent = 'Enquire About My Signature Box';
        enquireBtn.classList.remove('btn-secondary');
        enquireBtn.classList.add('btn-primary');
      } else {
        enquireBtn.textContent = 'Enquire With Current Selections';
      }
    }
  }

  resetSignatureBuilder() {
    this.selectedPackaging = null;
    this.selectedKeepsake = null;
    document.querySelectorAll('.js-select-pkg, .js-select-ks').forEach(c => {
      c.classList.remove('is-selected');
      c.setAttribute('aria-checked', 'false');
    });
    this.updateBuilderSummary();
  }

  /* ==========================================================================
     3. CELEBRATION SETS (Q251 - Q261)
     ========================================================================== */
  renderCelebrationSets() {
    const grid = document.getElementById('celebration-grid');
    if (!grid) return;

    const filtered = this.activeCelebrationFilter === 'all'
      ? CELEBRATION_SETS_DATA
      : CELEBRATION_SETS_DATA.filter(item => item.category === this.activeCelebrationFilter);

    grid.innerHTML = filtered.map(set => `
      <article class="celebration-card" id="set-${set.code}">
        <div class="celebration-card-image">
          <img 
            src="${set.image}" 
            alt="BLACKFAWN Celebration Set ${set.code} - ${set.title}" 
            loading="lazy"
          />
          <span class="jute-badge">Ships in Jute Tote</span>
        </div>
        <div class="celebration-card-body">
          <div class="celebration-card-header">
            <h4 class="celebration-code">${set.code}</h4>
            <span class="celebration-set-count">${set.setType}</span>
          </div>
          <p class="celebration-items-desc">${set.description}</p>
          <div class="celebration-card-footer">
            <span class="badge badge-gold">${set.categoryLabel}</span>
            <button 
              type="button" 
              class="btn btn-outline-gold btn-sm js-enquire-set" 
              data-code="Celebration Set ${set.code} (${set.setType})"
              data-category="Corporate Celebration Sets"
            >
              Enquire for Set
            </button>
          </div>
        </div>
      </article>
    `).join('');

    // Attach listeners
    grid.querySelectorAll('.js-enquire-set').forEach(btn => {
      btn.addEventListener('click', () => {
        const code = btn.getAttribute('data-code');
        const cat = btn.getAttribute('data-category');
        analytics.trackProductEnquiryClick(code, code, cat);
        this.selectProductForEnquiry(code, cat);
      });
    });
  }

  setupCelebrationFilters() {
    const filterContainer = document.getElementById('celebration-filters');
    if (!filterContainer) return;

    filterContainer.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        this.activeCelebrationFilter = btn.getAttribute('data-filter');
        this.renderCelebrationSets();
      });
    });

    // Mix and Match Banner action
    const mixMatchBtn = document.getElementById('mix-match-enquire-btn');
    if (mixMatchBtn) {
      mixMatchBtn.addEventListener('click', () => {
        this.selectProductForEnquiry('Mix & Match Celebration Set (Custom Swap)', 'Corporate Celebration Sets');
      });
    }
  }

  /* ==========================================================================
     4. PREMIUM 7-IN-1 BOXES (Q262 & Q263)
     ========================================================================== */
  renderPremiumGifts() {
    const grid = document.getElementById('premium-boxes-grid');
    if (!grid) return;

    grid.innerHTML = PREMIUM_GIFTS_DATA.map(item => `
      <article class="premium-card" id="premium-${item.code}">
        <div class="premium-card-image">
          <img 
            src="${item.image}" 
            alt="BLACKFAWN Premium 7-in-1 Executive Box ${item.code}" 
            loading="lazy"
          />
          <div class="premium-pill-features">
            <span class="badge badge-gold">For Leadership & Key Clients</span>
            <span class="badge badge-dark">Your Logo on Box</span>
          </div>
        </div>
        <div class="premium-card-body">
          <h3 class="premium-card-title">${item.code} · ${item.title}</h3>
          <p class="premium-card-subtitle">${item.setType}</p>
          <ul class="premium-items-list" aria-label="Curated contents">
            ${item.features.map(f => `
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                ${f}
              </li>
            `).join('')}
          </ul>
          <div class="premium-spec-box">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
            ${item.packagingDetails}
          </div>
          <button 
            type="button" 
            class="btn btn-primary js-enquire-premium" 
            data-code="Premium 7-in-1 Box ${item.code}"
            data-category="Premium 7-in-1 Gift Boxes"
          >
            Discuss Premium Corporate Gifting
          </button>
        </div>
      </article>
    `).join('');

    grid.querySelectorAll('.js-enquire-premium').forEach(btn => {
      btn.addEventListener('click', () => {
        const code = btn.getAttribute('data-code');
        const cat = btn.getAttribute('data-category');
        analytics.trackProductEnquiryClick(code, code, cat);
        this.selectProductForEnquiry(code, cat);
      });
    });
  }

  /* ==========================================================================
     5. DESK & EVERYDAY GIFTS (Page 10)
     ========================================================================== */
  renderEverydayGifts() {
    const grid = document.getElementById('everyday-grid');
    if (!grid) return;

    grid.innerHTML = EVERYDAY_GIFTS_DATA.map(item => `
      <article class="everyday-card" id="item-${item.code}">
        <img 
          src="${item.image}" 
          alt="${item.name} (${item.code})" 
          class="everyday-card-img" 
          loading="lazy"
        />
        <div class="everyday-card-body">
          <span class="everyday-code">${item.code}</span>
          <h4 class="everyday-title">${item.name}</h4>
          <p class="everyday-desc">${item.description}</p>
          <button 
            type="button" 
            class="btn btn-outline-gold btn-sm js-enquire-everyday" 
            data-code="${item.code} — ${item.name}"
            data-category="Desk & Everyday Gifts"
          >
            Enquire
          </button>
        </div>
      </article>
    `).join('');

    grid.querySelectorAll('.js-enquire-everyday').forEach(btn => {
      btn.addEventListener('click', () => {
        const code = btn.getAttribute('data-code');
        const cat = btn.getAttribute('data-category');
        analytics.trackProductEnquiryClick(code, code, cat);
        this.selectProductForEnquiry(code, cat);
      });
    });

    // Pair With Any Hamper CTA
    const pairBtn = document.getElementById('pair-hamper-btn');
    if (pairBtn) {
      pairBtn.addEventListener('click', () => {
        this.selectProductForEnquiry('Add Branded Desk Piece to Hamper', 'Desk & Everyday Gifts');
      });
    }
  }

  /* ==========================================================================
     6. FAQS ACCORDION
     ========================================================================== */
  renderFaqs() {
    const container = document.getElementById('faq-accordion-list');
    if (!container) return;

    container.innerHTML = FAQS_DATA.map((faq, index) => `
      <div class="faq-item" id="faq-item-${index}">
        <button 
          type="button" 
          class="faq-question-btn" 
          aria-expanded="${index === 0 ? 'true' : 'false'}" 
          aria-controls="faq-panel-${index}"
        >
          <span>${faq.question}</span>
          <svg class="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <div 
          id="faq-panel-${index}" 
          class="faq-answer-panel" 
          role="region" 
          aria-labelledby="faq-item-${index}"
          style="${index === 0 ? 'display: block;' : 'display: none;'}"
        >
          <p>${faq.answer}</p>
        </div>
      </div>
    `).join('');

    // Accordion toggle handler
    container.querySelectorAll('.faq-item').forEach((item, idx) => {
      const btn = item.querySelector('.faq-question-btn');
      const panel = item.querySelector('.faq-answer-panel');

      if (idx === 0) {
        item.classList.add('is-open');
      }

      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');

        // Close other items for neat accordion behavior
        container.querySelectorAll('.faq-item').forEach(other => {
          if (other !== item) {
            other.classList.remove('is-open');
            other.querySelector('.faq-question-btn').setAttribute('aria-expanded', 'false');
            other.querySelector('.faq-answer-panel').style.display = 'none';
          }
        });

        if (isOpen) {
          item.classList.remove('is-open');
          btn.setAttribute('aria-expanded', 'false');
          panel.style.display = 'none';
        } else {
          item.classList.add('is-open');
          btn.setAttribute('aria-expanded', 'true');
          panel.style.display = 'block';
        }
      });
    });
  }

  /* ==========================================================================
     7. ENQUIRY PRE-FILLING & FORM HANDLING
     ========================================================================== */
  selectProductForEnquiry(productCodeOrDesc, category) {
    this.prefilledProduct = {
      code: productCodeOrDesc,
      category: category
    };

    const formSection = document.getElementById('enquiry');
    const categorySelect = document.getElementById('enquiry-category');
    const productInput = document.getElementById('enquiry-preferred-product');
    const badge = document.getElementById('form-prefilled-badge');
    const badgeText = document.getElementById('form-prefilled-text');

    if (categorySelect && category) {
      categorySelect.value = category;
    }
    if (productInput && productCodeOrDesc) {
      productInput.value = productCodeOrDesc;
    }
    if (badge && badgeText) {
      badgeText.textContent = `Selected Gift: ${productCodeOrDesc}`;
      badge.classList.add('is-visible');
    }

    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  setupEnquiryForm() {
    const form = document.getElementById('diwali-enquiry-form');
    const clearBadgeBtn = document.getElementById('form-prefilled-clear');

    if (clearBadgeBtn) {
      clearBadgeBtn.addEventListener('click', () => {
        const productInput = document.getElementById('enquiry-preferred-product');
        const badge = document.getElementById('form-prefilled-badge');
        if (productInput) productInput.value = '';
        if (badge) badge.classList.remove('is-visible');
      });
    }

    if (!form) return;

    // Track when user first interacts with any form field
    form.addEventListener('focusin', () => {
      analytics.trackFormStart();
    }, { once: true });

    // Submission handler - Validate and redirect to WhatsApp
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (this.isSubmitting) return;

      const isValid = this.validateForm(form);
      if (!isValid) return;

      const formData = new FormData(form);
      const payload = {
        fullName: formData.get('fullName')?.toString().trim() || '',
        companyName: formData.get('companyName')?.toString().trim() || '',
        businessEmail: formData.get('businessEmail')?.toString().trim() || '',
        contactNumber: formData.get('contactNumber')?.toString().trim() || '',
        giftCategory: formData.get('giftCategory')?.toString() || '',
        approximateQuantity: formData.get('approximateQuantity')?.toString() || '',
        deliveryCity: formData.get('deliveryCity')?.toString().trim() || '',
        preferredProduct: formData.get('preferredProduct')?.toString().trim() || '',
        brandingRequirements: formData.get('brandingRequirements')?.toString().trim() || '',
        greetingCardMessage: formData.get('greetingCardMessage')?.toString().trim() || '',
        additionalRequirements: formData.get('additionalRequirements')?.toString().trim() || '',
        consent: formData.get('consent') === 'on',
        // Anti-spam honeypot
        website_hp: formData.get('website_hp')?.toString() || ''
      };

      // Honeypot check
      if (payload.website_hp) {
        console.warn('Bot detected via honeypot.');
        return;
      }

      this.isSubmitting = true;
      const submitBtn = document.getElementById('enquiry-submit-btn');
      const submitText = document.getElementById('submit-btn-text');
      const submitSpinner = document.getElementById('submit-btn-spinner');
      const feedbackState = document.getElementById('form-feedback-state');

      if (submitBtn) submitBtn.disabled = true;
      if (submitText) submitText.textContent = 'Redirecting to WhatsApp...';
      if (submitSpinner) submitSpinner.style.display = 'inline-block';

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

      // Update feedback state notification
      if (feedbackState) {
        feedbackState.className = 'form-feedback-state success';
        feedbackState.innerHTML = `
          <h4 class="feedback-title">Connecting to WhatsApp...</h4>
          <p class="feedback-text">
            Opening WhatsApp with your enquiry details. Please press <strong>Send</strong> in WhatsApp to complete your enquiry.
          </p>
          <p style="font-size:0.85rem; margin-top:0.5rem;">
            <a href="${waUrl}" target="_blank" rel="noopener noreferrer" style="color: var(--color-gold); text-decoration: underline;">Click here if WhatsApp didn't open automatically</a>
          </p>
        `;
      }

      analytics.trackFormSuccess('whatsapp-redirect', payload.giftCategory, payload.approximateQuantity);

      // Reset form fields
      form.reset();
      const badge = document.getElementById('form-prefilled-badge');
      if (badge) badge.classList.remove('is-visible');

      // Open WhatsApp Web on desktop or WhatsApp app on mobile
      const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      if (isMobile) {
        window.location.href = waUrl;
      } else {
        const opened = window.open(waUrl, '_blank');
        if (!opened || opened.closed || typeof opened.closed === 'undefined') {
          window.location.href = waUrl;
        }
      }

      // Re-enable button after short delay
      setTimeout(() => {
        this.isSubmitting = false;
        if (submitBtn) submitBtn.disabled = false;
        if (submitText) submitText.textContent = 'Submit Corporate Enquiry';
        if (submitSpinner) submitSpinner.style.display = 'none';
      }, 2000);
    });
  }

  validateForm(form) {
    let isValid = true;

    const fields = [
      { id: 'enquiry-fullname', errorId: 'error-fullname', validate: val => val.trim().length >= 2 },
      { id: 'enquiry-company', errorId: 'error-company', validate: val => val.trim().length >= 2 },
      { 
        id: 'enquiry-email', 
        errorId: 'error-email', 
        validate: val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim()) 
      },
      { 
        id: 'enquiry-phone', 
        errorId: 'error-phone', 
        validate: val => /^[0-9+ \-()]{8,16}$/.test(val.trim()) 
      },
      { id: 'enquiry-category', errorId: 'error-category', validate: val => !!val },
      { id: 'enquiry-quantity', errorId: 'error-quantity', validate: val => !!val },
      { id: 'enquiry-city', errorId: 'error-city', validate: val => val.trim().length >= 2 }
    ];

    fields.forEach(field => {
      const input = document.getElementById(field.id);
      const errorEl = document.getElementById(field.errorId);
      if (!input || !errorEl) return;

      const valid = field.validate(input.value);
      if (!valid) {
        isValid = false;
        input.classList.add('is-invalid');
        errorEl.classList.add('is-visible');
      } else {
        input.classList.remove('is-invalid');
        errorEl.classList.remove('is-visible');
      }
    });

    const consentBox = document.getElementById('enquiry-consent');
    const consentError = document.getElementById('error-consent');
    if (consentBox && consentError) {
      if (!consentBox.checked) {
        isValid = false;
        consentError.classList.add('is-visible');
      } else {
        consentError.classList.remove('is-visible');
      }
    }

    return isValid;
  }

  /* ==========================================================================
     8. NAVIGATION, DRAWERS & ANALYTICS
     ========================================================================== */
  setupNavigation() {
    const header = document.querySelector('.site-header');
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const mobileDrawer = document.getElementById('mobile-nav-drawer');

    // Sticky header shadow
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }
    });

    // Mobile drawer toggle
    if (mobileToggle && mobileDrawer) {
      mobileToggle.addEventListener('click', () => {
        const isOpen = mobileDrawer.classList.contains('is-open');
        if (isOpen) {
          mobileDrawer.classList.remove('is-open');
          mobileToggle.setAttribute('aria-expanded', 'false');
        } else {
          mobileDrawer.classList.add('is-open');
          mobileToggle.setAttribute('aria-expanded', 'true');
        }
      });

      // Close drawer on link click
      mobileDrawer.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
          mobileDrawer.classList.remove('is-open');
          mobileToggle.setAttribute('aria-expanded', 'false');
        });
      });
    }
  }

  setupAnalyticsListeners() {
    // Hero CTA buttons
    document.querySelectorAll('.js-hero-cta').forEach(btn => {
      btn.addEventListener('click', () => {
        const ctaType = btn.getAttribute('data-cta') || 'explore';
        analytics.trackHeroCta(ctaType);
      });
    });

    // Contact clicks (phone, email, whatsapp)
    document.querySelectorAll('a[href^="tel:"]').forEach(a => {
      a.addEventListener('click', () => analytics.trackContactClick('phone'));
    });
    document.querySelectorAll('a[href^="mailto:"]').forEach(a => {
      a.addEventListener('click', () => analytics.trackContactClick('email'));
    });
    document.querySelectorAll('a[href*="wa.me"]').forEach(a => {
      a.addEventListener('click', () => analytics.trackContactClick('whatsapp'));
    });
  }

  checkUrlParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const product = urlParams.get('product');
    const category = urlParams.get('category');
    if (product) {
      this.selectProductForEnquiry(product, category || 'Curated Diwali Hampers');
    }
  }
}

// Instantiate on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  window.diwaliApp = new DiwaliApp();
});
