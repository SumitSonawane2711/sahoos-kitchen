"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Clock, Star, Utensils } from 'lucide-react';
import { useInterval } from '@/hooks/use-interval';
import { heroImages, features } from '@/data/hero';
import { theme } from '@/data/site';
import Link from 'next/link';

const HeroSection = () => {
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);

  const scrollToNext = () => {
    if (api) {
      api.scrollNext();
    }
  };

  // Auto-scroll every 5 seconds
  useInterval(() => {
    scrollToNext();
  }, 5000);

  const handleSelect = () => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  };

  useEffect(() => {
    if (!api) return;

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  // Map icon names to Lucide components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'utensils':
        return <Utensils className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />;
      case 'star':
        return <Star className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />;
      case 'clock':
        return <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />;
      default:
        return null;
    }
  };

  return (
    <div className="relative w-full h-[450px] sm:h-[500px] md:h-[550px] lg:h-[550px]">
      <div className="w-full h-full relative">
        <Carousel
          className="w-full h-full"
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="h-full">
            {heroImages.map((image, index) => (
              <CarouselItem key={image.id} className="h-full">
                <div className="relative w-full h-[450px] sm:h-[500px] md:h-[550px] lg:h-[550px]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="w-full h-full object-cover"
                    priority={index === 0}
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-black/70" />
                  {/* <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
                    <div>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">{image.title}</h2>
                      <p className="text-sm sm:text-base md:text-lg opacity-90">{image.description}</p>
                    </div>
                  </div> */}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Carousel Navigation */}
          <div className="absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-2 sm:gap-3 z-10">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${current === index ? "bg-secondary w-4 sm:w-6" : "bg-white/50 hover:bg-white"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="absolute z-50 top-1/2 hidden sm:flex left-14 right-14 justify-between -translate-y-1/2 z-10">
            <CarouselPrevious className="bg-white/20 backdrop-blur-sm hover:bg-secondary/80 text-white border-none h-8 w-8 sm:h-10 sm:w-10" />
            <CarouselNext className="bg-white/20 backdrop-blur-sm hover:bg-secondary/80 text-white border-none h-8 w-8 sm:h-10 sm:w-10" />
          </div>
        </Carousel>
      </div>

      {/* Main Content */}
      <div className="absolute inset-0 z-10 flex flex-col">
        {/* Top Section */}
        <div className="flex-1 flex items-center justify-center text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-4xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-6" style={{ fontFamily: theme.fonts.heading }}>
              Welcome to <span className="text-secondary">Sahoos</span> Kitchen
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-5 sm:mb-8 max-w-2xl mx-auto" style={{ fontFamily: theme.fonts.body }}>
              Experience the authentic taste of traditional cuisine in a modern setting
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href={'/menu'}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-white px-5 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-primary-dark transition flex items-center justify-center gap-2"
                  style={{ backgroundColor: theme.colors.primary }}
                >
                  View Menu <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
              </Link>

              <Link href={'/weekly-menu'}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-secondary text-primary px-5 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-secondary-dark transition"
                  style={{ backgroundColor: theme.colors.secondary, color: theme.colors.primary }}
                >
                  Subscriptions
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Cards */}
      <div className="absolute -bottom-20 sm:-bottom-16 md:-bottom-12 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="bg-white/90 backdrop-blur-sm border-none shadow-xl hover:shadow-2xl transition-shadow">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="bg-accent/20 p-2 sm:p-3 rounded-full" style={{ backgroundColor: `${theme.colors.accent}20` }}>
                        {getIcon(feature.icon)}
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold" style={{ color: theme.colors.primary }}>{feature.title}</h3>
                        <p className="text-sm sm:text-base" style={{ color: theme.colors.muted }}>{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;