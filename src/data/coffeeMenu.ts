import espressoImg from '@/assets/coffee-espresso.jpg';
import cappuccinoImg from '@/assets/coffee-cappuccino.jpg';
import icedImg from '@/assets/coffee-iced.jpg';
import mochaImg from '@/assets/coffee-mocha.jpg';
import pouroverImg from '@/assets/coffee-pourover.jpg';
import flatwhiteImg from '@/assets/coffee-flatwhite.jpg';

export interface CoffeeItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export const coffeeMenu: CoffeeItem[] = [
  {
    id: 'espresso',
    name: 'Classic Espresso',
    description: 'Rich and bold single-origin espresso with a perfect crema',
    price: 3.50,
    image: espressoImg,
    category: 'Hot',
  },
  {
    id: 'cappuccino',
    name: 'Velvet Cappuccino',
    description: 'Creamy steamed milk with silky microfoam and heart latte art',
    price: 4.50,
    image: cappuccinoImg,
    category: 'Hot',
  },
  {
    id: 'iced-latte',
    name: 'Iced Caramel Latte',
    description: 'Refreshing cold brew with swirled milk and caramel drizzle',
    price: 5.00,
    image: icedImg,
    category: 'Cold',
  },
  {
    id: 'mocha',
    name: 'Belgian Mocha',
    description: 'Premium chocolate blended with espresso and whipped cream',
    price: 5.50,
    image: mochaImg,
    category: 'Hot',
  },
  {
    id: 'pour-over',
    name: 'Artisan Pour Over',
    description: 'Hand-crafted single-origin coffee with delicate flavor notes',
    price: 4.00,
    image: pouroverImg,
    category: 'Hot',
  },
  {
    id: 'flat-white',
    name: 'Silky Flat White',
    description: 'Australian-style double ristretto with velvety microfoam',
    price: 4.50,
    image: flatwhiteImg,
    category: 'Hot',
  },
];
