interface Product {
  id: number;
  name: string;
  description: string;
  kategori: string,
  image: string;
}

export const navLinks = [
  {
    href: "#home",
    name: 'Home'
  },
  {
    href: '#view',
    name: 'View'
  },
  {
    href: '#products',
    name: 'Products'
  },
  {
    href: '#maps',
    name: 'maps'
  },
  

]

export const menuImages = [
  "https://jade-magic-marten-265.mypinata.cloud/ipfs/bafkreihqz3obdlehxtbzfdm3jbxyjaw5vhc33gt7wj2ff7dflp4waaai4q",
  "https://jade-magic-marten-265.mypinata.cloud/ipfs/bafkreidm3h3xulhemjavogurz4n2sljzd4vlcxjkjckq733hzav372z3fu",
  "https://jade-magic-marten-265.mypinata.cloud/ipfs/bafkreidrlddfegcf5mjveyqtxti63622rafujrhiil2lbcbi2x6jtzueoe",
  "https://jade-magic-marten-265.mypinata.cloud/ipfs/bafkreiaspnyfqup7lxkvciannoydn3h4vyol5ynvkidxdqfxmyysbjn4sa",
  "https://jade-magic-marten-265.mypinata.cloud/ipfs/bafkreig7flkhfl4jtkoknwrlbdic2zintjkcu52n2x3qmd2yoef53smyqu"
]

export const products: Product[] = [
  {
    id: 1,
    name: 'Chicken Cordon Bleu',
    description: 'Ayam krispi, isian lembut, dengan saus jamur gurih dan salad.',
    kategori: 'Food',
    image: 'menu1.jpg'
  },
  {
    id: 2,
    name: 'Strawberry Mojito',
    description: 'Paduan soda, stroberi segar, dan mint yang dingin menyegarkan',
    kategori: 'Drink',
    image: 'menu2.jpg'

  },
  {
    id: 3,
    name: 'Lime Mojito',
    description: 'Kombinasi klasik jeruk nipis dan daun mint dengan sensasi sparkling.',
    kategori: 'Drink',
    image: 'menu3.jpg'
  },
  {
    id: 4,
    name: 'Caesar Salad',
    description: 'Sayuran segar, dressing gurih, dan garlic bread renyah sebagai pelengkap.',
    kategori: 'Food',
    image: 'menu4.jpg'
  },
  {
    id: 5,
    name: 'Chicken Toast Sandwich',
    description: 'Sandwich ayam lezat dengan pelengkap kentang goreng renyah dan saus cocol.',
    kategori: 'Food',
    image: 'menu5.jpg'
  },
  {
    id: 6,
    name: 'Tropical Sunset',
    description: 'Gradasi rasa tropis yang manis dan segar dalam satu gelas.',
    kategori: 'Drink',
    image: 'menu6.jpg'
  },
  {
    id: 7,
    name: 'Iga Bakar Signature',
    description: 'Iga bakar empuk dengan nasi putih, kuah kaldu segar, dan sambal pedas.',
    kategori: 'Food',
    image: 'menu7.jpg'
  },
  {
    id: 8,
    name: 'Bitter Ballen',
    description: 'Bola-bola renyah isi daging lembut dan keju dengan siraman saus spesial.',
    kategori: 'Snack',
    image: 'menu8.jpg'
  },
  {
    id: 9,
    name: 'Crispy Spring Rolls',
    description: 'Lumpia renyah isi sayuran segar dengan cocolan saus sambal manis pedas.',
    kategori: 'Snack',
    image: 'menu9.jpg'
  },
  {
    id: 10,
    name: 'Iced Cafe Latte',
    description: 'Perpaduan espresso intens dan susu lembut yang dingin serta creamy.',
    kategori: 'Drink',
    image: 'menu10.jpg'
  },
];


export const instagramPlaceholder = [
    { id: 1, type: 'video', url: 'https://www.instagram.com/p/DG210JpzHEC/', img: 'ig1.jpg' },
    { id: 2, type: 'img', url: 'https://www.instagram.com/p/C47YwasybO6/', img: 'ig2.jpg' },
    { id: 3, type: 'carousel', url: 'https://www.instagram.com/p/C5dnrZ3yDSE/', img: 'ig3.jpg' },
    { id: 4, type: 'img', url: 'https://www.instagram.com/p/DR1R1TJE8ne/', img: 'ig4.jpg' },
    { id: 5, type: 'img' , url: 'https://www.instagram.com/p/DTbkK6mEmX5/', img: 'ig5.jpg'},
    { id: 6, type: 'video', url: 'https://www.instagram.com/p/DOS2eGlkzxn/', img: 'ig6.jpg' },
    { id: 7, type: 'video', url: 'https://www.instagram.com/p/C2_4Z0UPj57/', img: 'ig7.jpg'},
    { id: 8, type: 'img', url: 'https://www.instagram.com/p/C1jpRjWP-vF/', img: 'ig8.jpg'}
  ];

