export interface CelebrationSet {
  code: string;
  setType: string;
  category: 'drinkware' | 'desk' | 'festive' | 'tech';
  categoryLabel: string;
  title: string;
  description: string;
  image: string;
  items: string[];
}

export const CELEBRATION_SETS: CelebrationSet[] = [
  {
    code: 'Q251',
    setType: '5-in-1',
    category: 'drinkware',
    categoryLabel: 'Drinkware & Everyday Essentials',
    title: 'Eco Mug & Borosilicate Bottle Set',
    description: 'Eco mug with flip-top lid, borosilicate bottle with bamboo cap, LED diya set and cookies.',
    image: '/images/celebration_q251.jpg',
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
    image: '/images/celebration_q252.jpg',
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
    image: '/images/celebration_q253.jpg',
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
    image: '/images/celebration_q254.jpg',
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
    image: '/images/celebration_q255.jpg',
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
    image: '/images/celebration_q256.jpg',
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
    image: '/images/celebration_q257.jpg',
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
    image: '/images/celebration_q258.jpg',
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
    image: '/images/celebration_q259.jpg',
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
    image: '/images/celebration_q260.jpg',
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
    image: '/images/celebration_q261.jpg',
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
