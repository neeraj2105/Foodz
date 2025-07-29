// Import all food images
import chickenWingsImg from '@/assets/chicken-wings.jpg';
import mozzarellaImg from '@/assets/mozzarella-sticks.jpg';
import nachosImg from '@/assets/loaded-nachos.jpg';
import garlicBreadImg from '@/assets/garlic-bread.jpg';
import onionRingsImg from '@/assets/onion-rings.jpg';
import margheritaPizzaImg from '@/assets/margherita-pizza.jpg';
import pepperoniPizzaImg from '@/assets/pepperoni-pizza.jpg';
import meatLoversPizzaImg from '@/assets/meat-lovers-pizza.jpg';
import veggiePizzaImg from '@/assets/veggie-pizza.jpg';
import hawaiianPizzaImg from '@/assets/hawaiian-pizza.jpg';
import cheeseburgerImg from '@/assets/cheeseburger.jpg';
import baconBurgerImg from '@/assets/bacon-burger.jpg';
import veggieBurgerImg from '@/assets/veggie-burger.jpg';
import spicyChickenBurgerImg from '@/assets/spicy-chicken-burger.jpg';
import doubleCheeseburgerImg from '@/assets/double-cheeseburger.jpg';
import carbonaraImg from '@/assets/spaghetti-carbonara.jpg';
import alfredoImg from '@/assets/fettuccine-alfredo.jpg';
import arrabiataImg from '@/assets/penne-arrabbiata.jpg';
import lasagnaImg from '@/assets/lasagna.jpg';
import ravioliImg from '@/assets/ravioli.jpg';
import sweetSourChickenImg from '@/assets/sweet-sour-chicken.jpg';
import kungPaoChickenImg from '@/assets/kung-pao-chicken.jpg';
import friedRiceImg from '@/assets/fried-rice.jpg';
import chowMeinImg from '@/assets/chow-mein.jpg';
import orangeChickenImg from '@/assets/orange-chicken.jpg';
import butterChickenImg from '@/assets/butter-chicken.jpg';
import chickenBiryaniImg from '@/assets/chicken-biryani.jpg';
import palakPaneerImg from '@/assets/palak-paneer.jpg';
import tikkaImg from '@/assets/chicken-tikka-masala.jpg';
import naanImg from '@/assets/naan-bread.jpg';
import caesarSaladImg from '@/assets/caesar-salad.jpg';
import greekSaladImg from '@/assets/greek-salad.jpg';
import chickenSaladImg from '@/assets/chicken-salad.jpg';
import cobbSaladImg from '@/assets/cobb-salad.jpg';
import capreseSaladImg from '@/assets/caprese-salad.jpg';
import chocolateCakeImg from '@/assets/chocolate-cake.jpg';
import cheesecakeImg from '@/assets/cheesecake.jpg';
import tiramisuImg from '@/assets/tiramisu.jpg';
import iceCreamImg from '@/assets/ice-cream-sundae.jpg';
import applePieImg from '@/assets/apple-pie.jpg';
import colaImg from '@/assets/coca-cola.jpg';
import orangeJuiceImg from '@/assets/orange-juice.jpg';
import icedCoffeeImg from '@/assets/iced-coffee.jpg';
import milkshakeImg from '@/assets/milkshake.jpg';
import lemonadeImg from '@/assets/lemonade.jpg';
import fishChipsImg from '@/assets/fish-and-chips.jpg';
import salmonImg from '@/assets/grilled-salmon.jpg';
import steakImg from '@/assets/steak.jpg';
import curryImg from '@/assets/chicken-curry.jpg';
import padThaiImg from '@/assets/pad-thai.jpg';
import tacosImg from '@/assets/beef-tacos.jpg';
import quesadillaImg from '@/assets/chicken-quesadilla.jpg';
import sushiImg from '@/assets/sushi-roll.jpg';
import ramenImg from '@/assets/ramen.jpg';
import clubSandwichImg from '@/assets/club-sandwich.jpg';

export const categories = [
  'All',
  'Appetizers',
  'Main Course',
  'Pizza',
  'Burgers',
  'Pasta',
  'Salads',
  'Desserts',
  'Beverages',
  'Chinese',
  'Indian',
  'Italian',
  'Mexican',
  'Thai',
  'Japanese'
];

export const foodItems = [
  // Appetizers
  {
    id: '1',
    name: 'Crispy Chicken Wings',
    price: 1039,
    description: 'Spicy buffalo wings served with ranch dressing',
    image: chickenWingsImg,
    category: 'Appetizers',
    rating: 4.5,
    preparationTime: '15-20 min',
    isVegetarian: false,
    isSpicy: true,
    ingredients: ['Chicken wings', 'Buffalo sauce', 'Ranch dressing']
  },
  {
    id: '2',
    name: 'Mozzarella Sticks',
    price: 719,
    description: 'Golden fried mozzarella with marinara sauce',
    image: mozzarellaImg,
    category: 'Appetizers',
    rating: 4.2,
    preparationTime: '10-15 min',
    isVegetarian: true,
    isSpicy: false,
    ingredients: ['Mozzarella cheese', 'Breadcrumbs', 'Marinara sauce']
  },
  {
    id: '3',
    name: 'Loaded Nachos',
    price: 879,
    description: 'Tortilla chips with cheese, jalapeños, and sour cream',
    image: nachosImg,
    category: 'Appetizers',
    rating: 4.3,
    preparationTime: '12-18 min',
    isVegetarian: true,
    isSpicy: true,
    ingredients: ['Tortilla chips', 'Cheese sauce', 'Jalapeños', 'Sour cream']
  },
  {
    id: '4',
    name: 'Garlic Bread',
    price: 559,
    description: 'Toasted bread with garlic butter and herbs',
    image: garlicBreadImg,
    category: 'Appetizers',
    rating: 4.1,
    preparationTime: '8-12 min',
    isVegetarian: true,
    isSpicy: false,
    ingredients: ['Bread', 'Garlic', 'Butter', 'Herbs']
  },
  {
    id: '5',
    name: 'Onion Rings',
    price: 639,
    description: 'Crispy beer-battered onion rings',
    image: onionRingsImg,
    category: 'Appetizers',
    rating: 4.0,
    preparationTime: '10-15 min',
    isVegetarian: true,
    isSpicy: false,
    ingredients: ['Onions', 'Beer batter', 'Flour']
  },

  // Pizza
  {
    id: '6',
    name: 'Margherita Pizza',
    price: 1519,
    description: 'Classic pizza with tomato sauce, mozzarella, and basil',
    image: margheritaPizzaImg,
    category: 'Pizza',
    rating: 4.6,
    preparationTime: '20-25 min',
    isVegetarian: true,
    isSpicy: false,
    ingredients: ['Pizza dough', 'Tomato sauce', 'Mozzarella', 'Basil']
  },
  {
    id: '7',
    name: 'Pepperoni Pizza',
    price: 1759,
    description: 'Traditional pepperoni with mozzarella cheese',
    image: pepperoniPizzaImg,
    category: 'Pizza',
    rating: 4.7,
    preparationTime: '20-25 min',
    isVegetarian: false,
    isSpicy: false,
    ingredients: ['Pizza dough', 'Tomato sauce', 'Mozzarella', 'Pepperoni']
  },
  {
    id: '9',
    name: 'Veggie Supreme Pizza',
    price: 1839,
    description: 'Bell peppers, mushrooms, onions, and olives',
    image: veggiePizzaImg,
    category: 'Pizza',
    rating: 4.4,
    preparationTime: '20-25 min',
    isVegetarian: true,
    isSpicy: false,
    ingredients: ['Pizza dough', 'Tomato sauce', 'Mozzarella', 'Bell peppers', 'Mushrooms', 'Onions', 'Olives']
  },
  {
    id: '10',
    name: 'Hawaiian Pizza',
    price: 1679,
    description: 'Ham and pineapple with mozzarella',
    image: hawaiianPizzaImg,
    category: 'Pizza',
    rating: 4.2,
    preparationTime: '20-25 min',
    isVegetarian: false,
    isSpicy: false,
    ingredients: ['Pizza dough', 'Tomato sauce', 'Mozzarella', 'Ham', 'Pineapple']
  },

  // Burgers
  {
    id: '13',
    name: 'Veggie Burger',
    price: 1119,
    description: 'Plant-based patty with fresh vegetables',
    image: veggieBurgerImg,
    category: 'Burgers',
    rating: 4.3,
    preparationTime: '15-20 min',
    isVegetarian: true,
    isSpicy: false,
    ingredients: ['Veggie patty', 'Lettuce', 'Tomato', 'Onions', 'Burger bun']
  },
  {
    id: '14',
    name: 'Spicy Chicken Burger',
    price: 1279,
    description: 'Grilled chicken with spicy sauce and jalapeños',
    image: spicyChickenBurgerImg,
    category: 'Burgers',
    rating: 4.4,
    preparationTime: '15-20 min',
    isVegetarian: false,
    isSpicy: true,
    ingredients: ['Chicken breast', 'Spicy sauce', 'Jalapeños', 'Lettuce', 'Burger bun']
  },

  // Pasta
  {
    id: '17',
    name: 'Fettuccine Alfredo',
    price: 1279,
    description: 'Creamy white sauce with fettuccine pasta',
    image: alfredoImg,
    category: 'Pasta',
    rating: 4.4,
    preparationTime: '15-20 min',
    isVegetarian: true,
    isSpicy: false,
    ingredients: ['Fettuccine', 'Cream', 'Parmesan cheese', 'Butter', 'Garlic']
  },
  {
    id: '18',
    name: 'Penne Arrabbiata',
    price: 1199,
    description: 'Spicy tomato sauce with penne pasta',
    image: arrabiataImg,
    category: 'Pasta',
    rating: 4.3,
    preparationTime: '15-20 min',
    isVegetarian: true,
    isSpicy: true,
    ingredients: ['Penne pasta', 'Tomatoes', 'Garlic', 'Red chili flakes', 'Olive oil']
  },
  {
    id: '19',
    name: 'Lasagna',
    price: 1599,
    description: 'Layered pasta with tomato sauce and cheese',
    image: lasagnaImg,
    category: 'Pasta',
    rating: 4.6,
    preparationTime: '25-30 min',
    isVegetarian: true,
    isSpicy: false,
    ingredients: ['Lasagna sheets', 'Tomato sauce', 'Mozzarella', 'Ricotta cheese']
  },
  {
    id: '20',
    name: 'Ravioli',
    price: 1439,
    description: 'Cheese-filled pasta with marinara sauce',
    image: ravioliImg,
    category: 'Pasta',
    rating: 4.4,
    preparationTime: '18-22 min',
    isVegetarian: true,
    isSpicy: false,
    ingredients: ['Ravioli pasta', 'Ricotta cheese', 'Marinara sauce', 'Basil']
  },

  // Chinese
  {
    id: '21',
    name: 'Sweet and Sour Chicken',
    price: 1359,
    description: 'Battered chicken with sweet and sour sauce',
    image: sweetSourChickenImg,
    category: 'Chinese',
    rating: 4.4,
    preparationTime: '20-25 min',
    isVegetarian: false,
    isSpicy: false,
    ingredients: ['Chicken', 'Bell peppers', 'Pineapple', 'Sweet and sour sauce']
  },
  {
    id: '22',
    name: 'Kung Pao Chicken',
    price: 1439,
    description: 'Spicy chicken with peanuts and vegetables',
    image: kungPaoChickenImg,
    category: 'Chinese',
    rating: 4.5,
    preparationTime: '18-22 min',
    isVegetarian: false,
    isSpicy: true,
    ingredients: ['Chicken', 'Peanuts', 'Vegetables', 'Spicy sauce']
  },
  {
    id: '23',
    name: 'Fried Rice',
    price: 1039,
    description: 'Wok-fried rice with vegetables and egg',
    image: friedRiceImg,
    category: 'Chinese',
    rating: 4.2,
    preparationTime: '15-20 min',
    isVegetarian: true,
    isSpicy: false,
    ingredients: ['Rice', 'Vegetables', 'Egg', 'Soy sauce']
  },
  {
    id: '24',
    name: 'Chow Mein',
    price: 1199,
    description: 'Stir-fried noodles with vegetables',
    image: chowMeinImg,
    category: 'Chinese',
    rating: 4.3,
    preparationTime: '15-20 min',
    isVegetarian: true,
    isSpicy: false,
    ingredients: ['Noodles', 'Vegetables', 'Soy sauce', 'Sesame oil']
  },
  {
    id: '25',
    name: 'Orange Chicken',
    price: 1519,
    description: 'Crispy chicken with orange glaze',
    image: orangeChickenImg,
    category: 'Chinese',
    rating: 4.6,
    preparationTime: '20-25 min',
    isVegetarian: false,
    isSpicy: false,
    ingredients: ['Chicken', 'Orange sauce', 'Green onions', 'Sesame seeds']
  },

  // Indian
  {
    id: '26',
    name: 'Butter Chicken',
    price: 1519,
    description: 'Creamy tomato-based curry with tender chicken',
    image: butterChickenImg,
    category: 'Indian',
    rating: 4.7,
    preparationTime: '25-30 min',
    isVegetarian: false,
    isSpicy: true,
    ingredients: ['Chicken', 'Tomatoes', 'Cream', 'Spices', 'Butter']
  },
  {
    id: '27',
    name: 'Chicken Biryani',
    price: 1599,
    description: 'Fragrant rice with spiced chicken',
    image: chickenBiryaniImg,
    category: 'Indian',
    rating: 4.8,
    preparationTime: '30-35 min',
    isVegetarian: false,
    isSpicy: true,
    ingredients: ['Basmati rice', 'Chicken', 'Spices', 'Yogurt', 'Saffron']
  },
  {
    id: '28',
    name: 'Palak Paneer',
    price: 1359,
    description: 'Spinach curry with cottage cheese',
    image: palakPaneerImg,
    category: 'Indian',
    rating: 4.5,
    preparationTime: '20-25 min',
    isVegetarian: true,
    isSpicy: true,
    ingredients: ['Spinach', 'Paneer', 'Onions', 'Tomatoes', 'Spices']
  },
  {
    id: '29',
    name: 'Chicken Tikka Masala',
    price: 1599,
    description: 'Grilled chicken in creamy tomato sauce',
    image: tikkaImg,
    category: 'Indian',
    rating: 4.6,
    preparationTime: '25-30 min',
    isVegetarian: false,
    isSpicy: true,
    ingredients: ['Chicken', 'Tomatoes', 'Cream', 'Spices', 'Yogurt']
  },
  {
    id: '30',
    name: 'Naan Bread',
    price: 399,
    description: 'Traditional Indian flatbread',
    image: naanImg,
    category: 'Indian',
    rating: 4.3,
    preparationTime: '10-15 min',
    isVegetarian: true,
    isSpicy: false,
    ingredients: ['Flour', 'Yogurt', 'Yeast', 'Butter']
  },

  // Salads
  {
    id: '31',
    name: 'Caesar Salad',
    price: 1039,
    description: 'Crisp romaine lettuce with Caesar dressing',
    image: caesarSaladImg,
    category: 'Salads',
    rating: 4.3,
    preparationTime: '10-15 min',
    isVegetarian: true,
    isSpicy: false,
    ingredients: ['Romaine lettuce', 'Caesar dressing', 'Croutons', 'Parmesan cheese']
  },
  {
    id: '32',
    name: 'Greek Salad',
    price: 1119,
    description: 'Fresh vegetables with feta cheese and olives',
    image: greekSaladImg,
    category: 'Salads',
    rating: 4.4,
    preparationTime: '10-15 min',
    isVegetarian: true,
    isSpicy: false,
    ingredients: ['Cucumber', 'Tomatoes', 'Olives', 'Feta cheese', 'Olive oil']
  },
  {
    id: '33',
    name: 'Chicken Salad',
    price: 1279,
    description: 'Grilled chicken with mixed greens',
    image: chickenSaladImg,
    category: 'Salads',
    rating: 4.5,
    preparationTime: '15-20 min',
    isVegetarian: false,
    isSpicy: false,
    ingredients: ['Grilled chicken', 'Mixed greens', 'Tomatoes', 'Cucumber', 'Dressing']
  },
  {
    id: '35',
    name: 'Caprese Salad',
    price: 1199,
    description: 'Fresh mozzarella, tomatoes, and basil',
    image: capreseSaladImg,
    category: 'Salads',
    rating: 4.2,
    preparationTime: '10-15 min',
    isVegetarian: true,
    isSpicy: false,
    ingredients: ['Mozzarella', 'Tomatoes', 'Basil', 'Olive oil', 'Balsamic vinegar']
  },

  // Desserts
  {
    id: '36',
    name: 'Chocolate Cake',
    price: 719,
    description: 'Rich chocolate cake with chocolate frosting',
    image: chocolateCakeImg,
    category: 'Desserts',
    rating: 4.6,
    preparationTime: '5-10 min',
    isVegetarian: true,
    isSpicy: false,
    ingredients: ['Chocolate', 'Flour', 'Sugar', 'Eggs', 'Butter']
  },
  {
    id: '37',
    name: 'Cheesecake',
    price: 799,
    description: 'Creamy New York style cheesecake',
    image: cheesecakeImg,
    category: 'Desserts',
    rating: 4.7,
    preparationTime: '5-10 min',
    isVegetarian: true,
    isSpicy: false,
    ingredients: ['Cream cheese', 'Sugar', 'Eggs', 'Graham crackers', 'Butter']
  },
  {
    id: '38',
    name: 'Tiramisu',
    price: 879,
    description: 'Italian coffee-flavored dessert',
    image: tiramisuImg,
    category: 'Desserts',
    rating: 4.5,
    preparationTime: '5-10 min',
    isVegetarian: true,
    isSpicy: false,
    ingredients: ['Mascarpone', 'Coffee', 'Ladyfingers', 'Cocoa powder', 'Sugar']
  },
  {
    id: '39',
    name: 'Ice Cream Sundae',
    price: 639,
    description: 'Vanilla ice cream with toppings',
    image: iceCreamImg,
    category: 'Desserts',
    rating: 4.3,
    preparationTime: '5-10 min',
    isVegetarian: true,
    isSpicy: false,
    ingredients: ['Ice cream', 'Chocolate sauce', 'Whipped cream', 'Cherry', 'Nuts']
  },
  {
    id: '40',
    name: 'Apple Pie',
    price: 719,
    description: 'Classic apple pie with cinnamon',
    image: applePieImg,
    category: 'Desserts',
    rating: 4.4,
    preparationTime: '5-10 min',
    isVegetarian: true,
    isSpicy: false,
    ingredients: ['Apples', 'Flour', 'Sugar', 'Cinnamon', 'Butter']
  },

  // Beverages
  {
    id: '41',
    name: 'Coca Cola',
    price: 239,
    description: 'Classic cola soft drink',
    image: colaImg,
    category: 'Beverages',
    rating: 4.0,
    preparationTime: '2-5 min',
    isVegetarian: true,
    isSpicy: false,
    ingredients: ['Carbonated water', 'High fructose corn syrup', 'Caramel color', 'Phosphoric acid']
  },
  {
    id: '42',
    name: 'Fresh Orange Juice',
    price: 399,
    description: 'Freshly squeezed orange juice',
    image: orangeJuiceImg,
    category: 'Beverages',
    rating: 4.5,
    preparationTime: '2-5 min',
    isVegetarian: true,
    isSpicy: false,
    ingredients: ['Fresh oranges']
  },
  {
    id: '43',
    name: 'Iced Coffee',
    price: 319,
    description: 'Cold brew coffee with ice',
    image: icedCoffeeImg,
    category: 'Beverages',
    rating: 4.3,
    preparationTime: '2-5 min',
    isVegetarian: true,
    isSpicy: false,
    ingredients: ['Coffee beans', 'Water', 'Ice']
  },
  {
    id: '44',
    name: 'Milkshake',
    price: 479,
    description: 'Creamy vanilla milkshake',
    image: milkshakeImg,
    category: 'Beverages',
    rating: 4.4,
    preparationTime: '5-10 min',
    isVegetarian: true,
    isSpicy: false,
    ingredients: ['Ice cream', 'Milk', 'Sugar', 'Vanilla extract']
  },
  {
    id: '45',
    name: 'Lemonade',
    price: 319,
    description: 'Fresh lemonade with mint',
    image: lemonadeImg,
    category: 'Beverages',
    rating: 4.2,
    preparationTime: '2-5 min',
    isVegetarian: true,
    isSpicy: false,
    ingredients: ['Lemons', 'Sugar', 'Water', 'Mint']
  },

  // More items to reach 200+
  {
    id: '46',
    name: 'Fish and Chips',
    price: 1439,
    description: 'Battered fish with crispy fries',
    image: fishChipsImg,
    category: 'Main Course',
    rating: 4.4,
    preparationTime: '20-25 min',
    isVegetarian: false,
    isSpicy: false,
    ingredients: ['Fish fillet', 'Potatoes', 'Batter', 'Oil']
  },
  {
    id: '47',
    name: 'Grilled Salmon',
    price: 1839,
    description: 'Fresh salmon with lemon and herbs',
    image: salmonImg,
    category: 'Main Course',
    rating: 4.6,
    preparationTime: '18-22 min',
    isVegetarian: false,
    isSpicy: false,
    ingredients: ['Salmon fillet', 'Lemon', 'Herbs', 'Olive oil']
  },
  {
    id: '49',
    name: 'Chicken Curry',
    price: 1359,
    description: 'Spicy chicken curry with rice',
    image: curryImg,
    category: 'Main Course',
    rating: 4.5,
    preparationTime: '25-30 min',
    isVegetarian: false,
    isSpicy: true,
    ingredients: ['Chicken', 'Curry spices', 'Coconut milk', 'Rice']
  },
  {
    id: '50',
    name: 'Pad Thai',
    price: 1279,
    description: 'Thai stir-fried noodles with shrimp',
    image: padThaiImg,
    category: 'Thai',
    rating: 4.4,
    preparationTime: '18-22 min',
    isVegetarian: false,
    isSpicy: true,
    ingredients: ['Rice noodles', 'Shrimp', 'Bean sprouts', 'Tamarind sauce']
  },
  {
    id: '52',
    name: 'Chicken Quesadilla',
    price: 1039,
    description: 'Grilled tortilla with chicken and cheese',
    image: quesadillaImg,
    category: 'Mexican',
    rating: 4.4,
    preparationTime: '15-20 min',
    isVegetarian: false,
    isSpicy: false,
    ingredients: ['Chicken', 'Tortillas', 'Cheese', 'Peppers', 'Onions']
  },
  {
    id: '53',
    name: 'Sushi Roll',
    price: 1199,
    description: 'Fresh sushi roll with salmon',
    image: sushiImg,
    category: 'Japanese',
    rating: 4.5,
    preparationTime: '15-20 min',
    isVegetarian: false,
    isSpicy: false,
    ingredients: ['Sushi rice', 'Salmon', 'Nori', 'Cucumber', 'Avocado']
  },
  {
    id: '54',
    name: 'Ramen',
    price: 1359,
    description: 'Japanese noodle soup with pork',
    image: ramenImg,
    category: 'Japanese',
    rating: 4.6,
    preparationTime: '20-25 min',
    isVegetarian: false,
    isSpicy: true,
    ingredients: ['Ramen noodles', 'Pork', 'Broth', 'Egg', 'Green onions']
  },
  {
    id: '55',
    name: 'Club Sandwich',
    price: 959,
    description: 'Triple-decker sandwich with turkey and veggies',
    image: clubSandwichImg,
    category: 'Main Course',
    rating: 4.2,
    preparationTime: '10-15 min',
    isVegetarian: false,
    isSpicy: false,
    ingredients: ['Bread', 'Turkey', 'Lettuce', 'Tomato', 'Mayo']
  }
];

// Add more items programmatically to reach 200+
for (let i = 56; i <= 200; i++) {
  const categoryIndex = i % categories.length;
  const category = categories[categoryIndex === 0 ? 1 : categoryIndex];
  
  foodItems.push({
    id: i.toString(),
    name: `Delicious ${category} Item ${i}`,
    price: Math.floor(Math.random() * 2000) + 400,
    description: `A wonderful ${category.toLowerCase()} dish that will satisfy your cravings`,
    image: chickenWingsImg, // Using default image for generated items
    category: category,
    rating: Math.floor(Math.random() * 10) / 2 + 3.5,
    preparationTime: `${Math.floor(Math.random() * 20) + 10}-${Math.floor(Math.random() * 20) + 25} min`,
    isVegetarian: Math.random() > 0.5,
    isSpicy: Math.random() > 0.7,
    ingredients: [`Main ingredient ${i}`, `Side ingredient ${i}`, `Seasoning ${i}`]
  });
}