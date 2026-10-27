export interface EverydayGift {
  code: string;
  name: string;
  description: string;
  image: string;
  highlight: string;
}

export const EVERYDAY_GIFTS: EverydayGift[] = [
  {
    code: 'B211',
    name: 'SpinCal Desk Set',
    description: 'Perpetual calendar, rotating pen tumbler, integrated mobile stand.',
    image: '/images/everyday_b211_spincal.jpg',
    highlight: 'Lifetime desk utility'
  },
  {
    code: 'H404',
    name: 'Omega Lunch Box',
    description: 'Three food-grade BPA-free containers, air-tight leak-proof lids, carry strap.',
    image: '/images/everyday_h404_omega_lunchbox.jpg',
    highlight: 'BPA-free daily lunch set'
  },
  {
    code: 'H405',
    name: 'Omega Steel Lunch Box',
    description: 'Three food-grade steel containers, air-tight leak-proof lids, carry strap.',
    image: '/images/everyday_h405_omega_steel_lunchbox.jpg',
    highlight: 'Stainless steel durability'
  },
  {
    code: 'H401',
    name: 'Signature Chai Cups',
    description: 'Set of 4 cutting chai mugs, 100% wheat-straw material, 100 ml each, four festive pastel colours.',
    image: '/images/everyday_h401_chai_cups.jpg',
    highlight: 'Eco wheat-straw material'
  },
  {
    code: 'J156',
    name: 'Bamboo Keychain',
    description: 'Solid metal frame, double-sided natural bamboo plate, precision laser-engravable.',
    image: '/images/everyday_j156_bamboo_keychain.jpg',
    highlight: 'Double-sided engraving'
  }
];
