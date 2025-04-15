export const specialOffers = [
  {
    id: 1,
    title: "Family Feast Special",
    description: "Perfect for 4-6 people. Includes 2 main courses, 4 sides, bread basket, and dessert.",
    price: 89.99,
    originalPrice: 120.00,
    image: "/offers/family-feast.jpg",
    validUntil: "2024-05-31",
    isPopular: true,
    includes: [
      "2 Main Course Dishes",
      "4 Side Dishes",
      "Assorted Bread Basket",
      "Family Size Dessert",
      "4 Soft Drinks"
    ]
  },
  {
    id: 2,
    title: "Lunch Express Menu",
    description: "Quick and delicious lunch options perfect for busy professionals.",
    price: 14.99,
    originalPrice: 22.99,
    image: "/offers/lunch-express.jpg",
    validUntil: "2024-12-31",
    isPopular: true,
    includes: [
      "Choice of Main Course",
      "Side Dish",
      "Naan or Rice",
      "Soft Drink",
      "Quick Service Guaranteed"
    ]
  },
  {
    id: 3,
    title: "Weekend Brunch Buffet",
    description: "All-you-can-eat weekend brunch featuring our signature dishes.",
    price: 29.99,
    originalPrice: 39.99,
    image: "/offers/brunch-buffet.jpg",
    validUntil: "2024-12-31",
    isPopular: false,
    includes: [
      "Unlimited Food Selection",
      "Live Cooking Stations",
      "Dessert Counter",
      "Fresh Juices",
      "Coffee/Tea"
    ]
  }
];

export const promotionalBanners = [
  {
    id: 1,
    title: "Happy Hours",
    description: "20% off on all beverages between 4 PM - 7 PM",
    image: "/banners/happy-hours.jpg",
    validDays: "Monday to Friday"
  },
  {
    id: 2,
    title: "Student Discount",
    description: "15% off on presentation of valid student ID",
    image: "/banners/student-discount.jpg",
    validDays: "All week"
  },
  {
    id: 3,
    title: "Birthday Special",
    description: "Free dessert for birthday celebrant",
    image: "/banners/birthday-special.jpg",
    validDays: "All week"
  }
];

export const loyaltyProgram = {
  title: "Sahoos Rewards Program",
  description: "Join our loyalty program and earn points with every order",
  benefits: [
    "Earn 1 point for every $1 spent",
    "100 points = $10 discount",
    "Birthday month bonus points",
    "Exclusive member-only offers",
    "Early access to special events"
  ],
  levels: [
    {
      name: "Silver",
      requirement: "0-500 points",
      benefits: ["Basic points earning", "Birthday bonus"]
    },
    {
      name: "Gold",
      requirement: "501-1000 points",
      benefits: ["1.5x points earning", "Priority seating", "Free dessert on birthday"]
    },
    {
      name: "Platinum",
      requirement: "1001+ points",
      benefits: ["2x points earning", "VIP reservations", "Complimentary chef's special"]
    }
  ]
}; 