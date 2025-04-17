"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Clock, Calendar, Tag, Percent } from 'lucide-react';
import Link from 'next/link';

const specialOffers = [
  {
    id: 1,
    title: "Weekend Dinner Buffet",
    description: "Enjoy our lavish buffet with over 30 dishes including starters, main courses, and desserts.",
    discount: "20% Off",
    validUntil: "Every Friday & Saturday",
    timing: "7:00 PM - 11:00 PM",
    image: "https://sahooskitchen.com/p1.JPG",
    color: "primary",
  },
  {
    id: 2,
    title: "Lunch Special Menu",
    description: "Experience a quick and delicious lunch with our special combo meals perfect for your midday break.",
    discount: "15% Off",
    validUntil: "Monday to Friday",
    timing: "12:00 PM - 3:00 PM",
    image: "https://sahooskitchen.com/menu/veg/dahi-kabab.JPG",
    color: "secondary",
  },
  {
    id: 3,
    title: "Family Celebration Package",
    description: "Special package for family celebrations including custom menu, cake, and dedicated service.",
    discount: "Free Dessert",
    validUntil: "Valid all days",
    timing: "Booking required",
    image: "https://sahooskitchen.com/menu/veg/dahi-wada.JPG",
    color: "accent",
  }
];

const SpecialOffersSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Animation variants
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section
      ref={sectionRef}
      className=" pt-12 sm:pt-0 bg-gradient-to-b from-white to-amber-50"
    >
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">Special Offers</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto text-base md:text-lg">
            Explore our limited-time offers and promotions designed to enhance your dining experience at Sahoos Kitchen.
          </p>
        </motion.div>

        {/* Offers Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {specialOffers.map((offer) => (
            <motion.div
              key={offer.id}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Image Section */}
                <div className="relative h-48 w-full">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 bg-${offer.color}/60 mix-blend-multiply`}></div>
                  <div className="absolute top-4 right-4 bg-white rounded-full py-1 px-3 flex items-center shadow-md">
                    <Percent className="text-red-500 h-4 w-4 mr-1" />
                    <span className="font-bold text-primary text-sm">{offer.discount}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-300">{offer.title}</h3>
                  <p className="text-gray-600 mb-5 text-sm">{offer.description}</p>

                  {/* Details */}
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-2 text-secondary" />
                      <span>{offer.validUntil}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-2 text-secondary" />
                      <span>{offer.timing}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link href="/contact">
                    <button className="mt-6 w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition-colors duration-300 flex items-center justify-center">
                      <Tag className="h-4 w-4 mr-2" />
                      Claim Offer
                    </button>
                  </Link>
                </div>

                {/* Decorative Element */}
                <div className="absolute -bottom-2 -right-2 h-16 w-16 bg-secondary/20 rounded-tl-3xl"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 max-w-4xl mx-auto bg-primary/10 rounded-2xl p-8 md:p-10 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">Stay Updated On Special Offers</h3>
          <p className="text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about our latest offers, seasonal menus, and exclusive events.
          </p>

          <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
              required
            />
            <button
              type="submit"
              className="bg-secondary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-secondary-dark transition-colors duration-300 whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </form>

          <p className="mt-4 text-xs text-gray-500">
            By subscribing, you agree to receive marketing communications from us. Don't worry, we respect your privacy.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialOffersSection; 