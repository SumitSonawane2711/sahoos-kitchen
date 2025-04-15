import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weekly Menu & Meal Plans",
  description: "Browse our weekly combo meals and breakfast subscription plans. Fresh, homemade Indian food delivered to your doorstep daily.",
  keywords: ["weekly meal plan", "breakfast subscription", "daily meals", "food delivery", "Indian food"],
  alternates: {
    canonical: "https://sahooskitchen.com/weekly-menu",
  },
};

import WeeklyMenuContent from "@/components/weekly-menu/WeeklyMenuContent";

export default function WeeklyMenuPage() {
  return <WeeklyMenuContent />;
} 