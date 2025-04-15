export * from './hero';
export * from './menu';
export * from './offers';
export * from './testimonials';
export * from './site';

export type { Category, Dish } from './menu';
export { categories, dishes } from './menu';
export { heroImages, features } from './hero';
export { testimonials } from './testimonials';
export { specialOffers, promotionalBanners } from './offers';
export { theme, siteConfig } from './site';

// Types for menu items
export type MenuItem = {
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

// Types for hero section
export type HeroImage = {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
};

export type Feature = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

// Types for testimonials
export type Testimonial = {
  id: number;
  name: string;
  location: string;
  image: string;
  quote: string;
  rating: number;
};

// Types for special offers
export type SpecialOffer = {
  id: number;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  isPopular: boolean;
  includes: string[];
};

export type PromotionalBanner = {
  id: number;
  title: string;
  description: string;
  image: string;
  validDays: string;
}; 