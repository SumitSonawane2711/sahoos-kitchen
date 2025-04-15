"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Leaf, Flame, Clock, ArrowUpDown, Utensils } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from 'next/image';
import Link from 'next/link';
import { breakfastDishes } from '@/data/breakfast';
import { lunchDishes } from '@/data/lunch';
import { dinnerDishes } from '@/data/dinner';
import { theme } from '@/data/site';
import { Skeleton } from '@/components/ui/skeleton';
import { Dish } from '@/types/dish';

// Combine all dishes
const allDishes = [...breakfastDishes, ...lunchDishes, ...dinnerDishes];

// Define meal time categories
const mealTimeCategories = [
  { id: 'all', name: 'All' },
  { id: 'Breakfast', name: 'Breakfast' },
  { id: 'Lunch', name: 'Lunch' },
  { id: 'Dinner', name: 'Dinner' }
];

// Define sort options
const sortOptions = [
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name-asc', label: 'Name: A to Z' },
  { value: 'name-desc', label: 'Name: Z to A' },
  { value: 'calories-asc', label: 'Calories: Low to High' },
  { value: 'calories-desc', label: 'Calories: High to Low' }
];

// Define subcategories
const subcategories = [
  { id: 'all', name: 'All Cuisines' },
  { id: 'Odisa Special', name: 'Odisa Special' },
  { id: 'Kerala Special', name: 'Kerala Special' }
];

// Define dietary preferences
const dietaryPreferences = [
  { id: 'all', name: 'All Types' },
  { id: 'Veg', name: 'Vegetarian' },
  { id: 'Non-Veg', name: 'Non-Vegetarian' }
];

// Skeleton component for dish cards
function DishCardSkeleton() {
  return (
    <Card className="overflow-hidden">
      <Skeleton className="h-48 w-full" />
      <CardContent className="p-4">
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-full mb-3" />
        <Skeleton className="h-4 w-1/2" />
      </CardContent>
    </Card>
  );
}

// DishCard component
function DishCard({ dish }: { dish: Dish }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link href={`/menu/${dish.id}`}>
        <Card className="overflow-hidden hover:shadow-lg transition-shadow">
          <div className="relative h-48">
            <Image
              src={dish.imageUrl}
              alt={dish.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVigAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAkLzUvLy0vLzU1NS0vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLz/2wBDAR0dHh4eHRoaHSQtJSAkLzUvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
            {/* Badges */}
            <div className="absolute top-2 right-2 flex gap-2">
              {dish.isSpecial && (
                <Badge style={{ backgroundColor: theme.colors.accent }}>Special</Badge>
              )}
              {dish.subcategory === 'Veg' && (
                <Badge className="bg-green-500">
                  <Leaf className="h-3 w-3 mr-1" />
                  Veg
                </Badge>
              )}
              {dish.dietaryTags.includes('Spicy') && (
                <Badge className="bg-red-500">
                  <Flame className="h-3 w-3 mr-1" />
                  Spicy
                </Badge>
              )}
            </div>
            {/* Menu Type Badge */}
            <Badge 
              className="absolute top-2 left-2"
              style={{ 
                backgroundColor: theme.colors.primary,
                color: 'white'
              }}
            >
              {dish.menuType}
            </Badge>
          </div>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-2" style={{ color: theme.colors.primary }}>
              {dish.name}
            </h3>
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
              {dish.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold" style={{ color: theme.colors.primary }}>
                ₹{dish.price}
              </span>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Clock className="h-4 w-4" />
                <span>{dish.prepTime} mins</span>
                <span>•</span>
                <span>{dish.calories} cal</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}

export default function MenuPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMealTime, setSelectedMealTime] = useState('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');
  const [selectedDietaryPreference, setSelectedDietaryPreference] = useState('all');
  const [sortOption, setSortOption] = useState('name-asc');
  const [filteredDishes, setFilteredDishes] = useState<Dish[]>(allDishes);
  const [isLoading, setIsLoading] = useState(true);

  // Sort dishes based on selected option
  const sortDishes = (dishes: Dish[]) => {
    return [...dishes].sort((a, b) => {
      switch (sortOption) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'calories-asc':
          return a.calories - b.calories;
        case 'calories-desc':
          return b.calories - a.calories;
        default:
          return 0;
      }
    });
  };

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let filtered = allDishes;

    // Filter by meal time
    if (selectedMealTime !== 'all') {
      filtered = filtered.filter(dish => dish.menuType === selectedMealTime);
    }

    // Filter by subcategory
    if (selectedSubcategory !== 'all') {
      filtered = filtered.filter(dish => dish.category === selectedSubcategory);
    }

    // Filter by dietary preference
    if (selectedDietaryPreference !== 'all') {
      filtered = filtered.filter(dish => {
        if (selectedDietaryPreference === 'Veg') {
          return dish.dietaryTags.includes('Vegetarian');
        } else if (selectedDietaryPreference === 'Non-Veg') {
          return !dish.dietaryTags.includes('Vegetarian');
        }
        return true;
      });
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(dish =>
        dish.name.toLowerCase().includes(query) ||
        dish.description.toLowerCase().includes(query) ||
        dish.subcategory.toLowerCase().includes(query) ||
        dish.dietaryTags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Sort filtered dishes
    setFilteredDishes(sortDishes(filtered));
  }, [selectedMealTime, selectedSubcategory, selectedDietaryPreference, searchQuery, sortOption]);

  // Update the dish categorization
  const vegDishes = filteredDishes.filter(dish => dish.dietaryTags.includes('Vegetarian'));
  const nonVegDishes = filteredDishes.filter(dish => !dish.dietaryTags.includes('Vegetarian'));

  return (
    <div className= "px-2 sm:px-10 min-h-screen bg-gray-50 py-12 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ 
              color: theme.colors.primary,
              fontFamily: theme.fonts.heading 
            }}
          >
            Our Menu
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: theme.fonts.body }}
          >
            Discover our wide range of authentic dishes, crafted with love and tradition
          </motion.p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full sm:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search dishes, ingredients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full"
              />
            </div>

            {/* Filter and Sort Options */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              {/* Dietary Preference Filter */}
              <div className="w-full sm:w-48">
                <Select value={selectedDietaryPreference} onValueChange={setSelectedDietaryPreference}>
                  <SelectTrigger>
                    <SelectValue placeholder="Dietary Preference" />
                  </SelectTrigger>
                  <SelectContent>
                    {dietaryPreferences.map((preference) => (
                      <SelectItem key={preference.id} value={preference.id}>
                        {preference.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Subcategory Filter */}
              <div className="w-full sm:w-48">
                <Select value={selectedSubcategory} onValueChange={setSelectedSubcategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Cuisine Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {subcategories.map((subcategory) => (
                      <SelectItem key={subcategory.id} value={subcategory.id}>
                        {subcategory.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Sort Dropdown */}
              <div className="w-full sm:w-48">
                <Select value={sortOption} onValueChange={setSortOption}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by..." />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Meal Time Filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            {mealTimeCategories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedMealTime(category.id)}
                variant={selectedMealTime === category.id ? 'default' : 'outline'}
                className="rounded-full"
                style={selectedMealTime === category.id ? {
                  backgroundColor: theme.colors.primary,
                  color: 'white'
                } : {}}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <DishCardSkeleton key={index} />
            ))}
          </div>
        ) : (
          <div className="space-y-12">
            {/* Vegetarian Section */}
            {vegDishes.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Leaf className="h-6 w-6 text-green-500" />
                  <h2 className="text-2xl font-semibold" style={{ color: theme.colors.primary }}>
                    Vegetarian Dishes
                  </h2>
                  <Badge className="ml-2 bg-green-100 text-green-800">
                    {vegDishes.length} items
                  </Badge>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {vegDishes.map((dish) => (
                    <DishCard key={dish.id} dish={dish} />
                  ))}
                </div>
              </div>
            )}

            {/* Non-Vegetarian Section */}
            {nonVegDishes.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Utensils className="h-6 w-6 text-red-500" />
                  <h2 className="text-2xl font-semibold" style={{ color: theme.colors.primary }}>
                    Non-Vegetarian Dishes
                  </h2>
                  <Badge className="ml-2 bg-red-100 text-red-800">
                    {nonVegDishes.length} items
                  </Badge>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {nonVegDishes.map((dish) => (
                    <DishCard key={dish.id} dish={dish} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* No Results Message */}
        {!isLoading && filteredDishes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">
              No dishes found matching your search criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}