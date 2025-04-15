import { Dish } from '@/types/dish';

export const dinnerDishes: Dish[] = [
  {
    "id": "DN001",
    "name": "Butter Chicken",
    "description": "Tender chicken cooked in a creamy tomato sauce with aromatic spices",
    "category": "Main Course",
    "subcategory": "Non-Veg",
    "price": 15.99,
    "isAvailable": true,
    "prepTime": 25,
    "dietaryTags": ["Non-Vegetarian", "Contains Dairy"],
    "customizations": [
      { "name": "Extra Gravy", "price": 2.00, "isAvailable": true },
      { "name": "Add Butter Naan", "price": 2.50, "isAvailable": true }
    ],
    "imageUrl": "/images/dishes/butter-chicken.jpg",
    "calories": 750,
    "servingSize": "Serves 1",
    "dailyAvailability": {
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "timeRange": { "startTime": "18:30", "endTime": "22:30" }
    },
    "isSpecial": false,
    "stockLimit": 40,
    "menuType": "Dinner"
  },
  {
    "id": "DN002",
    "name": "Tandoori Platter",
    "description": "Assortment of tandoor-grilled delicacies including chicken, fish, and kebabs",
    "category": "Starters",
    "subcategory": "Non-Veg",
    "price": 18.99,
    "isAvailable": true,
    "prepTime": 30,
    "dietaryTags": ["Non-Vegetarian", "Spicy"],
    "customizations": [
      { "name": "Extra Mint Chutney", "price": 1.00, "isAvailable": true },
      { "name": "Add Roomali Roti", "price": 2.00, "isAvailable": true }
    ],
    "imageUrl": "/images/dishes/tandoori-platter.jpg",
    "calories": 850,
    "servingSize": "Serves 2",
    "dailyAvailability": {
      "dayOfWeek": ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "timeRange": { "startTime": "18:30", "endTime": "22:30" }
    },
    "isSpecial": false,
    "stockLimit": 25,
    "menuType": "Dinner"
  },
  {
    "id": "DN003",
    "name": "Rogan Josh",
    "description": "Kashmiri style lamb curry cooked with yogurt and aromatic spices",
    "category": "Main Course",
    "subcategory": "Non-Veg",
    "price": 16.99,
    "isAvailable": true,
    "prepTime": 25,
    "dietaryTags": ["Non-Vegetarian", "Spicy"],
    "customizations": [
      { "name": "Extra Meat", "price": 3.00, "isAvailable": true },
      { "name": "Add Garlic Naan", "price": 2.50, "isAvailable": true }
    ],
    "imageUrl": "/images/dishes/rogan-josh.jpg",
    "calories": 700,
    "servingSize": "Serves 1",
    "dailyAvailability": {
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "timeRange": { "startTime": "18:30", "endTime": "22:30" }
    },
    "isSpecial": false,
    "stockLimit": 30,
    "menuType": "Dinner"
  },
  {
    "id": "DN004",
    "name": "Vegetable Jalfrezi",
    "description": "Mixed vegetables stir-fried with bell peppers in a spicy tomato sauce",
    "category": "Main Course",
    "subcategory": "Veg",
    "price": 12.99,
    "isAvailable": true,
    "prepTime": 20,
    "dietaryTags": ["Vegetarian", "Spicy", "Vegan"],
    "customizations": [
      { "name": "Extra Spicy", "price": 0.50, "isAvailable": true },
      { "name": "Add Rice", "price": 2.50, "isAvailable": true }
    ],
    "imageUrl": "/images/dishes/veg-jalfrezi.jpg",
    "calories": 450,
    "servingSize": "Serves 1",
    "dailyAvailability": {
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "timeRange": { "startTime": "18:30", "endTime": "22:30" }
    },
    "isSpecial": false,
    "stockLimit": 35,
    "menuType": "Dinner"
  }
];
