"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { testimonials } from '@/data/testimonials';
import { theme } from '@/data/site';
import { useState } from 'react';

const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
      className="py-16 md:py-24"
      style={{ backgroundColor: `${theme.colors.primary}05` }}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ 
              fontFamily: theme.fonts.heading,
              color: theme.colors.primary 
            }}
          >
            What Our Customers Say
          </h2>
          <div 
            className="w-24 h-1 mx-auto mb-6"
            style={{ backgroundColor: theme.colors.secondary }}
          />
          <p 
            className="text-base md:text-lg max-w-2xl mx-auto"
            style={{ 
              fontFamily: theme.fonts.body,
              color: theme.colors.muted 
            }}
          >
            Read what our valued customers have to say about their dining experience at Sahoo's Kitchen
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            {/* Current Testimonial */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-10"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Customer Image */}
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden">
                  <Image
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Testimonial Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Rating */}
                  <div className="flex justify-center md:justify-start gap-1 mb-4">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        className="h-5 w-5"
                        style={{ 
                          color: index < testimonials[currentIndex].rating 
                            ? theme.colors.secondary 
                            : `${theme.colors.secondary}40`
                        }}
                        fill="currentColor"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p 
                    className="text-lg md:text-xl mb-4 italic"
                    style={{ color: theme.colors.muted }}
                  >
                    "{testimonials[currentIndex].content}"
                  </p>

                  {/* Customer Info */}
                  <h3 
                    className="text-xl font-bold mb-1"
                    style={{ color: theme.colors.primary }}
                  >
                    {testimonials[currentIndex].name}
                  </h3>
                  <p 
                    className="text-sm"
                    style={{ color: theme.colors.muted }}
                  >
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                onClick={prevTestimonial}
                className="p-2 rounded-full"
                style={{ 
                  backgroundColor: theme.colors.primary,
                  color: '#ffffff'
                }}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                onClick={nextTestimonial}
                className="p-2 rounded-full"
                style={{ 
                  backgroundColor: theme.colors.primary,
                  color: '#ffffff'
                }}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>

            {/* Progress Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'w-6' : ''
                  }`}
                  style={{ 
                    backgroundColor: index === currentIndex 
                      ? theme.colors.secondary
                      : `${theme.colors.secondary}40`
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Social Proof */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { label: "Happy Customers", value: "10K+" },
            { label: "5-Star Reviews", value: "2K+" },
            { label: "Food Critics Choice", value: "15+" },
            { label: "Years of Service", value: "25+" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 rounded-lg"
              style={{ backgroundColor: 'white' }}
            >
              <h3 
                className="text-2xl md:text-3xl font-bold mb-2"
                style={{ color: theme.colors.primary }}
              >
                {stat.value}
              </h3>
              <p 
                className="text-sm"
                style={{ color: theme.colors.muted }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Button 
            className="rounded-full px-8 py-6 text-lg"
            style={{ 
              backgroundColor: theme.colors.secondary,
              color: theme.colors.primary 
            }}
          >
            Book Your Table Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 