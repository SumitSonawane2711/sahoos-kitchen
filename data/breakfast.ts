import { Dish } from '@/types/dish';

export const breakfastDishes: Dish[] = [
  // {
  //   id: "BF001",
  //   name: "Masala Dosa",
  //   description: "Crispy rice and lentil crepe served with potato masala, coconut chutney, and sambar",
  //   category: "Odisa Special",
  //   subcategory: "Veg",
  //   price: 8.99,
  //   isAvailable: true,
  //   prepTime: 15,
  //   dietaryTags: ["Vegetarian", "Gluten-Free"],
  //   customizations: [
  //     { name: "Extra Chutney", price: 1.00, isAvailable: true },
  //     { name: "Ghee Roast", price: 1.50, isAvailable: true }
  //   ],
  //   imageUrl: "https://sahooskitchen.com/images/dishes/masala-dosa.JPG",
  //   calories: 450,
  //   servingSize: "Serves 1",
  //   dailyAvailability: {
  //     dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  //     timeRange: { startTime: "07:00", endTime: "11:30" }
  //   },
  //   isSpecial: false,
  //   stockLimit: 50,
  //   menuType: "Breakfast"
  // },
  // {
  //   id: "BF002",
  //   name: "Poori Bhaji",
  //   description: "Fluffy deep-fried Indian bread served with spiced potato curry and pickle",
  //   category: "Kerala Special",
  //   subcategory: "Veg",
  //   price: 7.99,
  //   isAvailable: true,
  //   prepTime: 12,
  //   dietaryTags: ["Vegetarian"],
  //   customizations: [
  //     { name: "Extra Poori", price: 1.50, isAvailable: true },
  //     { name: "Add Curd", price: 1.00, isAvailable: true }
  //   ],
  //   imageUrl: "https://sahooskitchen.com/images/dishes/poori-bhaji.JPG",
  //   calories: 550,
  //   servingSize: "Serves 1",
  //   dailyAvailability: {
  //     dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  //     timeRange: { startTime: "07:00", endTime: "11:30" }
  //   },
  //   isSpecial: false,
  //   stockLimit: 40,
  //   menuType: "Breakfast"
  // },
  // {
  //   id: "BF003",
  //   name: "Idli Sambar",
  //   description: "Steamed rice cakes served with lentil soup and coconut chutney",
  //   category: "South Indian",
  //   subcategory: "Veg",
  //   price: 6.99,
  //   isAvailable: true,
  //   prepTime: 10,
  //   dietaryTags: ["Vegetarian", "Low Fat", "Gluten-Free"],
  //   customizations: [
  //     { name: "Extra Sambar", price: 1.00, isAvailable: true },
  //     { name: "Add Vada", price: 2.00, isAvailable: true }
  //   ],
  //   imageUrl: "/images/dishes/idli-sambar.JPG",
  //   calories: 300,
  //   servingSize: "Serves 1 (4 pieces)",
  //   dailyAvailability: {
  //     dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  //     timeRange: { startTime: "07:00", endTime: "11:30" }
  //   },
  //   isSpecial: false,
  //   stockLimit: 60,
  //   menuType: "Breakfast"
  // },
  // {
  //   id: "BF004",
  //   name: "Chole Bhature",
  //   description: "Spiced chickpea curry served with deep-fried bread and pickled onions",
  //   category: "North Indian",
  //   subcategory: "Veg",
  //   price: 9.99,
  //   isAvailable: true,
  //   prepTime: 18,
  //   dietaryTags: ["Vegetarian", "Spicy"],
  //   customizations: [
  //     { name: "Extra Bhatura", price: 2.00, isAvailable: true },
  //     { name: "Add Lassi", price: 2.50, isAvailable: true }
  //   ],
  //   imageUrl: "/images/dishes/chole-bhature.JPG",
  //   calories: 750,
  //   servingSize: "Serves 1",
  //   dailyAvailability: {
  //     dayOfWeek: ["Friday", "Saturday", "Sunday"],
  //     timeRange: { startTime: "07:00", endTime: "11:30" }
  //   },
  //   isSpecial: false,
  //   stockLimit: 30,
  //   menuType: "Breakfast"
  // },
  {
    id: "BF005",
    name: "Kullad Pizza",
    description: "Mini pizza served in a traditional kullad, topped with veggies and cheese",
    category: "",
    subcategory: "Veg",
    price: 149,
    isAvailable: true,
    prepTime: 15,
    dietaryTags: ["Vegetarian", "Mild"],
    customizations: [
      { name: "1pc", price: 89, isAvailable: true },
      { name: "2pc", price: 149, isAvailable: true },
      { name: "4pc", price: 289, isAvailable: true },
    ],
    imageUrl: "https://sahooskitchen.com/menu/veg/kulhad-pizaa.JPG",
    calories: 350,
    servingSize: "Serves 1",
    dailyAvailability: {
      dayOfWeek: ["Wednesday", "Saturday", "Sunday"],
      timeRange: { startTime: "11:00", endTime: "20:00" },
    },
    isSpecial: true,
    stockLimit: 50,
    menuType: "Breakfast"
  },

  {
    id: "BF007",
    name: "Dahi Kabab",
    description: "Delicious kababs made with hung curd and spices, crispy on the outside and creamy inside.",
    category: "Odisa Special",
    subcategory: "Veg",
    price: 150,
    isAvailable: true,
    prepTime: 12,
    dietaryTags: ["Vegetarian", "Mild"],
    customizations: [
      { name: "Mint Chutney", price: 0.50, isAvailable: true },
      { name: "Extra Dip", price: 0.75, isAvailable: true },
    ],
    imageUrl: "https://sahooskitchen.com/menu/veg/dahi-kabab.JPG",
    calories: 280,
    servingSize: "Serves 1",
    dailyAvailability: {
      dayOfWeek: ["Tuesday", "Friday", "Sunday"],
      timeRange: { startTime: "12:00", endTime: "21:00" },
    },
    isSpecial: true,
    stockLimit: 40,
    menuType: "Breakfast"
  },
  {
    id: "BF008",
    name: "Veg Manchurian",
    description: "Crispy vegetable balls tossed in a flavorful Indo-Chinese sauce, perfect for a spicy breakfast twist.",
    category: "",
    subcategory: "Veg",
    price: 210,
    isAvailable: true,
    prepTime: 10,
    dietaryTags: ["Vegetarian", "Spicy"],
    customizations: [
      { name: "Extra Sauce", price: 200, isAvailable: true },
      { name: "Add Fried Rice", price: 210, isAvailable: true },
    ],
    imageUrl: "https://sahooskitchen.com/menu/veg/manchurian.JPG",
    calories: 320,
    servingSize: "Serves 1",
    dailyAvailability: {
      dayOfWeek: ["Monday", "Wednesday", "Friday"],
      timeRange: { startTime: "08:00", endTime: "11:30" },
    },
    isSpecial: true,
    stockLimit: 30,
    menuType: "Breakfast"
  },
  {
    id: "BF009",
    name: "Idiyappam ",
    description: "Steamed rice noodle cakes served with traditional Odisha-style vegetable stew or coconut milk.",
    category: "Odisa Special",
    subcategory: "Veg",
    price: 199,
    isAvailable: true,
    prepTime: 12,
    dietaryTags: ["Vegetarian", "Gluten-Free", "Light"],
    customizations: [
      { name: "Veg stew", price: 199, isAvailable: true },
      { name: "Non veg stew", price: 249, isAvailable: true },
    ],
    imageUrl: "https://sahooskitchen.com/menu/veg/idiyappam.JPG",
    calories: 250,
    servingSize: "Serves 1",
    dailyAvailability: {
      dayOfWeek: ["Tuesday", "Thursday", "Saturday"],
      timeRange: { startTime: "07:00", endTime: "10:30" },
    },
    isSpecial: true,
    stockLimit: 25,
    menuType: "Breakfast"
  },
  
  {
    id: "BF010",
    name: "Paplet Fry (Pomfret)",
    description: "Fresh pomfret marinated in coastal spices, shallow fried to golden perfection — a seafood lover’s delight.",
    category: "",
    subcategory: "Non-Veg",
    price: 14.99,
    isAvailable: true,
    prepTime: 18,
    dietaryTags: ["Non-Vegetarian", "Spicy", "High-Protein"],
    customizations: [
      { name: "Extra Masala", price: 0.75, isAvailable: true },
      { name: "Add Lemon Wedges", price: 0.50, isAvailable: true },
    ],
    imageUrl: "https://sahooskitchen.com/menu/no-veg/paplet.JPG",
    calories: 420,
    servingSize: "Serves 1",
    dailyAvailability: {
      dayOfWeek: ["Friday", "Saturday", "Sunday"],
      timeRange: { startTime: "12:30", endTime: "15:00" },
    },
    isSpecial: true,
    stockLimit: 20,
    menuType: "Breakfast"
  },

  {
    "id": "BF011",
    "name": "Aloo Paratha",
    "description": "Stuffed whole wheat flatbread with spiced mashed potatoes, served with curd and pickle.",
    "category": "Breakfast",
    "subcategory": "Veg",
    "price": 150,
    "isAvailable": true,
    "prepTime": 15,
    "dietaryTags": ["Vegetarian", "Mild"],
    "customizations": [],
    "imageUrl": "https://images.pexels.com/photos/20408462/pexels-photo-20408462/free-photo-of-indian-flatbread-with-tomato-and-cream-on-a-plate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "calories": 350,
    "servingSize": "Serves 1",
    "dailyAvailability": {
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "timeRange": { "startTime": "08:00", "endTime": "11:00" }
    },
    "isSpecial": false,
    "stockLimit": 50,
    "menuType": "Breakfast"
  },

  {
    "id": "BF013",
    "name": "Gobi Paratha",
    "description": "Whole wheat flatbread stuffed with spiced grated cauliflower, served with curd and pickle.",
    "category": "Breakfast",
    "subcategory": "Veg",
    "price": 150,
    "isAvailable": true,
    "prepTime": 15,
    "dietaryTags": ["Vegetarian", "Mild"],
    "customizations": [],
    "imageUrl": "https://imgs.search.brave.com/g0QODDowujHmHHRBeiXYDS5MPi9lu4S9CMZ9ZTtAlrA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ0/OTQyOTUxMS9waG90/by9ncmVlbi1sYWNo/YS1jaGlsbGktcGFy/YXRoYS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9dXhvN1h2/NG1ZOWllRzZnRVUt/RkRyMVY2cXpHbmJ0/emdJWG15Z1RMRDJ5/VT0",
    "calories": 340,
    "servingSize": "Serves 1",
    "dailyAvailability": {
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "timeRange": { "startTime": "08:00", "endTime": "11:00" }
    },
    "isSpecial": false,
    "stockLimit": 50,
    "menuType": "Breakfast"
  },

  {
    "id": "BF014",
    "name": "Lachha Paratha",
    "description": "Flaky, multi-layered whole wheat paratha cooked to golden perfection.",
    "category": "Sides",
    "subcategory": "Veg",
    "price": 50,
    "isAvailable": true,
    "prepTime": 10,
    "dietaryTags": ["Vegetarian", "Mild"],
    "customizations": [],
    "imageUrl": "https://img.freepik.com/free-photo/fried-meat-gutabs-table_140725-763.jpg?t=st=1744883235~exp=1744886835~hmac=47250cf92f79f4172daafc3dd4ab8c3036805d2384187d972ddbe2fa56ffe5b7&w=740",
    "calories": 250,
    "servingSize": "Serves 1",
    "dailyAvailability": {
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "timeRange": { "startTime": "11:00", "endTime": "22:00" }
    },
    "isSpecial": false,
    "stockLimit": 100,
    "menuType": "Lunch"
  },

  {
    "id": "DS015",
    "name": "Caramel Custard",
    "description": "Silky smooth caramel custard with a rich caramel topping.",
    "category": "Desserts",
    "subcategory": "Veg",
    "price": 75,
    "isAvailable": true,
    "prepTime": 10,
    "dietaryTags": ["Vegetarian", "Sweet"],
    "customizations": [],
    "imageUrl": "https://img.freepik.com/free-photo/high-angle-mexican-dessert-table_23-2149517097.jpg?t=st=1744883372~exp=1744886972~hmac=71b798b703ee32347605a187889781db776dc80ed74fe544951b8c9db4de4c5a&w=740",
    "calories": 300,
    "servingSize": "Serves 1",
    "dailyAvailability": {
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "timeRange": { "startTime": "11:00", "endTime": "22:00" }
    },
    "isSpecial": false,
    "stockLimit": 30,
    "menuType": "Breakfast"
  }
  
  
  
  
  
];
