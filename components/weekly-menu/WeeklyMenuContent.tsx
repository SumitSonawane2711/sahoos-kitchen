"use client";

import { weeklyComboMenu, breakfastSubscription } from "@/data/weeklyMenu";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Calendar, Clock, Phone, ShoppingBag, Leaf, Drumstick, X } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { theme } from '@/data/site';
import { FoodItemSchema, BreadcrumbSchema } from "@/components/seo/SchemaMarkup";

// Default image for meals when no image is provided
const DEFAULT_MEAL_IMAGE = "/images/default-meal.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default function WeeklyMenuContent() {
  const weeklyRef = useRef(null);
  const breakfastRef = useRef(null);
  const weeklyInView = useInView(weeklyRef, { once: true, amount: 0.2 });
  const breakfastInView = useInView(breakfastRef, { once: true, amount: 0.2 });

  return (
    <>
      {/* Structured Data */}
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://sahooskitchen.com" },
          { name: "Weekly Menu", url: "https://sahooskitchen.com/weekly-menu" }
        ]}
      />
      {/* First featured dish schema for SEO */}
      {weeklyComboMenu.weeklyCombo[0] && (
        <FoodItemSchema
          name={`${weeklyComboMenu.weeklyCombo[0].day}'s Special Veg Combo`}
          description={weeklyComboMenu.weeklyCombo[0].dishes[0].items.join(", ")}
          image={weeklyComboMenu.weeklyCombo[0].dishes[0].imageUrl || DEFAULT_MEAL_IMAGE}
          price={weeklyComboMenu.weeklyCombo[0].dishes[0].price}
          priceCurrency="INR"
          isVegetarian={true}
          isSpecial={true}
        />
      )}

      <div className="py-32 bg-gradient-to-b from-white to-amber-50">

        <div className="container mx-auto px-4">

          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center my-16"
            style={{
              fontFamily: theme.fonts.heading,
              color: theme.colors.primary,
            }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">Weekly Combo Meals</h1>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
            <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
              Choose from our weekly combo meals and enjoy a variety of dishes every week.
            </p>
          </motion.div>

          {/* Weekly Combo Section */}
          <section className="mb-12" ref={weeklyRef}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={weeklyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-2xl font-semibold mb-6 flex items-center gap-2" style={{
                fontFamily: theme.fonts.heading,
                color: theme.colors.primary
              }}>
                <Calendar className="h-5 w-5" /> Weekly Combo Meals
              </h1>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={weeklyInView ? "visible" : "hidden"}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {weeklyComboMenu.weeklyCombo.map((combo) => (
                <motion.div key={combo.day} variants={itemVariants}>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 group overflow-hidden">
                        <div className="relative h-48">
                          <Image
                            src={combo.dishes[0].imageUrl || DEFAULT_MEAL_IMAGE}
                            alt={`${combo.day} meals`}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <h4 className="text-white font-semibold text-lg mb-2">{combo.day}'s Special</h4>
                            <div className="flex gap-2">
                              <Badge className="bg-green-100/90 text-green-800 flex items-center gap-1">
                                <Leaf className="h-3 w-3" /> From ₹{combo.dishes[0].price}
                              </Badge>
                              <Badge className="bg-red-100/90 text-red-800 flex items-center gap-1">
                                <Drumstick className="h-3 w-3" /> From ₹{combo.dishes[1].price}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px]">
                      <DialogHeader>
                        <div className="flex justify-between items-center">
                          <DialogTitle className="text-2xl" style={{ color: theme.colors.primary }}>
                            {combo.day}'s Special Menu
                          </DialogTitle>
                          <DialogClose className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center">
                            <X className="h-4 w-4" />
                          </DialogClose>
                        </div>
                      </DialogHeader>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        {/* Veg Option */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Leaf className="h-4 w-4 text-green-600" />
                            <h4 className="font-medium">Veg Special</h4>
                            <Badge className="ml-auto" style={{
                              backgroundColor: `${theme.colors.secondary}20`,
                              color: theme.colors.primary
                            }}>₹{combo.dishes[0].price}</Badge>
                          </div>
                          <div className="relative h-32 rounded-md overflow-hidden">
                            <Image
                              src={combo.dishes[0].imageUrl || DEFAULT_MEAL_IMAGE}
                              alt={`${combo.day} veg meal`}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <ul className="text-sm space-y-1 text-gray-600">
                            {combo.dishes[0].items.map((item, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-amber-500 mr-2">•</span> {item}
                              </li>
                            ))}
                          </ul>
                          <Button
                            className="w-full text-white"
                            style={{ backgroundColor: theme.colors.secondary }}
                          >
                            <Phone className="mr-2 h-4 w-4" /> Contact to Order
                          </Button>
                        </div>
                        {/* Non-Veg Option */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Drumstick className="h-4 w-4 text-red-600" />
                            <h4 className="font-medium">Non-Veg Special</h4>
                            <Badge className="ml-auto" style={{
                              backgroundColor: `${theme.colors.secondary}20`,
                              color: theme.colors.primary
                            }}>₹{combo.dishes[1].price}</Badge>
                          </div>
                          <div className="relative h-32 rounded-md overflow-hidden">
                            <Image
                              src={combo.dishes[1].imageUrl || DEFAULT_MEAL_IMAGE}
                              alt={`${combo.day} non-veg meal`}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <ul className="text-sm space-y-1 text-gray-600">
                            {combo.dishes[1].items.map((item, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-amber-500 mr-2">•</span> {item}
                              </li>
                            ))}
                          </ul>
                          <Button
                            className="w-full text-white"
                            style={{ backgroundColor: theme.colors.secondary }}
                          >
                            <Phone className="mr-2 h-4 w-4" /> Contact to Order
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Breakfast Subscription Section */}
          <section ref={breakfastRef}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={breakfastInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2" style={{
                fontFamily: theme.fonts.heading,
                color: theme.colors.primary
              }}>
                <Clock className="h-5 w-5" /> Breakfast Subscription Plans
              </h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={breakfastInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {breakfastSubscription.daily.map((item, index) => (
                <motion.div key={item.name} variants={itemVariants}>
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                    {item.imageUrl && (
                      <div className="relative h-48">
                        <Image
                          src={item.imageUrl || DEFAULT_MEAL_IMAGE}
                          alt={item.name}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <Badge
                          className="absolute bottom-4 right-4"
                          style={{
                            backgroundColor: `${theme.colors.secondary}20`,
                            color: "white"
                          }}
                        >
                          ₹{item.price}/day
                        </Badge>
                      </div>
                    )}
                    <CardContent className="p-4">
                      <h3 className="text-lg font-semibold mb-2" style={{ color: theme.colors.primary }}>{item.name}</h3>
                      <p className="text-sm mb-4" style={{ color: theme.colors.muted }}>{item.description}</p>
                      <Button
                        className="w-full text-white"
                        style={{ backgroundColor: theme.colors.secondary }}
                      >
                        <ShoppingBag className="mr-2 h-4 w-4" /> Subscribe Now
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* Monthly Subscription Card */}
              <motion.div variants={itemVariants}>
                <Card
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full group"
                  style={{
                    backgroundColor: `${theme.colors.secondary}10`,
                    borderColor: theme.colors.secondary
                  }}
                >
                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="text-xl font-semibold mb-2" style={{ color: theme.colors.primary }}>Monthly Subscription</h3>
                    <p className="text-sm mb-4" style={{ color: theme.colors.muted }}>
                      Subscribe for a month and save on your daily breakfast
                    </p>
                    <div className="bg-green-50 p-3 rounded-lg border border-green-100 mb-4">
                      <div className="flex justify-between items-center">
                        <span className="text-green-700">Monthly Savings</span>
                        <span className="text-green-800 font-semibold">₹{breakfastSubscription.monthly.savings}</span>
                      </div>
                    </div>
                    <Button
                      className="w-full text-white mt-auto"
                      style={{ backgroundColor: theme.colors.secondary }}
                    >
                      <ShoppingBag className="mr-2 h-4 w-4" /> Get Monthly Plan
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </section>
        </div>
      </div>
    </>
  );
} 