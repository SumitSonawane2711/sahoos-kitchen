export interface DishOption {
  type: 'veg' | 'non-veg';
  items: string[];
  price: number;
  imageUrl?: string;
}

export interface DailyCombo {
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  dishes: DishOption[];
}

export interface WeeklyMenu {
  weeklyCombo: DailyCombo[];
}

export interface BreakfastItem {
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
}

export interface BreakfastSubscription {
  daily: BreakfastItem[];
  monthly: {
    price: number;
    description: string;
    savings: number;
  };
} 