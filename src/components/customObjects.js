import uniqid from 'uniqid';

const phones = {
  0: {
    id: uniqid(),
    title: 'iPhone 14 Pro Max',
    descrtiption: '',
    price: '1099.99',
    category: 'phones',
    brand: 'apple',
    image: './product_images/iPhone14ProMax.png'
  },

  1: {
    id: uniqid(),
    title: 'iPhone 13 Pro',
    descrtiption: '',
    price: '999.99',
    category: 'phones',
    brand: 'apple',
    image: './product_images/iPhone13Pro.jpeg'
  },

  2: {
    id: uniqid(),
    title: 'Samsung Galaxy S23 Ultra',
    descrtiption: '',
    price: '1199.99',
    category: 'phones',
    brand: 'samsung',
    image: './product_images/samsung_galaxy_s23_ultra.jpg'
  },

  3: {
    id: uniqid(),
    title: 'Samsung Galaxy S23+',
    descrtiption: '',
    price: '999.99',
    category: 'phones',
    brand: 'samsung',
    image: './product_images/galaxys23.webp'
  },

  4: {
    id: uniqid(),
    title: 'Goole Pixel 7 Pro',
    descrtiption: '',
    price: '699.99',
    category: 'phones',
    brand: 'google',
    image: './product_images/google_pixel_7_pro.jpg'
  },

  5: {
    id: uniqid(),
    title: 'Goole Pixel 7a',
    descrtiption: '',
    price: '499.99',
    category: 'phones',
    brand: 'google',
    image: './product_images/google_pixel_7a.jpg'
  },
}

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const tablets = {
  0: {
    id: uniqid(),
    title: 'iPad Pro',
    descrtiption: '',
    price: '799.99',
    category: 'tablets',
    brand: 'apple',
    image: './product_images/ipad_pro.png'
  },

  1: {
    id: uniqid(),
    title: 'iPad mini 6',
    descrtiption: '',
    price: '499.99',
    category: 'tablets',
    brand: 'apple',
    image: './product_images/ipad_mini.jpeg'
  },

  2: {
    id: uniqid(),
    title: 'Samsung Galaxy Tab S8',
    descrtiption: '',
    price: '1099.99',
    category: 'tablets',
    brand: 'samsung',
    image: './product_images/galaxy_tab_s8_ultra.webp'
  },

  3: {
    id: uniqid(),
    title: 'Galaxy Tab S8+',
    descrtiption: '',
    price: '799.99',
    category: 'tablets',
    brand: 'samsung',
    image: './product_images/galaxy_tab_s8+.jpg'
  },

  4: {
    id: uniqid(),
    title: 'Google Pixel Tablet',
    descrtiption: '',
    price: '499.99',
    category: 'tablets',
    brand: 'google',
    image: './product_images/google_pixel_tablet.webp'
  }
}

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const labtops = {
  0: {
    id: uniqid(),
    title: 'Macbook Pro',
    descrtiption: '',
    price: '1999.99',
    category: 'laptops',
    brand: 'apple',
    image: './product_images/macbook_pro.jpg'
  },

  1: {
    id: uniqid(),
    title: 'Macbook Air',
    descrtiption: '',
    price: '1299.99',
    category: 'laptops',
    brand: 'apple',
    image: './product_images/macbook_air.jpeg'
  },

  2: {
    id: uniqid(),
    title: 'Galaxy Book3 Ultra',
    descrtiption: '',
    price: '1999.99',
    category: 'laptops',
    brand: 'samsung',
    image: './product_images/galaxy_book3_ultra.webp'
  },

  3: {
    id: uniqid(),
    title: 'Galaxy Book3 Pro 360',
    descrtiption: '',
    price: '949.99',
    category: 'laptops',
    brand: 'samsung',
    image: './product_images/galaxy_book3_pro_360.jpg'
  },

  4: {
    id: uniqid(),
    title: 'Google Pixelbook Go',
    descrtiption: '',
    price: '649.99',
    category: 'laptops',
    brand: 'google',
    image: './product_images/google_pixelbook_go.jpg'
  }
}

// ///////////////////////////////////////////////////////////////////////////////////////////////////////

const accessories = {
  0: {
    id: uniqid(),
    title: 'AirPods Pro',
    descrtiption: '',
    price: '249.99',
    category: 'accessories',
    brand: 'apple',
    image: './product_images/airpods_pro.jpeg'
  },

  1: {
    id: uniqid(),
    title: 'Galaxy Buds',
    descrtiption: '',
    price: '109.99',
    category: 'accessories',
    brand: 'samsung',
    image: './product_images/galaxy_buds2.webp'
  },

  3: {
    id: uniqid(),
    title: 'Pixel Buds Pro',
    descrtiption: '',
    price: '159.99',
    category: 'accessories',
    brand: 'google',
    image: './product_images/pixel_buds_pro.png'
  },

  4: {
    id: uniqid(),
    title: 'Silicone Case With Magsafe',
    descrtiption: '',
    price: '49.99',
    category: 'accessories',
    brand: 'apple',
    image: './product_images/iphone14_silicone_Case.jpeg'
  },

  5: {
    id: uniqid(),
    title: '10000 mAh Battery Pack',
    descrtiption: '',
    price: '37.99',
    category: 'accessories',
    brand: 'samsung',
    image: './product_images/battery_pack.webp'
  },

  6: {
    id: uniqid(),
    title: 'Tab S8 Ultra Protective Standing Cover',
    descrtiption: '',
    price: '99.99',
    category: 'accessories',
    brand: 'samsung',
    image: './product_images/tab_s8_cover.avif'
  }
}

const customObjects = [
  ...Object.values(phones),
  ...Object.values(tablets),
  ...Object.values(labtops),
  ...Object.values(accessories)
];

export default customObjects;