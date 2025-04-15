export interface Customization {
  name: string;
  price: number;
  isAvailable: boolean;
}

export interface TimeRange {
  startTime: string;
  endTime: string;
}

export interface DailyAvailability {
  dayOfWeek: string[];
  timeRange: TimeRange;
}

export interface Dish {
  id: string;
  name: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  isAvailable: boolean;
  prepTime: number;
  dietaryTags: string[];
  customizations: Customization[];
  imageUrl: string;
  calories: number;
  servingSize: string;
  dailyAvailability: DailyAvailability;
  isSpecial: boolean;
  stockLimit: number;
  menuType: string;
} 