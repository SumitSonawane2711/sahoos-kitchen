export const dishes = [
 
  // Vegetarian Dishes
  {
    id: "DISH002",
    name: "Kullad Pizza",
    description: "Mini pizza served in a traditional kullad, topped with veggies and cheese",
    category: "Appetizer",
    subcategory: "Veg",
    price: 9.99,
    isAvailable: true,
    prepTime: 15,
    dietaryTags: ["Vegetarian", "Mild"],
    customizations: [
      { name: "Extra Cheese", price: 1.00, isAvailable: true },
      { name: "Add Veggies", price: 0.75, isAvailable: true },
    ],
    imageUrl: "https://kitchen.com/images/kullad-pizza.jpg",
    calories: 350,
    servingSize: "Serves 1",
    dailyAvailability: {
      dayOfWeek: ["Wednesday", "Saturday", "Sunday"],
      timeRange: { startTime: "11:00", endTime: "20:00" },
    },
    isSpecial: true,
    stockLimit: 50,
    menuType: "Lunch",
  },
  {
    id: "DISH003",
    name: "Idiyappam with Veg Stew",
    description: "Soft rice noodles paired with a creamy vegetable stew in coconut milk",
    category: "Main Course",
    subcategory: "Veg",
    price: 8.99,
    isAvailable: true,
    prepTime: 20,
    dietaryTags: ["Vegetarian", "Gluten-Free", "Mild"],
    customizations: [
      { name: "Extra Stew", price: 1.50, isAvailable: true },
      { name: "Add Papad", price: 0.50, isAvailable: true },
    ],
    imageUrl: "https://kitchen.com/images/idiyappam-veg-stew.jpg",
    calories: 450,
    servingSize: "Serves 1",
    dailyAvailability: {
      dayOfWeek: ["Daily"],
      timeRange: { startTime: "08:00", endTime: "14:00" },
    },
    isSpecial: false,
    stockLimit: 80,
    menuType: "Breakfast",
  },
  {
    id: "DISH004",
    name: "Dahi Wada",
    description: "Lentil dumplings soaked in yogurt, topped with tamarind chutney",
    category: "Appetizer",
    subcategory: "Veg",
    price: 6.99,
    isAvailable: true,
    prepTime: 10,
    dietaryTags: ["Vegetarian", "Mild"],
    customizations: [
      { name: "Extra Yogurt", price: 0.50, isAvailable: true },
      { name: "Add Sev", price: 0.25, isAvailable: true },
    ],
    imageUrl: "https://kitchen.com/images/dahi-wada.jpg",
    calories: 200,
    servingSize: "Serves 1",
    dailyAvailability: {
      dayOfWeek: ["Daily"],
      timeRange: { startTime: "10:00", endTime: "18:00" },
    },
    isSpecial: false,
    stockLimit: 100,
    menuType: "Lunch",
  },
  {
    id: "DISH005",
    name: "Vegetable Chop",
    description: "Crispy fritters stuffed with spiced mashed vegetables",
    category: "Appetizer",
    subcategory: "Veg",
    price: 6.49,
    isAvailable: true,
    prepTime: 12,
    dietaryTags: ["Vegetarian", "Spicy"],
    customizations: [
      { name: "Extra Chutney", price: 0.30, isAvailable: true },
      { name: "Add Salad", price: 0.50, isAvailable: true },
    ],
    imageUrl: "https://kitchen.com/images/vegetable-chop.jpg",
    calories: 250,
    servingSize: "Serves 1",
    dailyAvailability: {
      dayOfWeek: ["Tuesday", "Thursday", "Saturday"],
      timeRange: { startTime: "11:00", endTime: "19:00" },
    },
    isSpecial: true,
    stockLimit: 60,
    menuType: "Lunch",
  },
  {
    id: "DISH006",
    name: "Aloo Tomato Sabji + 4 Poori",
    description: "Spiced potato and tomato curry with four fluffy pooris",
    category: "Main Course",
    subcategory: "Veg",
    price: 8.49,
    isAvailable: true,
    prepTime: 18,
    dietaryTags: ["Vegetarian", "Spicy"],
    customizations: [
      { name: "Extra Poori", price: 0.75, isAvailable: true },
      { name: "Add Pickle", price: 0.25, isAvailable: true },
    ],
    imageUrl: "https://kitchen.com/images/aloo-tomato-sabji-poori.jpg",
    calories: 600,
    servingSize: "Serves 2",
    dailyAvailability: {
      dayOfWeek: ["Daily"],
      timeRange: { startTime: "09:00", endTime: "15:00" },
    },
    isSpecial: false,
    stockLimit: 90,
    menuType: "Breakfast",
  },
  {
    id: "DISH007",
    name: "Veg Biryani with Raita",
    description: "Fragrant rice with mixed vegetables, served with raita",
    category: "Main Course",
    subcategory: "Veg",
    price: 10.99,
    isAvailable: true,
    prepTime: 25,
    dietaryTags: ["Vegetarian", "Spicy"],
    customizations: [
      { name: "Extra Raita", price: 0.50, isAvailable: true },
      { name: "Add Papad", price: 0.50, isAvailable: true },
    ],
    imageUrl: "https://kitchen.com/images/veg-biryani.jpg",
    calories: 700,
    servingSize: "Serves 1",
    dailyAvailability: {
      dayOfWeek: ["Monday", "Wednesday", "Friday"],
      timeRange: { startTime: "12:00", endTime: "21:00" },
    },
    isSpecial: false,
    stockLimit: 100,
    menuType: "Dinner",
  },
  {
    id: "DISH008",
    name: "Dahi Wada Aloo Dum",
    description: "Dahi wada paired with spicy aloo dum curry",
    category: "Main Course",
    subcategory: "Veg",
    price: 8.99,
    isAvailable: true,
    prepTime: 20,
    dietaryTags: ["Vegetarian", "Spicy"],
    customizations: [
      { name: "Extra Yogurt", price: 0.50, isAvailable: true },
      { name: "Add Chutney", price: 0.25, isAvailable: true },
    ],
    imageUrl: "https://kitchen.com/images/dahi-wada-aloo-dum.jpg",
    calories: 500,
    servingSize: "Serves 1",
    dailyAvailability: {
      dayOfWeek: ["Tuesday", "Thursday", "Sunday"],
      timeRange: { startTime: "11:00", endTime: "20:00" },
    },
    isSpecial: true,
    stockLimit: 70,
    menuType: "Lunch",
  },
  {
    id: "DISH009",
    name: "Chana Sabji with Poori",
    description: "Spicy chickpea curry with fluffy pooris",
    category: "Main Course",
    subcategory: "Veg",
    price: 7.99,
    isAvailable: true,
    prepTime: 18,
    dietaryTags: ["Vegetarian", "Spicy"],
    customizations: [
      { name: "Extra Poori", price: 0.75, isAvailable: true },
      { name: "Add Onion", price: 0.25, isAvailable: true },
    ],
    imageUrl: "https://kitchen.com/images/chana-sabji-poori.jpg",
    calories: 550,
    servingSize: "Serves 2",
    dailyAvailability: {
      dayOfWeek: ["Daily"],
      timeRange: { startTime: "09:00", endTime: "15:00" },
    },
    isSpecial: false,
    stockLimit: 90,
    menuType: "Breakfast",
  },
  {
    id: "DISH010",
    name: "Masala Luchi and Achari Baby Potato",
    description: "Crispy masala luchi with tangy achari baby potatoes",
    category: "Main Course",
    subcategory: "Veg",
    price: 9.49,
    isAvailable: true,
    prepTime: 20,
    dietaryTags: ["Vegetarian", "Spicy"],
    customizations: [
      { name: "Extra Luchi", price: 0.75, isAvailable: true },
      { name: "Add Pickle", price: 0.25, isAvailable: true },
    ],
    imageUrl: "https://kitchen.com/images/masala-luchi-achari-potato.jpg",
    calories: 600,
    servingSize: "Serves 1",
    dailyAvailability: {
      dayOfWeek: ["Monday", "Friday", "Saturday"],
      timeRange: { startTime: "11:00", endTime: "20:00" },
    },
    isSpecial: true,
    stockLimit: 60,
    menuType: "Lunch",
  },
  // Non-Vegetarian Dishes
  {
    id: "DISH011",
    name: "Idiyappam with Chicken Stew",
    description: "Rice noodles with flavorful chicken stew in coconut milk",
    category: "Main Course",
    subcategory: "Non-Veg",
    price: 11.99,
    isAvailable: true,
    prepTime: 22,
    dietaryTags: ["Non-Vegetarian", "Mild"],
    customizations: [
      { name: "Extra Stew", price: 1.50, isAvailable: true },
      { name: "Add Papad", price: 0.50, isAvailable: true },
    ],
    imageUrl: "https://kitchen.com/images/idiyappam-chicken-stew.jpg",
    calories: 600,
    servingSize: "Serves 1",
    dailyAvailability: {
      dayOfWeek: ["Daily"],
      timeRange: { startTime: "08:00", endTime: "14:00" },
    },
    isSpecial: false,
    stockLimit: 80,
    menuType: "Breakfast",
  },
  {
    id: "DISH012",
    name: "Chicken Dum Biryani",
    description: "Slow-cooked chicken biryani with aromatic spices, served with raita",
    category: "Main Course",
    subcategory: "Non-Veg",
    price: 14.99,
    isAvailable: true,
    prepTime: 30,
    dietaryTags: ["Non-Vegetarian", "Spicy"],
    customizations: [
      { name: "Extra Raita", price: 0.50, isAvailable: true },
      { name: "Add Egg", price: 1.00, isAvailable: true },
    ],
    imageUrl: "https://kitchen.com/images/chicken-dum-biryani.jpg",
    calories: 850,
    servingSize: "Serves 1",
    dailyAvailability: {
      dayOfWeek: ["Wednesday", "Friday", "Sunday"],
      timeRange: { startTime: "12:00", endTime: "22:00" },
    },
    isSpecial: false,
    stockLimit: 100,
    menuType: "Dinner",
  },
  {
    id: "DISH013",
    name: "Chicken Leg Biryani",
    description: "Biryani with a juicy chicken leg piece, served with raita",
    category: "Main Course",
    subcategory: "Non-Veg",
    price: 15.99,
    isAvailable: true,
    prepTime: 30,
    dietaryTags: ["Non-Vegetarian", "Spicy"],
    customizations: [
      { name: "Extra Raita", price: 0.50, isAvailable: true },
      { name: "Add Egg", price: 1.00, isAvailable: true },
    ],
    imageUrl: "https://kitchen.com/images/chicken-leg-biryani.jpg",
    calories: 900,
    servingSize: "Serves 1",
    dailyAvailability: {
      dayOfWeek: ["Saturday", "Sunday"],
      timeRange: { startTime: "12:00", endTime: "22:00" },
    },
    isSpecial: true,
    stockLimit: 50,
    menuType: "Dinner",
  },
  {
    id: "DISH014",
    name: "Chicken Palak Curry with Steam Rice",
    description: "Chicken in creamy spinach curry, served with steamed rice",
    category: "Main Course",
    subcategory: "Non-Veg",
    price: 13.49,
    isAvailable: true,
    prepTime: 25,
    dietaryTags: ["Non-Vegetarian", "Mild"],
    customizations: [
      { name: "Extra Rice", price: 1.00, isAvailable: true },
      { name: "Add Naan", price: 2.00, isAvailable: true },
    ],
    imageUrl: "https://kitchen.com/images/chicken-palak-curry.jpg",
    calories: 700,
    servingSize: "Serves 1",
    dailyAvailability: {
      dayOfWeek: ["Monday", "Thursday", "Saturday"],
      timeRange: { startTime: "12:00", endTime: "21:00" },
    },
    isSpecial: false,
    stockLimit: 80,
    menuType: "Dinner",
  },
  {
    id: "DISH015",
    name: "Chicken Potato Roast",
    description: "Spicy roasted chicken with crispy potatoes",
    category: "Main Course",
    subcategory: "Non-Veg",
    price: 13.99,
    isAvailable: true,
    prepTime: 25,
    dietaryTags: ["Non-Vegetarian", "Spicy"],
    customizations: [
      { name: "Extra Spice", price: 0.50, isAvailable: true },
      { name: "Add Salad", price: 0.50, isAvailable: true },
    ],
    imageUrl: "https://kitchen.com/images/chicken-potato-roast.jpg",
    calories: 750,
    servingSize: "Serves 1",
    dailyAvailability: {
      dayOfWeek: ["Tuesday", "Friday", "Sunday"],
      timeRange: { startTime: "12:00", endTime: "21:00" },
    },
    isSpecial: true,
    stockLimit: 60,
    menuType: "Dinner",
  },
  {
    id: "DISH016",
    name: "Chicken Biryani with Raita",
    description: "Classic chicken biryani with fragrant rice, served with raita",
    category: "Main Course",
    subcategory: "Non-Veg",
    price: 14.49,
    isAvailable: true,
    prepTime: 28,
    dietaryTags: ["Non-Vegetarian", "Spicy"],
    customizations: [
      { name: "Extra Raita", price: 0.50, isAvailable: true },
      { name: "Add Egg", price: 1.00, isAvailable: true },
    ],
    imageUrl: "https://kitchen.com/images/chicken-biryani.jpg",
    calories: 800,
    servingSize: "Serves 1",
    dailyAvailability: {
      dayOfWeek: ["Daily"],
      timeRange: { startTime: "12:00", endTime: "22:00" },
    },
    isSpecial: false,
    stockLimit: 100,
    menuType: "Dinner",
  },
];