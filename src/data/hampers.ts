export interface Hamper {
  id: string;
  code: string;
  name: string;
  subtitle: string;
  packaging: string;
  image: string;
  tag: string;
  customisable: boolean;
  contents: string[];
}

export const HAMPERS: Hamper[] = [
  {
    id: 'hamper-01',
    code: '01',
    name: 'Festive Tray',
    subtitle: 'Printed window tray with gold ribbon',
    packaging: 'Printed window tray, gold ribbon tag',
    image: '/images/hamper_01_festive_tray.jpg',
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
    image: '/images/hamper_02_gold_chevron.jpg',
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
    image: '/images/hamper_03_royal_red.jpg',
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
    image: '/images/hamper_04_crystal_box.jpg',
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
    image: '/images/hamper_05_scarlet_keepsake.jpg',
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
    image: '/images/hamper_06_jewel_tones.jpg',
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
    image: '/images/hamper_07_wooden_crate.jpg',
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
