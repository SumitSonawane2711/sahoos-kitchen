import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Leaf, Flame, Star, Utensils } from 'lucide-react';
import { breakfastDishes } from '@/data/breakfast';
import { lunchDishes } from '@/data/lunch';
import { dinnerDishes } from '@/data/dinner';
import { theme } from '@/data/site';
import { Skeleton } from '@/components/ui/skeleton';
import { Dish } from '@/types/dish';

// Combine all dishes
const allDishes = [...breakfastDishes, ...lunchDishes, ...dinnerDishes];

// Generate static paths for all dishes
export async function generateStaticParams() {
  return allDishes.map((dish) => ({
    id: dish.id,
  }));
}

// Skeleton component for dish detail
function DishDetailSkeleton() {
  return (
    <div className="min-h-screen bg-gray-50 py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Skeleton className="h-10 w-32 mb-8" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Skeleton className="h-[400px] lg:h-[500px] rounded-2xl" />
          <div className="space-y-6">
            <div className="flex gap-2">
              <Skeleton className="h-6 w-16" />
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-6 w-16" />
            </div>
            <Skeleton className="h-10 w-3/4" />
            <Skeleton className="h-6 w-full" />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-24" />
              ))}
            </div>
            <Skeleton className="h-8 w-1/4" />
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton key={i} className="h-6 w-20" />
              ))}
            </div>
            <Skeleton className="h-12 w-32" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DishDetail({ params }: { params: { id: string } }) {
  const dish = allDishes.find(d => d.id === params.id);

  if (!dish) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link href="/menu">
          <Button
            variant="ghost"
            className="mb-8"
          >
            ← Back to Menu
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src={dish.imageUrl}
              alt={dish.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVigAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAkLzUvLy0vLzU1NS0vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLz/2wBDAR0dHh4eHRoaHSQtJSAkLzUvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
          </div>

          {/* Content Section */}
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              {dish.isSpecial && (
                <Badge style={{ backgroundColor: theme.colors.accent }}>Special</Badge>
              )}
              {dish.dietaryTags.includes('Vegetarian') && (
                <Badge className="bg-green-500">
                  <Leaf className="h-3 w-3 mr-1" />
                  Vegetarian
                </Badge>
              )}
              {dish.dietaryTags.includes('Spicy') && (
                <Badge className="bg-red-500">
                  <Flame className="h-3 w-3 mr-1" />
                  Spicy
                </Badge>
              )}
            </div>

            <h1 
              className="text-3xl lg:text-4xl font-bold mb-4"
              style={{ 
                color: theme.colors.primary,
                fontFamily: theme.fonts.heading 
              }}
            >
              {dish.name}
            </h1>

            <p className="text-lg text-gray-600 mb-6" style={{ fontFamily: theme.fonts.body }}>
              {dish.description}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <Clock className="h-5 w-5 mb-2 text-gray-500" />
                <p className="text-sm text-gray-500">Prep Time</p>
                <p className="font-semibold">{dish.prepTime} mins</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <Utensils className="h-5 w-5 mb-2 text-gray-500" />
                <p className="text-sm text-gray-500">Calories</p>
                <p className="font-semibold">{dish.calories} cal</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <Star className="h-5 w-5 mb-2 text-gray-500" />
                <p className="text-sm text-gray-500">Category</p>
                <p className="font-semibold">{dish.category || dish.menuType}</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-2xl font-bold mb-2" style={{ color: theme.colors.primary }}>
                  ₹{dish.price}
                </p>
                <p className="text-sm text-gray-500">Price</p>
              </div>
            </div>

            {/* Customizations */}
            {dish.customizations && dish.customizations.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-3" style={{ color: theme.colors.primary }}>
                  Customizations
                </h2>
                <div className="flex flex-wrap gap-2">
                  {dish.customizations.map((customization, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="bg-white"
                    >
                      {customization.name} (+₹{customization.price})
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Dietary Tags */}
            {dish.dietaryTags && dish.dietaryTags.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-3" style={{ color: theme.colors.primary }}>
                  Dietary Information
                </h2>
                <div className="flex flex-wrap gap-2">
                  {dish.dietaryTags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="bg-white"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Order Button */}
            <Button
              size="lg"
              className="w-full sm:w-auto"
              style={{
                backgroundColor: theme.colors.secondary,
                color: theme.colors.primary
              }}
            >
              Add to Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 