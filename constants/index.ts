  interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  bgColor: string;
  highlight?: boolean;
}
  
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