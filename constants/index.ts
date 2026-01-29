  interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  bgColor: string;
  highlight?: boolean;
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
  }

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
      name: 'Metallic Coffee',
      description: 'With a similar flavor to black coffee, the americano',
      price: 45000,
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop',
      bgColor: 'bg-[#F5EDE4]'
    },
    {
      id: 2,
      name: 'Americano Coffee',
      description: 'Rich and bold with smooth finish',
      price: 35000,
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop',
      bgColor: 'bg-[#1a1a1a]',

    },
    {
      id: 3,
      name: 'Coffee Bag',
      description: 'With a similar flavor to black coffee, the americano',
      price: 38000,
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop',
      bgColor: 'bg-[#F5EDE4]'
    },
    {
      id: 4,
      name: 'Foil Food Packet',
      description: 'With a similar flavor to black coffee, the americano',
      price: 42000,
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop',
      bgColor: 'bg-[#F5EDE4]'
    },
    {
      id: 5,
      name: 'Foil Food Packet',
      description: 'With a similar flavor to black coffee, the americano',
      price: 42000,
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop',
      bgColor: 'bg-[#F5EDE4]'
    }
  ];


  