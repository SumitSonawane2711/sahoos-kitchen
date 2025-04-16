export const categories = [
  {
    id: 'all',
    name: 'All Dishes',
    description: 'Explore our complete menu selection',
    icon: 'utensils'
  },
  {
    id: 'starters',
    name: 'Starters',
    description: 'Begin your culinary journey',
    icon: 'soup'
  },
  {
    id: 'main-course',
    name: 'Main Course',
    description: 'Signature dishes crafted with passion',
    icon: 'chef-hat'
  },
  {
    id: 'non-veg',
    name: 'non-veg Specials',
    description: 'Traditional clay oven delicacies',
    icon: 'flame'
  },
  {
    id: 'vegetarian',
    name: 'Vegetarian',
    description: 'Fresh and flavorful vegetarian options',
    icon: 'leaf'
  },
  {
    id: 'rice-breads',
    name: 'Rice & Breads',
    description: 'Perfect accompaniments',
    icon: 'wheat'
  },
  {
    id: 'desserts',
    name: 'Desserts',
    description: 'Sweet endings to your meal',
    icon: 'cake'
  }
];

// export const dishes = [
//   {
//     id: 1,
//     name: "Butter Chicken",
//     description: "Tender chicken pieces cooked in a rich, creamy tomato-based sauce with butter and aromatic spices.",
//     price: 14.99,
//     image: "/p2.jpg",
//     category: "main-course",
//     rating: 4.9,
//     isSpicy: true,
//     isVegetarian: false,
//     isNew: false,
//     ingredients: ["Chicken", "Tomato", "Butter", "Cream", "Spices"],
//     allergens: ["Dairy"],
//     preparationTime: "25-30 mins",
//     calories: 450,
//     servingSize: "300g"
//   },
//   {
//     id: 2,
//     name: "Paneer Tikka Masala",
//     description: "Grilled cottage cheese cubes in a spiced tomato gravy, garnished with cream and coriander.",
//     price: 12.99,
//     image: "/p1.jpg",
//     category: "vegetarian",
//     rating: 4.7,
//     isSpicy: true,
//     isVegetarian: true,
//     isNew: false,
//     ingredients: ["Paneer", "Tomato", "Bell Peppers", "Cream", "Spices"],
//     allergens: ["Dairy"],
//     preparationTime: "20-25 mins",
//     calories: 380,
//     servingSize: "250g"
//   },
//   {
//     id: 3,
//     name: "Hyderabadi Biryani",
//     description: "Fragrant basmati rice cooked with aromatic spices and tender meat, served with raita.",
//     price: 16.99,
//     image: "/p2.jpg",
//     category: "rice-breads",
//     rating: 4.8,
//     isSpicy: true,
//     isVegetarian: false,
//     isNew: true,
//     ingredients: ["Basmati Rice", "Meat", "Saffron", "Spices", "Herbs"],
//     allergens: [],
//     preparationTime: "35-40 mins",
//     calories: 550,
//     servingSize: "400g"
//   },
//   {
//     id: 4,
//     name: "non-vegi Roti",
//     description: "Whole wheat flatbread baked in clay oven, perfect with any curry.",
//     price: 2.99,
//     image: "/p1.jpg",
//     category: "rice-breads",
//     rating: 4.6,
//     isSpicy: false,
//     isVegetarian: true,
//     isNew: false,
//     ingredients: ["Whole Wheat Flour", "Salt"],
//     allergens: ["Gluten"],
//     preparationTime: "10-12 mins",
//     calories: 120,
//     servingSize: "1 piece"
//   },
//   {
//     id: 5,
//     name: "Gulab Jamun",
//     description: "Soft milk-solid balls soaked in rose and cardamom flavored sugar syrup.",
//     price: 5.99,
//     image: "/p2.jpg",
//     category: "desserts",
//     rating: 4.9,
//     isSpicy: false,
//     isVegetarian: true,
//     isNew: false,
//     ingredients: ["Milk Powder", "Sugar", "Cardamom", "Rose Water"],
//     allergens: ["Dairy"],
//     preparationTime: "15-20 mins",
//     calories: 250,
//     servingSize: "3 pieces"
//   },
//   {
//     id: 6,
//     name: "Samosa",
//     description: "Crispy pastry filled with spiced potatoes and peas, served with mint chutney.",
//     price: 4.99,
//     image: "/menu/veg/dahi-wada.jpg",
//     category: "starters",
//     rating: 4.7,
//     isSpicy: true,
//     isVegetarian: true,
//     isNew: false,
//     ingredients: ["Potatoes", "Peas", "Pastry", "Spices"],
//     allergens: ["Gluten"],
//     preparationTime: "15-20 mins",
//     calories: 180,
//     servingSize: "2 pieces"
//   },

// ];

export type Category = {
  id: string;
  name: string;
  description: string;
  icon: string;
};

export type Dish = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  isSpicy: boolean;
  isVegetarian: boolean;
  isNew: boolean;
  ingredients: string[];
  allergens: string[];
  preparationTime: string;
  calories: number;
  servingSize: string;
}; 