"use client";

import { weeklyComboMenu, breakfastSubscription } from "@/data/weeklyMenu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Calendar, Clock, ArrowRight, Leaf, Drumstick, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from 'framer-motion';
import { useRef } from "react";
import { theme } from '@/data/site';

// Default image for meals when no image is provided
const DEFAULT_MEAL_IMAGE = "/images/default-meal.jpg";

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

export default function WeeklyMenuPreview() {
  // Get only the first 4 days for the preview (including Sunday)
  const previewComboMenu = weeklyComboMenu.weeklyCombo.slice(0, 4);
  const previewBreakfast = breakfastSubscription.daily.slice(0, 2);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="  pb-16 md:pb-24 bg-white" aria-labelledby="weekly-menu-title">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 id="weekly-menu-title" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{
            fontFamily: theme.fonts.heading,
            color: theme.colors.primary
          }}>
            Weekly Meal Plans
          </h2>
          <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: theme.colors.secondary }}></div>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{
            fontFamily: theme.fonts.body,
            color: theme.colors.muted
          }}>
            Discover our delicious weekly combos and breakfast subscriptions, prepared fresh daily with premium ingredients
          </p>
        </motion.div>



        {/* Two column layout for weekly combo and breakfast */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Weekly Combos Preview */}
          <div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: theme.colors.primary }}>
              <Calendar className="h-5 w-5 inline-block mr-2" /> Weekly Combos
            </h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {previewComboMenu.map((combo) => (
                <motion.div key={combo.day} variants={itemVariants}>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 group overflow-hidden">
                        <div className="relative h-40">
                          <Image
                            src={combo.dishes[0].imageUrl || DEFAULT_MEAL_IMAGE}
                            alt={`${combo.day}'s special menu featuring vegetarian and non-vegetarian options from Sahoo's Kitchen`}
                            title={`${combo.day}'s special menu - Click to see details`}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <h4 className="text-white font-semibold text-lg mb-1">{combo.day}'s Special</h4>
                            <div className="flex gap-2">
                              <Badge className="bg-green-100/90 text-green-800">Veg</Badge>
                              <Badge className="bg-red-100/90 text-red-800">Non-Veg</Badge>
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
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </motion.div>
              ))}
            </motion.div>

            {/* <Link href="/weekly-menu" className="text-center block mt-4">
              <Button variant="link" style={{ color: theme.colors.primary }}>
                See all weekly combos
                <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </Link> */}
          </div>

          {/* Breakfast Subscription Preview */}
          <div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: theme.colors.primary }}>
              <Clock className="h-5 w-5 inline-block mr-2" /> Breakfast Plans
            </h3>
            <Card className="border" style={{ borderColor: theme.colors.secondary }}>
              <CardContent className="p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-medium" style={{ color: theme.colors.primary }}>Daily Fresh Breakfast</h4>
                  <Badge style={{
                    backgroundColor: `${theme.colors.secondary}20`,
                    color: theme.colors.primary
                  }}>From ₹100/day</Badge>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {previewBreakfast.map((item) => (
                    <div key={item.name} className="flex flex-col">
                      <span className="text-sm font-medium" style={{ color: theme.colors.primary }}>{item.name}</span>
                      <span className="text-xs" style={{ color: theme.colors.muted }}>{item.description}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-green-50 p-2 rounded-md border border-green-100">
                  <div className="flex justify-between items-center">
                    <span className="text-green-700 text-sm">Monthly Plan</span>
                    <span className="text-green-800 font-medium">Save ₹{breakfastSubscription.monthly.savings}</span>
                  </div>
                </div>

                <Link href="/weekly-menu" className="block">
                  <Button className="w-full text-white" style={{ backgroundColor: theme.colors.secondary }}>
                    Subscribe Now
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <div className="flex flex-col md:flex-row justify-end items-center my-10">
              <Link href="/weekly-menu" className="mt-4 md:mt-0">
                <Button variant="outline" className="group" style={{
                  borderColor: theme.colors.secondary,
                  color: theme.colors.primary
                }}>
                  View Full Menu
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
} 