"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Users, Clock, Award, ChefHat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { theme } from '@/data/site';

const achievements = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "Happy Customers",
    value: "10K+",
    description: "Satisfied customers who love our food"
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Years of Experience",
    value: "15+",
    description: "Years of culinary excellence"
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Awards Won",
    value: "25+",
    description: "Recognition for our quality"
  },
  {
    icon: <ChefHat className="h-6 w-6" />,
    title: "Expert Chefs",
    value: "12",
    description: "Master chefs at your service"
  }
];

const StorySection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/restaurant-story.jpg"
                alt="Our Restaurant Story"
                fill
                className="object-cover"
              />
              <div 
                className="absolute inset-0"
                style={{ 
                  background: `linear-gradient(45deg, ${theme.colors.primary}40, transparent)` 
                }}
              />
            </div>
            {/* Decorative Elements */}
            <div 
              className="absolute -top-6 -left-6 h-24 w-24 rounded-full"
              style={{ backgroundColor: `${theme.colors.secondary}20` }}
            />
            <div 
              className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full"
              style={{ backgroundColor: `${theme.colors.primary}15` }}
            />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7 }}
          >
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              style={{ 
                fontFamily: theme.fonts.heading,
                color: theme.colors.primary 
              }}
            >
              Our Story
            </h2>
            <div 
              className="w-24 h-1 mb-6"
              style={{ backgroundColor: theme.colors.secondary }}
            />
            <p 
              className="text-lg mb-8"
              style={{ 
                fontFamily: theme.fonts.body,
                color: theme.colors.muted 
              }}
            >
              For over 15 years, Sahoo's Kitchen has been serving authentic traditional cuisine with a modern twist. Our journey began with a simple dream: to share our family's cherished recipes with the world while maintaining the highest standards of quality and service.
            </p>
            <p 
              className="text-lg mb-8"
              style={{ color: theme.colors.muted }}
            >
              Today, we continue to honor our culinary heritage while embracing innovation, creating memorable dining experiences for our guests. Every dish tells a story, and every meal is crafted with passion and dedication.
            </p>
            <Button 
              className="rounded-full px-8 py-6 text-lg mb-12"
              style={{ 
                backgroundColor: theme.colors.primary,
                color: '#ffffff'
              }}
            >
              Discover Our Menu
            </Button>

            {/* Statistics Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-2 gap-6"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center p-4 rounded-lg"
                  style={{ backgroundColor: `${theme.colors.primary}05` }}
                >
                  <div 
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4"
                    style={{ 
                      backgroundColor: theme.colors.secondary,
                      color: theme.colors.primary 
                    }}
                  >
                    {achievement.icon}
                  </div>
                  <h3 
                    className="text-2xl font-bold mb-1"
                    style={{ color: theme.colors.primary }}
                  >
                    {achievement.value}
                  </h3>
                  <p 
                    className="text-sm font-medium mb-1"
                    style={{ color: theme.colors.primary }}
                  >
                    {achievement.title}
                  </p>
                  <p 
                    className="text-xs"
                    style={{ color: theme.colors.muted }}
                  >
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;