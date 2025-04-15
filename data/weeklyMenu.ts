import { WeeklyMenu, BreakfastSubscription } from "@/types/menu";

export const weeklyComboMenu: WeeklyMenu = {
  weeklyCombo: [
    {
      day: "Monday",
      dishes: [
        {
          type: "veg",
          items: ["Gobi Paratha", "Rajma", "Steam Rice", "Salad"],
          price: 200,
          imageUrl: "/menu/weekly-combo/monday.jpg"
        },
        {
          type: "non-veg",
          items: ["Butter Naan", "Chicken Curry", "Jeera Rice", "Raita"],
          price: 280,
          imageUrl: "/menu/monday-nonveg-combo.jpg"
        }
      ]
    },
    {
      day: "Tuesday",
      dishes: [
        {
          type: "veg",
          items: ["Methi Paratha", "Tomato Chutney", "Veg Kofta curry"],
          price: 300,
          imageUrl: "/menu/weekly-combo/tuesday-nonveg.jpg"
        },
        {
          type: "non-veg",
          items: ["Methi Paratha", "Tomato Chutney", "Chicken curry"],
          price: 300,
          imageUrl: "/menu/weekly-combo/tuesday-nonveg.jpg"
        }
      ]
    },
    {
      day: "Wednesday",
      dishes: [
        {
          type: "veg",
          items: ["Puri(Luchi)", "Mango chutney", "Ghoogni or Aloo sabji (Odisha special)"],
          price: 200,
          imageUrl: "/menu/weekly-combo/wed-nonveg.jpg"
        },
        {
          type: "non-veg",
          items: ["Puri(Luchi)", "Mango chutney", "Chicken dry"],
          price: 325,
          imageUrl: "/menu/weekly-combo/wed-nonveg.jpg"
        }
      ]
    },
    {
      day: "Thursday",
      dishes: [
        {
          type: "veg",
          items: ["Paneer Paratha", "Tomato Chutney", "Methi sabji"],
          price: 225,
          imageUrl: "/menu/weekly-combo/thursday.jpg"
        },
        {
          type: "non-veg",
          items: ["Plain Paratha", "Mutton Curry", "Rice", "Papad"],
          price: 350,
          imageUrl: "/menu/weekly-combo/thursday.jpg"
        }
      ]
    },
    {
      day: "Friday",
      dishes: [
        {
          type: "veg",
          items: ["Vegetable Pulao", "Raita", "Veg Kofta", "Papad"],
          price: 225,
          imageUrl: "/menu/friday-combo.jpg"
        },
        {
          type: "non-veg",
          items: ["Egg Curry", "Plain Paratha", "Pulao", "Onion Salad"],
          price: 325,
          imageUrl: "/menu/friday-nonveg-combo.jpg"
        }
      ]
    },
    {
      day: "Saturday",
      dishes: [
        {
          type: "veg",
          items: ["Red sauce pasta", "2 slices garlic bread", "Garlic dip", "French fries"],
          price: 225,
          imageUrl: "/menu/weekly-combo/saturday.jpg"
        },
        {
          type: "non-veg",
          items: ["Red Souce Pasta", "2 Slices garlic bread", "chicken dry (tomato & cheese base)", "Onion Salad"],
          price: 325,
          imageUrl: "/menu/weekly-combo/wed-nonveg.jpg"
        }
      ]
    },
    {
      day: "Sunday",
      dishes: [
        {
          type: "veg",
          items: ["Veg biryani", "Raita", "Dahi ke kabab (2pc)", "Caramel custard"],
          price: 325,
          imageUrl: "/menu/weekly-combo/sunday-veg.jpg"
        },
        {
          type: "non-veg",
          items: ["Chicken biryani", "Raita", "Dahi ke kabab (2pc)", "Caramel custard"],
          price: 425,
          imageUrl: "/menu/weekly-combo/sunday-nonveg.jpg"
        }
      ]
    }
  ]
};

export const breakfastSubscription: BreakfastSubscription = {
  daily: [
    {
      name: "South Indian Breakfast",
      description: "Idli/Dosa with Sambar and Chutney",
      price: 120,
      imageUrl: "/menu/breakfast/south-indian.jpg"
    },
    {
      name: "North Indian Breakfast",
      description: "Poha/Upma with Tea",
      price: 100,
      imageUrl: "/menu/breakfast/north-indian.jpg"
    },
    {
      name: "Healthy Start",
      description: "Oats/Muesli with Fruits and Milk",
      price: 150,
      imageUrl: "/menu/breakfast/healthy.jpg"
    }
  ],
  monthly: {
    price: 2500,
    description: "Get breakfast delivered every day for a month",
    savings: 500
  }
}; 