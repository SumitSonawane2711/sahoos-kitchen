"use client";

import { breakfastDishes } from "@/data/breakfast";
import { lunchDishes } from "@/data/lunch";
import { dinnerDishes } from "@/data/dinner";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useRef, useMemo, useState, useEffect } from "react";
import Image from "next/image";
import { theme } from "@/data/site";
import { Clock, Utensils } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { FoodItemSchema } from "@/components/seo/SchemaMarkup";

// Default image for dishes
const DEFAULT_DISH_IMAGE = "/images/default-dish.jpg";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

function LazyImage({ src, alt }: { src: string; alt: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  // Use IntersectionObserver directly to ensure one-time trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Disconnect immediately to prevent re-triggering
        }
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imageRef} className="relative h-full w-full">
      {isVisible ? (
        <>
          <Image
            src={src || DEFAULT_DISH_IMAGE}
            alt={alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gray-200" />
      )}
    </div>
  );
}

function DishCard({ dish }: { dish: any }) {
  return (
    <motion.div variants={itemVariants}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group h-full">
        <div className="relative h-48 bg-gray-100">
          <LazyImage src={dish.imageUrl} alt={dish.name} />
          <div className="absolute top-4 right-4 z-10">
            <Badge
              className="text-white bg-secondary/90"
            >
              {dish.menuType}
            </Badge>
          </div>
          <div className="absolute bottom-4 left-4 right-4 z-10">
            <h3 className="text-white font-semibold text-lg mb-1">{dish.name}</h3>
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" /> {dish.prepTime} mins
              </span>
              <span className="flex items-center gap-1">
                <Utensils className="h-3 w-3" /> {dish.subcategory}
              </span>
            </div>
          </div>
        </div>
        <CardContent className="p-4">
          <p
            className="text-sm mb-4 line-clamp-2 text-muted-foreground"
          >
            {dish.description}
          </p>
          <div className="flex items-center justify-between">
            <span
              className="text-lg font-semibold text-primary"
            >
              ₹{dish.price}
            </span>
            <Button
              className="text-white bg-secondary"
            >
              Order Now
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function FeaturedDishes() {
  const sectionRef = useRef(null);
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  // One-time IntersectionObserver for the section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSectionVisible(true);
          observer.disconnect(); // Disconnect to prevent re-triggering
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Memoize special dishes
  const specialDishes = useMemo(() => {
    const specialBreakfast = breakfastDishes.filter((dish) => dish.isSpecial);
    const specialLunch = lunchDishes.filter((dish) => dish.isSpecial);
    const specialDinner = dinnerDishes.filter((dish) => dish.isSpecial);
    return [...specialBreakfast, ...specialLunch, ...specialDinner];
  }, []);

  return (
    <>
      {/* Add structured data for the first featured dish (if available) for SEO */}
      {specialDishes.length > 0 && (
        <FoodItemSchema
          name={specialDishes[0].name}
          description={specialDishes[0].description}
          image={specialDishes[0].imageUrl || DEFAULT_DISH_IMAGE}
          price={specialDishes[0].price}
          priceCurrency="INR"
          isVegetarian={specialDishes[0].subcategory === "Veg"}
          isSpecial={true}
        />
      )}
      
      <section 
        ref={sectionRef} 
        className="py-16 md:py-24 bg-white"
        aria-label="Featured Dishes"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isSectionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              style={{
                fontFamily: theme.fonts.heading,
                color: theme.colors.primary,
              }}
            >
              Featured Dishes
            </h2>
            <div
              className="w-24 h-1 mx-auto mb-6"
              style={{ backgroundColor: theme.colors.secondary }}
            ></div>
            <p
              className="text-base md:text-lg max-w-2xl mx-auto"
              style={{
                fontFamily: theme.fonts.body,
                color: theme.colors.muted,
              }}
            >
              Discover our chef's special selection of authentic traditional dishes,
              prepared with the finest ingredients
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isSectionVisible ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {specialDishes.length === 0
              ? Array(4).fill(0).map((_, index) => (
                  <Card key={index} className="overflow-hidden h-full">
                    <div className="relative h-48">
                      <Skeleton className="h-full w-full" />
                    </div>
                    <CardContent className="p-4">
                      <Skeleton className="h-4 w-3/4 mb-2" />
                      <Skeleton className="h-4 w-full mb-4" />
                      <div className="flex items-center justify-between">
                        <Skeleton className="h-6 w-20" />
                        <Skeleton className="h-10 w-28" />
                      </div>
                    </CardContent>
                  </Card>
                ))
              : specialDishes.map((dish) => (
                  <DishCard key={dish.id} dish={dish} />
                ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}