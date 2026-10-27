# BLACKFAWN — Diwali Corporate Gifting 2026 Landing Page

A premium, visually compelling, high-converting Diwali Corporate Gifting landing page built for **BLACKFAWN**, an Indian luxury gifting and customised merchandise label based in Vadodara, Gujarat.

Official Website: [https://www.blackfawn.in/](https://www.blackfawn.in/)  
Primary Source of Truth: `Blackfawn_Diwali_Corporate_Gifting.pdf`

---

## 🌟 Key Highlights & Absolute Zero-Price Rule

- **Strict Business Rule Enforced**: **Zero Prices Displayed**. In accordance with enterprise B2B gifting requirements, no prices, price guides, starting rates, MRPs, percentage discounts, per-person rates, or monetary budget fields exist anywhere on this landing page, its metadata, or its structured data.
- **Qualified Corporate Lead Generation**: Replaced monetary selectors with order quantity tiers (`25–50 units`, `50–100 units`, `100–250 units`, `250–500 units`, `500+ units`).
- **Original Catalogue Photography**: Embedded high-resolution photographs directly extracted from the official catalogue for all 7 Curated Hampers, the 3 Signature Box packaging options and 3 keepsakes, all 11 Celebration Sets (Q251–Q261), both Premium 7-in-1 Sets (Q262–Q263), and 5 Desk & Everyday products.
- **Authentic Brand Identity**: Official BLACKFAWN deer logo extracted directly from vector/alpha sources in both white and dark versions.

---

## 📁 Project Architecture

The project is structured with a dual architecture to guarantee both immediate standalone zero-dependency execution and full enterprise React/TypeScript maintainability:

```
blackfawn-diwali/
├── package.json               # NPM scripts, React 18 & Vite configuration
├── tsconfig.json              # TypeScript strict configuration
├── vite.config.ts             # Vite bundler configuration
├── server.js                  # Production Node.js HTTP & API server with /api/enquire
├── test.js                    # Automated test suite (64 assertions, 100% pass)
├── leads.json                 # Persistent store for captured corporate leads
├── README.md                  # Complete documentation
│
├── public/                    # Production-ready web application
│   ├── index.html             # Semantic, accessible, SEO-optimized landing page
│   ├── images/                # 31 authentic product photographs & official logos
│   │   ├── blackfawn_logo_white.png
│   │   ├── blackfawn_logo_dark.png
│   │   ├── hero_hamper.jpg
│   │   ├── hamper_01_festive_tray.jpg to hamper_07_wooden_crate.jpg
│   │   ├── packaging_clear_lid.jpg to packaging_festive_tray.jpg
│   │   ├── keepsake_deity_frame.jpg to keepsake_ganesh_ji.jpg
│   │   ├── celebration_q251.jpg to celebration_q261.jpg
│   │   ├── premium_q262.jpg and premium_q263.jpg
│   │   └── everyday_b211_spincal.jpg to everyday_j156_bamboo_keychain.jpg
│   ├── css/
│   │   ├── tokens.css         # Brand design tokens (Matte Black, Champagne Gold, etc.)
│   │   ├── global.css         # Typography, buttons, elevation, utility classes
│   │   ├── components.css     # Styles for all 15 sections
│   │   └── responsive.css     # Breakpoints: Desktop (1440px+), Laptop, Tablet, Mobile
│   └── js/
│       ├── data.js            # All catalogue datasets (Zero prices)
│       ├── app.js             # Interactive controller (Configurator, filters, form, ARIA)
│       └── analytics.js       # Conversion and engagement tracking
│
└── src/                       # Enterprise React 18 + TypeScript Source Code
    ├── components/
    │   ├── AnnouncementBar.tsx
    │   ├── Header.tsx
    │   ├── MobileMenu.tsx
    │   ├── HeroSection.tsx
    │   ├── TrustFeatures.tsx
    │   ├── HamperCard.tsx
    │   ├── HamperGrid.tsx
    │   ├── SignatureBoxBuilder.tsx
    │   ├── CelebrationSetGrid.tsx
    │   ├── PremiumGiftSection.tsx
    │   ├── EverydayGiftGrid.tsx
    │   ├── CustomisationSection.tsx
    │   ├── OrderingSteps.tsx
    │   ├── EnquiryForm.tsx
    │   ├── FAQAccordion.tsx
    │   ├── FinalCTA.tsx
    │   └── Footer.tsx
    ├── data/
    │   ├── hampers.ts
    │   ├── celebrationSets.ts
    │   ├── premiumGifts.ts
    │   └── everydayGifts.ts
    ├── pages/
    │   └── DiwaliGiftingPage.tsx
    ├── styles/
    │   ├── tokens.css
    │   ├── global.css
    │   └── responsive.css
    ├── App.tsx
    └── main.tsx
```

---

## 🚀 How to Run

### Option 1: Built-in High Performance Node Server
Run the included Node.js server (Node.js 18+ / 24+):
```bash
node server.js
```
The server will start at `http://localhost:3000/` and handle:
- Instant static asset delivery with proper MIME types and caching headers
- `POST /api/enquire` lead generation endpoint saving qualified corporate leads to `leads.json`
- `GET /health` health-check endpoint

### Option 2: Standalone Static Opening
You can also open `public/index.html` directly in any modern browser (Chrome, Edge, Safari, Firefox). All CSS and ES-module scripts function immediately.

---

## 🧪 Automated Test Suite

Run the comprehensive test suite verifying zero-price compliance, catalogue accuracy, image integrity, and SEO:
```bash
node test.js
```

### Test Results:
```
================================================================
--- 1. ZERO-PRICE COMPLIANCE AUDIT ---
================================================================
  [PASS] Zero-Price Rule Audit: 0 violations across 18 files.

================================================================
--- 2. CATALOGUE PRODUCT COMPLETENESS AUDIT ---
================================================================
  [PASS] 7 Curated Hampers present (01 to 07)
  [PASS] All hamper codes in exact sequence
  [PASS] 3 Packaging options (A, B, C)
  [PASS] 3 Keepsake options (1, 2, 3)
  [PASS] 7 Documented Inclusions present
  [PASS] 11 Celebration sets (Q251 to Q261)
  [PASS] 2 Premium 7-in-1 executive sets (Q262 & Q263)
  [PASS] 5 Desk & Everyday products (B211, H404, H405, H401, J156)
  [PASS] 10 FAQs defined matching catalogue facts

================================================================
--- 3. ASSET FILE INTEGRITY AUDIT ---
================================================================
  [PASS] All 34 images and logos verified on disk

================================================================
--- 4. HTML STRUCTURE & SEO AUDIT ---
================================================================
  [PASS] Title, meta descriptions, canonical, OpenGraph, JSON-LD verified
  [PASS] All 15 sections verified
  [PASS] Zero ₹ symbols verified

================================================================
TEST SUMMARY: 64 / 64 assertions passed (100%)
================================================================
```

---

## 🎨 Design Tokens

- **Matte Black**: `#0B0B0B`
- **Charcoal**: `#141414` / `#1A1A1A`
- **Warm Ivory**: `#F5F1E8`
- **Champagne Gold**: `#D4AF37`
- **Gold Glow**: `rgba(212, 175, 55, 0.18)`
- **Deep Festive Red**: `#7B1823`
- **Typography**:
  - Headings: `Space Grotesk`, display sans-serif
  - Body: `Inter`, clean readable sans-serif
  - Editorial Accents: `Cormorant Garamond`, luxury serif

---

## 📞 Corporate Contact Information

- **Phone / WhatsApp**: [+91 92748 21162](tel:+919274821162)
- **Corporate Email**: [info@blackfawn.in](mailto:info@blackfawn.in)
- **Official Website**: [https://www.blackfawn.in/](https://www.blackfawn.in/)
- **Location**: Vadodara, Gujarat, India
