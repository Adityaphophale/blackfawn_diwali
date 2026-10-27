/**
 * BLACKFAWN Diwali Corporate Gifting 2026 - Catalogue Data
 * Source of truth: Blackfawn_Diwali_Corporate_Gifting.pdf
 * STRICT BUSINESS RULE: ABSOLUTELY ZERO PRICES
 */

export const HAMPERS_DATA = [
  {
    id: 'hamper-01',
    code: '01',
    name: 'Festive Tray',
    subtitle: 'Printed window tray with gold ribbon',
    packaging: 'Printed window tray, gold ribbon tag',
    image: './images/hamper_01_festive_tray.jpg',
    tag: 'Signature Choice',
    customisable: true,
    contents: [
      'Ganesh ji murti',
      'Little monks set',
      'Potli of mixed dry-fruit chocolates',
      'Diya & dhoop cones',
      'Customised greeting card · box & festive décor'
    ]
  },
  {
    id: 'hamper-02',
    code: '02',
    name: 'Gold Chevron',
    subtitle: 'Chevron-print tray with tulle bow finish',
    packaging: 'Chevron-print tray, tulle bow finish',
    image: './images/hamper_02_gold_chevron.jpg',
    tag: 'Festive Classic',
    customisable: true,
    contents: [
      'Ganesh ji murti',
      'Little monks set',
      'Potli of mixed dry-fruit chocolates',
      'Diya & dhoop cones',
      'Customised greeting card · box & festive décor'
    ]
  },
  {
    id: 'hamper-03',
    code: '03',
    name: 'Royal Red',
    subtitle: 'Red & gold rigid box with satin bow',
    packaging: 'Red & gold rigid box, satin bow',
    image: './images/hamper_03_royal_red.jpg',
    tag: 'Executive Festive',
    customisable: true,
    contents: [
      'Ganesh ji murti',
      'Leather-finish sipper',
      'Potli of mixed dry-fruit chocolates',
      'Phool dhoop cones',
      'Customised greeting card · box & festive décor'
    ]
  },
  {
    id: 'hamper-04',
    code: '04',
    name: 'Crystal Box',
    subtitle: 'Clear-lid box with tulle bow & gold tag',
    packaging: 'Clear-lid box, tulle bow, gold tag',
    image: './images/hamper_04_crystal_box.jpg',
    tag: 'Showcase Box',
    customisable: true,
    contents: [
      'Ganesh ji murti',
      'Leather-finish sipper',
      'Potli of mixed dry-fruit chocolates',
      'Phool dhoop cones',
      'Traditional Diya',
      'Customised greeting card · box & festive décor'
    ]
  },
  {
    id: 'hamper-05',
    code: '05',
    name: 'Scarlet Keepsake',
    subtitle: 'Red magnetic box with gold satin bow',
    packaging: 'Red magnetic box, gold satin bow',
    image: './images/hamper_05_scarlet_keepsake.jpg',
    tag: 'Luxury Magnetic',
    customisable: true,
    contents: [
      'Ganesh ji murti',
      'Glass sipper',
      'Potli of mixed dry-fruit chocolates',
      'Diya & phool dhoop cones',
      'Customised greeting card · box & festive décor'
    ]
  },
  {
    id: 'hamper-06',
    code: '06',
    name: 'Jewel Tones',
    subtitle: 'Jewel-toned box with dried florals & mesh bow',
    packaging: 'Jewel-toned box, dried florals, mesh bow',
    image: './images/hamper_06_jewel_tones.jpg',
    tag: 'Artisanal Luxury',
    customisable: true,
    contents: [
      'Ganesh ji murti',
      'Glass sipper',
      'Potli of mixed dry-fruit chocolates',
      'Diya & phool dhoop cones',
      'Deity frame on stand, 4″',
      'Customised greeting card · box & festive décor'
    ]
  },
  {
    id: 'hamper-07',
    code: '07',
    name: 'Wooden Crate',
    subtitle: 'Pinewood crate with burlap & gold ribbon',
    packaging: 'Pinewood crate, burlap & gold ribbon',
    image: './images/hamper_07_wooden_crate.jpg',
    tag: 'Rustic Premium',
    customisable: true,
    contents: [
      'Ganesh ji murti',
      '500 ml sipper',
      'Potli of mixed dry-fruit chocolates',
      'Diya & phool dhoop cones',
      'Customised greeting card · box & festive décor'
    ]
  }
];

export const SIGNATURE_BOX_CONFIG = {
  packagingOptions: [
    {
      id: 'pkg-a',
      letter: 'A',
      name: 'Clear-lid ribbon box',
      description: 'Transparent top displaying festive presentation with elegant ribbon finish.',
      image: './images/packaging_clear_lid.jpg'
    },
    {
      id: 'pkg-b',
      letter: 'B',
      name: 'Floral bow box',
      description: 'Delicate floral motif rigid box adorned with a festive satin bow.',
      image: './images/packaging_floral_bow.jpg'
    },
    {
      id: 'pkg-c',
      letter: 'C',
      name: 'Festive window tray',
      description: 'Ornate printed window tray designed for open-view festive display.',
      image: './images/packaging_festive_tray.jpg'
    }
  ],
  keepsakeOptions: [
    {
      id: 'ks-1',
      number: '1',
      name: 'Deity frame on stand, 4″',
      description: 'Silver-finish embossed deity frame with desk easel stand.',
      image: './images/keepsake_deity_frame.jpg'
    },
    {
      id: 'ks-2',
      number: '2',
      name: 'Little monks set',
      description: 'Charming 4-piece monk figurines symbolising peace, mindfulness and joy.',
      image: './images/keepsake_little_monks.jpg'
    },
    {
      id: 'ks-3',
      number: '3',
      name: 'Ganesh ji idol',
      description: 'Gold-finish Lord Ganesha idol on decorative pedestal.',
      image: './images/keepsake_ganesh_ji.jpg'
    }
  ],
  inclusions: [
    'Box & festive décor',
    'Your chosen keepsake',
    'Customised greeting card',
    'Diya',
    'Potli of mixed dry-fruit chocolates',
    'Nirmal dhoop cones',
    'Potli of Das penda (2 pcs)'
  ]
};

export const CELEBRATION_SETS_DATA = [
  {
    code: 'Q251',
    setType: '5-in-1',
    category: 'drinkware',
    categoryLabel: 'Drinkware & Everyday Essentials',
    title: 'Eco Mug & Borosilicate Bottle Set',
    description: 'Eco mug with flip-top lid, borosilicate bottle with bamboo cap, LED diya set and cookies.',
    image: './images/celebration_q251.jpg',
    items: [
      'Eco-friendly mug with flip-top lid & anti-scald sleeve',
      'Borosilicate bottle with bamboo cap & silicon sleeve',
      'LED diya set of 6 (water-sensor auto light up)',
      'Sugar-free D’Lite cookies',
      'Ready-to-gift eco jute tote'
    ]
  },
  {
    code: 'Q252',
    setType: '5-in-1',
    category: 'desk',
    categoryLabel: 'Desk Accessories',
    title: 'Steel Mug & Alarm Clock Set',
    description: 'Steel mug, glass bottle, Ganesha diya, alarm clock and cookies.',
    image: './images/celebration_q252.jpg',
    items: [
      '2-tone stainless steel mug with lid',
      'Grooved texture glass bottle with clear window',
      'MDF Ganesha with diya',
      'Alarm clock with rechargeable night lamp',
      'Sugar-free D’Lite cookies',
      'Ready-to-gift eco jute tote'
    ]
  },
  {
    code: 'Q253',
    setType: '6-in-1',
    category: 'festive',
    categoryLabel: 'Festive & Decorative Gifts',
    title: 'LED Lamp & Mini Pooja Thali Set',
    description: 'LED lamp, frosted bottle, Ganesha diya, clock, pooja thali and cookies.',
    image: './images/celebration_q253.jpg',
    items: [
      'Rechargeable LED lamp with clip on base',
      'Frosted glass bottle with natural bamboo cap & carry loop',
      'MDF Ganesha with diya',
      'Alarm clock with rechargeable night lamp',
      'Divine mini pooja thali set',
      'Sugar-free D’Lite cookies',
      'Ready-to-gift eco jute tote'
    ]
  },
  {
    code: 'Q254',
    setType: '5-in-1',
    category: 'desk',
    categoryLabel: 'Desk Accessories',
    title: 'Metal Table Lamp & Travel Organiser Set',
    description: 'Metal table lamp, glass mug, travel organiser and cookies.',
    image: './images/celebration_q254.jpg',
    items: [
      'Rechargeable metal table lamp (1800 mAh battery)',
      'Glass mug with full silicon sleeve & lid',
      'Hard shell travel organiser with unbreakable shell',
      'Sugar-free D’Lite cookies',
      'Ready-to-gift eco jute tote'
    ]
  },
  {
    code: 'Q255',
    setType: '5-in-1',
    category: 'drinkware',
    categoryLabel: 'Drinkware & Everyday Essentials',
    title: 'Chai Mugs & Dual-Display Clock Set',
    description: 'Four chai mugs, glass bottle, dual-display clock and cookies.',
    image: './images/celebration_q255.jpg',
    items: [
      'Set of 4 cutting chai mugs (wheat-straw material)',
      'Glass bottle with bamboo cap & jute sleeve',
      'Rotatable table clock with double display',
      'Sugar-free D’Lite cookies',
      'Ready-to-gift eco jute tote'
    ]
  },
  {
    code: 'Q256',
    setType: '5-in-1',
    category: 'tech',
    categoryLabel: 'Technology & Utility Gifts',
    title: '10,000 mAh Power Bank & Glass Mug Set',
    description: 'Glass mug, 10,000 mAh power bank, LED diya set and cookies.',
    image: './images/celebration_q256.jpg',
    items: [
      'Glass mug with full silicon sleeve & lid',
      '10,000 mAh power bank with stripes design',
      'LED diya set of 6 (water-sensor auto light up)',
      'Sugar-free D’Lite cookies',
      'Ready-to-gift eco jute tote'
    ]
  },
  {
    code: 'Q257',
    setType: '5-in-1',
    category: 'festive',
    categoryLabel: 'Festive & Decorative Gifts',
    title: 'Metal Lamp & Wheat-Straw Bottle Set',
    description: 'Metal table lamp, wheat-straw bottle, Ganesha diya and cookies.',
    image: './images/celebration_q257.jpg',
    items: [
      'Rechargeable metal table lamp (1800 mAh battery)',
      'Wheat-straw bottle with integrated phone stand',
      'MDF Ganesha with diya',
      'Sugar-free D’Lite cookies',
      'Ready-to-gift eco jute tote'
    ]
  },
  {
    code: 'Q258',
    setType: '5-in-1',
    category: 'drinkware',
    categoryLabel: 'Drinkware & Everyday Essentials',
    title: 'Grooved Glass Bottle & Mini Mug Set',
    description: 'Glass bottle, mini glass mug, LED diya set and cookies.',
    image: './images/celebration_q258.jpg',
    items: [
      'Grooved texture glass bottle with clear window',
      'Mini glass mug with textured grip sleeve',
      'LED diya set of 6 (water-sensor auto light up)',
      'Sugar-free D’Lite cookies',
      'Ready-to-gift eco jute tote'
    ]
  },
  {
    code: 'Q259',
    setType: '5-in-1',
    category: 'drinkware',
    categoryLabel: 'Drinkware & Everyday Essentials',
    title: 'Glass Bottle & Phone-Stand Jar Set',
    description: 'Glass bottle, glass jar with phone stand, LED diya set and cookies.',
    image: './images/celebration_q259.jpg',
    items: [
      'Classic design glass bottle with brown silicone strap',
      'Glass jar with integrated mobile stand lid',
      'LED diya set of 6 (water-sensor auto light up)',
      'Sugar-free D’Lite cookies',
      'Ready-to-gift eco jute tote'
    ]
  },
  {
    code: 'Q260',
    setType: '5-in-1',
    category: 'drinkware',
    categoryLabel: 'Drinkware & Everyday Essentials',
    title: 'Glass Sipper Mug & Bottle Duo Set',
    description: 'Glass sipper mug, glass bottle, LED diya set and cookies.',
    image: './images/celebration_q260.jpg',
    items: [
      'Glass sipper mug with protective outer plastic body',
      'Glass bottle with protective outer plastic body',
      'LED diya set of 6 (water-sensor auto light up)',
      'Sugar-free D’Lite cookies',
      'Ready-to-gift eco jute tote'
    ]
  },
  {
    code: 'Q261',
    setType: '6-in-1',
    category: 'tech',
    categoryLabel: 'Technology & Utility Gifts',
    title: 'Smart TV-Clock & Mini Glass Mug Set',
    description: 'Mini glass mug, glass bottle, smart clock and LED diya set.',
    image: './images/celebration_q261.jpg',
    items: [
      'Mini glass mug with textured grip sleeve',
      'Glass bottle with outer protective body',
      'TV-style smart clock with calendar, temperature & humidity',
      'LED diya set of 6 (water-sensor auto light up)',
      'Sugar-free D’Lite cookies',
      'Ready-to-gift eco jute tote'
    ]
  }
];

export const PREMIUM_GIFTS_DATA = [
  {
    code: 'Q262',
    setType: '7-in-1 Luxury Corporate Set',
    title: 'Bluetooth Speaker Clock & Lamp Executive Box',
    description: 'Curated for leadership teams, key clients and valued corporate relationships.',
    image: './images/premium_q262.jpg',
    features: [
      'Square display clock with integrated Bluetooth speaker',
      'Rechargeable modern LED lamp',
      'Glass bottle with bamboo cap & natural jute sleeve',
      'LED diya set of 6 (water-sensor auto activation)',
      'Festive potlis of premium almonds & cashews',
      'Sugar-free D’Lite cookies'
    ],
    packagingDetails: 'Housed in a premium magnetic rigid box with carry handle, custom corporate logo placement on the lid, and individual inner boxes for safe transit.'
  },
  {
    code: 'Q263',
    setType: '7-in-1 Luxury Corporate Set',
    title: 'Power Bank & Insulated Steel Bottle Executive Box',
    description: 'High-utility executive festive gift box engineered for modern professionals.',
    image: './images/premium_q263.jpg',
    features: [
      '10,000 mAh high-capacity fast power bank',
      'Rechargeable modern LED lamp',
      'Insulated stainless steel bottle with flip-top lid',
      'Festive potlis of premium almonds & cashews',
      'Sugar-free D’Lite cookies'
    ],
    packagingDetails: 'Housed in a premium magnetic rigid box with carry handle, custom corporate logo placement on the lid, and individual inner boxes for safe transit.'
  }
];

export const EVERYDAY_GIFTS_DATA = [
  {
    code: 'B211',
    name: 'SpinCal Desk Set',
    description: 'Perpetual calendar, rotating pen tumbler, integrated mobile stand.',
    image: './images/everyday_b211_spincal.jpg',
    highlight: 'Lifetime desk utility'
  },
  {
    code: 'H404',
    name: 'Omega Lunch Box',
    description: 'Three food-grade BPA-free containers, air-tight leak-proof lids, carry strap.',
    image: './images/everyday_h404_omega_lunchbox.jpg',
    highlight: 'BPA-free daily lunch set'
  },
  {
    code: 'H405',
    name: 'Omega Steel Lunch Box',
    description: 'Three food-grade steel containers, air-tight leak-proof lids, carry strap.',
    image: './images/everyday_h405_omega_steel_lunchbox.jpg',
    highlight: 'Stainless steel durability'
  },
  {
    code: 'H401',
    name: 'Signature Chai Cups',
    description: 'Set of 4 cutting chai mugs, 100% wheat-straw material, 100 ml each, four festive pastel colours.',
    image: './images/everyday_h401_chai_cups.jpg',
    highlight: 'Eco wheat-straw material'
  },
  {
    code: 'J156',
    name: 'Bamboo Keychain',
    description: 'Solid metal frame, double-sided natural bamboo plate, precision laser-engravable.',
    image: './images/everyday_j156_bamboo_keychain.jpg',
    highlight: 'Double-sided engraving'
  }
];

export const FAQS_DATA = [
  {
    question: 'What types of corporate Diwali gifts does BLACKFAWN offer?',
    answer: 'BLACKFAWN offers an extensive Diwali 2026 collection including Curated Diwali Hampers (01 to 07), Build Your Own Signature Boxes with custom packaging and keepsakes, Corporate Celebration Sets (Q251 to Q261) packed in jute totes, Premium 7-in-1 Executive Gift Boxes (Q262 & Q263) for leadership and key clients, as well as standalone Desk & Everyday corporate merchandise.'
  },
  {
    question: 'Can we customise gift packaging and greeting cards?',
    answer: 'Yes. Customisation is a core service at BLACKFAWN. Eligible hampers and celebration sets support custom-branded greeting cards with your corporate message, custom gift tag ribbons, and logo placement on outer rigid boxes and totes. Customisation requests should be shared during initial enquiry.'
  },
  {
    question: 'Can we add our company logo to selected gifts?',
    answer: 'Yes. We offer company logo placement across multiple gifting options, including outer magnetic gift boxes, jute tote bags, bamboo keychains (laser engraving), greeting cards, and selected drinkware or desk accessories, subject to feasibility and order specifications.'
  },
  {
    question: 'Do you accept bulk corporate gifting orders?',
    answer: 'Yes. BLACKFAWN specialises in corporate bulk-order gifting for startups, SMEs, multinational enterprises, HR celebrations, procurement teams, and event agencies. Bulk orders are coordinated directly with our corporate gifting team.'
  },
  {
    question: 'Can we choose different gift combinations?',
    answer: 'Yes. Through our "Build Your Own Signature Box" configurator and "Mix & Match" celebration sets programme, corporate clients can swap items or select bespoke packaging and keepsake pairings to suit their gifting requirements. Availability and final combinations are confirmed by our team during order review.'
  },
  {
    question: 'Do you deliver across India?',
    answer: 'Yes. We coordinate Pan-India delivery across major metro cities, business hubs, and regional centres, subject to serviceability and courier partner confirmation at the time of order booking.'
  },
  {
    question: 'How can we enquire about a particular hamper or product code?',
    answer: 'You can simply click the "Enquire" button on any product card (e.g., Hamper 01, Q251, Q262, B211). It will automatically pre-fill the product code in our enquiry form. You can also reach our corporate gifting desk directly at +91 92748 21162 or via email at info@blackfawn.in.'
  },
  {
    question: 'How are delivery timelines confirmed?',
    answer: 'Delivery timelines are shared and confirmed during the ordering process based on order volume, customisation requirements, packaging schedule, and recipient city locations.'
  },
  {
    question: 'Is there a minimum order quantity?',
    answer: 'Minimum order quantities (MOQ) apply across corporate gift collections and celebration sets. Specific MOQs depend on whether standard or customised branding is requested, and will be communicated in your proposal.'
  },
  {
    question: 'How do we receive a customised corporate gifting proposal?',
    answer: 'Complete our brief enquiry form with your contact details, company name, approximate quantity, and preferred collection. Our corporate gifting team will review your requirements and share a tailored proposal and consultation.'
  }
];
