"use client";

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Search, Leaf, Flame, Clock, ArrowUpDown, Utensils, Filter, ChevronRight } from 'lucide-react';
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
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
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
    <Card className="overflow-hidden rounded-xl">
      <Skeleton className="h-36 w-full" />
      <CardContent className="p-3">
        <Skeleton className="h-5 w-3/4 mb-2" />
        <Skeleton className="h-3 w-full mb-3" />
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
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Link href={`/menu/${dish.id}`} className="h-full">
        <Card className="overflow-hidden hover:shadow-md transition-shadow h-full rounded-xl border border-gray-100">
          <div className="relative h-32 sm:h-36">
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
            {/* Badges positioned better for mobile */}
            <div className="absolute top-1 right-1 flex flex-wrap gap-1">
              {dish.isSpecial && (
                <Badge style={{ backgroundColor: theme.colors.accent, fontSize: '0.65rem', padding: '0 0.4rem' }}>
                  Special
                </Badge>
              )}
              {dish.subcategory === 'Veg' && (
                <Badge className="bg-green-500" style={{ fontSize: '0.65rem', padding: '0 0.4rem' }}>
                  <Leaf className="h-2.5 w-2.5 mr-0.5" />
                  Veg
                </Badge>
              )}
              {dish.dietaryTags.includes('Spicy') && (
                <Badge className="bg-red-500" style={{ fontSize: '0.65rem', padding: '0 0.4rem' }}>
                  <Flame className="h-2.5 w-2.5 mr-0.5" />
                  Spicy
                </Badge>
              )}
            </div>
            {/* Menu Type Badge */}
            <Badge
              className="absolute top-1 left-1"
              style={{
                backgroundColor: theme.colors.primary,
                color: 'white',
                fontSize: '0.65rem',
                padding: '0 0.4rem'
              }}
            >
              {dish.menuType}
            </Badge>
          </div>
          <CardContent className="p-3">
            <h3 className="text-base font-semibold mb-1 line-clamp-1" style={{ color: theme.colors.primary }}>
              {dish.name}
            </h3>
            <p className="text-xs text-gray-600 mb-2 line-clamp-2 h-8">
              {dish.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-base font-bold" style={{ color: theme.colors.primary }}>
                ₹{dish.price}
              </span>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <Clock className="h-3 w-3" />
                <span>{dish.prepTime}m</span>
                <span>•</span>
                <span>{dish.calories}cal</span>
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
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

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

  // Function to calculate active filters count
  const getActiveFiltersCount = () => {
    let count = 0;
    if (selectedMealTime !== 'all') count++;
    if (selectedSubcategory !== 'all') count++;
    if (selectedDietaryPreference !== 'all') count++;
    return count;
  };

  // Handle applying filters from drawer
  const applyFilters = () => {
    setIsFilterDrawerOpen(false);
  };

  // Handle resetting filters
  const resetFilters = () => {
    setSelectedMealTime('all');
    setSelectedSubcategory('all');
    setSelectedDietaryPreference('all');
    setSortOption('name-asc');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-32 ">
      {/* Fixed header and search for mobile */}
      <div className="sticky top-0 z-10 bg-white shadow-sm px-3 pt-3 pb-2 mb-4 sm:mb-0 sm:relative sm:shadow-none sm:px-0 sm:pt-0 sm:pb-0">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-2xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 sm:text-center"
          style={{
            color: theme.colors.primary,
            fontFamily: theme.fonts.heading
          }}
        >
          Our Menu
        </motion.h1>
        {/* Desktop header and description - hidden on mobile */}
        <div className="hidden sm:block text-center mb-10">
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

        <div className="sm:hidden flex mx-6 items-center gap-2 mb-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 py-5 h-10 text-sm border-gray-200 rounded-full"
            />
          </div>

          <Drawer open={isFilterDrawerOpen} onOpenChange={setIsFilterDrawerOpen}>
            <DrawerTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full h-10 w-10 p-0 flex items-center justify-center relative border-gray-200"
              >
                <Filter className="h-5 w-5" />
                {getActiveFiltersCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getActiveFiltersCount()}
                  </span>
                )}
              </Button>
            </DrawerTrigger>
            <DrawerContent className="px-4 pb-6">
              <DrawerHeader className="px-0 pb-3">
                <DrawerTitle>Filters</DrawerTitle>
                <DrawerDescription>
                  Customize your menu view
                </DrawerDescription>
              </DrawerHeader>

              {/* Meal Time Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2">Meal Time</h3>
                <div className="flex flex-wrap gap-2">
                  {mealTimeCategories.map((category) => (
                    <Button
                      key={category.id}
                      onClick={() => setSelectedMealTime(category.id)}
                      variant={selectedMealTime === category.id ? 'default' : 'outline'}
                      size="sm"
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

              {/* Dietary Preference Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2">Dietary Preference</h3>
                <Select value={selectedDietaryPreference} onValueChange={setSelectedDietaryPreference}>
                  <SelectTrigger className="w-full">
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
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2">Cuisine Type</h3>
                <Select value={selectedSubcategory} onValueChange={setSelectedSubcategory}>
                  <SelectTrigger className="w-full">
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

              {/* Sort Options */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2">Sort By</h3>
                <Select value={sortOption} onValueChange={setSortOption}>
                  <SelectTrigger className="w-full">
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

              <DrawerFooter className="px-0 pt-2 flex-row gap-3">
                <Button variant="outline" onClick={resetFilters} className="flex-1">
                  Reset
                </Button>
                <Button onClick={applyFilters} className="flex-1" style={{ backgroundColor: theme.colors.primary }}>
                  Apply
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>

      <div className="px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">


        {/* Desktop Search and Filter Section - hidden on mobile */}
        <div className="hidden sm:block mb-8 space-y-4">
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

          {/* Desktop Meal Time Filter */}
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <DishCardSkeleton key={index} />
            ))}
          </div>
        ) : (
          <div className="space-y-6 sm:space-y-12">
            {/* Vegetarian Section */}
            {vegDishes.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-6">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Leaf className="h-4 w-4 sm:h-6 sm:w-6 text-green-500" />
                    <h2 className="text-lg sm:text-2xl font-semibold" style={{ color: theme.colors.primary }}>
                      Vegetarian
                    </h2>
                    <Badge className="ml-1 sm:ml-2 bg-green-100 text-green-800 text-xs">
                      {vegDishes.length}
                    </Badge>
                  </div>
                  <Button variant="ghost" size="sm" className="text-xs sm:text-sm">
                    View All <ChevronRight className="h-3 w-3 ml-1" />
                  </Button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
                  {vegDishes.slice(0, 8).map((dish) => (
                    <DishCard key={dish.id} dish={dish} />
                  ))}
                </div>
              </div>
            )}

            {/* Non-Vegetarian Section */}
            {nonVegDishes.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-6">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Utensils className="h-4 w-4 sm:h-6 sm:w-6 text-red-500" />
                    <h2 className="text-lg sm:text-2xl font-semibold" style={{ color: theme.colors.primary }}>
                      Non-Veg
                    </h2>
                    <Badge className="ml-1 sm:ml-2 bg-red-100 text-red-800 text-xs">
                      {nonVegDishes.length}
                    </Badge>
                  </div>
                  <Button variant="ghost" size="sm" className="text-xs sm:text-sm">
                    View All <ChevronRight className="h-3 w-3 ml-1" />
                  </Button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
                  {nonVegDishes.slice(0, 8).map((dish) => (
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
            <Button
              onClick={resetFilters}
              variant="outline"
              className="mt-4"
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}