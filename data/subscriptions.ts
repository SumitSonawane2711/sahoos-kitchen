import { theme } from './site';

export interface MealPlan {
  id: number;
  name: string;
  description: string;
  price: number;
  duration: string;
  mealsPerDay: number;
  features: string[];
  popularChoice?: boolean;
  menuRotation: {
    monday: string[];
    tuesday: string[];
    wednesday: string[];
    thursday: string[];
    friday: string[];
    saturday: string[];
    sunday: string[];
  };
}

export const subscriptionPlans: MealPlan[] = [
  {
    id: 1,
    name: "Basic Plan",
    description: "Perfect for individuals looking for daily healthy meals",
    price: 1999,
    duration: "Weekly",
    mealsPerDay: 2,
    features: [
      "2 meals per day",
      "Free delivery",
      "Weekly menu rotation",
      "Cancel anytime",
      "Basic customization options"
    ],
    menuRotation: {
      monday: ["Vegetable Biryani", "Dal Makhani"],
      tuesday: ["Paneer Butter Masala", "Mixed Veg Curry"],
      wednesday: ["Chole Bhature", "Palak Paneer"],
      thursday: ["Rajma Chawal", "Aloo Gobi"],
      friday: ["Masala Dosa", "Sambar Rice"],
      saturday: ["Pav Bhaji", "Kadai Paneer"],
      sunday: ["Special Thali", "Chef's Special"]
    }
  },
  {
    id: 2,
    name: "Premium Plan",
    description: "Ideal for families or food enthusiasts who love variety",
    price: 2999,
    duration: "Weekly",
    mealsPerDay: 3,
    popularChoice: true,
    features: [
      "3 meals per day",
      "Priority delivery",
      "Weekly menu rotation",
      "Cancel anytime",
      "Advanced customization options",
      "Weekend special dishes",
      "Complimentary desserts"
    ],
    menuRotation: {
      monday: ["Masala Dosa", "Butter Chicken", "Vegetable Biryani"],
      tuesday: ["Poori Sabji", "Fish Curry", "Paneer Tikka"],
      wednesday: ["Idli Sambar", "Chicken Biryani", "Dal Tadka"],
      thursday: ["Chole Bhature", "Mutton Curry", "Mixed Veg"],
      friday: ["Uttapam", "Prawn Curry", "Palak Paneer"],
      saturday: ["Special Breakfast", "Chef's Special", "Party Special"],
      sunday: ["Festive Breakfast", "Sunday Special", "Grand Thali"]
    }
  },
  {
    id: 3,
    name: "Family Plan",
    description: "Complete family solution with maximum flexibility and variety",
    price: 3999,
    duration: "Weekly",
    mealsPerDay: 3,
    features: [
      "3 meals per day for family of 4",
      "Premium delivery slots",
      "Weekly menu rotation",
      "Cancel anytime",
      "Full customization options",
      "Weekend special dishes",
      "Daily desserts",
      "Special occasion meals",
      "Family size portions"
    ],
    menuRotation: {
      monday: ["Family Breakfast Combo", "Lunch Thali", "Dinner Special"],
      tuesday: ["South Indian Platter", "North Indian Thali", "Chinese Special"],
      wednesday: ["Indian Breakfast", "Biryani Feast", "Tandoor Night"],
      thursday: ["Healthy Start", "Regional Special", "Family Dinner"],
      friday: ["Quick Breakfast", "Office Lunch", "Party Dinner"],
      saturday: ["Weekend Special", "Lunch Feast", "Family Night"],
      sunday: ["Sunday Brunch", "Light Lunch", "Grand Dinner"]
    }
  }
]; 