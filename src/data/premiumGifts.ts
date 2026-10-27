export interface PremiumGift {
  code: string;
  setType: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  packagingDetails: string;
}

export const PREMIUM_GIFTS: PremiumGift[] = [
  {
    code: 'Q262',
    setType: '7-in-1 Luxury Corporate Set',
    title: 'Bluetooth Speaker Clock & Lamp Executive Box',
    description: 'Curated for leadership teams, key clients and valued corporate relationships.',
    image: '/images/premium_q262.jpg',
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
    image: '/images/premium_q263.jpg',
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
