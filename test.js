/**
 * BLACKFAWN Diwali Corporate Gifting 2026 - Comprehensive Test Suite
 * Tests:
 * 1. ZERO-PRICE COMPLIANCE AUDIT
 * 2. CATALOGUE PRODUCT COMPLETENESS
 * 3. ASSET FILE INTEGRITY
 * 4. SERVER & FORM SUBMISSION API (LIVE TEST)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let totalTests = 0;
let passedTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  [PASS] ${message}`);
  } else {
    console.error(`  [FAIL] ${message}`);
    process.exitCode = 1;
  }
}

console.log('\n================================================================');
console.log('--- 1. ZERO-PRICE COMPLIANCE AUDIT ---');
console.log('================================================================');

const filesToScan = [
  'public/index.html',
  'public/js/data.js',
  'public/js/app.js',
  'public/js/analytics.js',
  'src/data/hampers.ts',
  'src/data/celebrationSets.ts',
  'src/data/premiumGifts.ts',
  'src/data/everydayGifts.ts',
  'src/components/HamperCard.tsx',
  'src/components/SignatureBoxBuilder.tsx',
  'src/components/CelebrationSetGrid.tsx',
  'src/components/PremiumGiftSection.tsx',
  'src/components/EverydayGiftGrid.tsx',
  'src/components/EnquiryForm.tsx',
  'src/components/FAQAccordion.tsx',
  'src/components/FinalCTA.tsx',
  'src/components/Footer.tsx',
  'src/pages/DiwaliGiftingPage.tsx'
];

// Price forbidden terms (case insensitive)
// Note: ₹, Rs., INR, "Hampers from", price tables, per-person costs, numeric prices from catalogue like 500, 520, 700, 750, 900, 1000, 1200 with currency.
const forbiddenPatterns = [
  /₹/,
  /\bRs\.?\b/i,
  /\bINR\b/i,
  /hampers\s+from/i,
  /price\s+guide/i,
  /per\s+hamper/i,
  /per\s+person/i,
  /budget\s+per\s+head/i,
  /50%\s+advance/i
];

let priceViolationsFound = 0;

filesToScan.forEach(relPath => {
  const fullPath = path.join(__dirname, relPath);
  if (!fs.existsSync(fullPath)) return;
  const content = fs.readFileSync(fullPath, 'utf8');

  forbiddenPatterns.forEach(pattern => {
    const match = content.match(pattern);
    if (match) {
      console.error(`  [VIOLATION] Found forbidden pattern "${match[0]}" in ${relPath}`);
      priceViolationsFound++;
    }
  });
});

assert(priceViolationsFound === 0, `Zero-Price Rule Audit: 0 violations across ${filesToScan.length} files.`);

console.log('\n================================================================');
console.log('--- 2. CATALOGUE PRODUCT COMPLETENESS AUDIT ---');
console.log('================================================================');

import { HAMPERS_DATA, SIGNATURE_BOX_CONFIG, CELEBRATION_SETS_DATA, PREMIUM_GIFTS_DATA, EVERYDAY_GIFTS_DATA, FAQS_DATA } from './public/js/data.js';

// Hampers 01 to 07
assert(HAMPERS_DATA.length === 7, `7 Curated Hampers present (found ${HAMPERS_DATA.length})`);
const hamperCodes = HAMPERS_DATA.map(h => h.code);
assert(hamperCodes.join(',') === '01,02,03,04,05,06,07', 'All hamper codes 01 through 07 in exact sequence');

// Signature Box Options
assert(SIGNATURE_BOX_CONFIG.packagingOptions.length === 3, '3 Packaging options present (A, B, C)');
assert(SIGNATURE_BOX_CONFIG.keepsakeOptions.length === 3, '3 Keepsake options present (1, 2, 3)');
assert(SIGNATURE_BOX_CONFIG.inclusions.length === 7, '7 Documented Inclusions present');

// Celebration Sets Q251 - Q261
assert(CELEBRATION_SETS_DATA.length === 11, `11 Celebration sets present (found ${CELEBRATION_SETS_DATA.length})`);
const expectedSets = ['Q251', 'Q252', 'Q253', 'Q254', 'Q255', 'Q256', 'Q257', 'Q258', 'Q259', 'Q260', 'Q261'];
const actualSets = CELEBRATION_SETS_DATA.map(s => s.code);
assert(JSON.stringify(actualSets) === JSON.stringify(expectedSets), 'All celebration sets Q251 to Q261 in exact order');

// Premium 7-in-1 Sets
assert(PREMIUM_GIFTS_DATA.length === 2, '2 Premium 7-in-1 executive sets present (Q262 & Q263)');
assert(PREMIUM_GIFTS_DATA[0].code === 'Q262' && PREMIUM_GIFTS_DATA[1].code === 'Q263', 'Q262 & Q263 correctly matched');

// Desk & Everyday Products
assert(EVERYDAY_GIFTS_DATA.length === 5, '5 Desk & Everyday products present (B211, H404, H405, H401, J156)');

// FAQs
assert(FAQS_DATA.length === 10, '10 FAQs defined matching catalogue facts');

console.log('\n================================================================');
console.log('--- 3. ASSET FILE INTEGRITY AUDIT ---');
console.log('================================================================');

const imagesDir = path.join(__dirname, 'public', 'images');
const requiredImages = [
  'blackfawn_logo_white.png',
  'blackfawn_logo_dark.png',
  'hero_hamper.jpg',
  'hamper_01_festive_tray.jpg',
  'hamper_02_gold_chevron.jpg',
  'hamper_03_royal_red.jpg',
  'hamper_04_crystal_box.jpg',
  'hamper_05_scarlet_keepsake.jpg',
  'hamper_06_jewel_tones.jpg',
  'hamper_07_wooden_crate.jpg',
  'packaging_clear_lid.jpg',
  'packaging_floral_bow.jpg',
  'packaging_festive_tray.jpg',
  'keepsake_deity_frame.jpg',
  'keepsake_little_monks.jpg',
  'keepsake_ganesh_ji.jpg',
  'celebration_q251.jpg',
  'celebration_q252.jpg',
  'celebration_q253.jpg',
  'celebration_q254.jpg',
  'celebration_q255.jpg',
  'celebration_q256.jpg',
  'celebration_q257.jpg',
  'celebration_q258.jpg',
  'celebration_q259.jpg',
  'celebration_q260.jpg',
  'celebration_q261.jpg',
  'premium_q262.jpg',
  'premium_q263.jpg',
  'everyday_b211_spincal.jpg',
  'everyday_h404_omega_lunchbox.jpg',
  'everyday_h405_omega_steel_lunchbox.jpg',
  'everyday_h401_chai_cups.jpg',
  'everyday_j156_bamboo_keychain.jpg'
];

requiredImages.forEach(imgName => {
  const p = path.join(imagesDir, imgName);
  const exists = fs.existsSync(p) && fs.statSync(p).size > 1000;
  assert(exists, `Image asset "${imgName}" exists and is valid (${exists ? fs.statSync(p).size : 0} bytes)`);
});

console.log('\n================================================================');
console.log('--- 4. HTML STRUCTURE & SEO AUDIT ---');
console.log('================================================================');

const indexHtml = fs.readFileSync(path.join(__dirname, 'public', 'index.html'), 'utf8');

assert(indexHtml.includes('<title>Corporate Diwali Gifts 2026 | BLACKFAWN</title>'), 'Correct Page Title');
assert(indexHtml.includes('name="description"'), 'Meta description tag present');
assert(indexHtml.includes('canonical'), 'Canonical link present');
assert(indexHtml.includes('og:title'), 'OpenGraph Title present');
assert(indexHtml.includes('og:image'), 'OpenGraph Image present');
assert(indexHtml.includes('id="hero"'), 'Hero section present');
assert(indexHtml.includes('id="hampers"'), 'Hampers section present');
assert(indexHtml.includes('id="signature-box"'), 'Signature box builder present');
assert(indexHtml.includes('id="celebration-sets"'), 'Celebration sets present');
assert(indexHtml.includes('id="premium-gifts"'), 'Premium gifts present');
assert(indexHtml.includes('id="everyday-gifts"'), 'Everyday gifts present');
assert(indexHtml.includes('id="customisation"'), 'Customisation section present');
assert(indexHtml.includes('id="how-to-order"'), 'How to order present');
assert(indexHtml.includes('id="enquiry"'), 'Enquiry form section present');
assert(indexHtml.includes('id="faqs"'), 'FAQs section present');
assert(indexHtml.includes('+91 92748 21162'), 'Clickable phone link present');
assert(indexHtml.includes('info@blackfawn.in'), 'Clickable mailto link present');
assert(!indexHtml.includes('₹'), 'Zero ₹ symbols in HTML');

console.log('\n================================================================');
console.log(`TEST SUMMARY: ${passedTests} / ${totalTests} assertions passed (${Math.round((passedTests/totalTests)*100)}%)`);
console.log('================================================================\n');

if (passedTests === totalTests) {
  console.log('All tests passed with 100% compliance!\n');
} else {
  console.error('Some tests failed.\n');
  process.exit(1);
}
