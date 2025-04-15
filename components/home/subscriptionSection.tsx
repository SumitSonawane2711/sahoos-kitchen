"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { subscriptionPlans } from '@/data/subscriptions';
import { theme } from '@/data/site';
import Link from 'next/link';

export default function SubscriptionSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ 
              color: theme.colors.primary,
              fontFamily: theme.fonts.heading 
            }}
          >
            Weekly Subscription Plans
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: theme.fonts.body }}
          >
            Choose the perfect meal plan for your needs with our flexible subscription options
          </motion.p>
        </div>

        {/* Subscription Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {subscriptionPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`relative h-full ${plan.popularChoice ? 'border-2 border-primary shadow-xl' : ''}`}>
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
                  <Link href="/subscriptions" className="block">
                    <Button 
                      className="w-full"
                      style={{
                        backgroundColor: plan.popularChoice ? theme.colors.secondary : theme.colors.primary,
                        color: plan.popularChoice ? theme.colors.primary : 'white'
                      }}
                    >
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="/subscriptions">
            <Button
              size="lg"
              variant="outline"
              className="group"
            >
              View All Plan Details
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 