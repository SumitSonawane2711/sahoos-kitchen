"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Calendar, Clock, Users, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { subscriptionPlans } from '@/data/subscriptions';
import { theme } from '@/data/site';

export default function SubscriptionsPage() {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

  const weekDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

  return (
    <div className="min-h-screen bg-gray-50 py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
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
            Weekly Subscription Plans
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: theme.fonts.body }}
          >
            Enjoy hassle-free meal planning with our flexible subscription options. Choose from various plans designed to fit your lifestyle and preferences.
          </motion.p>
        </div>

        {/* Plan Features Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center p-6 bg-white rounded-lg shadow-sm"
          >
            <Calendar className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2" style={{ color: theme.colors.primary }}>
              Weekly Menu Rotation
            </h3>
            <p className="text-gray-600">
              Enjoy different dishes every day with our carefully curated weekly menus
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center p-6 bg-white rounded-lg shadow-sm"
          >
            <Clock className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2" style={{ color: theme.colors.primary }}>
              Flexible Timings
            </h3>
            <p className="text-gray-600">
              Choose your preferred delivery slots for breakfast, lunch, and dinner
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center p-6 bg-white rounded-lg shadow-sm"
          >
            <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2" style={{ color: theme.colors.primary }}>
              Customizable Portions
            </h3>
            <p className="text-gray-600">
              Plans available for individuals, couples, and families
            </p>
          </motion.div>
        </div>

        {/* Subscription Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {subscriptionPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Card 
                className={`relative h-full cursor-pointer transition-all hover:shadow-lg ${
                  selectedPlan === plan.id ? 'ring-2 ring-primary shadow-lg' : ''
                } ${plan.popularChoice ? 'border-2 border-primary shadow-xl' : ''}`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popularChoice && (
                  <Badge
                    className="absolute -top-3 left-1/2 transform -translate-x-1/2"
                    style={{ backgroundColor: theme.colors.accent }}
                  >
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center p-6">
                  <h3 
                    className="text-2xl font-bold mb-2"
                    style={{ color: theme.colors.primary }}
                  >
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="text-3xl font-bold mb-2" style={{ color: theme.colors.primary }}>
                    ₹{plan.price}
                    <span className="text-base font-normal text-gray-600">/week</span>
                  </div>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-green-500" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full"
                    style={{
                      backgroundColor: plan.popularChoice ? theme.colors.secondary : theme.colors.primary,
                      color: plan.popularChoice ? theme.colors.primary : 'white'
                    }}
                  >
                    Subscribe Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Weekly Menu Details */}
        {selectedPlan !== null && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-sm p-6 mb-16"
          >
            <h2 
              className="text-2xl font-bold mb-6"
              style={{ color: theme.colors.primary }}
            >
              Weekly Menu for {subscriptionPlans.find(p => p.id === selectedPlan)?.name}
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {weekDays.map((day) => (
                <AccordionItem key={day} value={day}>
                  <AccordionTrigger className="text-lg font-semibold capitalize">
                    {day}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 pl-4">
                      {subscriptionPlans
                        .find(p => p.id === selectedPlan)
                        ?.menuRotation[day as keyof typeof subscriptionPlans[0]['menuRotation']]
                        .map((meal, index) => (
                          <li key={index} className="text-gray-600">
                            • {meal}
                          </li>
                        ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        )}

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 
            className="text-2xl font-bold mb-6 text-center"
            style={{ color: theme.colors.primary }}
          >
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>How does the weekly subscription work?</AccordionTrigger>
              <AccordionContent>
                Our weekly subscription service provides you with pre-planned meals delivered to your doorstep according to your chosen plan. You can select from different meal plans that best suit your needs, and we'll take care of the rest.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Can I customize my meal preferences?</AccordionTrigger>
              <AccordionContent>
                Yes, you can customize your meals based on your dietary preferences and restrictions. We offer vegetarian and non-vegetarian options, and you can specify any allergies or preferences when you subscribe.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What are the delivery timings?</AccordionTrigger>
              <AccordionContent>
                We deliver meals according to your selected time slots. Breakfast is delivered between 7-9 AM, lunch between 12-2 PM, and dinner between 7-9 PM. You can choose your preferred slots during subscription.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Can I pause or cancel my subscription?</AccordionTrigger>
              <AccordionContent>
                Yes, you can pause or cancel your subscription at any time. We require a 24-hour notice for any changes to your delivery schedule.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
} 